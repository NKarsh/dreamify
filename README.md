# 🌙 Dreamify

Dreamify is a web application that allows users to write down their dreams and receive an analysis of them through the GroqCloud API.

You can view a live example of the project here: [Dreamify on Vercel](https://dreamify-phi.vercel.app).

## ✨ Features

- 📝 **Write and Analyze Dreams**: Easily document your dreams and get an instant analysis powered by the GroqCloud API.
- 📚 **Dream History**: View all the dreams you’ve entered in one place, allowing you to track and revisit your dream history.

## 🛠️ Technologies Used

- ⚛️ **[Next.js](https://nextjs.org/)**: A powerful React framework for building server-side rendered applications.
- 🗂️ **[Redux](https://redux.js.org/)**: State management tool to manage application state in a predictable way.
- 🍃 **[MongoDB](https://www.mongodb.com/)**: NoSQL database to store dreams and related data.
- ▲ **[Vercel](https://vercel.com/)**: Hosting platform for deploying the application with ease.
- 🎨 **[Shadcn](https://shadcn.dev/)**: A design system for consistent and accessible UI components.

## 🚀 Installation and Setup

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/NKarsh/dreamify.git
   cd dreamify
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Variables**:
   Create a `.env.local` file in the root of the project and add the following environment variables:

   ```env
   MONGODB_URI=your-mongodb-uri
   MONGODB_DB=your-mongodb-database-name
   GROQ_API_KEY=your-groqcloud-api-key
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Access the application**:
   Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the app.

## 🚢 Deployment

This project is deployed on Vercel. To deploy your own version, push your repository to GitHub and connect it with Vercel. Vercel will automatically handle the deployment.

## 🤝 Contributing

Contributions are welcome! If you have any ideas, suggestions, or encounter any issues, feel free to open an issue or submit a pull request.
