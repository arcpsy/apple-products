document.addEventListener("DOMContentLoaded", () => {
    // Fetch product data from the JSON file
    fetch("./assets/js/data.json") // Adjust path if you put data.json elsewhere
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(productsData => {
            const productCards = document.querySelectorAll(".product-card");

            productCards.forEach(card => {
                const cardIdentifier = Array.from(card.classList).find(cls => cls.startsWith("item-"));
                const productData = productsData[cardIdentifier]; // Get all data for this product

                if (productData) {
                    const mainProductImage = card.querySelector(".product-card__image-container img");
                    const colorGallery = card.querySelector(".product-card__color-gallery");
                    const violatorContainer = card.querySelector(".product-card__violator");
                    const titleElement = card.querySelector(".product-card__title");
                    const priceElement = card.querySelector(".product-card__price");

                    // Set main product image src, alt, and loading attribute
                    if (mainProductImage) {
                        mainProductImage.src = productData.mainImage;
                        mainProductImage.alt = productData.altText;
                        mainProductImage.loading = "lazy";
                    }

                    // Populate product info (title, price)
                    if (titleElement) {
                        titleElement.textContent = productData.title;
                    }
                    if (priceElement) {
                        priceElement.textContent = productData.price;
                    }

                    // Populate violator badge
                    if (violatorContainer) {
                        violatorContainer.innerHTML = productData.violator
                            ? `<span class="product-card__violator-badge">${productData.violator}</span>`
                            : ""; // Clear violator if not present in data
                    }

                    // Populate color dots
                    if (productData.colors && colorGallery) {
                        // Determine how many colors to show before the '+'
                        const maxColorsToShow = 6;
                        const colorsToDisplay = productData.colors.slice(0, maxColorsToShow);

                        colorsToDisplay.forEach(color => {
                            const li = document.createElement("li");
                            li.classList.add("product-card__color-dot-item");

                            const img = document.createElement("img");
                            img.src = color.src;
                            img.alt = color.alt;
                            img.loading = "lazy"; // Added for lazy loading color dots

                            li.appendChild(img);
                            colorGallery.appendChild(li);
                        });

                        // Add the '+' dot ONLY if there are MORE than 6 colors
                        if (productData.colors.length > maxColorsToShow) {
                            const moreLi = document.createElement("li");
                            moreLi.classList.add("product-card__color-dot-item--more");
                            moreLi.textContent = "+";
                            colorGallery.appendChild(moreLi);
                        }
                    }
                }
            });
        })
        .catch(error => console.error("Error fetching products data:", error));
});
