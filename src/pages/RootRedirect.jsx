import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { SITE_URL, PATHS } from "../i18n/routes";

// "/" — sends visitors to the Hungarian home. Pre-rendered with a
// meta refresh + canonical so crawlers and no-JS clients also follow.
export default function RootRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(PATHS.home.hu, { replace: true });
  }, [navigate]);

  return (
    <Head>
      <title>Perjési Szabolcs — Full-stack fejlesztő &amp; startup-alapító</title>
      <meta httpEquiv="refresh" content="0; url=/hu" />
      <link rel="canonical" href={SITE_URL + PATHS.home.hu} />
    </Head>
  );
}
