import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react"

export const useDarkMode = () => {
    const [storedValue, setValue] = useLocalStorage('dark-mode', true);

    useEffect(() => {
        if(useLocalStorage.storedValue === true){
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    })
    return [storedValue, setValue]
}