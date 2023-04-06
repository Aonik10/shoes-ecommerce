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
