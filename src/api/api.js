const urlServer = "http://localhost:4000";
const collectionsPath = "/collections";
const loginPath = "/login";

function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function request(url) {
    const response = await fetch(url);
    let status = response.status;
    if (status > 299) throw new Error("Invalid status: " + status);
    const data = await response.json();
    await wait(1000);
    return data;
}

async function postRequest(url, body) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    let status = response.status;
    if (status > 299) throw new Error("Invalid status: " + status);
    const data = await response.json();
    return data;
}

export async function requestCollections() {
    return request(urlServer + collectionsPath);
}

export async function login(body) {
    let response = await postRequest(urlServer + loginPath, body);
    return response;
}
