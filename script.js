// Initialize localStorage with sample data if empty
document.addEventListener('DOMContentLoaded', () => {
    // Check if books data exists in localStorage
    if (!localStorage.getItem('books')) {
        const sampleBooks = [
            {
                id: 1,
                title: "The Silent Patient",
                author: "Alex Michaelides",
                summary: "A psychological thriller about a woman who shoots her husband and then stops speaking.",
                category: "Thriller",
                price: 12.99,
                image: "http://static.photos/books/320x240/1",
                available: true
            },
            {
                id: 2,
                title: "Where the Crawdads Sing",
                author: "Delia Owens",
                summary: "A murder mystery and coming-of-age story set in the marshes of North Carolina.",
                category: "Mystery",
                price: 14.99,
                image: "http://static.photos/books/320x240/2",
                available: true
            },
            {
                id: 3,
                title: "Educated",
                author: "Tara Westover",
                summary: "A memoir about a woman who leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
                category: "Biography",
                price: 13.50,
                image: "http://static.photos/books/320x240/3",
                available: true
            },
            {
                id: 4,
                title: "Becoming",
                author: "Michelle Obama",
                summary: "An intimate memoir by the former First Lady of the United States.",
                category: "Biography",
                price: 15.25,
                image: "http://static.photos/books/320x240/4",
                available: true
            }
        ];
        localStorage.setItem('books', JSON.stringify(sampleBooks));
    }

    // Check if users data exists in localStorage
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

    // Initialize orders if empty
    if (!localStorage.getItem('orders')) {
        localStorage.setItem('orders', JSON.stringify([]));
    }
});

// Utility functions
function showAlert(message, type = 'success') {
    const alert = document.createElement('div');
    alert.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg text-white ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`;
    alert.textContent = message;
    document.body.appendChild(alert);

    setTimeout(() => {
        alert.remove();
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