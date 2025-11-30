class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                /* ألوان وخطوط */
                :host {
                    --indigo-600: #6366f1;
                    --indigo-700: #4f46e5;
                    --gray-600: #4b5563;
                    --gray-800: #1f2937;
                    --white: #ffffff;
                }

                nav {
                    background-color: var(--white);
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                    font-family: Arial, sans-serif;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 12px 16px; /* py-3 (12px), px-4 (16px) */
                }

                .flex {
                    display: flex;
                }

                .justify-between {
                    justify-content: space-between;
                }

                .items-center {
                    align-items: center;
                }

                .space-x-2 > * + * {
                    margin-left: 8px; /* 2 units ~ 8px */
                }

                .space-x-8 > * + * {
                    margin-left: 32px; /* 8 units ~ 32px */
                }

                a {
                    text-decoration: none;
                    cursor: pointer;
                }

                a:focus {
                    outline: 2px solid var(--indigo-600);
                    outline-offset: 2px;
                }

                .navbar-link {
                    color: var(--gray-600);
                    position: relative;
                    font-size: 16px;
                    transition: color 0.3s ease;
                }

                .navbar-link:hover,
                .navbar-link:focus {
                    color: var(--indigo-600);
                }

                .navbar-link::after {
                    content: '';
                    display: block;
                    width: 0;
                    height: 2px;
                    background: var(--indigo-600);
                    transition: width 0.3s;
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                }

                .navbar-link:hover::after,
                .navbar-link:focus::after {
                    width: 100%;
                }

                /* Register button */
                .register-btn {
                    background-color: var(--indigo-600);
                    color: var(--white);
                    padding: 8px 16px; /* px-4 py-2 */
                    border-radius: 0.5rem; /* rounded-lg */
                    font-weight: 600;
                    transition: background-color 0.3s ease;
                    font-size: 16px;
                }
                .register-btn:hover,
                .register-btn:focus {
                    background-color: var(--indigo-700);
                }

                /* Icon sizes */
                .icon {
                    width: 32px;
                    height: 32px;
                    color: var(--indigo-600);
                    flex-shrink: 0;
                }

                /* Desktop menu */
                .desktop-menu {
                    display: flex;
                    align-items: center;
                }

                /* Mobile styles */
                .mobile-menu-button {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: var(--gray-600);
                    display: none; /* مخفية على الديسكتوب */
                    padding: 4px;
                }

                /* Mobile menu */
                .mobile-menu {
                    transition: all 0.3s ease;
                    margin-top: 16px;
                    padding-bottom: 16px;
                    display: none;
                    flex-direction: column;
                }

                .mobile-menu.show {
                    display: flex;
                }

                .mobile-menu a {
                    color: var(--gray-600);
                    padding: 8px 0;
                    font-size: 16px;
                    transition: color 0.3s ease;
                }

                .mobile-menu a:hover,
                .mobile-menu a:focus {
                    color: var(--indigo-600);
                }

                .mobile-menu .register-link {
                    color: var(--indigo-600);
                    font-weight: 600;
                }

                .cart-badge {
                    animation: pulse 2s infinite;
                }

                .cart-badge:not(.hidden) {
                    display: flex !important;
                }

                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }

                /* Responsive breakpoints */
                @media (max-width: 767px) {
                    /* تحت 768px */
                    .desktop-menu {
                        display: none;
                    }
                    .mobile-menu-button {
                        display: inline-block;
                    }
                }

                @media (min-width: 768px) {
                    .mobile-menu {
                        display: none !important;
                    }
                }
            </style>
            <nav>
                <div class="container">
                    <div class="flex justify-between items-center">
                        <a href="index.html" class="flex items-center space-x-2">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20l9-5-9-5-9 5 9 5z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12l9-5-9-5-9 5 9 5z" />
                            </svg>
                            <span style="font-size: 1.25rem; font-weight: bold; color: var(--gray-800);">Book Haven</span>
                        </a>

                        <div class="desktop-menu space-x-8 items-center">
                            <a href="index.html" class="navbar-link">Home</a>
                            <a href="catalog.html" class="navbar-link">Catalog</a>
                            <a href="login.html" class="navbar-link">Login</a>
                            <a href="aboutus.html" class="navbar-link">About us</a>
                            <a href="contactus.html" class="navbar-link">Contact us</a>
                            <a href="user-profile.html" class="navbar-link">Profile</a>
                            <a href="cart.html" class="navbar-link relative" aria-label="Shopping Cart">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>
                                <span id="cartBadge" class="cart-badge absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center hidden">0</span>
                            </a>
                            <a href="register.html" class="register-btn">Register</a>
                            <a href="admin-login.html" class="navbar-link" aria-label="Admin Login">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A11.955 11.955 0 0112 15c2.485 0 4.78.785 6.627 2.11M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                            </a>
                        </div>

                        <button id="mobile-menu-button" class="mobile-menu-button" aria-label="Toggle mobile menu">
                            <svg id="menu-icon" class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>

                    <div id="mobile-menu" class="mobile-menu" aria-hidden="true">
                        <a href="index.html">Home</a>
                        <a href="catalog.html">Catalog</a>
                        <a href="cart.html">Cart</a>
                        <a href="login.html">Login</a>
                        <a href="user-profile.html">Profile</a>
                        <a href="register.html" class="register-link">Register</a>
                        <a href="admin-login.html">Admin</a>
                    </div>
                </div>
            </nav>
        `;

        // Mobile menu toggle
        const mobileMenuButton = this.shadowRoot.getElementById('mobile-menu-button');
        const mobileMenu = this.shadowRoot.getElementById('mobile-menu');
        const menuIcon = this.shadowRoot.getElementById('menu-icon');

        mobileMenuButton.addEventListener('click', () => {
            const isShown = mobileMenu.classList.toggle('show');
            if (isShown) {
                menuIcon.innerHTML = `
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                `; // X icon
                mobileMenu.setAttribute('aria-hidden', 'false');
            } else {
                menuIcon.innerHTML = `
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                `; // menu icon
                mobileMenu.setAttribute('aria-hidden', 'true');
            }
        });

        // Update cart badge
        this.updateCartBadge();

        // Listen for cart updates
        window.addEventListener('cartUpdated', () => {
            this.updateCartBadge();
        });

        // Check for cart updates periodically
        setInterval(() => {
            this.updateCartBadge();
        }, 1000);
    }

    updateCartBadge() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const badge = this.shadowRoot.getElementById('cartBadge');

        if (!badge) return;

        if (currentUser) {
            const cart = JSON.parse(localStorage.getItem(`cart_${currentUser.id}`)) || { items: [] };
            const itemCount = cart.items.reduce((sum, item) => sum + (item.quantity || 0), 0);

            if (itemCount > 0) {
                badge.textContent = itemCount;
                badge.classList.remove('hidden');
            } else {
                badge.classList.add('hidden');
            }
        } else {
            badge.classList.add('hidden');
        }
    }
}

customElements.define('custom-navbar', CustomNavbar);
