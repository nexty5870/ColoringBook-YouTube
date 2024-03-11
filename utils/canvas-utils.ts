import config from '@/config';
import { fabric } from 'fabric';
import { Dispatch, SetStateAction } from 'react';

class CanvasUtils {
    private canvas: fabric.Canvas;
    private setMenuState: Dispatch<SetStateAction<string>>;

    constructor(canvas: fabric.Canvas, setMenuState: Dispatch<SetStateAction<string>>) {
        this.canvas = canvas;
        this.setMenuState = setMenuState;
        this.initializeCopyPaste();
        this.initializeShortcuts();
    }

    private copyPaste = (): void => {
        document.addEventListener('copy', (e) => {
            if (!this.canvas.getActiveObject()) return;

            if (this.canvas.getActiveObject().type === 'image') {
                e.preventDefault();
                e.clipboardData.setData('text/plain', this.canvas.getActiveObject().toDataURL({}));
            } else {
                e.preventDefault();
                this.canvas.getActiveObject().clone((cloned: fabric.Object) => {
                    e.clipboardData.setData('text/plain', JSON.stringify(cloned.toJSON()));
                });
            }
        });

        const isJSONObjectString = (s: string): boolean => {
            try {
                const o = JSON.parse(s);
                return !!o && typeof o === 'object' && !Array.isArray(o);
            } catch {
                return false;
            }
        };

        const isBase64String = (str: string): boolean => {
            try {
                str = str.split('base64,').pop();
                window.atob(str);
                return true;
            } catch (e) {
                return false;
            }
        };

        document.addEventListener('paste', (e: ClipboardEvent) => {
            const pasteTextData = e.clipboardData.getData('text');

            // handles pasting image copied from our canvas
            if (pasteTextData && isBase64String(pasteTextData)) {
                fabric.Image.fromURL(pasteTextData, (img) => {
                    img.set({
                        left: 0,
                        top: 0,
                    });
                    this.canvas.add(img);
                    this.canvas.setActiveObject(img);
                    this.canvas.fire('object:modified');
                });

                return;
            }

            // handles pasted image (not copied from our canvas)
            if (e.clipboardData.items.length > 0) {
                for (let i = 0; i < e.clipboardData.items.length; i++) {
                    if (e.clipboardData.items[i].type.indexOf('image') === 0) {
                        const blob = e.clipboardData.items[i].getAsFile();
                        if (blob !== null) {
                            const reader = new FileReader();
                            reader.onload = (f) => {
                                fabric.Image.fromURL(f.target!.result as string, (img) => {
                                    img.set({
                                        left: 0,
                                        top: 0,
                                    });
                                    this.canvas.add(img);
                                    this.canvas.setActiveObject(img);
                                    this.canvas.fire('object:modified');
                                });
                            };
                            reader.readAsDataURL(blob);
                        }
                    }
                }
            }

            if (isJSONObjectString(pasteTextData)) {
                const obj = JSON.parse(pasteTextData);
                const validTypes = ['rect', 'circle', 'line', 'path', 'polygon', 'polyline', 'textbox', 'group', 'activeSelection'];
                if (!validTypes.includes(obj.type)) return;

                fabric.util.enlivenObjects(obj.type === 'activeSelection' ? obj.objects.map((o: any) => ({ ...o, left: obj.left + o.left, top: obj.top + o.top })) : [obj], (objects: fabric.Object[]) => {
                    var addedObjects: fabric.Object[] = [];
                    objects.forEach((o) => {
                        o.set({
                            left: o.left + 10,
                            top: o.top + 10,
                        });
                        this.canvas.add(o);
                        addedObjects.push(o);
                        o.setCoords();
                    }, '');
                    var sel = new fabric.ActiveSelection(addedObjects, {
                        canvas: this.canvas,
                    });
                    this.canvas.setActiveObject(sel);
                    this.canvas.renderAll();
                    this.canvas.fire('object:modified');
                }, '');
            }
        });
    };

    private shortcuts = (): void => {
        document.addEventListener("keydown", (e) => {
            if (document.querySelectorAll(
                "textarea:focus, input:focus, [contenteditable]:focus"
            ).length) {
                return;
            }
            const key = e.key;
            if (key === "Delete" || key === "Backspace") {
                // Delete all selected objects
                this.canvas.getActiveObjects().forEach((obj) => {
                    this.canvas.remove(obj);
                });

                this.canvas.discardActiveObject().requestRenderAll();
            } else if (key === "Escape") {
                // Unselect all selections
                this.canvas.discardActiveObject().requestRenderAll();
            } else if (e.ctrlKey || e.metaKey) {
                if (key === "Z" || key === "z") { // Undo change
                    document.getElementById("undo-btn")?.click();
                }
                else if (key === "Y" || key === "y") // Redo change
                    document.getElementById("redo-btn")?.click();
                else if (key === "]") { // Bring forward selections
                    this.canvas.getActiveObjects().forEach((obj) => {
                        this.canvas.bringForward(obj);
                    });
                    this.canvas.discardActiveObject().requestRenderAll();
                }
                else if (key === "[") { // Send backwards selections
                    this.canvas.getActiveObjects().forEach((obj) => {
                        this.canvas.sendBackwards(obj);
                    });
                    this.canvas.discardActiveObject().requestRenderAll();
                }
                else if (key === "Enter") { // Toggle FullScreen
                    document.getElementById("fullscreen-btn")?.click();
                }
            } else if (e.shiftKey) {
                if (key === "G" || key === "g") {
                    // Show/Hide Grid
                    document.getElementById("grid-btn")?.click();
                }
                else if (key === "K" || key === "k") {
                    // Upload Image
                    document.getElementById("upload-btn")?.click();
                }
                else if (key === "S" || key === "s") {
                    // Download Canvas
                    document.getElementById("download-btn")?.click();
                }
            }
            else if (key === "]") { // Bring to front
                this.canvas.getActiveObjects().forEach((obj) => {
                    this.canvas.bringToFront(obj);
                });
                this.canvas.discardActiveObject().requestRenderAll();
            }
            else if (key === "[") { // Send to back
                this.canvas.getActiveObjects().forEach((obj) => {
                    this.canvas.sendToBack(obj);
                });
                this.canvas.discardActiveObject().requestRenderAll();
            }
            else if (key === "V" || key === "v") { // Change state to Move
                this.setMenuState("Select");
            }
            else if (key === "S" || key === "s") { // Change state to Brush
                this.setMenuState("Brush");
            }
            else if (key === "L" || key === "l") { // Change state to Line
                this.setMenuState("Line");
            }
            else if ((key === "O" || key === "o") && !config.canvas.hideShapes) { // Change state to Shape
                this.setMenuState("Shape");
            }
            else if ((key === "I" || key === "i" || key === "ı") && !config.canvas.hideIcons) { // Change state to Icons
                this.setMenuState("Icons");
            }
            else if ((key === "B" || key === "b") && !config.canvas.hideBrands) { // Change state to Brands
                this.setMenuState("Brands");
            }
            else if ((key === "E" || key === "e") && !config.canvas.hideEraser) { // Change state to Eraser
                this.setMenuState("Eraser");
            }
        });
    };

    public initializeCopyPaste = this.copyPaste;
    public initializeShortcuts = this.shortcuts;
}

export default CanvasUtils;
