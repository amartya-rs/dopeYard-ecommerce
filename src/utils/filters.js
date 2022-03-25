const filterByStock = (state) => {
   return state.isStock
      ? state.productData
      : state.productData.filter((item) => item.inStock === true);
};

const filterByCategory = (state) => {
   const filteredProducts = [];

   const selectedCategory = Object.keys(state.filterByCategory).filter(
      (item) => state.filterByCategory[item] === true
   );

   selectedCategory.forEach((category) => {
      filteredProducts.push(
         ...filterByStock(state).filter(
            (state) =>
               state.categoryName.toLowerCase().replaceAll(" ", "") === category
         )
      );
   });

   return filteredProducts.length === 0
      ? filterByStock(state)
      : filteredProducts;
};

const filterByRating = (state) => {
   return filterByCategory(state).filter(
      (item) => item.rating >= Number(state.filterByRating)
   );
};

const sortedByPrice = (state) => {
   if (state.sortBy === "HIGH_TO_LOW") {
      return filterByRating(state).sort(
         (item1, item2) => item2.discountPrice - item1.discountPrice
      );
   }
   if (state.sortBy === "LOW_TO_HIGH") {
      return filterByRating(state).sort(
         (item1, item2) => item1.discountPrice - item2.discountPrice
      );
   }
   return filterByRating(state);
};

export { sortedByPrice };
