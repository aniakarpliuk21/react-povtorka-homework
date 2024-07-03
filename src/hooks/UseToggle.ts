import {useState} from "react";

const useToggle = (initValue:boolean) => {
    const [value, setValue] = useState<boolean>(initValue)
    const toggleValue = () => setValue(prevValue => !prevValue)
    return [value,toggleValue]
}

useToggle(true)