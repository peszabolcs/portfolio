import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Mounted once at "/". Dark-only theme lives in styles/index.css.
export default function AppRoot() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}
