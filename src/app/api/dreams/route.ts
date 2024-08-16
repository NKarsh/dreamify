import { connectToDatabase } from "@/lib/mongodb";
import { Dream } from "@/types";
import { Groq } from "groq-sdk";
import { ChatCompletionMessageParam } from "groq-sdk/resources/chat/completions.mjs";
import { NextRequest, NextResponse } from "next/server";

const client = new Groq({ apiKey: process.env.GROQ_API_KEY });
const MODEL = "llama3-groq-70b-8192-tool-use-preview";

export const POST = async (req: NextRequest) => {
  try {
    const { dreamDescription, username } = await req.json();
    const { db } = await connectToDatabase();

    if (!dreamDescription) {
      return NextResponse.json(
        { error: "No dream description provided" },
        { status: 400 }
      );
    }

    const messages: ChatCompletionMessageParam[] = [
      {
        role: "system",
        content:
          "You are a dream analysis assistant. Provide a JSON object with two properties: 'title' for a short title of the dream, and 'explanation' for an explanation of the dream. Format your response as JSON.",
      },
      {
        role: "user",
        content: dreamDescription,
      },
    ];

    const response = await client.chat.completions.create({
      model: MODEL,
      messages: messages,
      max_tokens: 100,
    });

    const responseText = response.choices[0].message.content;

    let jsonResponse = { title: "", explanation: "" };
    if (responseText)
      try {
        jsonResponse = JSON.parse(responseText);
      } catch (jsonError) {
        return NextResponse.json(
          { error: "The model did not return a valid JSON response" },
          { status: 500 }
        );
      }

    const newDraem: Dream = {
      date: new Date(),
      userId: username,
      description: dreamDescription,
      explanation: jsonResponse.explanation,
      title: jsonResponse.title,
    };

    const result = await db.collection("dreams").insertOne(newDraem);

    const createDream = {
      _id: result.insertedId,
      ...newDraem,
    };

    return NextResponse.json(createDream, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred during processing" },
      { status: 500 }
    );
  }
};

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username");

    if (!username) {
      return NextResponse.json(
        { message: "username is required" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const dreams = (await db
      .collection("dreams")
      .find({ userId: username })
      .toArray()) as Dream[];

    return NextResponse.json(dreams, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Could not retrieve dreams", error },
      { status: 500 }
    );
  }
}
