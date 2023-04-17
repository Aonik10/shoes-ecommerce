import { useEffect, useState } from "react";

export function usePromise(request) {
    let [promiseState, setPromiseState] = useState({ state: "Pending" });
    useEffect(() => {
        (async () => {
            try {
                let value = await request();
                setPromiseState({ state: "Success", data: value });
            } catch {
                setPromiseState({ state: "Error" });
            }
        })(); // defino la funcion y la llamo inmediatamente
    }, [setPromiseState, request]);
    return promiseState;
}

export function useLocalStorage(key, initialValue) {
    let [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    let setValue = (value) => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    };
    return [storedValue, setValue];
}
