export type Languages = "es" | "en"

export interface LanguageContextProps {
  selectedLanguage: Languages
  handleChangeSelectedLanguage: () => void
}

export interface LanguageProviderProps {
  children: React.ReactElement<Element>;
}