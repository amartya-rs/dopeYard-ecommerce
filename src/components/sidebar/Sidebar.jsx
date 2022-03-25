import { useCart } from "../../context/cart-context";
import "./sidebar.css";

const Sidebar = () => {
   const { state, dispatch } = useCart();

   return (
      <aside className="px-4 py-1 my-2">
         <div className="aside-heading">
            <h5>Filters</h5>
            <button
               onClick={() => dispatch({ type: "CLEAR_FILTERS" })}
               className="button-link"
            >
               Clear
            </button>
         </div>
         <hr />
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
         <hr />
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
         <hr />
         <h6 className="my-1">Price</h6>
         <ul className="side-nav font-medium pl-1">
            <li>
               <input
                  onChange={(e) =>
                     dispatch({
                        type: "SORT_BY_PRICE",
                        payload: e.target.value,
                     })
                  }
                  checked={state.sortBy === "HIGH_TO_LOW" ? true : false}
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
                  checked={state.sortBy === "LOW_TO_HIGH" ? true : false}
                  id="price-2"
                  name="price"
                  type="radio"
               />
               <label htmlFor="price-2">Low to High</label>
            </li>
         </ul>
         <hr />
         <h6 className="my-1">Availability</h6>
         <ul>
            <li>
               <input
                  onChange={(e) =>
                     dispatch({
                        type: "TOGGLE_INVENTORY",
                     })
                  }
                  checked={state.isStock}
                  id="stock"
                  type="checkbox"
               />
               <label htmlFor="stock">Include out of stock</label>
            </li>
         </ul>
      </aside>
   );
};

export { Sidebar };
