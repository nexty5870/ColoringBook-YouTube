import { useState } from "react";

export function useUndoRedo<T>(): {
    undo(): T;
    redo(): T;
    push(s: T): void;
  }{
    const [undoStack, setUndoStack] = useState<T[]>([]);
    const [redoStack, setRedoStack] = useState<T[]>([]);
  
    const push = (item: T) => {
      setUndoStack(prevUndoStack => [...prevUndoStack, item]);
      setRedoStack([]);
    };
  
    const undo = () => {
        if(undoStack.length){
            const last = undoStack[undoStack.length - 1];
            const desired = undoStack.length > 1 ? undoStack[undoStack.length - 2] : null;
            setUndoStack(undoStack.slice(0, undoStack.length - 1));
            setRedoStack([...redoStack, last]);
  
            return desired;
        }
    };
  
    const redo = () => {
        if(redoStack.length){
            const last = redoStack[redoStack.length - 1];
            setUndoStack([...undoStack, last]);
            setRedoStack(redoStack.slice(0, redoStack.length - 1));
            return last;
        }
    };
  
    return { push, undo, redo };
  }