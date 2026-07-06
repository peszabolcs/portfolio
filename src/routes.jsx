import AppRoot from "./AppRoot";
import LangLayout from "./LangLayout";
import RootRedirect from "./pages/RootRedirect";

// Single-page, bilingual portfolio. "/" redirects to the Hungarian
// home; /hu and /en each render the full one-page site (section anchors
// live inside the page).
export const routes = [
  {
    path: "/",
    element: <AppRoot />,
    children: [
      { index: true, element: <RootRedirect /> },
      { path: "hu", element: <LangLayout lang="hu" /> },
      { path: "en", element: <LangLayout lang="en" /> },
    ],
  },
];
