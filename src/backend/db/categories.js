import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
   {
      _id: uuid(),
      categoryName: "cap",
   },
   {
      _id: uuid(),
      categoryName: "t-shirt",
   },
   {
      _id: uuid(),
      categoryName: "hoodie",
   },
   {
      _id: uuid(),
      categoryName: "l-sleeve",
   },
];
