/* eslint-disable no-unused-vars */
import { fabric } from "fabric";
import { getCanvasDrawingArea } from "./get-canvas-drawing-area";
import { decode } from "base64-arraybuffer";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SketchToLogoProps } from "@/types/canvas-types";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

interface InsertHistoryArgs {
    outputCanvas: fabric.Canvas | fabric.StaticCanvas;
    output: string;
    input: SketchToLogoProps;
}

export const insertHistory: (args: InsertHistoryArgs) => Promise<void> = async ({
    outputCanvas,
    output,
    input,
}) => {
    const drawingArea = getCanvasDrawingArea(outputCanvas);
    outputCanvas.setBackgroundColor("white", () => { });

    const fileString = outputCanvas.toDataURL({
        format: "png",
        left: drawingArea.left,
        top: drawingArea.top,
        width: drawingArea.width,
        height: drawingArea.height,
    });

    // Clean up
    outputCanvas.setBackgroundColor(null, outputCanvas.renderAll.bind(outputCanvas));

    const outputFinal = fileString.substring("data:image/png;base64,".length)
    const inputUrl = input.input.substring("data:image/png;base64,".length)
    const outputUrl = output.substring("data:image/png;base64,".length)

    const supabase = createClientComponentClient();

    const {
        data: { session },
    } = await supabase.auth.getSession();

    const id = uuidv4();

    const results = await Promise.all([supabase.storage
        .from("images")
        .upload(
            `${session.user.id}/inputs/${id}.png`, decode(inputUrl), {
            contentType: 'image/png'
        })
        ,
    supabase.storage
        .from("images")
        .upload(
            `${session.user.id}/outputs/${id}.png`, decode(outputUrl), {
            contentType: 'image/png'
        }),
    supabase.storage
        .from("images")
        .upload(
            `${session.user.id}/outputs/final_${id}.png`, decode(outputFinal), {
            contentType: 'image/png'
        })]);

    results[0].data.path
    await axios.post("/api/histories", {
        ...input,
        input: results[0].data.path,
        output: results[1].data.path,
        outputFinal: results[2].data.path,
    });

};
