import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react"

export const useDarkMode = (value) => {
    const [darkMode, setDarkMode] = useLocalStorage('darkmode', value);
    
    useEffect(() => {
        if(darkMode === true){
            document.querySelector('body').classList.add('dark-mode')
        } else {
            document.querySelector('body').classList.remove('dark-mode')
        }
    }, [darkMode])

    return [darkMode, setDarkMode]
}