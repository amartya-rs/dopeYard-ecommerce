import { useCart } from "../../context/cart-context";

export const FilterByStock = () => {
   const { state, dispatch } = useCart();

   return (
      <>
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
      </>
   );
};
