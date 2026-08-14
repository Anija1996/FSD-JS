const productList = document.querySelector("#products");
const loadButton = document.querySelector("#load-btn");
const feedbackForm = document.querySelector("#feedback-form");
const result = document.querySelector("#result");

async function loadProducts() {
    productList.innerHTML = `
        <p class="text-muted">Loading Products.....</p>
    `;
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );

        if (!response.ok) {
            throw new Error(`HTTP STATUS CODE: ${response.status}`);
        }

        const products = await response.json();

        productList.innerHTML = products.map(
            (product) => `
                <div class="product mb-3">
                    <h3>${product.title}</h3>
                    <p>${product.body}</p>
                </div>
            `
        ).join("");

    } catch (error) {
        productList.innerHTML = `
            <p class="text-danger">
                Failed to load the products: ${error.message}
            </p>
        `;
    }
}

loadButton.addEventListener("click", loadProducts);


feedbackForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const userName = document.querySelector("#name").value.trim();
    const userMessage = document.querySelector("#message").value.trim();

    result.innerHTML = `
        <p class="text-muted">Sending user feedback.....</p>
    `;

    try {
        const resp = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",

                body: JSON.stringify({
                    name: userName,
                    message: userMessage
                }),

                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        if (!resp.ok) {
            throw new Error(`HTTP STATUS CODE: ${resp.status}`);
        }

        const savedFeedback = await resp.json();

        result.innerHTML = `
            <div class="alert alert-success">
                <p class="mb-0">
                    Thank you, ${savedFeedback.name}!
                </p>
            </div>
        `;

    } catch (error) {

        result.innerHTML = `
            <p class="text-danger">
                Failed to send the feedback: ${error.message}
            </p>
        `;
    }
});