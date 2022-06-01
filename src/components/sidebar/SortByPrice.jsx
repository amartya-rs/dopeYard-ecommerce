import { useDispatch, useSelector } from "react-redux";
import { sortByPrice } from "../../features/product/productSlice";

export const SortByPrice = () => {
   const dispatch = useDispatch();
   const { sortByPrice: sortedByPrice } = useSelector((state) => state.product);

   return (
      <>
         <h6 className="my-1">Sort by Price</h6>
         <ul className="side-nav font-medium pl-1">
            <li>
               <input
                  onChange={(e) => dispatch(sortByPrice(e.target.value))}
                  checked={sortedByPrice === "HIGH_TO_LOW" ? true : false}
                  value="HIGH_TO_LOW"
                  id="price-1"
                  name="price"
                  type="radio"
               />
               <label htmlFor="price-1">High to low</label>
            </li>
            <li>
               <input
                  onChange={(e) => dispatch(sortByPrice(e.target.value))}
                  value="LOW_TO_HIGH"
                  checked={sortedByPrice === "LOW_TO_HIGH" ? true : false}
                  id="price-2"
                  name="price"
                  type="radio"
               />
               <label htmlFor="price-2">Low to High</label>
            </li>
         </ul>
      </>
   );
};
