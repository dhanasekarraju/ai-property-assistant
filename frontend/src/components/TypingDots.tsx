import { useEffect, useState } from "react";

export default function TypingDots() {
    const [dots, setDots] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev.length < 3 ? prev + "." : ""));
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-gray-500 italic text-sm mt-4">
            🤖 Thinking{dots}
        </div>
    );
}
