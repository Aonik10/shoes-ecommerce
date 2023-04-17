// en el packaje.json agregamos "proxy": "http://localhost:4000"

import { router } from "../App";
import { store } from "../app/store";
import { sessionLogout } from "../features/sessionSlice";

const urlServer = "http://localhost:4000";
const collectionsPath = "/api/collections";
const menPath = "/api/collections/men";
const womenPath = "/api/collections/women";
const loginPath = "/api/auth/login";
const logoutPath = "/api/auth/logout";
const addToCartPath = "/api/user/addtocart";

function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function request(url) {
    const response = await fetch(url, { credentials: "include" });
    let status = response.status;
    if (status === 401) {
        store.dispatch(sessionLogout());
        router.navigate("/login");
    }
    if (status > 299) throw new Error("Invalid status: " + status);
    const data = await response.json();
    //await wait(Math.random() * 2000);
    return data;
}

async function postRequest(url, body = {}) {
    const response = await fetch(url, {
        method: "POST",
        credentials: "include",
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

// Products requests
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

// User requests
export async function login(body) {
    let response = await postRequest(urlServer + loginPath, body);
    return response;
}

export async function logout() {
    let response = await postRequest(urlServer + logoutPath);
    return response;
}

export async function addToCart(body) {
    let response = await postRequest(
        urlServer + addToCartPath + "/" + body.id,
        body
    );
    return response;
}
