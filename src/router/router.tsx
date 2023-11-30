import { Route, Routes, useLocation } from "react-router-dom";
import type { Location } from "react-router-dom";

// import { Layout } from "~/layout";
import { Home, NotFound } from "~/screens";
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
