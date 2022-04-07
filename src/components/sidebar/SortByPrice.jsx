import { useCart } from "../../context/cart-context";

export const SortByPrice = () => {
   const { state, dispatch } = useCart();

   return (
      <>
         <h6 className="my-1">Sort by Price</h6>
         <ul className="side-nav font-medium pl-1">
            <li>
               <input
                  onChange={(e) =>
                     dispatch({
                        type: "SORT_BY_PRICE",
                        payload: e.target.value,
                     })
                  }
                  checked={state.sortByPrice === "HIGH_TO_LOW" ? true : false}
                  value="HIGH_TO_LOW"
                  id="price-1"
                  name="price"
                  type="radio"
               />
               <label htmlFor="price-1">High to low</label>
            </li>
            <li>
               <input
                  onChange={(e) =>
                     dispatch({
                        type: "SORT_BY_PRICE",
                        payload: e.target.value,
                     })
                  }
                  value="LOW_TO_HIGH"
                  checked={state.sortByPrice === "LOW_TO_HIGH" ? true : false}
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
