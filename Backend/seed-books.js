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
        image: "https://covers.openlibrary.org/b/id/7322246-M.jpg",
        author: "F. Scott Fitzgerald",
        rating: 4.5,
        pages: 180,
        flipkart_url: "https://www.flipkart.com/search?q=The Great Gatsby",
        amazon_url: "https://www.amazon.in/s?k=The Great Gatsby",
        google_url: "https://www.google.com/search?q=The Great Gatsby F Scott Fitzgerald book buy"
    },
    {
        name: "To Kill a Mockingbird",
        title: "A powerful story about racial injustice and moral growth",
        price: 15,
        category: "fiction",
        image: "https://covers.openlibrary.org/b/id/8406950-M.jpg",
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
        image: "https://covers.openlibrary.org/b/id/7878060-M.jpg",
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
        image: "https://covers.openlibrary.org/b/id/8370537-M.jpg",
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
        image: "https://covers.openlibrary.org/b/id/7871835-M.jpg",
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
        image: "https://covers.openlibrary.org/b/id/7404341-M.jpg",
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
        image: "https://covers.openlibrary.org/b/id/7827099-M.jpg",
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
        image: "https://covers.openlibrary.org/b/id/8392262-M.jpg",
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
        image: "https://covers.openlibrary.org/b/id/8389503-M.jpg",
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
        image: "https://covers.openlibrary.org/b/id/8399331-M.jpg",
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
        image: "https://covers.openlibrary.org/b/id/8393046-M.jpg",
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
        image: "https://covers.openlibrary.org/b/id/9240849-M.jpg",
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
        image: "https://covers.openlibrary.org/b/id/7371088-M.jpg",
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
        image: "https://covers.openlibrary.org/b/id/8329929-M.jpg",
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
        image: "https://covers.openlibrary.org/b/id/8390195-M.jpg",
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
        image: "https://covers.openlibrary.org/b/id/8338186-M.jpg",
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
        image: "https://covers.openlibrary.org/b/id/8353842-M.jpg",
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
        image: "https://covers.openlibrary.org/b/id/8394166-M.jpg",
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
        image: "https://covers.openlibrary.org/b/id/8396054-M.jpg",
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
        image: "https://covers.openlibrary.org/b/id/8351881-M.jpg",
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
        image: "https://covers.openlibrary.org/b/id/8355346-M.jpg",
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
        image: "https://covers.openlibrary.org/b/id/8356274-M.jpg",
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
        image: "https://covers.openlibrary.org/b/id/7309879-M.jpg",
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
        image: "https://covers.openlibrary.org/b/id/8357844-M.jpg",
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
    const booksToAdd = [
        { name: "The Hobbit", author: "J.R.R. Tolkien", category: "fantasy", title: "A fantasy adventure about Bilbo Baggins", pages: 310, rating: 4.7, image: "https://covers.openlibrary.org/b/id/7270808-M.jpg", price: 16 },
        { name: "Jane Eyre", author: "Charlotte Brontë", category: "romance", title: "A classic romance and gothic novel", pages: 507, rating: 4.6, image: "https://covers.openlibrary.org/b/id/8353482-M.jpg", price: 15 },
        { name: "Wuthering Heights", author: "Emily Brontë", category: "romance", title: "Dark and passionate love story", pages: 352, rating: 4.4, image: "https://covers.openlibrary.org/b/id/8371283-M.jpg", price: 14 },
        { name: "Sherlock Holmes: A Study in Scarlet", author: "Arthur Conan Doyle", category: "mystery", title: "The first Sherlock Holmes adventure", pages: 200, rating: 4.5, image: "https://covers.openlibrary.org/b/id/8401098-M.jpg", price: 12 },
        { name: "The Picture of Dorian Gray", author: "Oscar Wilde", category: "horror", title: "A dark tale of beauty and corruption", pages: 254, rating: 4.3, image: "https://covers.openlibrary.org/b/id/8381027-M.jpg", price: 13 },
        { name: "Crime and Punishment", author: "Fyodor Dostoevsky", category: "fiction", title: "Psycho-thriller about morality and redemption", pages: 671, rating: 4.6, image: "https://covers.openlibrary.org/b/id/7366451-M.jpg", price: 18 },
        { name: "War and Peace", author: "Leo Tolstoy", category: "fiction", title: "Epic novel set during Napoleonic Wars", pages: 1225, rating: 4.7, image: "https://covers.openlibrary.org/b/id/7393885-M.jpg", price: 20 },
        { name: "Anna Karenina", author: "Leo Tolstoy", category: "romance", title: "A tragic tale of love and society", pages: 878, rating: 4.5, image: "https://covers.openlibrary.org/b/id/8370531-M.jpg", price: 19 },
        { name: "Emma", author: "Jane Austen", category: "romance", title: "A witty tale of matchmaking and self-discovery", pages: 474, rating: 4.5, image: "https://covers.openlibrary.org/b/id/8395446-M.jpg", price: 14 },
        { name: "The Odyssey", author: "Homer", category: "fantasy", title: "Classical epic of adventure and homecoming", pages: 541, rating: 4.4, image: "https://covers.openlibrary.org/b/id/8395873-M.jpg", price: 17 },
        { name: "Moby Dick", author: "Herman Melville", category: "fiction", title: "Epic tale of obsession and the sea", pages: 635, rating: 4.2, image: "https://covers.openlibrary.org/b/id/7377788-M.jpg", price: 16 },
        { name: "Little Women", author: "Louisa May Alcott", category: "young-adult", title: "Coming-of-age story of four sisters", pages: 449, rating: 4.6, image: "https://covers.openlibrary.org/b/id/7411184-M.jpg", price: 13 },
        { name: "The Count of Monte Cristo", author: "Alexandre Dumas", category: "fiction", title: "Epic revenge and adventure tale", pages: 462, rating: 4.7, image: "https://covers.openlibrary.org/b/id/8367288-M.jpg", price: 18 },
        { name: "The Three Musketeers", author: "Alexandre Dumas", category: "fiction", title: "Swashbuckling adventure in France", pages: 531, rating: 4.5, image: "https://covers.openlibrary.org/b/id/7348097-M.jpg", price: 15 },
        { name: "Les Misérables", author: "Victor Hugo", category: "fiction", title: "Epic of justice, love and redemption", pages: 1488, rating: 4.6, image: "https://covers.openlibrary.org/b/id/8331486-M.jpg", price: 22 },
        { name: "Frankenstein", author: "Mary Shelley", category: "horror", title: "Gothic tale of science and responsibility", pages: 280, rating: 4.3, image: "https://covers.openlibrary.org/b/id/7394661-M.jpg", price: 12 },
        { name: "Dracula", author: "Bram Stoker", category: "horror", title: "Classic vampire horror novel", pages: 418, rating: 4.4, image: "https://covers.openlibrary.org/b/id/8364935-M.jpg", price: 14 },
        { name: "The Strange Case of Dr. Jekyll and Mr. Hyde", author: "Robert Louis Stevenson", category: "horror", title: "Tale of good and evil within one man", pages: 150, rating: 4.2, image: "https://covers.openlibrary.org/b/id/8380033-M.jpg", price: 10 },
        { name: "The Invisible Man", author: "H.G. Wells", category: "sci-fi", title: "Story of a scientist who becomes invisible", pages: 271, rating: 4.1, image: "https://covers.openlibrary.org/b/id/8375284-M.jpg", price: 11 },
        { name: "Alice's Adventures in Wonderland", author: "Lewis Carroll", category: "fantasy", title: "Magical journey through a surreal world", pages: 272, rating: 4.5, image: "https://covers.openlibrary.org/b/id/7443301-M.jpg", price: 12 },
        { name: "Through the Looking Glass", author: "Lewis Carroll", category: "fantasy", title: "Alice's second adventure in a mirror world", pages: 214, rating: 4.3, image: "https://covers.openlibrary.org/b/id/8375019-M.jpg", price: 11 },
        { name: "Peter Pan", author: "J.M. Barrie", category: "fantasy", title: "The boy who never grows up", pages: 309, rating: 4.4, image: "https://covers.openlibrary.org/b/id/8387193-M.jpg", price: 13 },
        { name: "Treasure Island", author: "Robert Louis Stevenson", category: "fiction", title: "Classic adventure on the high seas", pages: 282, rating: 4.4, image: "https://covers.openlibrary.org/b/id/7360868-M.jpg", price: 13 },
        { name: "Twenty Thousand Leagues Under the Sea", author: "Jules Verne", category: "sci-fi", title: "Underwater adventure with Captain Nemo", pages: 503, rating: 4.3, image: "https://covers.openlibrary.org/b/id/8383893-M.jpg", price: 15 },
        { name: "Around the World in 80 Days", author: "Jules Verne", category: "fiction", title: "Epic race around the globe", pages: 604, rating: 4.3, image: "https://covers.openlibrary.org/b/id/8364066-M.jpg", price: 16 },
        { name: "A Journey to the Center of the Earth", author: "Jules Verne", category: "sci-fi", title: "Expedition into the Earth's interior", pages: 183, rating: 4.2, image: "https://covers.openlibrary.org/b/id/8373733-M.jpg", price: 12 },
        { name: "Robinson Crusoe", author: "Daniel Defoe", category: "fiction", title: "Survival story on a deserted island", pages: 464, rating: 4.1, image: "https://covers.openlibrary.org/b/id/8376555-M.jpg", price: 14 },
        { name: "Gulliver's Travels", author: "Jonathan Swift", category: "fantasy", title: "Satirical voyage to fantastical lands", pages: 423, rating: 4.0, image: "https://covers.openlibrary.org/b/id/8353283-M.jpg", price: 13 },
        { name: "The Canterbury Tales", author: "Geoffrey Chaucer", category: "fiction", title: "Collection of tales by medieval pilgrims", pages: 532, rating: 4.2, image: "https://covers.openlibrary.org/b/id/8381029-M.jpg", price: 17 },
        { name: "Beowulf", author: "Unknown", category: "fantasy", title: "Ancient epic of heroic battles", pages: 299, rating: 4.1, image: "https://covers.openlibrary.org/b/id/8379456-M.jpg", price: 14 },
        { name: "Don Quixote", author: "Miguel de Cervantes", category: "fiction", title: "Adventures of a delusional knight", pages: 992, rating: 4.3, image: "https://covers.openlibrary.org/b/id/8375627-M.jpg", price: 19 },
        { name: "The Decameron", author: "Giovanni Boccaccio", category: "fiction", title: "Collection of tales of love and cunning", pages: 537, rating: 4.1, image: "https://covers.openlibrary.org/b/id/8379034-M.jpg", price: 16 },
        { name: "The Tale of Genji", author: "Murasaki Shikibu", category: "romance", title: "Classic Japanese romance and court life", pages: 509, rating: 4.2, image: "https://covers.openlibrary.org/b/id/8387429-M.jpg", price: 18 },
        { name: "One Thousand and One Nights", author: "Unknown", category: "fantasy", title: "Collection of Arabian folk tales", pages: 456, rating: 4.4, image: "https://covers.openlibrary.org/b/id/8376895-M.jpg", price: 17 },
        { name: "The Metamorphoses", author: "Ovid", category: "fantasy", title: "Classical myths of transformation", pages: 579, rating: 4.1, image: "https://covers.openlibrary.org/b/id/8375812-M.jpg", price: 16 },
        { name: "The Aeneid", author: "Virgil", category: "fantasy", title: "Epic journey of Aeneas", pages: 506, rating: 4.2, image: "https://covers.openlibrary.org/b/id/8358463-M.jpg", price: 15 },
        { name: "The Divine Comedy", author: "Dante Alighieri", category: "philosophy", title: "Epic journey through Hell, Purgatory, Paradise", pages: 798, rating: 4.4, image: "https://covers.openlibrary.org/b/id/8366739-M.jpg", price: 19 },
        { name: "Ulysses", author: "James Joyce", category: "fiction", title: "Modernist novel following Bloom through Dublin", pages: 734, rating: 4.0, image: "https://covers.openlibrary.org/b/id/7380969-M.jpg", price: 20 },
        { name: "The Great Expectations", author: "Charles Dickens", category: "fiction", title: "Coming-of-age and social commentary", pages: 505, rating: 4.4, image: "https://covers.openlibrary.org/b/id/8370048-M.jpg", price: 17 },
        { name: "Oliver Twist", author: "Charles Dickens", category: "fiction", title: "Tale of orphan life in Victorian London", pages: 448, rating: 4.3, image: "https://covers.openlibrary.org/b/id/8388494-M.jpg", price: 16 },
        { name: "The Scarlet Letter", author: "Nathaniel Hawthorne", category: "fiction", title: "Story of sin and redemption in Puritan America", pages: 272, rating: 4.1, image: "https://covers.openlibrary.org/b/id/8357652-M.jpg", price: 13 },
        { name: "Sense and Sensibility", author: "Jane Austen", category: "romance", title: "Two sisters seek love and stability", pages: 409, rating: 4.4, image: "https://covers.openlibrary.org/b/id/8366340-M.jpg", price: 14 },
        { name: "Persuasion", author: "Jane Austen", category: "romance", title: "Second-chance romance in Austen's final novel", pages: 428, rating: 4.5, image: "https://covers.openlibrary.org/b/id/8384876-M.jpg", price: 15 },
        { name: "Northanger Abbey", author: "Jane Austen", category: "romance", title: "Gothic satire and coming-of-age", pages: 250, rating: 4.3, image: "https://covers.openlibrary.org/b/id/8391039-M.jpg", price: 12 },
        { name: "The Jungle", author: "Upton Sinclair", category: "fiction", title: "Exposé of meat packing industry abuses", pages: 331, rating: 4.2, image: "https://covers.openlibrary.org/b/id/8380561-M.jpg", price: 13 },
        { name: "The Beautiful and Damned", author: "F. Scott Fitzgerald", category: "fiction", title: "Tale of wealth and moral decline", pages: 552, rating: 4.1, image: "https://covers.openlibrary.org/b/id/8383719-M.jpg", price: 15 },
        { name: "Of Mice and Men", author: "John Steinbeck", category: "fiction", title: "Story of friendship and broken dreams", pages: 107, rating: 4.2, image: "https://covers.openlibrary.org/b/id/8385913-M.jpg", price: 11 },
        { name: "The Grapes of Wrath", author: "John Steinbeck", category: "fiction", title: "Epic of migrants seeking hope", pages: 464, rating: 4.3, image: "https://covers.openlibrary.org/b/id/7331333-M.jpg", price: 18 },
        { name: "Slaughterhouse-Five", author: "Kurt Vonnegut", category: "sci-fi", title: "Anti-war sci-fi satire", pages: 275, rating: 4.1, image: "https://covers.openlibrary.org/b/id/8384551-M.jpg", price: 14 },
        { name: "One Flew Over the Cuckoo's Nest", author: "Ken Kesey", category: "fiction", title: "Rebellion in a mental institution", pages: 279, rating: 4.3, image: "https://covers.openlibrary.org/b/id/8383537-M.jpg", price: 15 },
    ];

    return booksToAdd;
}

// Run the seed function
seedDatabase();
