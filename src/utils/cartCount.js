export const cartCount = (cart) => {
   if (!cart) return 0;
   return cart.reduce((sum, i) => sum + i.qty, 0);
};
