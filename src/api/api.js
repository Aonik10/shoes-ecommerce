// en el packaje.json agregamos "proxy": "http://localhost:4000"

import { router } from "../App";
import { store } from "../app/store";
import { sessionLogout } from "../features/sessionSlice";

const SERVER_URL = "https://home-pc.emipellegrino.com/api";
const COLLECTIONS_PATH = "/collections";
const MEN_PATH = "/collections/men";
const WOMEN_PATH = "/collections/women";
const LOGIN_PATH = "/auth/login";
const LOGOUT_PATH = "/auth/logout";
const SEND_EMAIL = "/auth//send-email";
const ADD_TO_CART_PATH = "/user/addtocart";
const GET_USER_CART_PATH = "/user/cart";
const MODIFY_CART_UNITS = "/user/modify-cart-units";
const DELETE_CART_ELEMENT = "/user/remove-from-cart";
const CREATE_PURCHASE = "/user/create-purchase";
const GET_PURCHASES = "/user/purchases";

/*function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}*/

async function request(url, method = "GET", body = {}) {
    const response = await fetch(url, {
        method: method,
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        ...(method !== "GET" && { body: JSON.stringify(body) }),
    });
    let status = response.status;
    if (status === 401) {
        store.dispatch(sessionLogout());
        router.navigate("/login");
    }
    if (status > 299) throw new Error("Invalid status: " + status);
    const data = await response.json();
    //await wait(200);
    return data;
}

// Products requests
export async function requestCollections() {
    let collections = request(SERVER_URL + COLLECTIONS_PATH);
    return collections;
}

export async function requestMen() {
    let collections = request(SERVER_URL + MEN_PATH);
    return collections;
}

export async function requestWomen() {
    let collections = request(SERVER_URL + WOMEN_PATH);
    return collections;
}

export async function requestProduct(id) {
    let product = request(SERVER_URL + COLLECTIONS_PATH + "/" + id);
    return product;
}

// User requests
export async function login(body) {
    let response = await request(SERVER_URL + LOGIN_PATH, "POST", body);
    return response;
}

export async function logout() {
    let response = await request(SERVER_URL + LOGOUT_PATH, "POST");
    return response;
}

export async function addToCart(body) {
    let response = await request(
        SERVER_URL + ADD_TO_CART_PATH + "/" + body.id,
        "POST",
        body
    );
    return response;
}

export async function getUserCart() {
    let response = await request(SERVER_URL + GET_USER_CART_PATH);
    return response;
}

export async function modifyCartUnits(body) {
    let response = await request(SERVER_URL + MODIFY_CART_UNITS, "PUT", body);
    return response;
}

export async function deleteCartElement(body) {
    let response = await request(
        SERVER_URL + DELETE_CART_ELEMENT,
        "DELETE",
        body
    );
    return response;
}

export async function createPurchase() {
    let response = await request(SERVER_URL + CREATE_PURCHASE, "POST");
    return response;
}

export async function getPurchases() {
    let response = await request(SERVER_URL + GET_PURCHASES);
    return response;
}

export async function sendEmail(body) {
    let response = await request(SERVER_URL + SEND_EMAIL, "POST", body);
    return response;
}
