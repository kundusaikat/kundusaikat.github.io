//I Would Highly Recommend You To Customize The Theme According To Your Taste.
export const globalStyles = {
  "--grad": "linear-gradient(315deg,#333333,#999999)",
  //"--grad": "linear-gradient(315deg,#48a9fe,#00cdac)", // Use gradients only
  // "--grad": "linear-gradient(315deg, #48a9fe 0%, #734ae8 74%)", // Use gradients only
  // "--grad": "linear-gradient(315deg, #06bcfb 0%, #4884ee 74%)",
  "--txtcolor": "#111111",
  "--p_color": "#111111",
  "--s_color": "#fff",
};

// Navigation Bar Name
export const navbar_name = "<Saikat>";

// Main Page
export const main = {
  name: "Saikat Kundu",
  doamin: "A MERN Stack Web Developer",
  resume:
    "https://drive.google.com/file/d/1QvflGH5R_BklVGjtSA_07nq1nQGidRV4/view?usp=sharing",
};

// AboutMe
export const aboutme = {
  imgLink:
    "/DSC_1600.jpg",
  p1: "Hey, My name is Saikat Kundu. I have completed my Graduation in Bachelor in Engineering(Electronics and Communication Engineering) from Burdwan, West Bengal.",
  p2: " I'm a passionate coder and an enthusiastic Web Developer capable of applying programming skills to solve complex problems. Seeking a challenging role in the field of web development that will offer an opportunity for further development of my abilities, skills and knowledge in an organization.",
  p3: "Apart from coding I also like Touring and Blog Writing. I also enjoy riding bikes at weekend.",
};

// Skills
export const whatido = {
  title: "Full Stack Web Development",

  details: [
    "Building responsive website using HTML,CSS,JS,React",
    // "Creating backend application in Node, ExpressJS",
    "Building Simple RESTful CRUD APIs",
    "Knowledge of MongoDB Database",
    "Knowledge of various UI libraries",
  ],
  logos: [
    {
      name: "HTML5",
      iconifyClassName: "vscode-icons:file-type-html", // PS : Use iconify class name
      id: "1",
    },
    {
      name: "CSS",
      iconifyClassName: "vscode-icons:file-type-css",
      id: "2",
    },
    {
      name: "JavaScript",
      iconifyClassName: "logos:javascript",
      id: "3",
    },
    {
      name: "ReactJS",
      iconifyClassName: "vscode-icons:file-type-reactjs",
      id: "4",
    },
    {
      name: "Redux",
      iconifyClassName: "logos:redux",
      id: "5",
    },
    {
      name: "NodeJS",
      iconifyClassName: "logos:nodejs",
      id: "6",
    },
    {
      name: "ExpressJS",
      iconifyClassName: "logos:express",
      id: "7",
    },
    {
      name: "MongoDB",
      iconifyClassName: "logos:mongodb",
      id: "8",
    },
    {
      name: "Postman",
      iconifyClassName: "logos:postman-icon",
      id: "9",
    },
    {
      name: "npm",
      iconifyClassName: "logos:npm-icon",
      id: "10",
    },
    {
      name: "GIT",
      iconifyClassName: "logos:git",
      id: "11",
    },
    // {
    //   name: "Tailwind",
    //   iconifyClassName: "logos:tailwindcss-icon",
    //   id: "12",
    // },
    // {
    //   name: "Material-UI",
    //   iconifyClassName: "logos:material-ui",
    //   id: "13",
    // },
    // {
    //   name: "Ant Design",
    //   iconifyClassName: "logos:ant-design",
    //   id: "14",
    // },
    // {
    //   name: "Netlify",
    //   iconifyClassName: "vscode-icons:file-type-netlify",
    //   id: "15",
    // },
    {
      name: "Vercel",
      iconifyClassName: "logos:vercel-icon",
      id: "16",
    },
  ],
};

// Project Details
export const details = [
  //   {
  //     id: 1,
  //     title: "Frontend Masters Clone",
  //     desc: `Frontend Masters is an E-learning platform where users can advance their skills with in-depth, modern front-end engineering courses.`,
  //     feature: `Sign-in/Sign-up,
  // Explore top courses and teachers,
  // Dynamic progress monitor page,
  // Subscription page.`,
  //     tech: `Tech Stack: EJS | CSS | JavaScript | nodeJS | express | MongoDB`,
  //     img: "https://github.com/Shivam2101s/images/blob/main/frontend.jpg?raw=true",
  //     github: "https://github.com/Shivam2101s/Frontend_Masters",
  //     link: "https://frontend-masters.herokuapp.com/"
  //   },
  //   {
  //     id: 2,
  //     title: "MyFitnessPal Clone",
  //     desc: `MyFitnessPal is a smartphone app and website that tracks users diet and exercise. Here users can explore various food items and their respective nutrition contents , exercise, and various fitness tracking apps.`,
  //     feature: `Sign-in/Sign-up,
  // search bar for food items to see their nutrition contents, explore various fitness tracking apps,
  // Subscription page.`,
  //     tech: `Tech Stack: React | CSS | JavaScript | nodeJS | express | MongoDB`,
  //     img: "https://i.ibb.co/c1THySK/hero-image.jpg",
  //     link: "https://github.com/AbhijitAher/MyFitnessPal_U5",
  //     github: "https://github.com/AbhijitAher/MyFitnessPal_U5",
  //   },

  //   {
  //     id: 3,
  //     title: "Reliance Retail Clone",
  //     desc: `Reliance Retail is an informative website where users can get information about various brands of Reliance Industries.`,
  //     feature: `Features:
  // Sign-in/Sign-up, User Authentication,
  // Integreted Hamleys shopping page,
  // Sorting, filtering and debouncing based search bar,
  // Carousel and slideshows,
  // Add to cart & Check out.`,
  //     tech: `Tech Stack: HTML | CSS | JavaScript `,
  //     img: "https://github.com/Shivam2101s/images/blob/main/reliance(1)%20-%20Copy.jpg?raw=true",
  //     github: "https://github.com/Shivam2101s/Reliance-retails",
  //     link: "https://relianceretailclone.netlify.app/",
  //   },
  {
    id: 4,
    title: "Shopclues Clone",
    desc: `Shopclues was India's first and largest fully online
    managed marketplace in 2012.`,
    feature: `Sign-in/Register,
    Filtering and sorting on product catalog,
Hover effect on products,
Payment page with different payment option,
Checkout page with Apply promo code,
    filtering.`,
    tech: `Tech Stack: HTML | CSS | JavaScript.`,
    img: "/shopclues.png",
    github: "https://github.com/bishal-Samanta/Project-Shopclues",
    link: "https://shopclues-clone.netlify.app/",
  },
  {
    id: 5,
    title: "Reliance Clone",
    desc: `A chain of electronics stores with a retail website.`,
    feature: `Product catalog with Search Bar,
    Filtering and sorting on product catalog,
    Responsive website,
    Add to wishlist,
    Add to Cart and Edit cart items`,
    tech: `Tech Stack: HTML | CSS | JavaScript | JSON .`,
    img: "/reliance_digital.png",
    link: "https://reliance-digital.vercel.app/",
    github: "https://github.com/sreerag-rajan/Reliance-Digital-Clone-U4-",
  },
    {
      id: 6,
      title: "IMDb Clone",
      desc: `IMDb (an abbreviation of Internet Movie Database)[2] is an online database of information related to films, television series, home videos, video games, and streaming content online.`,
      feature: `Search films, television series, home videos, video games, and streaming content online.`,
      tech: `Tech Stack: HTML | CSS | JavaScript | React | BootStrap`,
      img: "/imdb.png",
      link: "https://imdb-7jqw93447-kundusaikat.vercel.app/",
      github: "https://github.com/kundusaikat/imdb",
    },
];

// Social Media Links
export const links = [
  "https://www.linkedin.com/in/kundusaikat/",
  "https://api.whatsapp.com/send/?phone=919832758021&text&app_absent=0",
  "mailto:kundusaikat32@gmail.com",
  "",
  "https://github.com/kundusaikat",
];
