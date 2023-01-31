import type { Recipe } from "../dto";

const recipe: Recipe = {
  cookingTimeMins: 4,
  portions: 2,
  color: "green",
  id: "munchie",
  title: "Titov muncihe",
  image: "/img/munchie/main.jpg",
  authors: ["Tit Primožič"],
  descriptionParagraphs: [
    "Gre za navdih iz bližnjega vzhoda s priokusom reklam o grčiji ki sem jih prejemal zadnje dni na socialnih omrežjih, narejenoizpod rok ironičnega lika zahodnjaka ( npr. Amerikanca) ki isce svojekorenine v vietnamske vojni, kulturi. ",
    "Za “statement” da gre za slovenski recept pa je situacija postavkjena na rezini kmečkega temnega hleba.",
  ],
  ingredients: [
    {
      name: "Prigrizek",
      ingredients: [
        { name: "Kruh (kmečki temni hlebec)", quantity: 1, unit: "rezina" },
        { name: "Humus (Lidl / Hofer)", quantity: 0.25, unit: "pakunge" },
        { name: "Heinzova BBQ omaka", quantity: 4, unit: "štrajhe" },
        { name: "Pekoča siracha s česnom", quantity: 3, unit: "štrajhe" },
        {
          name: "Olive v slanici (Lidl / Hofer)",
          quantity: 4,
          unit: "olive",
        },
      ],
    },
  ],
  instructions: [
    {
      subtitle: "Recept",
      items: [
        {
          url: "/img/munchie/1.jpg",
          text: "Rezino kruha narežemo na dva dela.",
        },
        {
          url: "/img/munchie/2.jpg",
          text: "Na oba dela nanesemo humus. Nanesemo ga enakomerno in radodarno.",
        },
        {
          url: "/img/munchie/3.jpg",
          text: "Čez humus nanesemo omako. Nanesemo jo v enakomernih štrajhah v škrt hrvaški šahonici.",
        },
        {
          url: "/img/munchie/4.jpg",
          text: "Postrežemo na krožniku. Na vsako stran damo po 2 olivce.",
        },
      ],
    },
    {
      subtitle: "Protokol",
      items: [
        {
          text: "Najprej naredimo en pajs (velik odgriz / ustnavotlinafull). Takoj po pajsanju, s kitajskimi palčkami vzamemo eno olivo",
        },
        {
          url: "/img/munchie/5.jpg",
          text: "Naredimo še drugi pajs, kjer zavžijemo preostanek kruha in oliv.",
        },
      ],
    },
  ],
};

export default recipe;
