// Initialize localStorage with extensive real data
document.addEventListener('DOMContentLoaded', () => {

    // 1. Check if books data exists
    if (!localStorage.getItem('books')) {
        const sampleBooks = [
            // --- Fiction & Classics ---
            {
                id: 1,
                title: "The Alchemist",
                author: "Paulo Coelho",
                summary: "A fable about following your dream.",
                category: "Fiction",
                price: 14.50,
                image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
                available: true
            },
            {
                id: 2,
                title: "The Kite Runner",
                author: "Khaled Hosseini",
                summary: "A heartbreaking story of friendship and redemption.",
                category: "Fiction",
                price: 15.99,
                image: "https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg",
                available: true
            },
            {
                id: 3,
                title: "Lord of the Flies",
                author: "William Golding",
                summary: "A group of boys stranded on an island and their failed attempt to govern themselves.",
                category: "Classic",
                price: 12.25,
                image: "https://upload.wikimedia.org/wikipedia/en/9/9b/LordOfTheFliesBookCover.jpg",
                available: true
            },

            // --- Fantasy & Sci-Fi ---
            {
                id: 4,
                title: "Harry Potter and the Sorcerer's Stone",
                author: "J.K. Rowling",
                summary: "The first book in the Harry Potter series.",
                category: "Fantasy",
                price: 19.99,
                image: "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg",
                available: true
            },
            {
                id: 5,
                title: "The Hobbit",
                author: "J.R.R. Tolkien",
                summary: "A hobbit's adventure before The Lord of the Rings.",
                category: "Fantasy",
                price: 14.99,
                image: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
                available: true
            },
            {
                id: 6,
                title: "The Hunger Games",
                author: "Suzanne Collins",
                summary: "A dystopian tale set in Panem.",
                category: "YA Fiction",
                price: 13.99,
                image: "https://images-na.ssl-images-amazon.com/images/I/61JfGcL2ljL.jpg",
                available: true
            },
            {
                id: 7,
                title: "Fahrenheit 451",
                author: "Ray Bradbury",
                summary: "A world where firemen burn books.",
                category: "Sci-Fi",
                price: 11.99,
                image: "https://upload.wikimedia.org/wikipedia/en/d/db/Fahrenheit_451_1st_ed_cover.jpg",
                available: true
            },
            {
                id: 8,
                title: "The Fellowship of the Ring",
                author: "J.R.R. Tolkien",
                summary: "First volume of The Lord of the Rings.",
                category: "Fantasy",
                price: 16.00,
                image: "https://images-na.ssl-images-amazon.com/images/I/81t2CVWEsUL.jpg",
                available: true
            },

            // --- Self-Help & Business ---
            {
                id: 9,
                title: "Atomic Habits",
                author: "James Clear",
                summary: "A guide to building good habits.",
                category: "Self-Help",
                price: 16.99,
                image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
                available: true
            },
            {
                id: 10,
                title: "Rich Dad Poor Dad",
                author: "Robert T. Kiyosaki",
                summary: "What the rich teach their kids about money.",
                category: "Finance",
                price: 18.00,
                image: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
                available: true
            },
            {
                id: 11,
                title: "Think and Grow Rich",
                author: "Napoleon Hill",
                summary: "A foundational self-help book.",
                category: "Self-Help",
                price: 10.50,
                image: "https://images-na.ssl-images-amazon.com/images/I/71UypkUjStL.jpg",
                available: true
            },
            {
                id: 12,
                title: "Deep Work",
                author: "Cal Newport",
                summary: "Focused success in a distracted world.",
                category: "Productivity",
                price: 14.99,
                image: "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg",
                available: true
            },
          

            // --- History & Memoir ---
            {
                id: 15,
                title: "Sapiens",
                author: "Yuval Noah Harari",
                summary: "The story of humankind.",
                category: "History",
                price: 18.99,
                image: "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg",
                available: true
            },
            {
                id: 16,
                title: "Educated",
                author: "Tara Westover",
                summary: "A memoir about overcoming adversity.",
                category: "Memoir",
                price: 15.00,
                image: "https://images-na.ssl-images-amazon.com/images/I/81WojUxbbFL.jpg",
                available: true
            },

            // --- Technology & Coding ---
            {
                id: 17,
                title: "Clean Code",
                author: "Robert C. Martin",
                summary: "A handbook of agile software craftsmanship.",
                category: "Technology",
                price: 45.00,
                image: "https://images-na.ssl-images-amazon.com/images/I/41SH-SvWPxL.jpg",
                available: true
            },
            {
                id: 18,
                title: "The Pragmatic Programmer",
                author: "Andrew Hunt",
                summary: "Guidance for software developers.",
                category: "Technology",
                price: 39.99,
                image: "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL.jpg",
                available: true
            },
           
        ];

        localStorage.setItem('books', JSON.stringify(sampleBooks));
    }

    // 2. Check if users data exists
    if (!localStorage.getItem('users')) {
        const sampleUsers = [
            {
                id: 1,
                name: "John Doe",
                email: "john@example.com",
                password: "Password123!",
                address: "123 Main St, Anytown, USA"
            }
        ];
        localStorage.setItem('users', JSON.stringify(sampleUsers));
    }

    // 3. Initialize orders
    if (!localStorage.getItem('orders')) {
        localStorage.setItem('orders', JSON.stringify([]));
    }
});


// ============================
// Utility Functions
// ============================

function showAlert(message, type = 'success') {
    const alert = document.createElement('div');
    alert.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg text-white z-50 transition-opacity duration-500 ${type === 'success' ? 'bg-green-600' : 'bg-red-600'}`;
    alert.textContent = message;
    document.body.appendChild(alert);

    setTimeout(() => {
        alert.style.opacity = '0';
        setTimeout(() => alert.remove(), 500);
    }, 3000);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
}
