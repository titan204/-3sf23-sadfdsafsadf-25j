// Initialize localStorage with extensive real data
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Check if books data exists
    if (!localStorage.getItem('books')) {
        const sampleBooks = [
            // --- Fiction & Classics ---
            {
                id: 1,
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                summary: "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
                category: "Classic",
                price: 10.99,
                image: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
                available: true
            },
            {
                id: 2,
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                summary: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.",
                category: "Classic",
                price: 12.50,
                image: "https://covers.openlibrary.org/b/isbn/9780446310789-L.jpg",
                available: true
            },
            {
                id: 3,
                title: "1984",
                author: "George Orwell",
                summary: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
                category: "Sci-Fi",
                price: 11.99,
                image: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
                available: true
            },
            {
                id: 4,
                title: "Pride and Prejudice",
                author: "Jane Austen",
                summary: "A romantic novel of manners that follows the character development of Elizabeth Bennet.",
                category: "Romance",
                price: 9.99,
                image: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",
                available: true
            },
            {
                id: 6,
                title: "The Alchemist",
                author: "Paulo Coelho",
                summary: "A fable about following your dream. The story of an Andalusian shepherd boy who travels to the Egyptian desert.",
                category: "Fiction",
                price: 14.50,
                image: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg",
                available: true
            },
            {
                id: 7,
                title: "The Kite Runner",
                author: "Khaled Hosseini",
                summary: "The unforgettable, heartbreaking story of the unlikely friendship between a wealthy boy and the son of his father's servant.",
                category: "Fiction",
                price: 15.99,
                image: "https://covers.openlibrary.org/b/isbn/9781594480003-L.jpg",
                available: true
            },
            {
                id: 8,
                title: "Little Women",
                author: "Louisa May Alcott",
                summary: "Generations of readers young and old, male and female, have fallen in love with the March sisters.",
                category: "Classic",
                price: 11.50,
                image: "https://covers.openlibrary.org/b/isbn/9780451529305-L.jpg",
                available: true
            },
            {
                id: 9,
                title: "Animal Farm",
                author: "George Orwell",
                summary: "A beast fable, in the form of a satirical allegorical novella, by George Orwell.",
                category: "Classic",
                price: 9.50,
                image: "https://covers.openlibrary.org/b/isbn/9780451526342-L.jpg",
                available: true
            },
            {
                id: 10,
                title: "Lord of the Flies",
                author: "William Golding",
                summary: "A novel about a group of British boys stranded on an uninhabited island and their disastrous attempt to govern themselves.",
                category: "Classic",
                price: 12.25,
                image: "https://covers.openlibrary.org/b/isbn/9780399501487-L.jpg",
                available: true
            },

            // --- Fantasy & Sci-Fi ---
            {
                id: 11,
                title: "Harry Potter and the Sorcerer's Stone",
                author: "J.K. Rowling",
                summary: "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle.",
                category: "Fantasy",
                price: 19.99,
                image: "https://covers.openlibrary.org/b/isbn/9780590353427-L.jpg",
                available: true
            },
            {
                id: 12,
                title: "The Hobbit",
                author: "J.R.R. Tolkien",
                summary: "A timeless classic comprising the prelude to The Lord of the Rings.",
                category: "Fantasy",
                price: 14.99,
                image: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",
                available: true
            },
            {
                id: 13,
                title: "Dune",
                author: "Frank Herbert",
                summary: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family.",
                category: "Sci-Fi",
                price: 18.50,
                image: "https://covers.openlibrary.org/b/isbn/9780441172719-L.jpg",
                available: true
            },
            {
                id: 14,
                title: "A Game of Thrones",
                author: "George R.R. Martin",
                summary: "Long ago, in a time forgotten, a preternatural event threw the seasons out of balance.",
                category: "Fantasy",
                price: 22.00,
                image: "https://covers.openlibrary.org/b/isbn/9780553103540-L.jpg",
                available: true
            },
            {
                id: 15,
                title: "The Hunger Games",
                author: "Suzanne Collins",
                summary: "In the ruins of a place once known as North America lies the nation of Panem.",
                category: "YA Fiction",
                price: 13.99,
                image: "https://covers.openlibrary.org/b/isbn/9780439023481-L.jpg",
                available: true
            },
            {
                id: 16,
                title: "Fahrenheit 451",
                author: "Ray Bradbury",
                summary: "A dystopian novel where books are outlawed and 'firemen' burn any that are found.",
                category: "Sci-Fi",
                price: 11.99,
                image: "https://covers.openlibrary.org/b/isbn/9781451673319-L.jpg",
                available: true
            },
            {
                id: 17,
                title: "Ender's Game",
                author: "Orson Scott Card",
                summary: "The story of Andrew 'Ender' Wiggin, a child soldier trained to fight an alien race.",
                category: "Sci-Fi",
                price: 12.99,
                image: "https://covers.openlibrary.org/b/isbn/9780812550702-L.jpg",
                available: true
            },
            {
                id: 18,
                title: "The Fellowship of the Ring",
                author: "J.R.R. Tolkien",
                summary: "The first volume in the Lord of the Rings trilogy.",
                category: "Fantasy",
                price: 16.00,
                image: "https://covers.openlibrary.org/b/isbn/9780618640157-L.jpg",
                available: true
            },
            {
                id: 19,
                title: "Ready Player One",
                author: "Ernest Cline",
                summary: "A dystopian science fiction franchise set in the year 2045.",
                category: "Sci-Fi",
                price: 14.25,
                image: "https://covers.openlibrary.org/b/isbn/9780307887436-L.jpg",
                available: true
            },
            {
                id: 20,
                title: "The Martian",
                author: "Andy Weir",
                summary: "Six days ago, astronaut Mark Watney became one of the first people to walk on Mars.",
                category: "Sci-Fi",
                price: 15.00,
                image: "https://covers.openlibrary.org/b/isbn/9780804139021-L.jpg",
                available: true
            },

            // --- Self-Help & Business ---
            {
                id: 21,
                title: "Atomic Habits",
                author: "James Clear",
                summary: "An easy and proven way to build good habits and break bad ones.",
                category: "Self-Help",
                price: 16.99,
                image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
                available: true
            },
            {
                id: 22,
                title: "Rich Dad Poor Dad",
                author: "Robert T. Kiyosaki",
                summary: "What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!",
                category: "Finance",
                price: 18.00,
                image: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg",
                available: true
            },
            {
                id: 23,
                title: "Think and Grow Rich",
                author: "Napoleon Hill",
                summary: "A personal development and self-improvement book.",
                category: "Self-Help",
                price: 10.50,
                image: "https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg",
                available: true
            },
            {
                id: 24,
                title: "The Power of Habit",
                author: "Charles Duhigg",
                summary: "Why we do what we do in life and business.",
                category: "Self-Help",
                price: 15.50,
                image: "https://covers.openlibrary.org/b/isbn/9780812981605-L.jpg",
                available: true
            },
            {
                id: 25,
                title: "Deep Work",
                author: "Cal Newport",
                summary: "Rules for focused success in a distracted world.",
                category: "Productivity",
                price: 14.99,
                image: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg",
                available: true
            },
            {
                id: 26,
                title: "Zero to One",
                author: "Peter Thiel",
                summary: "Notes on Startups, or How to Build the Future.",
                category: "Business",
                price: 17.50,
                image: "https://covers.openlibrary.org/b/isbn/9780804139298-L.jpg",
                available: true
            },
            {
                id: 27,
                title: "Thinking, Fast and Slow",
                author: "Daniel Kahneman",
                summary: "The major New York Times bestseller that explains the two systems that drive the way we think.",
                category: "Psychology",
                price: 16.50,
                image: "https://covers.openlibrary.org/b/isbn/9780374275631-L.jpg",
                available: true
            },
            {
                id: 28,
                title: "How to Win Friends and Influence People",
                author: "Dale Carnegie",
                summary: "A self-help book that has sold over 30 million copies worldwide.",
                category: "Self-Help",
                price: 13.00,
                image: "https://covers.openlibrary.org/b/isbn/9780671027032-L.jpg",
                available: true
            },
            {
                id: 29,
                title: "Sapiens: A Brief History of Humankind",
                author: "Yuval Noah Harari",
                summary: "A book that explores the history of humankind from the Stone Age to the twenty-first century.",
                category: "History",
                price: 18.99,
                image: "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg",
                available: true
            },
            {
                id: 30,
                title: "Educated",
                author: "Tara Westover",
                summary: "A memoir about a woman who leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
                category: "Memoir",
                price: 15.00,
                image: "https://covers.openlibrary.org/b/isbn/9780399590504-L.jpg",
                available: true
            },

            // --- Tech & Coding ---
            {
                id: 31,
                title: "Clean Code",
                author: "Robert C. Martin",
                summary: "A Handbook of Agile Software Craftsmanship.",
                category: "Technology",
                price: 45.00,
                image: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",
                available: true
            },
            {
                id: 32,
                title: "The Pragmatic Programmer",
                author: "Andrew Hunt",
                summary: "From Journeyman to Master. A guide for software developers.",
                category: "Technology",
                price: 39.99,
                image: "https://covers.openlibrary.org/b/isbn/9780201616224-L.jpg",
                available: true
            },
            {
                id: 33,
                title: "Introduction to Algorithms",
                author: "Thomas H. Cormen",
                summary: "A comprehensive introduction to the modern study of computer algorithms.",
                category: "Technology",
                price: 75.00,
                image: "https://covers.openlibrary.org/b/isbn/9780262033848-L.jpg",
                available: true
            },
            {
                id: 34,
                title: "You Don't Know JS: Up & Going",
                author: "Kyle Simpson",
                summary: "A series of books diving deep into the core mechanisms of the JavaScript language.",
                category: "Technology",
                price: 12.99,
                image: "https://covers.openlibrary.org/b/isbn/9781491924464-L.jpg",
                available: true
            },
            {
                id: 35,
                title: "Design Patterns",
                author: "Erich Gamma",
                summary: "Elements of Reusable Object-Oriented Software.",
                category: "Technology",
                price: 49.99,
                image: "https://covers.openlibrary.org/b/isbn/9780201633610-L.jpg",
                available: true
            },

            // --- Thriller & Mystery ---
            {
                id: 36,
                title: "The Silent Patient",
                author: "Alex Michaelides",
                summary: "A psychological thriller about a woman who shoots her husband and then stops speaking.",
                category: "Thriller",
                price: 14.00,
                image: "https://covers.openlibrary.org/b/isbn/9781250301697-L.jpg",
                available: true
            },
            {
                id: 37,
                title: "Gone Girl",
                author: "Gillian Flynn",
                summary: "A thriller novel that reveals the secrets of a modern marriage.",
                category: "Thriller",
                price: 13.50,
                image: "https://covers.openlibrary.org/b/isbn/9780307588371-L.jpg",
                available: true
            },
            {
                id: 39,
                title: "The Da Vinci Code",
                author: "Dan Brown",
                summary: "A mystery thriller novel by Dan Brown.",
                category: "Thriller",
                price: 11.00,
                image: "https://covers.openlibrary.org/b/isbn/9780307474278-L.jpg",
                available: true
            },
            {
                id: 40,
                title: "Sherlock Holmes: The Complete Novels",
                author: "Arthur Conan Doyle",
                summary: "The complete collection of Sherlock Holmes novels.",
                category: "Mystery",
                price: 18.00,
                image: "https://covers.openlibrary.org/b/isbn/9780553212419-L.jpg",
                available: true
            }
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

// --- Utility functions ---

function showAlert(message, type = 'success') {
    const alert = document.createElement('div');
    // Styling assumes Tailwind CSS is present
    alert.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg text-white z-50 transition-opacity duration-500 ${type === 'success' ? 'bg-green-600' : 'bg-red-600'}`;
    alert.textContent = message;
    document.body.appendChild(alert);

    // Auto remove after 3 seconds
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
    // At least 8 characters, one uppercase, one lowercase, one number
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
}