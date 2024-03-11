"use client"
import { useEffect, useState } from "react";


const useScrollProgress = () => {
    const [progress, setProgress] = useState(0);
    const scrollHandler = () => {
        const elem = document.getElementById('docPage')
        const totalHeight = elem.scrollHeight - elem.clientHeight;
        setProgress((elem.scrollTop / totalHeight) * 100);
    };
    useEffect(() => {
        const elem = document.getElementById('docPage')
        elem.addEventListener("scroll", scrollHandler);
        return () => elem.removeEventListener("scroll", scrollHandler);
    }, []);
    return progress;
    }
export default useScrollProgress;