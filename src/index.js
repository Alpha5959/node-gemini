const axios = require('axios');

let config = {};

function setConfig(newConfig) {
  config = newConfig;
}

function validateConfig() {
  if (!config.apikey || !config.key) {
    throw new Error("API key and key must be set before making a request.");
  }
}

async function createText(text) {
  validateConfig();

  const {
    apikey,
    key,
    temperature = 0.7,
    top_k: topK = 1,
    top_p: topP = 1,
    maxOutputTokens = 2000,
    endpoint = 'https://google-bard1.p.rapidapi.com/v1/gemini/gemini-pro',
  } = config;

  const requestOptions = {
    method: 'GET',
    baseURL: endpoint,
    headers: {
      'api_key': apikey,
      'text': encodeURIComponent(text),
      'temperature': config.temperature || temperature,
      'top-k': config.top_k || topK,
      'top-p': config.top_p || topP,
      'maxOutputTokens': config.maxOutputTokens || maxOutputTokens,
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': 'google-bard1.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(requestOptions);
    return response.data;
  } catch (error) {
    throw error;
  }
}

const Gemini = {
  setConfig,
  createText,
};

module.exports = Gemini;
