import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
import axiosRetry from "axios-retry";

export async function POST(req: NextRequest) {
  const requestBody = await req.json();
  const base64 = requestBody.image.replace(/^data:image\/\w+;base64,/, "");
  let data = JSON.stringify({
    // Modify the data object to match the request body of your API
    input: {
      image: base64,
      prompt: requestBody.prompt,
      seed: requestBody.seed,
      style: requestBody.style,
    },
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "#YOUR_RUNPOD_ENDPOINT#",
    headers: {
      Authorization: `Bearer ${process.env.RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios.interceptors.response.use(
    function (response) {
      // Convert status code to 500 if 200 RESPONSE RETURNS "FAILED" or "IN_QUEUE" status to retry
      if (
        response.data.status === "FAILED" ||
        response.data.status === "IN_QUEUE"
      ) {
        response.status = 500;
        throw response;
      }
      response.status = 200;
      return response;
    },
    function (error) {
      return error;
    }
  );

  try {
    // Custom retry delay
    axiosRetry(axios, {
      retryDelay: (retryCount) => {
        return retryCount * 1;
      },
      retries: 15,
    });

    const result = await axios.request(config);
    if (result.status === 200) {
      return NextResponse.json(result.data);
    } else {
      return NextResponse.json(result.data, { status: result.status });
    }
  } catch (error) {
    return NextResponse.json(error.response.data, {
      status: error.response.status,
    });
  }
}
