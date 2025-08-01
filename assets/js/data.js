document.addEventListener("DOMContentLoaded", () => {
   // This is a centralized product data repo.
   const productsData = {
      "item-1": {
         mainImage: "./assets/images/products/MA7F4.png",
         altText: "iPhone 16 Pro Max Clear Case with MagSafe",
         colors: [], // No color dots for this product
         title: "iPhone 16 Pro Max Clear Case with MagSafe",
         price: "$49.00",
         violator: null, // No violator badge for this product
      },
      "item-2": {
         mainImage: "./assets/images/products/MDGR4_FV401.png",
         altText: "iPhone 16 Plus Silicone Case with MagSafe – Peony",
         colors: [
            { src: "./assets/images/colors/periwinkle.png", alt: "Periwinkle" },
            { src: "./assets/images/colors/peony.png", alt: "Peony" },
            { src: "./assets/images/colors/aquamarine.png", alt: "Aquamarine" },
            { src: "./assets/images/colors/tangerine.png", alt: "Tangerine" },
            { src: "./assets/images/colors/star-fruit.png", alt: "Star Fruit" },
            { src: "./assets/images/colors/ultramarine.png", alt: "Ultramarine" },
            { src: "./assets/images/colors/lake-green.png", alt: "Lake Green" },
            { src: "./assets/images/colors/fuchsia.png", alt: "Fuchsia" },
            { src: "./assets/images/colors/plum.jpeg", alt: "Plum" },
            { src: "./assets/images/colors/black.png", alt: "Black" },
            { src: "./assets/images/colors/stone-gray.jpeg", alt: "Stone Gray" },
            { src: "./assets/images/colors/denim.jpeg", alt: "Denim" },
         ],
         title: "iPhone 16 Plus Silicone Case with MagSafe – Peony",
         price: "$49.00",
         violator: null,
      },
      "item-3": {
         mainImage: "./assets/images/products/MDTM4.png",
         altText: "Beats iPhone 16 Pro Max Case with MagSafe — Special Edition — Twilight Blue",
         colors: [
            { src: "./assets/images/colors/sunrise-pink.jpeg", alt: "Sunrise Pink" },
            { src: "./assets/images/colors/twilight-blue.jpeg", alt: "Twilight Blue" },
         ],
         title: "Beats iPhone 16 Pro Max Case with MagSafe — Special Edition — Twilight Blue",
         price: "$49.00",
         violator: "New",
      },
      "item-4": {
         mainImage: "./assets/images/products/HRTU2.png",
         altText: "OtterBox Lumen Series Case with MagSafe for iPhone 16 Pro Max – Green",
         colors: [
            { src: "./assets/images/colors/blue.jpeg", alt: "Blue" },
            { src: "./assets/images/colors/pink.jpeg", alt: "Pink" },
            { src: "./assets/images/colors/green.jpeg", alt: "Green" },
            { src: "./assets/images/colors/black.jpeg", alt: "Black" },
         ],
         title: "OtterBox Lumen Series Case with MagSafe for iPhone 16 Pro Max – Green",
         price: "$49.95",
         violator: null,
      },
      "item-5": {
         mainImage: "./assets/images/products/MD3Q4.png",
         altText: "iPhone 16e Silicone Case – Winter Blue",
         colors: [
            { src: "./assets/images/colors/lake-green.png", alt: "Lake Green" },
            { src: "./assets/images/colors/fuchsia.png", alt: "Fuchsia" },
            { src: "./assets/images/colors/winter-blue.png", alt: "Winter Blue" },
            { src: "./assets/images/colors/white.png", alt: "White" },
            { src: "./assets/images/colors/black.png", alt: "Black" },
         ],
         title: "iPhone 16e Silicone Case – Winter Blue",
         price: "$39.00",
         violator: null,
      },
   };

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

         // Set main product image src and alt
         if (mainProductImage) {
            mainProductImage.src = productData.mainImage;
            mainProductImage.alt = productData.altText;
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
});
