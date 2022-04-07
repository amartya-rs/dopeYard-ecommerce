import { useCart } from "../../context/cart-context";

export const FilterByCategory = () => {
   const { state, dispatch } = useCart();

   return (
      <div>
         <h6 className="my-1">Category</h6>
         <ul className="side-nav font-medium pl-1">
            <li>
               <input
                  onChange={(e) =>
                     dispatch({
                        type: "FILTER_BY_CATEGORY",
                        payload: e.target.value,
                     })
                  }
                  checked={state.filterByCategory.tshirt}
                  value="tshirt"
                  id="category-1"
                  type="checkbox"
               />
               <label htmlFor="category-1">T-Shirt</label>
            </li>
            <li>
               <input
                  onChange={(e) =>
                     dispatch({
                        type: "FILTER_BY_CATEGORY",
                        payload: e.target.value,
                     })
                  }
                  checked={state.filterByCategory.hoodie}
                  value="hoodie"
                  id="category-2"
                  type="checkbox"
               />
               <label htmlFor="category-2">Hoodie</label>
            </li>
            <li>
               <input
                  onChange={(e) =>
                     dispatch({
                        type: "FILTER_BY_CATEGORY",
                        payload: e.target.value,
                     })
                  }
                  checked={state.filterByCategory.cap}
                  value="cap"
                  id="category-3"
                  type="checkbox"
               />
               <label htmlFor="category-3">Cap</label>
            </li>
            <li>
               <input
                  onChange={(e) =>
                     dispatch({
                        type: "FILTER_BY_CATEGORY",
                        payload: e.target.value,
                     })
                  }
                  checked={state.filterByCategory.longsleeve}
                  value="longsleeve"
                  id="category-4"
                  type="checkbox"
               />
               <label htmlFor="category-4">Longsleeve</label>
            </li>
         </ul>
      </div>
   );
};
