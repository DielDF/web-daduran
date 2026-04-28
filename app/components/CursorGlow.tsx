"use client";

import { useState, useEffect } from "react";

type CursorPosition = {
    x: number;
    y: number;
};

export default function CursorGlow(){
    const [position, setPosition] = useState<CursorPosition>({x: -9999, y: -9999});

    useEffect(() => {
        function handleMouseMove(event: MouseEvent) {
            setPosition({
                x: event.clientX,
                y: event.clientY,
            });
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div  className="pointer-events-none fixed inset-0 z-0" style={{background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(245,158,11,0.06), transparent 45%`, }}/>
    );
}