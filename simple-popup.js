        (function() {
            // Configuration JSON for the popup
            const popupConfig = {
                "headingMessage": "Welcome to Our Sale!",
                "imageUrl": "https://de89qjx90gu7m.cloudfront.net/familymall_prod/product/f1c02c30-457b-4027-8b32-7e19baabb4db.jpg",
                "description": "Enjoy up to 50% off on selected items. Hurry, limited time offer!",
                "ctaText": "Shop Now",
                "ctaLink": "https://www.example.com/shop",
                "backgroundColor": "rgba(0, 0, 0, 0.8)" // Using RGBA for dimmed background
            };

            // Create the dimmed background
            const dimmedBackground = document.createElement('div');
            dimmedBackground.id = 'popup-dimmed-background';
            dimmedBackground.style.position = 'fixed';
            dimmedBackground.style.top = '0';
            dimmedBackground.style.left = '0';
            dimmedBackground.style.width = '100%';
            dimmedBackground.style.height = '100%';
            dimmedBackground.style.backgroundColor = popupConfig.backgroundColor;
            dimmedBackground.style.display = 'flex';
            dimmedBackground.style.justifyContent = 'center';
            dimmedBackground.style.alignItems = 'center';
            dimmedBackground.style.zIndex = '1000';

            // Create the popup container
            const popupContainer = document.createElement('div');
            popupContainer.id = 'popup-container';
            popupContainer.style.width = '80%';
            popupContainer.style.maxWidth = '500px';
            popupContainer.style.backgroundColor = '#fff';
            popupContainer.style.borderRadius = '8px';
            popupContainer.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            popupContainer.style.position = 'relative';
            popupContainer.style.padding = '20px';
            popupContainer.style.boxSizing = 'border-box';
            popupContainer.style.fontFamily = 'Arial, sans-serif';

            // Attach Shadow DOM to the popup container
            const shadow = popupContainer.attachShadow({ mode: 'closed' });

            // Create styles for the popup inside Shadow DOM
            const style = document.createElement('style');
            style.textContent = `
                .popup-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }
                .popup-heading {
                    font-size: 24px;
                    margin-bottom: 15px;
                    color: #333;
                }
                .popup-image {
                    width: 70%;
                    height: auto;
                    margin-bottom: 15px;
                }
                .popup-description {
                    font-size: 16px;
                    margin-bottom: 20px;
                    color: #666;
                }
                .popup-cta {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #007BFF;
                    color: #fff;
                    text-decoration: none;
                    border-radius: 4px;
                    font-size: 16px;
                    transition: background-color 0.3s;
                }
                .popup-cta:hover {
                    background-color: #0056b3;
                }
                .popup-close {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: none;
                    border: none;
                    font-size: 20px;
                    cursor: pointer;
                    color: #999;
                }
                .popup-close:hover {
                    color: #333;
                }
            `;
            shadow.appendChild(style);

            // Create the popup content
            const popupContent = document.createElement('div');
            popupContent.className = 'popup-content';

            // Close button
            const closeButton = document.createElement('button');
            closeButton.className = 'popup-close';
            closeButton.innerHTML = '&times;';
            closeButton.addEventListener('click', () => {
                document.body.removeChild(dimmedBackground);
            });
            shadow.appendChild(closeButton);

            // Heading Message
            const heading = document.createElement('h2');
            heading.className = 'popup-heading';
            heading.textContent = popupConfig.headingMessage;
            popupContent.appendChild(heading);

            // Image
            const image = document.createElement('img');
            image.className = 'popup-image';
            image.src = popupConfig.imageUrl;
            image.alt = 'Popup Image';
            popupContent.appendChild(image);

            // Description Text
            const description = document.createElement('p');
            description.className = 'popup-description';
            description.textContent = popupConfig.description;
            popupContent.appendChild(description);

            // CTA Button
            const ctaButton = document.createElement('a');
            ctaButton.className = 'popup-cta';
            ctaButton.textContent = popupConfig.ctaText;
            ctaButton.href = popupConfig.ctaLink;
            ctaButton.target = '_blank';
            popupContent.appendChild(ctaButton);

            // Append content to Shadow DOM
            shadow.appendChild(popupContent);

            // Append popup container to dimmed background
            dimmedBackground.appendChild(popupContainer);

            // Append dimmed background to body
            document.body.appendChild(dimmedBackground);
        })();
