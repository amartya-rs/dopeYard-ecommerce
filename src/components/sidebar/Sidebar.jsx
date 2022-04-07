import { useCart } from "../../context/cart-context";
import { FilterByPrice } from "./FilterByPrice";
import { FilterByCategory } from "./FilterByCategory";
import { FilterByRating } from "./FilterByRating";
import { SortByPrice } from "./SortByPrice";
import { FilterByStock } from "./FilterByStock";
import "./sidebar.css";

const Sidebar = () => {
   const { dispatch } = useCart();

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
         <FilterByPrice />
         <hr />
         <FilterByCategory />
         <hr />
         <FilterByRating />
         <hr />
         <SortByPrice />
         <hr />
         <FilterByStock />
      </aside>
   );
};

export { Sidebar };
