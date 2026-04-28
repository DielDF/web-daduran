"use client";

import {useEffect, useRef, useState} from "react";

export default function FadeIn({children}: {children: React.ReactNode}) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting){
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {threshold: 0.3}
        );
        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return(
        <div
            ref={ref}
            className={`transition-all duration-800 ease-out ${
                isVisible ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
        >
            {children}
        </div>
    );
}