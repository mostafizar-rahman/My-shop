import img1 from '../assets/images/1.png'
import imag2 from '../assets/images/2.png'
import shoes from '../assets/images/shoes.png'
import monitors from "../assets/images/monitors.png";
import img20 from "../assets/images/20.png";
import img21 from "../assets/images/21.png";
import img22 from "../assets/images/22.png";
import img23 from "../assets/images/23.png";
import img24 from "../assets/images/24.png";
import watch from "../assets/images/watch.png";
import tshart from "../assets/images/tshart.png";

export const productsData = [

  {
    id: 1,
    image: img1,
    category: "Men's Fashion",
    subCategory: "Clothing",
    title: "Fair Indigo Men's Organic All-Cotton Luxe Henley Shirt",
    price: 500,
    quantity: 0,
    color: ["Black", "Red", "Blue"],
    sizes: ['M', "l", "XL", "XXL"],
    brands: "Gildan",
    rating: 5,
    department: 'Shart'
  },
  {
    id: 3,
    image: tshart,
    category: "Men's Fashion",
    subCategory: "Clothing",
    title: "Vertx Men's Coldblack Short Sleeve Polo Shirt, Long Body",
    price: 1000,
    quantity: 10,
    color: ["White", "Yellow", "Orenge"],
    sizes: ['M', "l", "XL", "XXL"],
    brands: "Dickies",
    rating: 4,
    department: "T-shart"
  },
  {
    id: 2,
    image: shoes,
    category: "Men's Fashion",
    subCategory: "Shoes",
    title: "Lederhosen Shoes, Haferl Shoes, Trachten Shoes in Dark Brown w/Embroidery",
    price: 40,
    quantity: 10,
    color: ["Black", "white", "gary"],
    sizes: ['M', "l", "XL", "XXL"],
    brands: "Crocs",
    rating: 2.5,
    department: 'Shoes'
  },
  {
    id: 222,
    image: shoes,
    category: "Men's Fashion",
    subCategory: "Shoes",
    title: "Under Armour Men's Charged Assert 9 Running Shoe",
    price: 50,
    quantity: 0,
    color: ["Black", "white", "gary"],
    sizes: ['M', "l", "XL", "XXL"],
    brands: "Reef",
    rating: 3,
    department: 'Sandals'
  },
  {
    id: 22,
    image: shoes,
    category: "Men's Fashion",
    subCategory: "Shoes",
    title: "Crocs Unisex Offroad Sport Clogs",
    price: 20,
    quantity: 10,
    color: ["Black", "white", "gary"],
    sizes: ['M', "l", "XL", "XXL"],
    brands: "Reef",
    rating: 4,
    department: 'Sandals'
  },
  {
    id: 4,
    image: watch,
    category: "Men's Fashion",
    subCategory: "Watches",
    title: "Movado Bold Men's Swiss Quartz Stainless Steel and Silicone Strap Watch, Color: Black (Model: 3600854)",
    price: 80,
    quantity: 10,
    color: ["Black", "white", "gary"],
    sizes: ['M', "l", "XL", "XXL"],
    brands: "Casio",
    rating: 3,
    department: 'Wrist Watches'
  },
  {
    id: 5,
    image: watch,
    category: "Men's Fashion",
    subCategory: "Watches",
    title: "Casio Men's MDV106-1AV 200 M WR Black Dive Watch (MDV106-1A)",
    price: 5000,
    quantity: 10,
    color: ["Black", "white", "gary"],
    sizes: ['M', "l", "XL", "XXL"],
    brands: "Sumsing",
    rating: 4,
    department: 'Pocket Watches'
  },
  {
    id: 6,
    image: monitors,
    category: "Electricity",
    subCategory: "Computer",
    title: `Sceptre Curved 27" FHD 1080p 75Hz LED Monitor HDMI VGA Build-In Speakers, EDGE-LESS Metal Black 2019 (C275W-1920RN)`,
    price: 40,
    quantity: 10,
    color: ["Black", "white", "gary"],
    sizes: ['M', "l", "XL", "XXL"],
    brands: "HP",
    rating: 4,
    department: 'Pocket Watches'
  },
  {
    id: 7,
    image: img20,
    category: "Electricity",
    subCategory: "Laptop",
    title: `ASUS Vivobook Laptop L210 11.6" Ultra Thin Laptop, Intel Celeron N4020 Processor, 4GB RAM, 128GB eMMC Storage, Windows 11 Home in S Mode with One Year of Office 365 Personal, L210MA-DS04,Star Black`,
    price: 90,
    quantity: 10,
    color: ["Black", "white", "gary"],
    sizes: ['M', "l", "XL", "XXL"],
    brands: "ASUS",
    rating: 5,
    department: 'Pocket Watches'
  },
  {
    id: 8,
    image: img21,
    category: "Electricity",
    subCategory: "Monitors",
    title: `Sceptre Curved 27" FHD 1080p 75Hz LED Monitor HDMI VGA Build-In Speakers, EDGE-LESS Metal Black 2019 (C275W-1920RN)`,
    price: 60,
    quantity: 10,
    color: ["Black", "white", "gary"],
    sizes: ['M', "l", "XL", "XXL"],
    brands: "Samsung",
    rating: 5,
    department: 'Pocket Watches'
  },

  {
    id: 9,
    image: img22,
    category: "Home And Kitchen",
    subCategory: "Bath",
    title: "18-inch Coronado Designer Oval Bathroom Shower Grab Bar with Mitered Corners, Polished",
    price: 350,
    quantity: 10,
    color: ["Black", "white", "gary"],
    sizes: ['M', "l", "XL", "XXL"],
    brands: "RENPHO",
    rating: 5,
    department: 'Pocket Watches'
  },
  {
    id: 10,
    image: img23,
    category: "Home And Kitchen",
    subCategory: "Furniture",
    title: "Yogasleep Rohm Portable White Noise Sound Machine, 3 Soothing Natural Sounds with Volume Control",
    price: 20,
    quantity: 10,
    color: ["Black", "white", "gary"],
    sizes: ['M', "l", "XL", "XXL"],
    brands: "Apple",
    rating: 5,
    department: 'Pocket Watches'
  },
  {
    id: 11,
    image: img24,
    category: "Home And Kitchen",
    subCategory: "Bedding",
    title: "Yogasleep Rohm Portable White Noise Sound Machine, 3 Soothing Natural Sounds with Volume Control",
    price: 220,
    quantity: 10,
    color: ["Black", "white", "gary"],
    sizes: ['M', "l", "XL", "XXL"],
    brands: "Wood",
    rating: 5,
    department: 'Pocket Watches'
  }


]
