"use client";
import React, { createContext } from "react";
import { fabric } from "fabric";
import { CanvasOutput, SketchToLogoProps } from "@/types/canvas-types";
import { SupabaseClient, User } from "@supabase/auth-helpers-nextjs";
import { ConfigProps } from "@/types";

export interface ICanvasContext {
  fabricCanvas: { current: fabric.Canvas };
  htmlCanvas: { current: HTMLCanvasElement };
  setRef: (
    ref: HTMLCanvasElement | null,
    init?: (canvas: fabric.Canvas) => void
  ) => void;
  setMenuState: React.Dispatch<React.SetStateAction<string>>;
  menuState: string;
  setBrushWidth: React.Dispatch<React.SetStateAction<number>>;
  brushWidth: number;
  eraserWidth: number;
  setEraserWidth: React.Dispatch<React.SetStateAction<number>>;
  setBrushColor: React.Dispatch<React.SetStateAction<string>>;
  brushColor: string;
  addSvg: (svg: string) => void;
  addImage: (url: File, position?: { left: number; top: number }) => void;
  addImageUrl: (url: string) => void;
  undo: () => void;
  redo: () => void;
  clear: () => void;
  download: (fileName: string) => void;
  addGridBackground: () => Promise<void>;
  removeGridBackground: () => Promise<void>;
  gridBackgroundActive: boolean;
  fullScreen: boolean;
  activeSelection: fabric.Object[];
  setActiveSelection: React.Dispatch<React.SetStateAction<fabric.Object[]>>;
  setFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
  getImage: () => Promise<string>;
}

export const CanvasContext = createContext<ICanvasContext>({
  fabricCanvas: { current: null },
  htmlCanvas: { current: null },
  setRef: (ref: HTMLCanvasElement | null) => null,
  setMenuState: () => null,
  menuState: "Select",
  setBrushWidth: () => null,
  brushWidth: 4,
  setEraserWidth: () => null,
  eraserWidth: 4,
  setBrushColor: () => null,
  brushColor: "#000000",
  addSvg: (svg: string) => null,
  addImage: (url: File, position?: { left: number; top: number }) => null,
  addImageUrl: (url: string) => null,
  undo: () => null,
  redo: () => null,
  clear: () => null,
  download: (fileName: string) => null,
  addGridBackground: () => null,
  removeGridBackground: () => null,
  gridBackgroundActive: false,
  fullScreen: false,
  activeSelection: [],
  setActiveSelection: () => null,
  setFullScreen: () => null,
  getImage: () => null,
});
