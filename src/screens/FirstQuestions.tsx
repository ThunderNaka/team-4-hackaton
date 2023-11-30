import { useNavigate } from "react-router-dom";

import MainLayout from "~/components/MainLayout";
import microphoneIcon from "../assets/microphoneIcon.svg";
import { ROUTES } from "../router/routes";

export function FirstQuestions() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="flex h-full flex-col gap-8">
        <div
          className="flex min-h-[183px] flex-col items-start justify-center rounded-b-[5rem] bg-gradient-to-t from-blue-100 to-blue-200 p-8 pl-12"
          style={{
            backgroundImage: "url('/images/tree.svg')",
          }}
        />
        <div className="flex w-full flex-col gap-8 px-6">
          <h1 className="text-center text-2xl font-semibold">
            How have you felt today?
          </h1>
          <div className="flex flex-col gap-4">
            <button className="shadow-strong flex w-full flex-row items-center justify-start gap-2 rounded-xl bg-white p-4 text-lg">
              <h1 className="text-2xl">😃</h1>
              Very happy
            </button>
            <button className="shadow-strong flex w-full flex-row items-center justify-start gap-2 rounded-xl bg-white p-4 text-lg">
              <h1 className="text-2xl">🙂</h1>
              Quite content
            </button>
            <button className="shadow-strong flex w-full flex-row items-center justify-start gap-2 rounded-xl bg-white p-4 text-lg">
              <h1 className="text-2xl">😐</h1>
              Neither sad nor happy
            </button>
            <button className="shadow-strong flex w-full flex-row items-center justify-start gap-2 rounded-xl bg-white p-4 text-lg">
              <h1 className="text-2xl">😕</h1>A little sad
            </button>
            <button className="shadow-strong flex w-full flex-row items-center justify-start gap-2 rounded-xl bg-white p-4 text-lg">
              <h1 className="text-2xl">😢</h1>
              Quite sad
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 pb-6">
            <button className="w-fit rounded-full bg-gradient-to-r from-orange-300 to-orange-100 p-4">
              <img src={microphoneIcon} className="h-10 w-10" alt="adfsd"></img>
            </button>
            <h1 className="font-semibold text-gray-400">PRESS HERE TO TALK</h1>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
