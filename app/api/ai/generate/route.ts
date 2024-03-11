import { NextResponse, NextRequest } from "next/server";
import { decreaseCredit } from "./decrease-credit";

export const maxDuration = 300;

export async function POST(req: NextRequest) {
    const requestBody = await req.json();
    const inputImageBase64 = requestBody.input;

    // Here you should call your AI endpoint and return generated output to user

    decreaseCredit();
    return NextResponse.json({
        output: inputImageBase64,
    });
}
