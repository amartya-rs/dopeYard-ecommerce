import { useDispatch, useSelector } from "react-redux";
import { filterByPrice } from "../../features/product/productSlice";

export const FilterByPrice = () => {
   const dispatch = useDispatch();
   const { filterByPrice: filteredByPrice } = useSelector(
      (state) => state.product
   );

   return (
      <>
         <h6 className="mt-1 mb-2">
            Price
            <span className="show-price">{`₹ ${filteredByPrice}`}</span>
         </h6>
         <ul>
            <li>
               <input
                  id="pricing"
                  type="range"
                  min="899"
                  max="3999"
                  step="100"
                  value={filteredByPrice}
                  onChange={(e) => dispatch(filterByPrice(e.target.value))}
               ></input>
            </li>
         </ul>
      </>
   );
};
