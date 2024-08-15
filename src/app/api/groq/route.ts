import { Groq } from "groq-sdk";
import {
  ChatCompletionMessageParam,
  ChatCompletionTool,
} from "groq-sdk/resources/chat/completions.mjs";
import { NextRequest, NextResponse } from "next/server";

const client = new Groq({ apiKey: process.env.GROQ_API_KEY });
const MODEL = "llama3-groq-70b-8192-tool-use-preview";

export const POST = async (req: NextRequest) => {
  try {
    const { dreamDescription } = await req.json();

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

    let jsonResponse;
    if (responseText)
      try {
        jsonResponse = JSON.parse(responseText);
      } catch (jsonError) {
        return NextResponse.json(
          { error: "The model did not return a valid JSON response" },
          { status: 500 }
        );
      }

    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred during processing" },
      { status: 500 }
    );
  }
};
