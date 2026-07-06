import { I18nProvider } from "./i18n/I18nProvider";
import Portfolio from "./pages/Portfolio";

// One per language subtree — provides translations for /hu or /en and
// renders the single-page portfolio (which owns its own nav + footer).
export default function LangLayout({ lang }) {
  return (
    <I18nProvider lang={lang}>
      <Portfolio />
    </I18nProvider>
  );
}
