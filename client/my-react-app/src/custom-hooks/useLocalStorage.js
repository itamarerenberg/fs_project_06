import { useEffect, useState } from 'react';

function getVaule(key, initValue){
    const saved = JSON.parse(localStorage.getItem(key))
    if (saved) return saved
    if (initValue instanceof Function) return initValue()
    return initValue
}

export function clearStorage(key){
    localStorage.clear()
}

export function useLocalStorage(key, initValue) {
    const [value, setValue] = useState(() => getVaule(key, initValue))

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}
