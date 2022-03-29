//calculating the discount percent of products
const discount = (item) => {
   const discountPercent =
      ((item.price - item.discountPrice) / item.price) * 100;
   return Math.trunc(discountPercent);
};

export { discount };
