import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    image: {
        type: String,
        default: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    },
    category: {
        type: String,
        required: true,
        enum: ['free', 'fiction', 'fantasy', 'sci-fi', 'romance', 'mystery', 'thriller', 'biography', 'self-help', 'non-fiction', 'young-adult', 'horror', 'philosophy', 'spirituality', 'finance', 'psychology']
    },
    author: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 4.0
    },
    pages: {
        type: Number,
        min: 1
    }
}, {
    timestamps: true
});

const Book = mongoose.model("Book", bookSchema);

export default Book;