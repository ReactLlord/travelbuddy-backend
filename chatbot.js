const express = require("express");
const router = express.Router();
const OpenAI = require("openai"); // Correct import for OpenAI v4+
const dotenv = require("dotenv")

dotenv.config()
 

// Initialize OpenAI with API key
const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1", // for OpenRouter
});

router.post("/chat", async (req, res) => {
  const { messages, userLocation } = req.body;

  try {
    let fullMessages = [];

    if (userLocation && Array.isArray(userLocation) && userLocation.length >= 2) {
      const locationMessage = {
        role: "system",
        content: `The user's location is latitude ${userLocation[0]}, longitude ${userLocation[1]}. Please consider this in your responses.`,
      };
      fullMessages = [locationMessage, ...messages];
    } else {
      // No location provided or invalid format
      fullMessages = messages;
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: fullMessages,
    });

    const reply = response.choices[0].message.content;
    res.json({ role: "assistant", content: reply });
  } catch (error) {
    console.error("Chatbot error:", error.response?.data || error.message || error);
    res.status(500).json({ error: "Failed to get chatbot response" });
  }
});


module.exports = router;
