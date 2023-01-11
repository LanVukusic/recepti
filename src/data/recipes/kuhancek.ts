import type { Recipe } from "../dto";

const recipe: Recipe = {
  cookingTimeMins: 10,
  portions: 10,
  color: "blue",
  id: "kuhancek",
  title: "Najboljši kuhanček",
  image:
    "https://leaneen.com/wp-content/uploads/2021/12/Jabolcni-kuhancek-Leaneen-recept-3-of-4.jpg",
  authors: ["Manja(k)"],
  descriptionParagraphs: ["Nevem zdle.", ""],
  ingredients: [
    {
      name: "Kuhno vino",
      ingredients: [
        { name: "beli sladkor", quantity: 4, unit: "žlice" },
        { name: "pomaranča (bio??)", quantity: 1, unit: "" },
        { name: "med", quantity: 1, unit: "žlica" },
        { name: "cimet", quantity: 1, unit: "korjica" },
        { name: "klinčki", quantity: "", unit: "nekaj" },
        { name: "pomarančni liker", quantity: 1, unit: "shot" },
        { name: "vino (najcenejše, belo)", quantity: 2, unit: "l" },
        { name: "voda", quantity: 3, unit: "dl" },
      ],
    },
  ],
  instructions: [
    {
      subtitle: "Kuhano vino",
      items: [
        {
          text: "Najprej damo v lonec vodo, sladkor, cimet, klinčke in med.",
        },
        {
          text: "Mešamo dokler se sladkor ne raztopi. Dodamo pomaranče, narezane na kolobarje.",
        },
        {
          text: "Ulijemo še vino in pomarančni liker. Mešamo in segrevamo na manjšem ognju. Poskrbimo da ne zavre.",
        },
        {
          text: "Toplo postreženo",
        },
      ],
    },
  ],
};

export default recipe;
