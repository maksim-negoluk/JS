const pancakeImage = require("../img/pancake.jpg")
const burgerImage = require("../img/burgers.jpg")
const milkshakeImage = require("../img/milkshake.jpg")
const lunchImage = require("../img/lunch.jpeg")

interface MenuItem {
    title: string;
    description: string;
    category: string;
    price: number;
    image: string;
}

const menuItems: MenuItem[] = [
    {
        title: "buttermilk pancakes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed\n" +
            "fermentum accumsan tortor, eu tempus massa.",
        category: "breakfast",
        price: 15.99,
        image: pancakeImage,
    },
    {
        title: "Dinner double",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed\n" +
            "fermentum accumsan tortor, eu tempus massa. consectetur adipiscing",
        category: "dinner",
        price: 13.99,
        image: burgerImage,
    },
    {
        title: "Godzilla Milkshake",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category: "Shakes",
        price: 6.99,
        image: milkshakeImage,
    },
    {
        title: "Country Delight",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed\n" +
            "fermentum accumsan tortor, eu tempus massa." +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed\n" +
            "fermentum accumsan tortor, eu tempus massa.",
        category: "Lunch",
        price: 20.99,
        image: lunchImage,
    },
    {
        title: "Dinner double",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed\n" +
            "fermentum accumsan tortor, eu tempus massa. consectetur adipiscing",
        category: "dinner",
        price: 13.99,
        image: burgerImage,
    },
];

export {menuItems}