import { useNavigate } from "react-router-dom";

import MainLayout from "~/components/MainLayout";
import pill from "../assets/pill.svg";
import { ROUTES } from "../router/routes";

// import n from "../assets/bg-header.svg";

export function TodayMedications() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="flex h-full flex-col gap-8">
        <div
          style={{
            backgroundImage: "url('/images/aca.svg')",
          }}
          className="flex min-h-[234px] flex-col items-start justify-start gap-8 rounded-b-[5rem] bg-gradient-to-t from-blue-100 to-blue-200 p-8"
        >
          <button
            onClick={() => navigate(ROUTES.home)}
            className="w-fit rounded-2xl bg-[#786DB0] p-2 px-5 text-lg text-white"
          >
            Go back to home
          </button>
          <h1 className="text-left text-3xl font-bold">Today Medications</h1>
        </div>
        <div className="flex w-full flex-col gap-8 bg-white px-6">
          <div className="z-50 -mt-20 flex flex-col gap-6 divide-y divide-dashed rounded-2xl bg-white  p-4 shadow-md">
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
          <div className="z-50  flex flex-col gap-6 divide-y divide-dashed rounded-2xl bg-white  p-4 shadow-md">
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
          <div className="z-50  flex flex-col gap-6 divide-y divide-dashed rounded-2xl bg-white  p-4 shadow-md">
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
          <div className="z-50  flex flex-col gap-6 divide-y divide-dashed rounded-2xl bg-white  p-4 shadow-md">
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
    </MainLayout>
  );
}
