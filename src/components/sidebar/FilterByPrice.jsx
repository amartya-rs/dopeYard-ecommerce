import { useCart } from "../../context/cart-context";

export const FilterByPrice = () => {
   const { state, dispatch } = useCart();

   return (
      <>
         <h6 className="mt-1 mb-2">
            Price
            <span className="show-price">{`₹ ${state.filterByPrice}`}</span>
         </h6>
         <ul>
            <li>
               <input
                  id="pricing"
                  type="range"
                  min="899"
                  max="3999"
                  step="100"
                  value={state.filterByPrice}
                  onChange={(e) =>
                     dispatch({
                        type: "FILTER_BY_PRICE",
                        payload: e.target.value,
                     })
                  }
               ></input>
            </li>
         </ul>
      </>
   );
};
