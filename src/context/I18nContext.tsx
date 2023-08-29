import { createContext, useContext, useState } from "react";

type Lang = "en" | "zh";

type I18nTranlate = {
  [key: string]: string;
};

type I18nResouce = {
  [lang in Lang]: I18nTranlate;
};

const resouce: I18nResouce = {
  en: {
    greeting: "Hello",
  },
  zh: {
    greeting: "你好",
  },
};

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const INITIAL_VALUE: I18nContextType = {
  lang: "en",
  setLang: (lang: Lang) => {},
};

export const I18nContext = createContext(INITIAL_VALUE);

interface ProviderProps {
  children?: React.ReactNode;
}

export const I18nContextProvider = ({ children }: ProviderProps) => {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <I18nContext.Provider value={{ lang, setLang }}>
      {children}
    </I18nContext.Provider>
  );
};

interface I18n {
  lang: Lang;
  i18n: I18nTranlate;
  translate: (lang: Lang) => void;
}

export const useI18n = (): I18n => {
  const { lang, setLang } = useContext(I18nContext);
  return {
    lang,
    i18n: resouce[lang],
    translate: setLang,
  };
};
