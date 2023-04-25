import { useCallback, useEffect, useState } from "react";

export function usePromise(request, initialValue) {
    let [promiseState, setPromiseState] = useState(
        initialValue !== undefined
            ? { state: "Success", data: initialValue }
            : { state: "Pending" }
    );
    // estudiar
    let refresh = useCallback(async () => {
        try {
            setPromiseState({ state: "Pending" });
            let value = await request();
            setPromiseState({ state: "Success", data: value });
        } catch {
            setPromiseState({ state: "Error" });
        }
    }, [request, setPromiseState]);
    useEffect(
        () => initialValue !== undefined && refresh(),
        [refresh, initialValue]
    );
    return [promiseState, refresh];
}
