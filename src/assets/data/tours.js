import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    distance: 300,
    address:"UK Address",
    price: 99,
    maxGroupSize: 10,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci quidem possimus eos impedit amet voluptatem quisquam iste sed voluptatibus quae ad eum numquam, aspernatur eaque! Esse ad repellat quae!",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Balia, Qatar",
    city: "Qatar",
    distance: 400,
    address:"Qatar Address",
    price: 99,
    maxGroupSize: 8,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci quidem possimus eos impedit amet voluptatem quisquam iste sed voluptatibus quae ad eum numquam, aspernatur eaque! Esse ad repellat quae!",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Sweden",
    city: "Sweden",
    distance: 500,
    address:"Sweden Address",
    price: 99,
    maxGroupSize: 8,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci quidem possimus eos impedit amet voluptatem quisquam iste sed voluptatibus quae ad eum numquam, aspernatur eaque! Esse ad repellat quae!",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Brazil",
    city: "Brazil",
    distance: 500,
    address:"BRA-Address",
    price: 99,
    maxGroupSize: 8,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci quidem possimus eos impedit amet voluptatem quisquam iste sed voluptatibus quae ad eum numquam, aspernatur eaque! Esse ad repellat quae!",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, China",
    city: "China",
    distance: 500,
    address:"CHI Address",
    price: 99,
    maxGroupSize: 8,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci quidem possimus eos impedit amet voluptatem quisquam iste sed voluptatibus quae ad eum numquam, aspernatur eaque! Esse ad repellat quae!",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    address:"JAP-Address",
    price: 99,
    maxGroupSize: 8,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci quidem possimus eos impedit amet voluptatem quisquam iste sed voluptatibus quae ad eum numquam, aspernatur eaque! Esse ad repellat quae!",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    address:"FRA-Address",
    price: 99,
    maxGroupSize: 8,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci quidem possimus eos impedit amet voluptatem quisquam iste sed voluptatibus quae ad eum numquam, aspernatur eaque! Esse ad repellat quae!",
    reviews: [],
    avgRating: 0,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Arob",
    city: "Arob",
    distance: 500,
    address:"Arob Address",
    price: 99,
    maxGroupSize: 8,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto adipisci quidem possimus eos impedit amet voluptatem quisquam iste sed voluptatibus quae ad eum numquam, aspernatur eaque! Esse ad repellat quae!",
    reviews: [
      {
        name: "jhon doe",
        rating: 4,
      },
      {
        name: "Ema Neo",
        rating: 5,
      },
      {
        name: "Ema Neo",
        rating: 5,
      },
    ],
    avgRating: 3.4,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
