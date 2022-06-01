import { useDispatch, useSelector } from "react-redux";
import { filterByCategory } from "../../features/product/productSlice";

export const FilterByCategory = () => {
   const dispatch = useDispatch();
   const {
      filterByCategory: { tshirt, hoodie, cap, longsleeve },
   } = useSelector((state) => state.product);

   return (
      <div>
         <h6 className="my-1">Category</h6>
         <ul className="side-nav font-medium pl-1">
            <li>
               <input
                  onChange={(e) => dispatch(filterByCategory(e.target.value))}
                  checked={tshirt}
                  value="tshirt"
                  id="category-1"
                  type="checkbox"
               />
               <label htmlFor="category-1">T-Shirt</label>
            </li>
            <li>
               <input
                  onChange={(e) => dispatch(filterByCategory(e.target.value))}
                  checked={hoodie}
                  value="hoodie"
                  id="category-2"
                  type="checkbox"
               />
               <label htmlFor="category-2">Hoodie</label>
            </li>
            <li>
               <input
                  onChange={(e) => dispatch(filterByCategory(e.target.value))}
                  checked={cap}
                  value="cap"
                  id="category-3"
                  type="checkbox"
               />
               <label htmlFor="category-3">Cap</label>
            </li>
            <li>
               <input
                  onChange={(e) => dispatch(filterByCategory(e.target.value))}
                  checked={longsleeve}
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
