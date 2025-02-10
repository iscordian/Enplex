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
  },
  {
    id: "rectify",
    title: "Rectify (Web Framework)",
    content: "Express-like web framework with built-in middleware support.",
    code: `const { Rectify } = require('enplex.js');
const app = new Rectify();

// Built-in Middleware
app.use(Rectify.bodyParser());
app.use(Rectify.cors());
app.use(Rectify.compression());
app.use(Rectify.helmet({
  contentSecurityPolicy: true,
  xssFilter: true
}));

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.post("/data", (req, res) => {
  const data = req.body;
  res.json({ received: data });
});

// File Upload
app.post("/upload", Rectify.multipart(), (req, res) => {
  const files = req.files;
  res.json({ uploaded: files.length });
});

// Static Files
app.useStatic('./public');

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`
  },
  {
    id: "discordwebhook",
    title: "DiscordWebhook",
    content: "Discord webhook management with rich embed support.",
    code: `const { DiscordWebHook } = require('enplex.js');

const webhook = new DiscordWebHook({
  id: "WEBHOOK_ID",
  token: "WEBHOOK_TOKEN"
});

// Simple message
await webhook.send("Hello Discord!");

// Rich Embed
const embed = await DiscordWebHook.createEmbed({
  title: "Welcome",
  description: "This is an embed message",
  color: "#00ff00",
  fields: [
    { name: "Field 1", value: "Value 1" },
    { name: "Field 2", value: "Value 2" }
  ],
  timestamp: new Date()
});

await webhook.send({ embeds: [embed] });

// With File Attachment
await webhook.send({
  content: "Here's a file",
  files: ["./example.png"]
});`
  },
  {
    id: "search",
    title: "Search",
    content: "Multi-platform search capabilities.",
    code: `const { Search } = require('enplex.js');

// YouTube Search
const videos = await Search.yt("javascript tutorials", {
  limit: 10,
  type: "video"
});

// GitHub Search
const repos = await Search.github("node.js libraries", {
  sort: "stars",
  limit: 5
});

// Pinterest Search
const pins = await Search.pin("web design inspiration");

// Pexels Search
const images = await Search.pexels("nature photography");

// Wallpaper Search
const wallpapers = await Search.wallpaper("minimal");`
  },
  {
    id: "validator",
    title: "Validator",
    content: "Input validation utilities.",
    code: `const { Validator } = require('enplex.js');

// String Validation
Validator.isEmail("user@example.com");     // true
Validator.isURL("https://example.com");    // true
Validator.isNumber("123.45");              // true
Validator.isJSON('{"key": "value"}');      // true
Validator.isEmpty(" ");                    // true

// String Manipulation
const escaped = Validator.escape("<script>alert('xss')</script>");
const sanitized = Validator.sanitize("Hello & World");

// Custom Validation
const isValid = Validator.custom("test123", /^test\\d+$/);`
  },
  {
    id: "collection",
    title: "Collection",
    content: "Advanced Map implementation with additional utilities.",
    code: `const { Collection } = require('enplex.js');

const collection = new Collection();

// Basic Operations
collection.set('key1', 'value1');
collection.set('key2', 'value2');

// Get Values
const value = collection.get('key1');
const hasKey = collection.has('key2');

// Advanced Operations
const filtered = collection.filter(item => item.includes('value'));
const mapped = collection.map(item => item.toUpperCase());
const found = collection.find(item => item === 'value1');
const randomItem = collection.random();

// Array Operations
collection.push('key3', 'value3');
collection.sort((a, b) => a.localeCompare(b));`
  },
  {
    id: "xio",
    title: "Xio (HTTP Client)",
    content: "Advanced HTTP client with retry capabilities.",
    code: `const { Xio } = require('enplex.js');

// Basic GET Request
const response = await Xio.request('https://api.example.com');

// POST Request with Options
const data = await Xio.request('https://api.example.com', {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token'
  },
  body: JSON.stringify({ key: 'value' }),
  timeout: 5000,
  retry: {
    maxAttempts: 3,
    delay: 1000,
    backoff: 2
  }
});

// Download File
await Xio.download('https://example.com/file.pdf', './downloads/file.pdf');

// Upload File
const uploadResponse = await Xio.upload('https://api.example.com/upload', {
  file: './image.jpg',
  fields: { type: 'profile' }
});`
  },
  {
    id: "logger",
    title: "Logger",
    content: "Structured logging system with color support.",
    code: `const { Logger } = require('enplex.js');

// Configure Logger
Logger.setLevel('DEBUG');
Logger.toggleTimestamps(true);
Logger.setFormat('\${timestamp} [\${level}] \${message}');

// Logging Methods
Logger.error("Connection failed", { code: 500 });
Logger.warn("Resource running low");
Logger.info("Server started on port 3000");
Logger.debug("Processing request", { id: 123 });

// File Logging
Logger.setOutput('./logs/app.log');`
  },
  {
    id: "eventemitter",
    title: "EventEmitter",
    content: "Event handling system with advanced features.",
    code: `const { EventEmitter } = require('enplex.js');

const emitter = new EventEmitter();

// Basic Events
emitter.on('event', (data) => {
  console.log('Event received:', data);
});

// One-time Events
emitter.once('oneTime', (data) => {
  console.log('This runs only once:', data);
});

// Multiple Listeners
emitter.on('multi', (data) => console.log('Listener 1:', data));
emitter.on('multi', (data) => console.log('Listener 2:', data));

// Emit Events
emitter.emit('event', { message: 'Hello' });
emitter.emit('multi', 'Multiple listeners');

// Remove Listeners
emitter.off('event');
emitter.removeAllListeners();`
  },
  {
    id: "queue",
    title: "Queue",
    content: "Task queue management with priority support.",
    code: `const { Queue } = require('enplex.js');

const queue = new Queue();

// Basic Operations
queue.enqueue('task1');
queue.enqueue('task2', { priority: 1 });

// Process Queue
while (!queue.isEmpty()) {
  const task = queue.dequeue();
  console.log('Processing:', task);
}

// Queue Information
const size = queue.size();
const next = queue.peek();
const isEmpty = queue.isEmpty();

// Clear Queue
queue.clear();`
  },
  {
    id: "random",
    title: "Random",
    content: "Random data generation utilities.",
    code: `const { Random } = require('enplex.js');

// Random Facts
const catFact = await Random.catfact();
const dogFact = await Random.dogfact();

// Random Content
const quote = await Random.quote();
const joke = await Random.joke();

// Anime/Manga
const waifu = await Random.waifu();
const waifuPic = await Random.waifupic('name');

// Custom Random
const number = Random.number(1, 100);
const item = Random.pick(['a', 'b', 'c']);
const uuid = Random.uuid();`
  },
  {
    id: "executor",
    title: "Executor",
    content: "Safe code execution environment.",
    code: `const { Executor } = require('enplex.js');

// Evaluate Code
const result = Executor.eval('2 + 2');

// Create Function
const fn = Executor.fn('x, y', 'return x + y');
console.log(fn(2, 3)); // 5`
  }
];