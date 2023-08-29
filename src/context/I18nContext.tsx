import { createContext, useContext, useState } from "react";

type I18nLang = "en" | "zh";

type I18nTranlate = {
  [key: string]: string;
};

type I18nResouce = {
  [lang in I18nLang]: I18nTranlate;
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
  lang: I18nLang;
  setLang: (lang: I18nLang) => void;
}

const INITIAL_VALUE: I18nContextType = {
  lang: "en",
  setLang: (lang: I18nLang) => {},
};

export const I18nContext = createContext(INITIAL_VALUE);

interface ProviderProps {
  children?: React.ReactNode;
}

export const I18nContextProvider = ({ children }: ProviderProps) => {
  const [lang, setLang] = useState<I18nLang>("en");

  return (
    <I18nContext.Provider value={{ lang, setLang }}>
      {children}
    </I18nContext.Provider>
  );
};

interface I18n {
  lang: I18nLang;
  i18n: I18nTranlate;
  translate: (lang: I18nLang) => void;
}

export const useI18n = (): I18n => {
  const { lang, setLang } = useContext(I18nContext);
  return {
    lang,
    i18n: resouce[lang],
    translate: setLang,
  };
};
