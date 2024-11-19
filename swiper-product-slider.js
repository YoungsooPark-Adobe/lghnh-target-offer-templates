        // Configuration Variables
        const config = {
            heading: "Exclusive Offers!",
            bodyMessage: "Swipe to explore our deals.",
            products: [
                { name: "Product 1", thumbnail: "https://via.placeholder.com/100", price: "$100", discountedPrice: "$80" },
                { name: "Product 2", thumbnail: "https://via.placeholder.com/100", price: "$150", discountedPrice: "$120" },
                { name: "Product 3", thumbnail: "https://via.placeholder.com/100", price: "$200", discountedPrice: "$180" },
            ],
            swiperConfig: {
                slidesPerView: 1,
                spaceBetween: 10,
                navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            },
        };

        // Add CSS Styles Dynamically
        function addStyles() {
            const style = document.createElement('style');
            style.innerHTML = `
                #popup-container {
                    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                    background: rgba(0, 0, 0, 0.8); display: flex; justify-content: center;
                    align-items: center; z-index: 9999;
                }
                #popup-banner {
                    position: relative; width: 90%; max-width: 500px; background: white;
                    border-radius: 10px; overflow: hidden; box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
                }
                .popup-close-button {
                    position: absolute; top: 10px; right: 10px; width: 30px; height: 30px;
                    background: red; color: white; font-size: 20px; font-weight: bold;
                    text-align: center; line-height: 30px; border-radius: 50%; cursor: pointer;
                }
                .swiper-slide {
                    display: flex; flex-direction: column; align-items: center; padding: 20px;
                }
                .product-card { text-align: center; }
                .product-name { font-weight: bold; margin-bottom: 10px; }
                .product-thumbnail {
                    width: 100px; height: 100px; object-fit: cover; margin-bottom: 10px;
                }
                .product-prices { margin-bottom: 10px; }
                .product-discount { color: red; text-decoration: line-through; }
                .buy-now-button {
                    padding: 10px 20px; background: blue; color: white; border: none;
                    border-radius: 5px; cursor: pointer;
                }
            `;
            document.head.appendChild(style);
        }

        // Load Swiper.js Library Dynamically
        function loadSwiper(callback) {
            const script = document.createElement('script');
            script.src = "https://unpkg.com/swiper/swiper-bundle.min.js";
            script.onload = () => {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = "https://unpkg.com/swiper/swiper-bundle.min.css";
                document.head.appendChild(link);
                link.onload = callback;
            };
            document.head.appendChild(script);
        }

        // Create Popup HTML Dynamically
        function createPopup() {
            const popupContainer = document.createElement('div');
            popupContainer.id = 'popup-container';
            popupContainer.style.display = 'none';
            popupContainer.innerHTML = `
                <div id="popup-banner">
                    <div class="popup-close-button" id="close-popup">×</div>
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <!-- Product Cards Will Be Inserted Here -->
                        </div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                </div>
            `;
            document.body.appendChild(popupContainer);

            // Populate Product Cards
            const swiperWrapper = document.querySelector('.swiper-wrapper');
            config.products.forEach(product => {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide';

                slide.innerHTML = `
                    <div class="product-card">
                        <div class="product-name">${product.name}</div>
                        <img src="${product.thumbnail}" class="product-thumbnail" alt="${product.name}">
                        <div class="product-prices">
                            <span class="product-price">${product.price}</span>
                            <span class="product-discount">${product.discountedPrice}</span>
                        </div>
                        <button class="buy-now-button">Buy Now</button>
                    </div>
                `;
                swiperWrapper.appendChild(slide);
            });

            // Show Popup
            document.getElementById('show-popup').addEventListener('click', () => {
                popupContainer.style.display = 'flex';
            });

            // Close Popup
            document.getElementById('close-popup').addEventListener('click', () => {
                popupContainer.style.display = 'none';
            });

            // Initialize Swiper
            new Swiper('.swiper-container', config.swiperConfig);
        }

        // Add styles, load Swiper.js, and create the popup
        addStyles();
        loadSwiper(createPopup);
