type Props = {
    message: string;
};

export default function LLMBox({ message }: Props) {
    return (
        <div className="bg-gray-100 mt-6 p-4 rounded-lg shadow text-sm font-medium text-gray-800 border-l-4 border-blue-500 animate-fadeIn">
            🤖 {message}
        </div>
    );
}
