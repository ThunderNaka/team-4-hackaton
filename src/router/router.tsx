import { Route, Routes, useLocation } from "react-router-dom";
import type { Location } from "react-router-dom";

// import { Layout } from "~/layout";
import { Home, NotFound } from "~/screens";
import { Conversation } from "~/screens/Conversation";
import { FirstQuestions } from "~/screens/FirstQuestions";
import { TodayMedications } from "~/screens/TodayMedications";
import { ModalRouter } from "./ModalRouter";
import { ROUTES } from "./routes";

export const Router = () => {
  const location = useLocation();
  const { previousLocation } = (location.state ?? {}) as {
    previousLocation?: Location;
  };

  return (
    <>
      <Routes location={previousLocation ?? location}>
        <Route path="*" element={<NotFound />} />
        <Route element={<Home />} path={ROUTES.home} />
        <Route element={<TodayMedications />} path={ROUTES.todayMedications} />
        <Route element={<FirstQuestions />} path={ROUTES.firstQuestions} />
        <Route element={<Conversation />} path={ROUTES.conversation} />
      </Routes>
      <Routes>
        <Route
          path="*"
          element={<ModalRouter showModal={!!previousLocation} />}
        />
      </Routes>
    </>
  );
};
