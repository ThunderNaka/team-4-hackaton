import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "~/components/MainLayout";
import microphoneIcon from "../assets/microphoneIcon.svg";
import volume from "../assets/volume.svg";
import { ROUTES } from "../router/routes";

export function Conversation() {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState<boolean>(false);

  const toggleIsRecording = () => {
    setIsRecording(!isRecording);
  };

  console.log(isRecording);
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
            onClick={() => navigate(ROUTES.home)}
            className="-mt-14 w-fit rounded-2xl bg-[#786DB0] p-3 px-5 text-lg text-white"
          >
            End conversation
          </button>
          <div className="flex h-full flex-col items-center justify-between pb-6">
            <h1 className="text-left text-2xl font-semibold">
              Hi Louis, how can I help you today?
            </h1>
            {isRecording && (
              <img src={volume} className="w-48" alt="volume"></img>
            )}
            <div className="flex flex-col items-center justify-center gap-4 pb-6">
              <button
                onClick={toggleIsRecording}
                className={`w-fit rounded-full bg-gradient-to-r from-orange-300 to-orange-100 p-6`}
              >
                <img
                  src={microphoneIcon}
                  className={`h-16 w-16 ${isRecording && "h-8 w-8"}`}
                  alt="adfsd"
                ></img>
              </button>
              {!isRecording && (
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
