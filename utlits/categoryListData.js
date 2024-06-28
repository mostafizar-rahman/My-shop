import img from "../assets/images/1.png";
import watch from "../assets/images/watch.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
import dextop from "../assets/images/dextop.png";
import bath from "../assets/images/bath.png";
import img10 from "../assets/images/10.png";
import shoes from "../assets/images/shoes.png";
import monitors from "../assets/images/monitors.png";
import img20 from "../assets/images/20.png";
import img21 from "../assets/images/21.png";
import img22 from "../assets/images/22.png";
import img23 from "../assets/images/23.png";
import printers from "../assets/images/printers.png";


export const categoryListData = [
  {
    id: 1,
    label: "Men's Fashion",
    subCategory: [
      {
        id: 1,
        name: "Clothing",
        path:"man-clothing",
        image: img,
      },
      {
        id: 2,
        name: "Shoes",
        path:"man-shoes",
        image: shoes,
      },
    ],
  },
  {
    id: 2,
    label: "Electricity",
    subCategory: [
      {
        id: 1,
        name: "Computer",
        path:"electricity-computer",
        image: dextop,
      },
      {
        id: 2,
        name: "Laptop",
        path:"electricity-laptop",
        image: img5,
      },
      {
        id: 3,
        name: "Monitors",
        path:"electricity-monitors",
        image: monitors,
      },
      {
        id: 4,
        name: "Tablet",
        path:"electricity-tablet",
        image: img10,
      },
      {
        id: 5,
        name: "Printers",
        path:"electricity-printers",
        image: printers,
      },
      {
        id: 6,
        name: "Watches",
        path:"electricity-watches",
        image: watch,
      },
      {
        id: 7,
        name: "Accessories",
        path:"electricity-accessories",
        image: img4,
      },
    ],
  },
  {
    id: 3,
    label: "Home And Kitchen",
    subCategory: [
      {
        id: 1,
        name: "Bath",
        path:"home-bath",
        image: bath,
      },
      {
        id: 2,
        name: "Furniture",
        path:"home-furniture",
        image: img21,
      },
      {
        id: 3,
        name: "Bedding",
        path:"home-bedding",
        image: img22,
      },
      {
        id: 4,
        name: "Home Decor",
        path:"home-home-decor",
        image: img23,
      },
    ],
  },
  {
    id:4,
    label: "Baby",
    subCategory: [
      {
        id: 1,
        name: "Baby Care",
        path:"baby-care",
        image: img20,
      },
      {
        id: 2,
        name: "Gifts",
        path:"baby-gifts",
        image: img20,
      },
      {
        id: 3,
        name: "Feeding",
        path:"baby-feeding",
        image: img20,
      },
    ]
  },
  {
    id:5,
    label: "Beauty and personal care",
    subCategory: [
      {
        id: 1,
        name: "Makeup",
        path:"beauty-makeup",
        image: img20,
      },
      {
        id: 2,
        name: "Skin Care",
        path:"beauty-skin-care",
        image: img20,
      },
      {
        id: 3,
        name: "Hair Care",
        path:"beauty-hair-care",
        image: img20,
      },
    ]
  },
  {
    id:6,
    label: "health",
    subCategory: [
      {
        id: 1,
        name: "Oral Care",
        path:"health-oral-care",
        image: img20,
      },
      {
        id: 2,
        name: "Personal Care",
        path:"health-personal-care",
        image: img20,
      },
      {
        id: 3,
        name: "Sports Nuraition",
        path:"health-sports-nuraition",
        image: img20,
      },
    ]
  },
  {
    id:7,
    label: "Toyes and Games",
    subCategory: [
      {
        id: 1,
        name: "Arts & Crafts",
        path:"toyes-arts-crafts",
        image: img20,
      },
      {
        id: 2,
        name: "Toddler Toys",
        path:"toyes-toddler",
        image: img20,
      },
      {
        id: 3,
        name: "Building Toys",
        path:"toyes-building",
        image: img20,
      },
    ]
  },
  {
    id:8,
    label: "Industaial and Scientific",
    subCategory: [
      {
        id: 1,
        name: "Abrasive & Finishing Products",
        path:"industaial-abrasive-finishing",
        image: img20,
      },
      {
        id: 2,
        name: "Additive Manufacturing Products",
        path:"industaial-additive-manufacturing",
        image: img20,
      },
      {
        id: 3,
        name: "Cutting Tools",
        path:"industaial-cutting-tools",
        image: img20,
      },
      {
        id: 4,
        name: "Industrial Hardware",
        path:"industaial-industrialh-ardware",
        image: img20,
      },
    ]
  },
];
