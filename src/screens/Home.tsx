import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import MainLayout from "~/components/MainLayout";
import { storeConversation } from "~/services/mainService";
import AudioPlayer from "~/utils/AudioPlayer";
import microphoneIcon from "../assets/microphoneIcon.svg";
import pill from "../assets/pill.svg";
import pills from "../assets/pills.svg";
import { ROUTES } from "../router/routes";

export function Home() {
  const navigate = useNavigate();

  const { mutate: storeConversationMutation } = useMutation({
    mutationFn: () => storeConversation(),
    onSuccess: (data) => {
      navigate(ROUTES.conversation + "?id=" + data.id);
    },
  });

  const handleMicrophoneClick = () => {
    storeConversationMutation();
  };

  return (
    <MainLayout>
      <div className="flex h-full flex-col">
        <div
          className="flex min-h-[234px] flex-col items-start justify-center rounded-b-[5rem] bg-gradient-to-t from-blue-100 to-blue-200 p-8 pl-12"
          style={{
            backgroundImage: "url('/images/aca.svg')",
          }}
        >
          <h1 className="text-left text-3xl font-bold">Hello, Sofia</h1>
        </div>
        <div className="-mt-9 flex flex-col items-center justify-center gap-4 pb-6">
          <button
            onClick={handleMicrophoneClick}
            // onClick={() => navigate(ROUTES.conversation)}
            className="w-fit rounded-full bg-gradient-to-r from-orange-300 to-orange-100 p-5"
          >
            <img src={microphoneIcon} className="h-16 w-16" alt="adfsd"></img>
          </button>
          <h1 className="font-semibold text-gray-600">PRESS HERE TO TALK</h1>
        </div>

        <div className="flex w-full flex-col gap-8 px-6">
          {/* <AudioPlayer text="Hello my name is Thomas" /> */}
          <button
            onClick={() => navigate(ROUTES.todayMedications)}
            className="flex w-full flex-row items-center justify-center gap-4 rounded-2xl p-4 shadow-strong"
          >
            <img className="h-12 w-12" src={pills} alt="pills"></img>
            <p className="text-xl">See today medications</p>
          </button>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold text-gray-600">
              Daily reminders
            </h1>
            <div className="z-50  flex flex-col gap-6 divide-y divide-dashed rounded-2xl bg-white  p-4 shadow-strong">
              <div className="flex flex-row gap-4 rounded-xl">
                <img src={pill} alt="pill" />
                <div className="flex flex-col gap-1">
                  <h1 className="text-xl font-semibold">Carvedilol</h1>
                  <p className="text-base text-gray-500">
                    It’s the big red pill you take every morning and afternoon
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between pt-4">
                <h1 className="text-lg font-semibold">Time</h1>
                <h1 className="text-lg font-semibold">4:00 PM</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
