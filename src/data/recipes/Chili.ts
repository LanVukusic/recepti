import type { Recipe } from "../dto";

const recipe: Recipe = {
  cookingTimeMins: 90,
  portions: 12,
  color: "orange",
  id: "chili",
  title: "Chili con carne brez chilija",
  image:
    "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Chili-con-Carne_EXPS_FT20_2556_F_0429_1_home.jpg",
  authors: ["Lan in ne ti lol"],
  descriptionParagraphs: [
    "Hetty says: This simple chow mein dish is most commonly served at dim sum restaurants, where the noodles are fried on the spot in a travelling hot trolley. At home, this is a breakfast staple made from scant pantry ingredients",
    "Hetty says: This simple chow mein dish is most commonly served at dim sum restaurants, where the noodles are fried on the spot.",
  ],
  ingredients: [
    {
      name: "Chili",
      ingredients: [
        { name: "Mleto meso", quantity: "450", unit: "g" },
        { name: "Čebula", quantity: "100", unit: "g" },
        { name: "Poper", quantity: "5", unit: "ščepcev" },
        { name: "Čili", quantity: "0", unit: "g" },
      ],
    },
    {
      name: "Kruhci zraven",
      ingredients: [
        { name: "Poper", quantity: "5", unit: "ščepcev" },
        { name: "Čili", quantity: "0", unit: "g" },
      ],
    },
  ],
  instructions: [
    {
      subtitle: "Priprava Zelenjave",
      items: [
        {
          text: "Hetty says: This simple chow mein dish is most commonly served at dim sum restaurants, where the noodles are fried on the spot in a travelling hot trolley. At home, this is a breakfast staple made from scant pantry ingredients",
        },
        {
          text: "Hetty says: This simple chow mein dish is most commonly served at dim sum restaurants, where the noodles are fried on the spot in a travelling hot trolley. At home, this is a breakfast staple made from scant pantry ingredients",
          url: "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Chili-con-Carne_EXPS_FT20_2556_F_0429_1_home.jpg",
        },
      ],
    },
    {
      subtitle: "Kuhanje mesa",
      items: [
        {
          text: "Hetty says: This simple chow mein dish is most commonly served at dim sum restaurants, where the noodles are fried on the spot in a travelling hot trolley. At home, this is a breakfast staple made from scant pantry ingredients",
        },
        {
          text: "Hetty says: This simple chow mein dish is most commonly served at dim sum restaurants, where the noodles are fried on the spot in a travelling hot trolley. At home, this is a breakfast staple made from scant pantry ingredients",
        },
        {
          text: "Hetty says: This simple chow mein dish is most commonly served at dim sum restaurants, where the noodles are fried on the spot in a travelling hot trolley. At home, this is a breakfast staple made from scant pantry ingredients",
          url: "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Chili-con-Carne_EXPS_FT20_2556_F_0429_1_home.jpg",
        },
      ],
    },
  ],
};

export default recipe;
