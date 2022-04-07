import { useCart } from "../../context/cart-context";

export const FilterByRating = () => {
   const { state, dispatch } = useCart();

   return (
      <>
         <h6 className="my-1">Rating</h6>
         <ul className="side-nav font-medium pl-1">
            <li>
               <input
                  onChange={(e) =>
                     dispatch({
                        type: "FILTER_BY_RATING",
                        payload: e.target.value,
                     })
                  }
                  checked={state.filterByRating === "4.5" ? true : false}
                  value="4.5"
                  id="rating-4"
                  name="rating"
                  type="radio"
               />
               <label htmlFor="rating-4">4.5 stars and above</label>
            </li>
            <li>
               <input
                  onChange={(e) =>
                     dispatch({
                        type: "FILTER_BY_RATING",
                        payload: e.target.value,
                     })
                  }
                  checked={state.filterByRating === "4" ? true : false}
                  value="4"
                  id="rating-3"
                  name="rating"
                  type="radio"
               />
               <label htmlFor="rating-3">4 stars and above</label>
            </li>
            <li>
               <input
                  onChange={(e) =>
                     dispatch({
                        type: "FILTER_BY_RATING",
                        payload: e.target.value,
                     })
                  }
                  checked={state.filterByRating === "3" ? true : false}
                  value="3"
                  id="rating-2"
                  name="rating"
                  type="radio"
               />
               <label htmlFor="rating-2">3 stars and above</label>
            </li>
            <li>
               <input
                  onChange={(e) =>
                     dispatch({
                        type: "FILTER_BY_RATING",
                        payload: e.target.value,
                     })
                  }
                  checked={state.filterByRating === "2" ? true : false}
                  value="2"
                  id="rating-1"
                  name="rating"
                  type="radio"
               />
               <label htmlFor="rating-1">2 star and above</label>
            </li>
         </ul>
      </>
   );
};
