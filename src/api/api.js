const urlServer = "http://localhost:4000";
const collectionsPath = "/collections";
const menPath = "/men";
const womenPath = "/women";
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
    await wait(Math.random() * 2000);
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
    let collections = request(urlServer + collectionsPath);
    return collections;
}

export async function requestMen() {
    let collections = request(urlServer + menPath);
    return collections;
}

export async function requestWomen() {
    let collections = request(urlServer + womenPath);
    return collections;
}

export async function requestProduct(id) {
    let product = request(urlServer + collectionsPath + "/" + id);
    return product;
}

export async function login(body) {
    let response = await postRequest(urlServer + loginPath, body);
    return response;
}
