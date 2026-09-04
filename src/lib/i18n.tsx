import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { copy, type Copy, type Lang } from "./copy";

const STORAGE_KEY = "asd-dushanbe-lang";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Copy;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "ru" || saved === "tg") {
      setLangState(saved);
      document.documentElement.lang = saved === "tg" ? "tg" : "ru";
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next === "tg" ? "tg" : "ru";
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, t: copy[lang] }),
    [lang, setLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang must be used within LangProvider");
  }
  return ctx;
}
