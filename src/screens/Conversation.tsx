import { useEffect, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import MainLayout from "~/components/MainLayout";
import {
  closeConversation,
  storeAnswer,
  StoreAnswerData,
} from "~/services/mainService";
import { useSpeechRecognition } from "~/useSpeechRecognition";
import { mixArray } from "~/utils/mixArrays";
import microphoneIcon from "../assets/microphoneIcon.svg";
import volume from "../assets/volume.svg";
import { ROUTES } from "../router/routes";

export function Conversation() {
  const navigate = useNavigate();
  const { text, isListening, startListening, stopListening } =
    useSpeechRecognition();
  const messagesBoxRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<string[]>([]);
  // const { text } = useTextStore();

  useEffect(() => {
    messagesBoxRef.current?.scrollIntoView({
      // behavior: "instant",
      block: "end",
    });
  }, [isListening, text]);

  console.log(text.length);

  const conversationId = new URLSearchParams(window.location.search).get("id");

  const [botAnswers, setBotAnswers] = useState<string[]>([
    "this is my first asnwers",
  ]);

  const { isPending, mutate: storeAnswerMutation } = useMutation({
    mutationFn: (data: StoreAnswerData) =>
      storeAnswer(conversationId ?? "0", data),
    onSuccess: (data) => {
      setBotAnswers((prev) => [...prev, data.content]);
      setMessages((prev) => [...prev, data.content]);
    },
  });

  useEffect(() => {
    if (text.length !== 0) {
      const data = {
        content: text[text.length - 1],
      } as unknown as StoreAnswerData;
      storeAnswerMutation(data);
      setMessages((prev) => [...prev, text[text.length - 1]]);
    }
  }, [text]);

  let mixedArray: string[] = [];
  useEffect(() => {
    mixedArray = mixArray(text, botAnswers);
  }, [text, botAnswers]);

  console.log(mixedArray);

  const handleStopListening = () => {
    stopListening();
  };

  const { mutate: closeConversationMutation } = useMutation({
    mutationFn: () => closeConversation(conversationId ?? "0"),
    onSuccess: () => {
      navigate(ROUTES.patientDashboard);
    },
  });

  const handleCloseConversation = () => {
    closeConversationMutation();
  };
  return (
    <MainLayout>
      <div className="flex h-full flex-col gap-8">
        <div
          className="flex min-h-[183px] flex-col items-start justify-center rounded-b-[5rem] bg-gradient-to-t from-blue-100 to-blue-200 p-8 pl-12"
          style={{
            backgroundImage: "url('/images/tree.svg')",
          }}
        />
        <div className="flex h-full w-full flex-col items-start gap-8 px-6">
          <button
            onClick={handleCloseConversation}
            className="-mt-14 ml-auto mr-auto w-fit rounded-2xl bg-[#786DB0] p-3 px-5 text-lg text-white"
          >
            End conversation
          </button>
          <div className="flex h-full w-full flex-col justify-between pb-6">
            <div
              ref={messagesBoxRef}
              className="flex max-h-[400px] flex-col gap-4 overflow-scroll p-2"
            >
              <div className="max-w-[70%] rounded-r-2xl rounded-tl-2xl p-4 shadow-strong ">
                <h1 className="text-left text-base font-semibold">
                  Hi, how can I help you today?
                </h1>
              </div>
              <h1 className="text-left text-2xl font-semibold">
                <div className="flex flex-col gap-2">
                  {messages.map((t, i) => {
                    if (i % 2 === 0) {
                      return (
                        <div
                          key={i}
                          className="ml-auto max-w-[70%] rounded-r-2xl rounded-tl-2xl bg-sky-100 p-4 shadow-strong "
                        >
                          <h1 className="text-left text-base font-semibold">
                            {t}
                          </h1>
                        </div>
                      );
                    } else {
                      return (
                        <div
                          key={i}
                          className="max-w-[70%] rounded-r-2xl rounded-tl-2xl p-4 shadow-strong"
                        >
                          <h1 className="text-left text-base font-semibold">
                            {t}
                          </h1>
                        </div>
                      );
                    }
                  })}
                </div>
              </h1>
            </div>

            {isPending && <h1>is loading</h1>}

            {isListening && (
              <img
                src={volume}
                className="ml-auto mr-auto w-48"
                alt="volume"
              ></img>
            )}
            <div className="ml-auto mr-auto flex w-full flex-col items-center justify-center gap-4">
              <button
                disabled={isPending}
                onClick={isListening ? handleStopListening : startListening}
                className={`w-fit rounded-full bg-gradient-to-r from-orange-300 to-orange-100 p-6 ${
                  isPending && "bg-gray-400"
                }`}
              >
                <img
                  src={microphoneIcon}
                  className={`h-6 w-6 ${isListening && "h-4 w-4"}`}
                  alt="adfsd"
                ></img>
              </button>
              {!isListening && (
                <h1 className="text-sm font-semibold text-gray-400">
                  PRESS HERE TO TALK
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
