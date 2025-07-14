const { PromptTemplate } = require("@langchain/core/prompts");
const { LLMChain } = require("langchain/chains");
const { ChatGroq } = require("@langchain/groq");

// Initialize the ChatGroq model
const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.1-8b-instant", // Or any other supported model
});

// Define a prompt template with a placeholder for the summary
const template = `
You are an AI assistant that drafts professional emails.
Write a clear, concise, and professional email based on this summary:
"{summary}"
`;

// Create a PromptTemplate instance to inject dynamic input (summary)
const prompt = new PromptTemplate({
  template,
  inputVariables: ["summary"],
});

// Create a LangChain LLMChain to combine the model and prompt
const chain = new LLMChain({ llm: model, prompt });

/**
 * Generates a professional email based on the provided summary.
 *
 * @param {string} summary - A brief summary describing the purpose or content of the email
 * @returns {Promise<string>} - The drafted professional email as a string
 */
async function generateEmail(summary) {
  const result = await chain.call({ summary });
  return result.text;
}

module.exports = generateEmail;
