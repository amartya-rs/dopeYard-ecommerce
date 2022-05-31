import { useDispatch, useSelector } from "react-redux";
import { filterByStock } from "../../features/product/productSlice";

export const FilterByStock = () => {
   const dispatch = useDispatch();
   const { inStock } = useSelector((state) => state.product);

   return (
      <>
         <h6 className="my-1">Availability</h6>
         <ul>
            <li>
               <input
                  onChange={(e) => dispatch(filterByStock())}
                  checked={inStock}
                  id="stock"
                  type="checkbox"
               />
               <label htmlFor="stock">Include out of stock</label>
            </li>
         </ul>
      </>
   );
};
