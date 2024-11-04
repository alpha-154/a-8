import laptop1 from "../src/assets/products/laptop1.jpg";
import laptop2 from "../src/assets/products/laptop2.webp";
import laptop3 from "../src/assets/products/laptop3.png";
import laptop4 from "../src/assets/products/laptop4.jpeg";
import laptop5 from "../src/assets/products/laptop5.jpeg";
import laptop6 from "../src/assets/products/laptop6.jpeg";
import phone1 from "../src/assets/products/phone1.jpeg";
import phone2 from "../src/assets/products/phone2.jpeg";
import phone3 from "../src/assets/products/phone3.jpeg";
import phone4 from "../src/assets/products/phone4.jpeg";
import phone5 from "../src/assets/products/phone5.jpeg";
import watch1 from "../src/assets/products/watch1.jpg";
import watch2 from "../src/assets/products/watch2.webp";
import watch3 from "../src/assets/products/watch3.webp";
import watch4 from "../src/assets/products/watch4.jpg";
import watch5 from "../src/assets/products/watch5.jpeg";
import sunglass1 from "../src/assets/products/sunglass1.jpeg";
import sunglass2 from "../src/assets/products/sunglass2.jpeg";
import sunglass3 from "../src/assets/products/sunglass3.jpeg";
import sunglass4 from "../src/assets/products/sunglass4.jpeg";
import sunglass5 from "../src/assets/products/sunglass5.jpeg";


export const products = [
    {
        product_id: "L001",
        product_title: "MacBook Air M2",
        product_image: laptop1,
        category: "Laptops",
        price: 999,
        description: "Thin and light laptop with Apple M2 chip.",
        specification: [
            "13.6-inch Liquid Retina display",
            "M2 chip",
            "8GB RAM",
            "256GB SSD storage"
        ],
        availability: true,
        rating: 4.6
    },
    {
        product_id: "L002",
        product_title: "Dell XPS 13",
        product_image: laptop2,
        category: "Laptops",
        price: 1200,
        description: "Powerful laptop with Intel Core i7 processor.",
        specification: [
            "13.4-inch InfinityEdge display",
            "Intel Core i7",
            "16GB RAM",
            "512GB SSD"
        ],
        availability: true,
        rating: 4.7
    },
    {
        product_id: "L003",
        product_title: "HP Spectre x360",
        product_image: laptop3,
        category: "Laptops",
        price: 1100,
        description: "Convertible laptop with touchscreen display.",
        specification: [
            "13.3-inch 4K UHD display",
            "Intel Core i5",
            "8GB RAM",
            "256GB SSD"
        ],
        availability: false,
        rating: 4.5
    },
    {
        product_id: "L004",
        product_title: "Lenovo ThinkPad X1 Carbon",
        product_image: laptop4,
        category: "Laptops",
        price: 1300,
        description: "High-performance laptop for business users.",
        specification: [
            "14-inch FHD display",
            "Intel Core i7",
            "16GB RAM",
            "1TB SSD"
        ],
        availability: true,
        rating: 4.8
    },
    {
        product_id: "P001",
        product_title: "Samsung Galaxy S23",
        product_image: phone1,
        category: "Phones",
        price: 999,
        description: "Flagship smartphone with powerful performance.",
        specification: [
            "6.1-inch Dynamic AMOLED 2X display",
            "Snapdragon 8 Gen 2",
            "Triple-camera system",
            "128GB storage"
        ],
        availability: true,
        rating: 4.7
    },
    {
        product_id: "P002",
        product_title: "Google Pixel 7 Pro",
        product_image: phone2,
        category: "Phones",
        price: 899,
        description: "Google's flagship phone with AI-powered camera.",
        specification: [
            "6.7-inch OLED display",
            "Google Tensor G2",
            "Triple-camera system",
            "128GB storage"
        ],
        availability: true,
        rating: 4.6
    },
    {
        product_id: "P003",
        product_title: "OnePlus 11",
        product_image: phone3,
        category: "Phones",
        price: 699,
        description: "High-performance smartphone with fast charging.",
        specification: [
            "6.7-inch Fluid AMOLED display",
            "Snapdragon 8 Gen 1",
            "Triple-camera system",
            "256GB storage"
        ],
        availability: false,
        rating: 4.5
    },
    {
        product_id: "P004",
        product_title: "Sony Xperia 1 V",
        product_image: phone4,
        category: "Phones",
        price: 1299,
        description: "Flagship phone with advanced camera technology.",
        specification: [
            "6.5-inch 4K OLED display",
            "Snapdragon 8 Gen 2",
            "Quad-camera system",
            "512GB storage"
        ],
        availability: true,
        rating: 4.8
    },
    {
        product_id: "A001",
        product_title: "Aviator sunglass",
        product_image: sunglass1,
        category: "Sunglasses",
        price: 549,
        description: "Noise-canceling wireless earbuds from Apple.",
        specification: [
            "Active Noise Cancellation",
            "Transparency Mode",
            "Up to 6 hours of listening time",
            "Wireless charging case"
        ],
        availability: true,
        rating: 4.7
    },
    {
        product_id: "A002",
        product_title: "Shady rayes",
        product_image: sunglass2,
        category: "Sunglasses",
        price: 649,
        description: "Industry-leading noise-canceling headphones.",
        specification: [
            "Active Noise Cancellation",
            "Up to 30 hours battery life",
            "Touch controls",
            "Hi-Res audio"
        ],
        availability: true,
        rating: 4.8
    },
    {
        product_id: "A003",
        product_title: "Sporty rayes",
        product_image: sunglass3,
        category: "Sunglasses",
        price: 629,
        description: "Premium wireless earbuds with ANC.",
        specification: [
            "Active Noise Cancellation",
            "360 Audio",
            "Up to 5 hours of listening time",
            "Wireless charging case"
        ],
        availability: false,
        rating: 4.5
    },
    {
        product_id: "A004",
        product_title: "Logitech MX Master 3S",
        product_image: sunglass4,
        category: "Sunglasses",
        price: 999,
        description: "Ergonomic wireless mouse with advanced tracking.",
        specification: [
            "Ergonomic design",
            "4000 DPI sensor",
            "USB-C rechargeable",
            "Multi-device connectivity"
        ],
        availability: true,
        rating: 4.6
    },
    {
        product_id: "W001",
        product_title: "Apple Watch Series 8",
        product_image: watch1,
        category: "Watch",
        price: 699,
        description: "Advanced health and fitness tracking watch.",
        specification: [
            "Always-On Retina display",
            "Blood Oxygen app",
            "ECG app",
            "Water-resistant up to 50m"
        ],
        availability: true,
        rating: 4.7
    },
    {
        product_id: "W002",
        product_title: "Samsung Galaxy Watch 5",
        product_image: watch2,
        category: "Watch",
        price: 699,
        description: "Smartwatch with health tracking and long battery life.",
        specification: [
            "Super AMOLED display",
            "Heart rate monitoring",
            "Up to 3 days battery life",
            "Water-resistant up to 50m"
        ],
        availability: true,
        rating: 4.6
    },
    {
        product_id: "W003",
        product_title: "Fitbit Sense 2",
        product_image: watch3,
        category: "Watch",
        price: 729,
        description: "Health smartwatch with advanced health monitoring.",
        specification: [
            "EDA Scan app",
            "Heart rate monitor",
            "6+ days battery life",
            "Water-resistant up to 50m"
        ],
        availability: false,
        rating: 4.5
    },
    {
        product_id: "W004",
        product_title: "Garmin Forerunner 955",
        product_image: watch4,
        category: "Watch",
        price: 899,
        description: "GPS smartwatch designed for athletes.",
        specification: [
            "GPS and mapping",
            "VO2 max estimation",
            "Up to 15 days battery life",
            "Water-resistant up to 50m"
        ],
        availability: true,
        rating: 4.8
    },
    {
        product_id: "A005",
        product_title: "Garmin granner 955",
        product_image: watch5,
        category: "Watch",
        price: 525,
        description: "Compact portable charger with fast charging.",
        specification: [
            "10000mAh capacity",
            "High-speed charging",
            "Compact and lightweight",
            "USB-C compatible"
        ],
        availability: true,
        rating: 4.6
    },
    {
        product_id: "A006",
        product_title: "Acer Swift x3",
        product_image: laptop6,
        category: "Laptops",
        price: 730,
        description: "Portable Bluetooth speaker with powerful sound.",
        specification: [
            "8 hours of playtime",
            "Waterproof IP67",
            "Dual passive radiators",
            "Bluetooth 7.1"
        ],
        availability: true,
        rating: 4.7
    },
    {
        product_id: "L005",
        product_title: "Acer Swift 3",
        product_image: laptop5,
        category: "Laptops",
        price: 700,
        description: "Lightweight laptop with great performance.",
        specification: [
            "14-inch Full HD display",
            "AMD Ryzen 7",
            "8GB RAM",
            "512GB SSD"
        ],
        availability: true,
        rating: 4.5
    },
    {
        product_id: "P005",
        product_title: "Motorola Edge 40",
        product_image: phone5,
        category: "Phones",
        price: 799,
        description: "Smooth performance with edge-to-edge display.",
        specification: [
            "6.5-inch OLED display",
            "MediaTek Dimensity 8020",
            "Dual-camera system",
            "128GB storage"
        ],
        availability: true,
        rating: 4.6
    }
];
