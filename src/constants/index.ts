import fanta1 from "../assets/fanta1.png";
import fanta2 from "../assets/fanta2.png";
import fanta3 from "../assets/fanta3.png";
import blogImg1 from "../assets/Blogs/1.jpg";
import blogImg2 from "../assets/Blogs/2.jpg";
import blogImg3 from "../assets/Blogs/3.jpg";
import blogImg4 from "../assets/Blogs/4.jpg";
import type { Blog, Product } from "../types";

export const navbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "Categories",
    link: "#categories",
  },
  {
    id: 3,
    title: "Blogs",
    link: "#blogs",
  },
  {
    id: 4,
    title: "About",
    link: "#about",
  },
  {
    id: 5,
    title: "Contact",
    link: "#contact",
  },
];

export const heroData = [
  {
    id: 1,
    image: fanta1,
    title: "Orange fanta",
    subtitle:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore officiis reiciendis incidunt in aliquid cupiditate vitae numquam voluptas remarchitecto repellendus enim, porro beatae dolore iusto.",
    price: "$40",
    model: "Orange",
    bgColor: "#cf4f00",
  },
  {
    id: 2,
    image: fanta2,
    title: "Cola Zero",
    subtitle:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore officiis reiciendis incidunt in aliquid cupiditate vitae numquam voluptas remarchitecto repellendus enim, porro beatae dolore iusto.",
    price: "$80",
    model: "Zero",
    bgColor: "#727272",
  },
  {
    id: 3,
    image: fanta3,
    title: "Coca Cola",
    subtitle:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore officiis reiciendis incidunt in aliquid cupiditate vitae numquam voluptas remarchitecto repellendus enim, porro beatae dolore iusto.",
    price: "$100",
    model: "Coca",
    bgColor: "#ac1a00",
  },
];

// Products
export const productsData: Product[] = [
  {
    id: 1,
    image: fanta1,
    title: "Orange Fanta",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, esse maiores sunt itaque facilis vitae suscipit vero eum fugiat dicta.",
    delay: 0.5,
  },
  {
    id: 2,
    image: fanta2,
    title: "Lemon Fanta",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, esse maiores sunt itaque facilis vitae suscipit vero eum fugiat dicta.",
    delay: 0.8,
  },
  {
    id: 3,
    image: fanta3,
    title: "Cola Zero",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, esse maiores sunt itaque facilis vitae suscipit vero eum fugiat dicta.",
    delay: 1,
  },
];

// blogs
export const blogsData: Blog[] = [
  {
    id: 1,
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut unde alias facilis culpa quae pariatur aliquam eligendi debitis itaque sint consequuntur saepe aliquid quibusdam recusandae voluptas, error modi nesciunt",
    link: "#",
    image: blogImg1,
  },
  {
    id: 2,
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut unde alias facilis culpa quae pariatur aliquam eligendi debitis itaque sint consequuntur saepe aliquid quibusdam recusandae voluptas, error modi nesciunt",
    link: "#",
    image: blogImg2,
  },
  {
    id: 3,
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut unde alias facilis culpa quae pariatur aliquam eligendi debitis itaque sint consequuntur saepe aliquid quibusdam recusandae voluptas, error modi nesciunt",
    link: "#",
    image: blogImg3,
  },
  {
    id: 4,
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut unde alias facilis culpa quae pariatur aliquam eligendi debitis itaque sint consequuntur saepe aliquid quibusdam recusandae voluptas, error modi nesciunt",
    link: "#",
    image: blogImg4,
  },
];
