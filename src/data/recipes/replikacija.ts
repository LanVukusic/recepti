import type { Recipe } from "../dto";

const recipe: Recipe = {
  cookingTimeMins: 15,
  portions: 2,
  color: "gray",
  id: "replikacija",
  title: "Uovo kon pomodoro",
  image: "/img/replikacija/tit20.jpg",
  authors: ["Tit Primožič"],
  descriptionParagraphs: [
    "V stilu bližnjega vzhoda se je  nadaljevala nasa vecerna potreba po hrani. Kaj je v hladilniku tik pred rokom in kaj mi ostaja so misli ki so omejevali končni cilj s ta še zdaleč ni razočaral.",
    "Gre za jajca narejena v paradižnikovi omaki z taistim pridihom kmečkosti - ocvirki.",
  ],
  ingredients: [
    {
      name: "Prigrizek",
      ingredients: [
        { name: "Kruh (kmečki temni hlebec)", quantity: 1, unit: "rezina" },
        { name: "Paradižnikova passata", quantity: 1, unit: "tetrapak" },
        { name: "Česen", quantity: 1, unit: "strok" },
        { name: "Čebula", quantity: 1, unit: "" },
        { name: "Jajca", quantity: 2, unit: "" },
        { name: "Sir (s chillijem)", quantity: 2, unit: "rezini" },
        { name: "Pikantni mix", quantity: 1, unit: "žlica" },
        { name: "Zaseka", quantity: 1, unit: "žlica" },
        { name: "Peteršilj", quantity: 2, unit: "ščepca" },
      ],
    },
  ],
  instructions: [
    {
      subtitle: "Recept",
      items: [
        {
          url: "/img/replikacija/tit15.jpg",
          text: "Pripravimo sestavine",
        },
        {
          url: "/img/replikacija/tit21.jpg",
          text: "Na olivnem olju preprazis cebulo (začini s soljo kot clovek) in dodamo ocvirke. Ko se zadeva homogenizira dodamo drobno nasekljan česen. ",
        },
        {
          url: "/img/replikacija/tit16.jpg",
          text: "Ko cebulica porjaveva in zadiši po sladkem dodamo paradižnikovo omako  in pikantni mix. ",
        },
        {
          url: "/img/replikacija/tit17.jpg",
          text: "Vse skupaj pustimo da se zgosti. Ko lahko naredimo lulnje za jajca brez da se zapirajo, jih le te počimo v rupe. ",
        },
        {
          url: "/img/replikacija/tit14.jpg",
          text: "Ponev pokrijemo z pokrivalom in pocakako da se beljak na rahlo zakrni, takrat nanj položimo par šlic omake. Vse skupaj imamo pokrito na ognju dokler ne zacne rumenjak zakrnevat. ",
        },
        {
          url: "/img/replikacija/tit20.jpg",
          text: "Takrat posujemo z drobnajkom/peteršilom/majaronom in jajco z omako postrežemo z rezino kmečkega temnega kruha in sirom kmetije Kenda s čilijem.",
        },
      ],
    },
  ],
};

export default recipe;
