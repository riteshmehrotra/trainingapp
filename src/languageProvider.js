export const greetingProvider = (languageCode) => {
    let greetingDictionary = getGreetingDictionary();
    const DEFAULT_GREETING = "Hello";
    let selectedLanguage = greetingDictionary.find(entry => entry.code === languageCode);
    return selectedLanguage ? selectedLanguage.greeting : DEFAULT_GREETING;

}


export const languageProvider = { getCodes: () => getGreetingDictionary().map(each => each.code) };


const getGreetingDictionary = () => {
    return [{ code: "EN", greeting: "Hello" },
    { code: "ES", greeting: "Hola" }
    ]
}


export const DEFAULT_LANGUAGE = "EN";