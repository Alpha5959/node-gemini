const Gemini = require('./node-gemini');

//Set configuration (replace with your actual API key and RapidAPI key)

Gemini.setConfig({
  apikey: 'your_api_key',
  key: 'your_rapidapi_key',
  temperature: 0.5,  // optional: custom temperature
  top_k: 2,          // optional: custom top_k
  top_p: 0.8,        // optional: custom top_p
  maxOutputTokens: 3000, // optional: custom maxOutputTokens
});

async function generateText() {
  try {
    const generatedText = await Gemini.createText('Your input text here');
    console.log('Generated Text:', generatedText);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
generateText();
