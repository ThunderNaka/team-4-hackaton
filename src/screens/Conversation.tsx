import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "~/components/MainLayout";
import { useSpeechRecognition } from "~/useSpeechRecognition";
import microphoneIcon from "../assets/microphoneIcon.svg";
import volume from "../assets/volume.svg";
import { ROUTES } from "../router/routes";

export function Conversation() {
  const navigate = useNavigate();
  const { text, isListening, startListening, stopListening } =
    useSpeechRecognition();
  const messagesBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesBoxRef.current?.scrollIntoView({
      // behavior: "instant",
      block: "end",
    });
  }, [isListening, text]);
  return (
    <MainLayout>
      <div className="flex h-full flex-col gap-8">
        <div
          className="flex min-h-[183px] flex-col items-start justify-center rounded-b-[5rem] bg-gradient-to-t from-blue-100 to-blue-200 p-8 pl-12"
          style={{
            backgroundImage: "url('/images/tree.svg')",
          }}
        />
        <div className="flex h-full w-full flex-col items-center gap-8 px-6">
          <button
            onClick={() => navigate(ROUTES.patientDashboard)}
            className="-mt-14 w-fit rounded-2xl bg-[#786DB0] p-3 px-5 text-lg text-white"
          >
            End conversation
          </button>
          <div className="flex h-full flex-col justify-between pb-6">
            <div
              ref={messagesBoxRef}
              className="flex max-h-[400px] flex-col justify-end gap-4 overflow-scroll p-2"
            >
              <div className="max-w-[70%] rounded-r-2xl rounded-tl-2xl p-4 shadow-strong ">
                <h1 className="text-left text-xl font-semibold">
                  Hi Louis, how can I help you today?
                </h1>
              </div>
              <h1 className="text-left text-2xl font-semibold">
                <div className="flex flex-col gap-2">
                  {text.map((t, i) => (
                    <div
                      key={i}
                      className="ml-auto max-w-[70%] rounded-r-2xl rounded-tl-2xl bg-sky-100 p-4 shadow-strong "
                    >
                      <h1 className="text-left text-xl font-semibold">{t}</h1>
                    </div>
                  ))}
                </div>
              </h1>
            </div>

            {isListening && (
              <img
                src={volume}
                className="ml-auto mr-auto w-48"
                alt="volume"
              ></img>
            )}
            <div className="flex flex-col items-center justify-center gap-4">
              <button
                onClick={isListening ? stopListening : startListening}
                className={`w-fit rounded-full bg-gradient-to-r from-orange-300 to-orange-100 p-6`}
              >
                <img
                  src={microphoneIcon}
                  className={`h-14 w-14 ${isListening && "h-6 w-6"}`}
                  alt="adfsd"
                ></img>
              </button>
              {!isListening && (
                <h1 className="font-semibold text-gray-400">
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
