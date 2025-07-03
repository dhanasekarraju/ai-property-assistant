export function speak(text: string) {
    const synth = window.speechSynthesis;

    if (!synth) return;

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.pitch = 1;
    utter.rate = 1;
    utter.volume = 1;
    synth.cancel();
    synth.speak(utter);
}
