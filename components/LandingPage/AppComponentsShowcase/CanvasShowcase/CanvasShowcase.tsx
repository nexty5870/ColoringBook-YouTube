import dynamic from "next/dynamic";
import { CanvasContext } from "@/store/context/CanvasContext";
import { useCanvasProvider } from "@/store/hooks/useCanvasProvider";

const Canvas = dynamic(() => import("./Canvas"), { ssr: false });

export const CanvasShowcase = () => {
  const canvasContext = useCanvasProvider();

  return (
    <CanvasContext.Provider value={canvasContext}>
      <Canvas />
    </CanvasContext.Provider>
  );
};
