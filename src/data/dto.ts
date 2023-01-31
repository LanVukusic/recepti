import type colors from "tailwindcss/colors";

export interface Ingredient {
  name: string;
  quantity: string | number;
  unit: string;
}

export type TextOrImage = {
  url?: string;
  text?: string;
};

export interface Content {
  subtitle: string;
  items: TextOrImage[];
}

export interface Recipe {
  comments?: Content[];
  portions: number;
  cookingTimeMins: number;
  color: keyof typeof colors;
  id: string;
  title: string;
  authors: string[];
  image?: string;
  descriptionParagraphs: string[];
  ingredients: {
    name: string;
    ingredients: Ingredient[];
  }[];
  instructions: Content[];
}
