import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './translation/en.json'
import fr from './translation/fr.json'
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation: en
    },
    fr: {
        translation: fr
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",

        interpolation: {
            escapeValue: false // react already safes from xss
        },
        react: {
            useSuspense: false
        }
    });

export default i18n;