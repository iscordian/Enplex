export interface Section {
  id: string;
  title: string;
  content: string;
  code?: string;
  language?: string;
}

export const sections: Section[] = [
  {
    id: "installation",
    title: "Installation",
    content: "Install Enplex.js using npm:",
    code: "npm install enplex.js@latest",
    language: "bash"
  },
  {
    id: "getting-started",
    title: "Getting Started",
    content: "Here's a quick example of using multiple Enplex.js modules:",
    code: `const { NextChat, Rectify, DiscordWebHook } = require('enplex.js');

// Quick example using multiple modules
const app = new Rectify();

app.get("/chat", async (req, res) => {
  const response = await NextChat.ask("Hello!");
  res.json({ reply: response });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`
  },
  {
    id: "nextchat",
    title: "NextChat (AI Integration)",
    content: "Advanced AI capabilities for text generation, image generation and text-to-speech.",
    code: `const { NextChat } = require('enplex.js');

// Text Generation with different models
const gpt4Response = await NextChat.ask("Explain quantum computing", {
  model: "gpt4o",
  cache: true
});

const geminiResponse = await NextChat.ask("What is JavaScript?", {
  model: "gemini"
});

// Image Generation
const image = await NextChat.imagine("A futuristic city at night", {
  model: "prodia"  // Available: prodia, animagen, mageai, xl3
});

// Text-to-Speech
const audio = await NextChat.tts("Welcome to Enplex.js!");

// Image Upscaling
const upscaled = await NextChat.upscale("https://example.com/image.jpg");`
  }
];