// api/aiEngine.js

const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getResponse(prompt) {
  const response = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo',
  });
  return response.choices[0].message.content;
}

module.exports = { getResponse };