import mongoose from 'mongoose';
import Book from './model/book.model.js';
import dotenv from 'dotenv';

dotenv.config();

const booksData = [
    {
        name: "The Great Gatsby",
        title: "A classic American novel about the Jazz Age",
        price: 0,
        category: "free",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
        author: "F. Scott Fitzgerald",
        rating: 4.5,
        pages: 180,
        flipkart_url: "https://www.flipkart.com/search?q=The+Great+Gatsby+F+Scott+Fitzgerald",
        amazon_url: "https://www.amazon.in/s?k=The+Great+Gatsby+F+Scott+Fitzgerald"
    },
    {
        name: "To Kill a Mockingbird",
        title: "A powerful story about racial injustice and moral growth",
        price: 15,
        category: "fiction",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
        author: "Harper Lee",
        rating: 4.8,
        pages: 376,
        flipkart_url: "https://www.flipkart.com/search?q=To+Kill+a+Mockingbird+Harper+Lee",
        amazon_url: "https://www.amazon.in/s?k=To+Kill+a+Mockingbird+Harper+Lee"
    },
    {
        name: "1984",
        title: "Dystopian novel about totalitarianism and surveillance",
        price: 12,
        category: "fiction",
        image: "https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=400&h=600&fit=crop",
        author: "George Orwell",
        rating: 4.6,
        pages: 328,
        flipkart_url: "https://www.flipkart.com/search?q=1984+George+Orwell",
        amazon_url: "https://www.amazon.in/s?k=1984+George+Orwell"
    },
    {
        name: "Pride and Prejudice",
        title: "A romantic novel about love, marriage, and social class",
        price: 0,
        category: "free",
        image: "https://images.unsplash.com/photo-1543868519-726d14987a56?w=400&h=600&fit=crop",
        author: "Jane Austen",
        rating: 4.7,
        pages: 432,
        flipkart_url: "https://www.flipkart.com/search?q=Pride+and+Prejudice+Jane+Austen",
        amazon_url: "https://www.amazon.in/s?k=Pride+and+Prejudice+Jane+Austen"
    },
    {
        name: "The Catcher in the Rye",
        title: "Coming-of-age story about teenage rebellion",
        price: 14,
        category: "fiction",
        image: "https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=400&h=600&fit=crop",
        author: "J.D. Salinger",
        rating: 4.3,
        pages: 277,
        flipkart_url: "https://www.flipkart.com/search?q=The+Catcher+in+the+Rye+Salinger",
        amazon_url: "https://www.amazon.in/s?k=The+Catcher+in+the+Rye+Salinger"
    },
    {
        name: "Harry Potter and the Sorcerer's Stone",
        title: "A young wizard's journey begins at Hogwarts",
        price: 18,
        category: "fantasy",
        image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=600&fit=crop",
        author: "J.K. Rowling",
        rating: 4.9,
        pages: 309,
        flipkart_url: "https://www.flipkart.com/search?q=Harry+Potter+Sorcerer+Stone+Rowling",
        amazon_url: "https://www.amazon.in/s?k=Harry+Potter+Sorcerer+Stone+Rowling"
    },
    {
        name: "The Lord of the Rings",
        title: "Epic fantasy adventure in Middle-earth",
        price: 25,
        category: "fantasy",
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
        author: "J.R.R. Tolkien",
        rating: 4.8,
        pages: 1216,
        flipkart_url: "https://www.flipkart.com/search?q=The+Lord+of+the+Rings+Tolkien",
        amazon_url: "https://www.amazon.in/s?k=The+Lord+of+the+Rings+Tolkien"
    },
    {
        name: "Sapiens: A Brief History of Humankind",
        title: "Exploration of human history from ancient times to modern age",
        price: 22,
        category: "non-fiction",
        image: "https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=400&h=600&fit=crop",
        author: "Yuval Noah Harari",
        rating: 4.6,
        pages: 443,
        flipkart_url: "https://www.flipkart.com/search?q=Sapiens+Yuval+Harari",
        amazon_url: "https://www.amazon.in/s?k=Sapiens+Yuval+Harari"
    },
    {
        name: "Atomic Habits",
        title: "Guide to building good habits and breaking bad ones",
        price: 16,
        category: "self-help",
        image: "https://images.unsplash.com/photo-1606368068092-2c4b6b6b4a3f?w=400&h=600&fit=crop",
        author: "James Clear",
        rating: 4.7,
        pages: 320,
        flipkart_url: "https://www.flipkart.com/search?q=Atomic+Habits+James+Clear",
        amazon_url: "https://www.amazon.in/s?k=Atomic+Habits+James+Clear"
    },
    {
        name: "The Psychology of Money",
        title: "Understanding the strange ways people think about money",
        price: 19,
        category: "finance",
        image: "https://images.unsplash.com/photo-1543868519-726d14987a56?w=400&h=600&fit=crop",
        author: "Morgan Housel",
        rating: 4.5,
        pages: 256,
        flipkart_url: "https://www.flipkart.com/search?q=The+Psychology+of+Money+Housel",
        amazon_url: "https://www.amazon.in/s?k=The+Psychology+of+Money+Housel"
    },
    {
        name: "Educated",
        title: "Memoir about a woman's quest for knowledge",
        price: 17,
        category: "biography",
        image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=400&h=600&fit=crop",
        author: "Tara Westover",
        rating: 4.6,
        pages: 334,
        flipkart_url: "https://www.flipkart.com/search?q=Educated+Tara+Westover",
        amazon_url: "https://www.amazon.in/s?k=Educated+Tara+Westover"
    },
    {
        name: "The Midnight Library",
        title: "A novel about infinite possibilities and second chances",
        price: 0,
        category: "free",
        image: "https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=400&h=600&fit=crop",
        author: "Matt Haig",
        rating: 4.4,
        pages: 288,
        flipkart_url: "https://www.flipkart.com/search?q=The+Midnight+Library+Matt+Haig",
        amazon_url: "https://www.amazon.in/s?k=The+Midnight+Library+Matt+Haig"
    },
    {
        name: "Dune",
        title: "Epic science fiction about desert planet Arrakis",
        price: 20,
        category: "sci-fi",
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop",
        author: "Frank Herbert",
        rating: 4.7,
        pages: 688,
        flipkart_url: "https://www.flipkart.com/search?q=Dune+Frank+Herbert",
        amazon_url: "https://www.amazon.in/s?k=Dune+Frank+Herbert"
    },
    {
        name: "The Alchemist",
        title: "Philosophical novel about following your dreams",
        price: 13,
        category: "philosophy",
        image: "https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=400&h=600&fit=crop",
        author: "Paulo Coelho",
        rating: 4.5,
        pages: 208,
        flipkart_url: "https://www.flipkart.com/search?q=The+Alchemist+Paulo+Coelho",
        amazon_url: "https://www.amazon.in/s?k=The+Alchemist+Paulo+Coelho"
    },
    {
        name: "Becoming",
        title: "Michelle Obama's inspiring life story",
        price: 21,
        category: "biography",
        image: "https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=400&h=600&fit=crop",
        author: "Michelle Obama",
        rating: 4.8,
        pages: 448,
        flipkart_url: "https://www.flipkart.com/search?q=Becoming+Michelle+Obama",
        amazon_url: "https://www.amazon.in/s?k=Becoming+Michelle+Obama"
    },
    {
        name: "The Subtle Art of Not Giving a F*ck",
        title: "Counterintuitive approach to living a good life",
        price: 16,
        category: "self-help",
        image: "https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=400&h=600&fit=crop",
        author: "Mark Manson",
        rating: 4.3,
        pages: 224,
        flipkart_url: "https://www.flipkart.com/search?q=Subtle+Art+Not+Giving+Manson",
        amazon_url: "https://www.amazon.in/s?k=Subtle+Art+Not+Giving+Manson"
    },
    {
        name: "Rich Dad Poor Dad",
        title: "What the rich teach their kids about money",
        price: 14,
        category: "finance",
        image: "https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=400&h=600&fit=crop",
        author: "Robert Kiyosaki",
        rating: 4.2,
        pages: 336,
        flipkart_url: "https://www.flipkart.com/search?q=Rich+Dad+Poor+Dad+Kiyosaki",
        amazon_url: "https://www.amazon.in/s?k=Rich+Dad+Poor+Dad+Kiyosaki"
    },
    {
        name: "The Seven Husbands of Evelyn Hugo",
        title: "Glamorous Hollywood story of love and ambition",
        price: 18,
        category: "romance",
        image: "https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=400&h=600&fit=crop",
        author: "Taylor Jenkins Reid",
        rating: 4.6,
        pages: 400,
        flipkart_url: "https://www.flipkart.com/search?q=Seven+Husbands+Evelyn+Hugo+Reid",
        amazon_url: "https://www.amazon.in/s?k=Seven+Husbands+Evelyn+Hugo+Reid"
    },
    {
        name: "Where the Crawdads Sing",
        title: "Mystery and coming-of-age in the marshes of North Carolina",
        price: 16,
        category: "mystery",
        image: "https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=400&h=600&fit=crop",
        author: "Delia Owels",
        rating: 4.7,
        pages: 384,
        flipkart_url: "https://www.flipkart.com/search?q=Where+Crawdads+Sing+Owels",
        amazon_url: "https://www.amazon.in/s?k=Where+Crawdads+Sing+Owels"
    },
    {
        name: "The Silent Patient",
        title: "Psychological thriller about a woman's silence",
        price: 15,
        category: "thriller",
        image: "https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=400&h=600&fit=crop",
        author: "Alex Michaelides",
        rating: 4.4,
        pages: 336,
        flipkart_url: "https://www.flipkart.com/search?q=The+Silent+Patient+Michaelides",
        amazon_url: "https://www.amazon.in/s?k=The+Silent+Patient+Michaelides"
    },
    {
        name: "Thinking, Fast and Slow",
        title: "How we make decisions and solve problems",
        price: 23,
        category: "psychology",
        image: "https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=400&h=600&fit=crop",
        author: "Daniel Kahneman",
        rating: 4.5,
        pages: 499,
        flipkart_url: "https://www.flipkart.com/search?q=Thinking+Fast+Slow+Kahneman",
        amazon_url: "https://www.amazon.in/s?k=Thinking+Fast+Slow+Kahneman"
    },
    {
        name: "The Four Agreements",
        title: "Toltec wisdom for personal freedom",
        price: 12,
        category: "spirituality",
        image: "https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=400&h=600&fit=crop",
        author: "Don Miguel Ruiz",
        rating: 4.6,
        pages: 160,
        flipkart_url: "https://www.flipkart.com/search?q=Four+Agreements+Miguel+Ruiz",
        amazon_url: "https://www.amazon.in/s?k=Four+Agreements+Miguel+Ruiz"
    },
    {
        name: "The Hunger Games",
        title: "Dystopian adventure in Panem",
        price: 14,
        category: "young-adult",
        image: "https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=400&h=600&fit=crop",
        author: "Suzanne Collins",
        rating: 4.6,
        pages: 374,
        flipkart_url: "https://www.flipkart.com/search?q=The+Hunger+Games+Collins",
        amazon_url: "https://www.amazon.in/s?k=The+Hunger+Games+Collins"
    },
    {
        name: "The Power of Habit",
        title: "Why we do what we do and how to change",
        price: 17,
        category: "self-help",
        image: "https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=400&h=600&fit=crop",
        author: "Charles Duhigg",
        rating: 4.4,
        pages: 371,
        flipkart_url: "https://www.flipkart.com/search?q=The+Power+of+Habit+Duhigg",
        amazon_url: "https://www.amazon.in/s?k=The+Power+of+Habit+Duhigg"
    }
];

const seedDatabase = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URL);
        console.log('✅ Connected to MongoDB');

        // Clear existing data
        await Book.deleteMany({});
        console.log('🗑️ Cleared existing books');

        // Insert new data
        const insertedBooks = await Book.insertMany(booksData);
        console.log(`✅ Successfully inserted ${insertedBooks.length} books`);

        // Generate additional books programmatically
        const additionalBooks = generateMoreBooks(50);
        const moreInsertedBooks = await Book.insertMany(additionalBooks);
        console.log(`🎉 Added ${moreInsertedBooks.length} more books!`);

        const totalBooks = await Book.countDocuments();
        console.log(`📚 Total books in database: ${totalBooks}`);

    } catch (error) {
        console.error('❌ Error seeding database:', error);
    } finally {
        await mongoose.connection.close();
        console.log('🔌 Database connection closed');
    }
};

function generateMoreBooks(count) {
    const categories = ['fiction', 'fantasy', 'sci-fi', 'romance', 'mystery', 'thriller', 'biography', 'self-help', 'non-fiction', 'young-adult', 'horror', 'philosophy', 'spirituality', 'finance', 'psychology'];
    const authors = ['Contemporary Author', 'Bestselling Writer', 'Award Winner', 'Critically Acclaimed', 'Rising Star', 'Literary Master'];
    const titleParts = [
        'The Art of', 'Secrets of', 'Journey to', 'Mastering', 'The Power of', 'Beyond', 'Inside', 'The Science of',
        'Uncovering', 'The Ultimate Guide to', 'Transforming', 'The Hidden Truth of', 'Breaking Free from'
    ];
    const subjects = [
        'Success', 'Happiness', 'Wealth', 'Wisdom', 'Innovation', 'Creativity', 'Leadership', 'Mindfulness',
        'Productivity', 'Relationships', 'Health', 'Technology', 'Nature', 'History', 'Future'
    ];

    const generatedBooks = [];

    for (let i = 25; i <= count + 24; i++) {
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
        const randomTitlePart = titleParts[Math.floor(Math.random() * titleParts.length)];
        const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
        const fullTitle = `${randomTitlePart} ${randomSubject}`;

        const randomPrice = Math.floor(Math.random() * 25) + 10; // $10-35
        const randomRating = parseFloat((Math.random() * 1.5 + 3.5).toFixed(1)); // 3.5-5.0
        const randomPages = Math.floor(Math.random() * 400) + 200; // 200-600 pages

        generatedBooks.push({
            name: `Book ${i}`,
            title: fullTitle,
            price: randomPrice,
            category: randomCategory,
            image: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 100000000)}?w=400&h=600&fit=crop`,
            author: randomAuthor,
            rating: randomRating,
            pages: randomPages
        });
    }

    return generatedBooks;
}

// Run the seed function
seedDatabase();
