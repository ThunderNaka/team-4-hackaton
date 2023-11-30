/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useEffect, useState } from "react";

let recognition: any = null;

if ("webkitSpeechRecognition" in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "en-US";
}

export const useSpeechRecognition = () => {
  const [text, setText] = useState<string[]>([]);
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    if (!recognition) return;
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      console.log("on result", event);
      setText((prev) => [...prev, event.results[0][0].transcript]);
      recognition.stop();
      setIsListening(false);
    };
  }, []);

  const startListening = () => {
    // setText(text);
    setIsListening(true);
    recognition.start();
  };

  const stopListening = () => {
    setIsListening(false);
    recognition.stop();
  };

  return {
    text,
    isListening,
    startListening,
    stopListening,
    hasRecognition: !!recognition,
  };
};
