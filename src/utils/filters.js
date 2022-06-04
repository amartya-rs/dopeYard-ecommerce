const filterByStock = (state) => {
   return state.inStock
      ? state.products
      : state.products.filter((item) => item.inStock === true);
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

const filterByPrice = (state) => {
   return filterByRating(state).filter(
      (item) => item.discountPrice <= state.filterByPrice
   );
};

const sortedByPrice = (state) => {
   if (state.sortByPrice === "HIGH_TO_LOW") {
      return filterByPrice(state).sort(
         (item1, item2) => item2.discountPrice - item1.discountPrice
      );
   }
   if (state.sortByPrice === "LOW_TO_HIGH") {
      return filterByPrice(state).sort(
         (item1, item2) => item1.discountPrice - item2.discountPrice
      );
   }
   return filterByPrice(state);
};

const filterBySearchInput = (state) => {
   if (!state.searchInput) return sortedByPrice(state);
   return sortedByPrice(state).filter((item) =>
      item.title.toLowerCase().includes(state.searchInput)
   );
};

export { filterBySearchInput };
