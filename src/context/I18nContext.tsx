import { createContext, useContext, useState } from "react";

type I18nLang = "en" | "zh";

type I18nTranslation = {
  [key: string]: string | I18nTranslation;
};

type I18nResource = {
  [lang in I18nLang]: I18nTranslation;
};

const resource: I18nResource = {
  en: {
    greeting: "Hello",
    menu: {
      delivery: "Delivery",
    },
  },
  zh: {
    greeting: "你好",
    menu: {
      delivery: "運送",
    },
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
  t: (path: string) => string;
  i18n: (lang: I18nLang) => void;
}

const getProp = (obj: any, path: string): string => {
  return path.split(".").reduce((nested, prop) => nested && nested[prop], obj);
};

export const useI18n = (): I18n => {
  const { lang, setLang } = useContext(I18nContext);

  return {
    lang,
    t: (key) => getProp(resource[lang], key),
    i18n: setLang,
  };
};
