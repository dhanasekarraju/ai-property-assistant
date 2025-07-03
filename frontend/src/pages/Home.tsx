import {useState} from "react";
import {getPropertyByUnit} from "../services/propertyService";
import LLMBox from "../components/LLMBox.tsx";
import {speak} from "../utils/speak";
import TypingDots from "../components/TypingDots.tsx";

type Property = {
    unitNo: string;
    projectName: string;
    developerName: string;
    price: number;
    type: string;
    status: string;
};

export default function Home() {
    const [unitNo, setUnitNo] = useState("");
    const [property, setProperty] = useState<Property | null>(null);
    const [error, setError] = useState("");
    const [reply, setReply] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchProperty = async () => {
        try {
            const result = await getPropertyByUnit(unitNo);
            setProperty(result);
            setError("");

            const message = `Hello! Your unit ${result.unitNo} in project ${result.projectName} by ${result.developerName} is currently marked as ${result.status}. Total price: ₹${result.price.toLocaleString()}. Thank you for choosing us!`;
            setReply(message);
            speak(message);

        } catch (err) {
            setProperty(null);
            setReply("");
            setError("Property not found");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="px-4 py-8 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
                AI Property Assistant
            </h1>
            <input
                type="text"
                value={unitNo}
                onChange={(e) => setUnitNo(e.target.value)}
                placeholder="Enter Unit No (e.g. A101)"
                className="border px-4 py-2 w-full mb-4 rounded"
            />

            <button
                onClick={fetchProperty}
                className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
            >
                Search Property
            </button>

            {property && (
                <div className="mt-6 border p-4 rounded shadow">
                    <p><strong>Unit No:</strong> {property.unitNo}</p>
                    <p><strong>Project:</strong> {property.projectName}</p>
                    <p><strong>Developer:</strong> {property.developerName}</p>
                    <p><strong>Price:</strong> ₹{property.price.toLocaleString()}</p>
                    <p><strong>Type:</strong> {property.type}</p>
                    <p><strong>Status:</strong> {property.status}</p>
                </div>
            )}
            {loading && <TypingDots />}
            {reply && <LLMBox message={reply} />}
            {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
    );
}
