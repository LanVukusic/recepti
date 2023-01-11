import type { Recipe } from "../dto";

const recipe: Recipe = {
  cookingTimeMins: 30,
  portions: 6,
  color: "orange",
  id: "popcorn",
  title: "Čokoladne kokice",
  image: "/img/kokice/kokice9.webp",
  authors: ["Tereza", "Nik", "Lan"],
  descriptionParagraphs: [
    "Čokoladne kokice so stvar ki zgleda res super, pa ni tok. Ta recept je živi dokaz, kako dve dobri stvari skupaj ne naredita še boljše stvari.",
    "S pomočjo Nikove ekspertize glede karamele in večih terezinih poskusih pri delanju kokic je jed nekako uspela, za to pa si seveda zasluži svoj dokumentiran recept.",
  ],
  ingredients: [
    {
      name: "Karamela",
      ingredients: [
        { name: "beli sladkor", quantity: 150, unit: "g" },
        { name: "maslo", quantity: 50, unit: "g" },
        { name: "smetana", quantity: 200, unit: "ml" },
        { name: "sol", quantity: "nekaj", unit: "ščepcev" },
      ],
    },
    {
      name: "Omakica",
      ingredients: [
        { name: "čokolada", quantity: 50, unit: "g" },
        { name: "peanut butter", quantity: 3, unit: "žlice" },
      ],
    },

    {
      name: "Kokice",
      ingredients: [{ name: "koruza za kokice", quantity: 100, unit: "g" }],
    },
  ],
  instructions: [
    {
      subtitle: "Kokice",
      items: [
        {
          text: "Najprej pripravimo kokice. Pripravimo jih posebaj, saj potrebujejo veliko višjo temperature kot karamela.",
          url: "/img/kokice/kokice6.webp",
        },
        {
          text: "V posodi segrejemo olje in dodamo koruzo. Posodo tresemo in počakamo da večina kokic popoka.",
        },
      ],
    },
    {
      subtitle: "Omakica",
      items: [
        {
          text: "V posodi na nizkem ognju segrejemo sladkor in počakamo da postane v celoti tekoč in zlato-rjav. Dodamo maslo in smetano ter dobro zmešamo.",
        },
        {
          text: "Nalomimo čokolado in jo dodamo v posodo. Dodamo še sol in dobro premešamo.",
        },
        {
          text: "Primešamo peanut butter ter dodajamo smetano dokler ne dobimo želene konsistence.",

          url: "/img/kokice/kokice2.webp",
        },
      ],
    },
    {
      subtitle: "Vse skupaj",
      items: [
        {
          text: "Kokice počasi dodajamo v omako in sproti mešamo. Omako poskušmo enakomerno razporediti po kokicah.",
        },
        {
          text: "Potrežemo toplo ali hladno. Jed se odlično poda s raznimi substancami",
          url: "/img/kokice/kokice10.webp",
        },
      ],
    },
  ],
};

export default recipe;
