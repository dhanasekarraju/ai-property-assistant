import { useEffect, useState } from "react";

type Props = {
    message: string;
};

export default function LLMBox({ message }: Readonly<Props>) {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayed((prev) => prev + message.charAt(i));
            i++;
            if (i >= message.length) clearInterval(interval);
        }, 15);

        return () => clearInterval(interval);
    }, [message]);

    return (
        <div className="bg-gray-100 mt-6 p-4 rounded-lg shadow text-sm font-medium text-gray-800 border-l-4 border-blue-500 whitespace-pre-line">
            🤖 {displayed}
        </div>
    );
}
