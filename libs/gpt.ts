import axios from "axios";
import axiosRetry from "axios-retry";

// Use this if you want to make a call to OpenAI GPT-4 for instance. userId is used to identify the user on openAI side.
export const sendChatGPTCompletion = async (
  messages: { role: string, content: string }[],
  userId: number,
  max = 100,
  temp = 1
) => {
  const url = "https://api.openai.com/v1/chat/completions";

  console.log("Ask GPT >>>");
  messages.map((m) =>
    console.log(" - " + m.role.toUpperCase() + ": " + m.content)
  );

  const body = JSON.stringify({
    model: "gpt-4", // gpt-4, gpt-3.5-turbo, etc
    messages,
    max_tokens: max,
    temperature: temp,
    user: userId,
  });

  const options = {
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // place in your API key here or use environment variables
      "Content-Type": "application/json",
    },
  };

  try {
    // Custom retry delay
    axiosRetry(axios, {
      retryDelay: (retryCount) => {
        return retryCount * 1;
      },
      retries: 15,
    });

    const res = await axios.post(url, body, options);

    const answer = res.data.choices[0].message.content;
    const usage = res?.data?.usage;

    console.log(">>> " + answer);
    console.log(
      "TOKENS USED: " +
      usage?.total_tokens +
      " (prompt: " +
      usage?.prompt_tokens +
      " / response: " +
      usage?.completion_tokens +
      ")"
    );
    console.log("\n");

    return answer;
  } catch (e) {
    console.error("GPT Error: " + e?.response?.status, e?.response?.data);
    return null;
  }
};

export const sendChatGPTFunctions = async (
  messages: { role: string, content: string }[],
  tools: any[], // pass in the tools you want to use
  max = 100,
  temp = 1
) => {
  const url = "https://api.openai.com/v1/chat/completions";

  messages.map((m) =>
    console.log(" - " + m.role.toUpperCase() + ": " + m.content)
  );

  const body = JSON.stringify({
    model: "gpt-3.5-turbo", // gpt-4, gpt-3.5-turbo, etc
    messages,
    max_tokens: max,
    temperature: temp,
    tools: tools,
    tool_choice: "auto",
  });

  const options = {
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // place in your API key here or use environment variables
      "Content-Type": "application/json",
    },
  };

  try {
    // Custom retry delay
    axiosRetry(axios, {
      retryDelay: (retryCount) => {
        return retryCount * 1;
      },
      retries: 15,
    });

    const res = await axios.post(url, body, options);

    const toolCalls = res.data.choices[0].message.tool_calls;
    const usage = res?.data?.usage;

    console.log(
      "TOKENS USED: " +
      usage?.total_tokens +
      " (prompt: " +
      usage?.prompt_tokens +
      " / response: " +
      usage?.completion_tokens +
      ")"
    );
    console.log("\n");

    return toolCalls;
  } catch (e) {
    console.error("GPT Error: " + e?.response?.status, e?.response?.data);
    return null;
  }
};
