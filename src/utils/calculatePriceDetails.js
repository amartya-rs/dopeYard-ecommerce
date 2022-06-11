export const calculatePriceDetails = (cart) => {
   const deliveryCharge = 399;

   const totalPrice = cart?.reduce((sum, i) => sum + i.price * i.qty, 0);
   const discountPerItem = cart?.map(
      (item) => (item.price - item.discountPrice) * item.qty
   );
   const totalDiscount = discountPerItem?.reduce((sum, i) => sum + i, 0);
   const grandTotal = totalPrice + deliveryCharge - totalDiscount;

   return { totalPrice, grandTotal, totalDiscount };
};
