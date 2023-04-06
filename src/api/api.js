let urlCollections = "http://localhost:4000/collections";

function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function request(url) {
    const response = await fetch(url);
    const data = await response.json();
    await wait(1000);
    return data;
}

export async function requestCollections() {
    return request(urlCollections);
}
