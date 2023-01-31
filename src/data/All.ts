import type { Recipe } from "./dto";

import chili from "./recipes/Chili";
import kokice from "./recipes/cokoladneKokice";
import kuhancek from "./recipes/kuhancek";
import munchie from "./recipes/munchie";

export const recipes: Recipe[] = [kokice, kuhancek, munchie];
