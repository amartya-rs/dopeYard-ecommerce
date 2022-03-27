import { v4 as uuid } from "uuid";
import * as images from "../../assets/image";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
   {
      _id: uuid(),
      categoryName: "Cap",
      imgUrl: images.category_cap,
   },
   {
      _id: uuid(),
      categoryName: "T Shirt",
      imgUrl: images.category_tshirt,
   },
   {
      _id: uuid(),
      categoryName: "Hoodie",
      imgUrl: images.category_hoodie,
   },
   {
      _id: uuid(),
      categoryName: "Long Sleeve",
      imgUrl: images.category_lSleeve,
   },
];
