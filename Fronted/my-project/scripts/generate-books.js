const fs = require('fs');

// Extended book data with more variety
const additionalBooks = [
    {
        "id": 25,
        "name": "The Name of the Wind",
        "title": "A gifted young man's journey through a world of magic and mystery",
        "price": 16,
        "category": "fantasy",
        "image": "https://m.media-amazon.com/images/I/51ZymMgQ83L._SX325_BO1,204,203,200_.jpg",
        "author": "Patrick Rothfuss",
        "rating": 4.6,
        "pages": 662
    },
    {
        "id": 26,
        "name": "The Martian",
        "title": "An astronaut stranded on Mars fights to survive",
        "price": 15,
        "category": "sci-fi",
        "image": "https://m.media-amazon.com/images/I/51ZymMgQ83L._SX325_BO1,204,203,200_.jpg",
        "author": "Andy Weir",
        "rating": 4.7,
        "pages": 369
    },
    {
        "id": 27,
        "name": "Ready Player One",
        "title": "A virtual reality quest in a dystopian future",
        "price": 14,
        "category": "sci-fi",
        "image": "https://m.media-amazon.com/images/I/51ZymMgQ83L._SX325_BO1,204,203,200_.jpg",
        "author": "Ernest Cline",
        "rating": 4.5,
        "pages": 374
    },
    {
        "id": 28,
        "name": "The Road",
        "title": "A father and son's survival journey in a post-apocalyptic world",
        "price": 13,
        "category": "fiction",
        "image": "https://m.media-amazon.com/images/I/51ZymMgQ83L._SX325_BO1,204,203,200_.jpg",
        "author": "Cormac McCarthy",
        "rating": 4.3,
        "pages": 287
    },
    {
        "id": 29,
        "name": "Circe",
        "title": "The story of the witch Circe from Greek mythology",
        "price": 17,
        "category": "fantasy",
        "image": "https://m.media-amazon.com/images/I/51ZymMgQ83L._SX325_BO1,204,203,200_.jpg",
        "author": "Madeline Miller",
        "rating": 4.6,
        "pages": 393
    },
    {
        "id": 30,
        "name": "The Song of Achilles",
        "title": "A retelling of the Iliad from Patroclus's perspective",
        "price": 16,
        "category": "fantasy",
        "image": "https://m.media-amazon.com/images/I/51ZymMgQ83L._SX325_BO1,204,203,200_.jpg",
        "author": "Madeline Miller",
        "rating": 4.7,
        "pages": 416
    },
    {
        "id": 31,
        "name": "Project Hail Mary",
        "title": "A lone astronaut's mission to save humanity",
        "price": 18,
        "category": "sci-fi",
        "image": "https://m.media-amazon.com/images/I/51ZymMgQ83L._SX325_BO1,204,203,200_.jpg",
        "author": "Andy Weir",
        "rating": 4.8,
        "pages": 496
    },
    {
        "id": 32,
        "name": "The Priory of the Orange Tree",
        "title": "Epic standalone fantasy with dragons and queens",
        "price": 22,
        "category": "fantasy",
        "image": "https://m.media-amazon.com/images/I/51ZymMgQ83L._SX325_BO1,204,203,200_.jpg",
        "author": "Samantha Shannon",
        "rating": 4.4,
        "pages": 848
    },
    {
        "id": 33,
        "name": "Klara and the Sun",
        "title": "An Artificial Friend observes human love and faith",
        "price": 16,
        "category": "sci-fi",
        "image": "https://m.media-amazon.com/images/I/51ZymMgQ83L._SX325_BO1,204,203,200_.jpg",
        "author": "Kazuo Ishiguro",
        "rating": 4.3,
        "pages": 320
    },
    {
        "id": 34,
        "name": "The Invisible Life of Addie LaRue",
        "title": "A woman makes a Faustian bargain to live forever",
        "price": 17,
        "category": "fantasy",
        "image": "https://m.media-amazon.com/images/I/51ZymMgQ83L._SX325_BO1,204,203,200_.jpg",
        "author": "V.E. Schwab",
        "rating": 4.5,
        "pages": 448
    },
    {
        "id": 35,
        "name": "Mexican Gothic",
        "title": "A young woman uncovers dark secrets in a mysterious house",
        "price": 15,
        "category": "horror",
        "image": "https://m.media-amazon.com/images/I/51ZymMgQ83L._SX325_BO1,204,203,200_.jpg",
        "author": "Silvia Moreno-Garcia",
        "rating": 4.2,
        "pages": 320
    },
    {
        "id": 36,
        "name": "The House in the Cerulean Sea",
        "title": "A caseworker discovers magical children at an orphanage",
        "price": 14,
        "category": "fantasy",
        "image": "https://m.media-amazon.com/images/I/51ZymMgQ83L._SX325_BO1,204,203,200_.jpg",
        "author": "TJ Klune",
        "rating": 4.6,
        "pages": 396
    }
];

// Function to generate more books programmatically
function generateMoreBooks(count = 50) {
    const categories = ['fiction', 'fantasy', 'sci-fi', 'romance', 'mystery', 'thriller', 'biography', 'self-help', 'non-fiction', 'young-adult', 'horror', 'philosophy', 'spirituality', 'finance', 'psychology'];
    const authors = ['Anonymous Author', 'Contemporary Writer', 'Bestselling Author', 'Award Winner', 'Critically Acclaimed', 'Rising Star'];
    const titles = [
        'A Journey Through Time and Space',
        'Secrets of the Ancient World',
        'The Art of Living Well',
        'Mysteries of the Mind',
        'Tales from Distant Lands',
        'The Power of Knowledge',
        'Adventures in the Unknown',
        'Wisdom from the Ages',
        'Stories That Inspire',
        'The Path to Success'
    ];

    const generatedBooks = [];

    for (let i = 37; i <= count + 36; i++) {
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
        const randomTitle = titles[Math.floor(Math.random() * titles.length)];
        const randomPrice = Math.floor(Math.random() * 25) + 10; // $10-35
        const randomRating = (Math.random() * 1.5 + 3.5).toFixed(1); // 3.5-5.0
        const randomPages = Math.floor(Math.random() * 400) + 200; // 200-600 pages

        generatedBooks.push({
            id: i,
            name: `Book Title ${i}`,
            title: randomTitle,
            price: randomPrice,
            category: randomCategory,
            image: "https://m.media-amazon.com/images/I/51ZymMgQ83L._SX325_BO1,204,203,200_.jpg",
            author: randomAuthor,
            rating: parseFloat(randomRating),
            pages: randomPages
        });
    }

    return generatedBooks;
}

// Export functions for use in other files
module.exports = {
    additionalBooks,
    generateMoreBooks
};

// If run directly, generate and save expanded data
if (require.main === module) {
    const fs = require('fs');
    const path = require('path');

    // Read existing data
    const existingDataPath = path.join(__dirname, '..', 'public', 'list.json');
    let existingData = [];

    try {
        existingData = JSON.parse(fs.readFileSync(existingDataPath, 'utf8'));
    } catch (error) {
        console.log('No existing data found, starting fresh');
    }

    // Combine existing data with additional books
    const expandedData = [...existingData, ...additionalBooks];

    // Save expanded data
    fs.writeFileSync(existingDataPath, JSON.stringify(expandedData, null, 4));
    console.log(`✅ Expanded data saved! Now you have ${expandedData.length} books.`);

    // Optionally generate even more books
    const moreBooks = generateMoreBooks(25); // Generate 25 more random books
    const finalData = [...expandedData, ...moreBooks];

    fs.writeFileSync(path.join(__dirname, '..', 'public', 'expanded-list.json'), JSON.stringify(finalData, null, 4));
    console.log(`🎉 Generated even more data! Total: ${finalData.length} books in expanded-list.json`);
}