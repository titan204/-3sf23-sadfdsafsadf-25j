class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    --gray-800: #1f2937;
                    --gray-700: #374151;
                    --gray-400: #9ca3af;
                    --indigo-600: #6366f1;
                    --white: #ffffff;
                }

                footer {
                    background-color: var(--gray-800);
                    color: var(--white);
                    padding-top: 48px;  /* py-12 = 3rem = 48px */
                    padding-bottom: 48px;
                    font-family: Arial, sans-serif;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding-left: 16px; /* px-4 */
                    padding-right: 16px;
                }

                .grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 32px; /* gap-8 = 2rem = 32px */
                }

                @media (min-width: 768px) {
                    .grid {
                        grid-template-columns: repeat(4, 1fr);
                    }
                }

                h3, h4 {
                    margin-bottom: 16px; /* mb-4 */
                    font-weight: bold;
                }

                h3 {
                    font-size: 1.25rem; /* text-xl */
                }

                h4 {
                    font-weight: 600; /* font-semibold */
                }

                p {
                    color: var(--gray-400);
                    font-size: 14px;
                    line-height: 1.5;
                }

                ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                li {
                    margin-bottom: 8px; /* space-y-2 */
                    font-size: 14px;
                }

                a.footer-link {
                    color: var(--gray-400);
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                a.footer-link:hover,
                a.footer-link:focus {
                    color: var(--white);
                }

                /* Contact list items */
                .flex {
                    display: flex;
                    align-items: center;
                }

                .space-x-2 > * + * {
                    margin-left: 8px;
                }

                i {
                    width: 16px; /* w-4 */
                    height: 16px; /* h-4 */
                    stroke: var(--gray-400);
                    flex-shrink: 0;
                }

                /* Bottom border */
                .border-t {
                    border-top: 1px solid var(--gray-700);
                }

                .mt-8 {
                    margin-top: 32px; /* 8 * 4px = 32px */
                }

                .pt-8 {
                    padding-top: 32px;
                }

                .text-center {
                    text-align: center;
                }

                .text-gray-400 {
                    color: var(--gray-400);
                }
            </style>
            <footer>
                <div class="container">
                    <div class="grid">
                        <div>
                            <h3>Book Haven</h3>
                            <p>Your one-stop shop for all your literary needs. Find your next favorite book today.</p>
                        </div>
                        <div>
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="index.html" class="footer-link">Home</a></li>
                                <li><a href="catalog.html" class="footer-link">Catalog</a></li>
                                <li><a href="login.html" class="footer-link">Login</a></li>
                                <li><a href="register.html" class="footer-link">Register</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Categories</h4>
                            <ul>
                                <li><a href="#" class="footer-link">Fiction</a></li>
                                <li><a href="#" class="footer-link">Non-Fiction</a></li>
                                <li><a href="#" class="footer-link">Mystery</a></li>
                                <li><a href="#" class="footer-link">Science Fiction</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Contact Us</h4>
                            <ul>
                                <li class="flex space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" width="16" height="16">
                                        <path d="M4 4h16v16H4z" />
                                        <path d="M22 6l-10 7L2 6" />
                                    </svg>
                                    <span style="color: var(--gray-400);">contact@bookhaven.com</span>
                                </li>
                                <li class="flex space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" width="16" height="16">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.86 19.86 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13 1.21.39 2.39.77 3.5a2 2 0 01-.45 2.11L8.09 10.91a16 16 0 006 6l1.58-1.58a2 2 0 012.11-.45c1.11.38 2.29.64 3.5.77a2 2 0 012 2z" />
                                    </svg>
                                    <span style="color: var(--gray-400);">(123) 456-7890</span>
                                </li>
                                <li class="flex space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" width="16" height="16">
                                        <path d="M12 21c-4.97 0-9-4.03-9-9a9 9 0 0118 0c0 4.97-4.03 9-9 9z" />
                                        <path d="M12 11a3 3 0 100-6 3 3 0 000 6z" />
                                    </svg>
                                    <span style="color: var(--gray-400);">123 Book St, Library City</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="border-t mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; ${new Date().getFullYear()} Book Haven. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
