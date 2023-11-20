import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFound/NotFound";
import { Users } from "./pages/Users/Users";
import { StaticPage } from "./StaticPage/Static";
import { SocialMedia } from "./pages/SocialMedia/SocialMedia";
import SingleUser from "./pages/SingleUser/SingleUser";
import { Suspense, lazy, useState } from "react";
import { BackgroundContext } from "./pages/BgContext/BgContext.jsx";

import "./App.css";
const About = lazy(() => import("./pages/About/About"));
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Suspense
        fallback={
          <h1 className="text-center text-7xl text-[red] font-sans">
            Please Wait...
          </h1>
        }
      >
        <BackgroundContext.Provider value={{ darkMode, setDarkMode }}>
          <Routes>
            <Route element={<StaticPage />}>
              <Route path="/socialmedia" element={<SocialMedia />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/:id" element={<SingleUser />} />
              <Route path="/" element={<About />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BackgroundContext.Provider>
      </Suspense>
    </>
  );
}

export default App;
