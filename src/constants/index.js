import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: bigShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: bigShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: bigShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Norda Blue",
        price: "$80.20",
    },
    {
        imgURL: shoe5,
        name: "Norda Black",
        price: "$60.20",
    },
    {
        imgURL: shoe6,
        name: "Norda Multi",
        price: "$50.20",
    },
    {
        imgURL: shoe7,
        name: "Norda White",
        price: "$40.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Imesha Wijesekara',
        rating: 4.5,
        feedback: "Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Idush Dulwan',
        rating: 4.5,
        feedback: "Super products"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Adidas", link: "/" },
            { name: "Nike", link: "/" },
            { name: "Reebok", link: "/" },
            { name: "Puma", link: "/" },
            { name: "Under Armour", link: "/" },
            { name: "Converse", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@sneakers.com", link: "mailto:customer@sneakers.com" },
            { name: "+94768882554", link: "tel:+94315586946" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];