export const isPresentInData = (data, toFind) => {
   if (data?.length !== 0 && toFind) {
      return data.find((item) => item._id === toFind._id);
   }
   return false;
};
