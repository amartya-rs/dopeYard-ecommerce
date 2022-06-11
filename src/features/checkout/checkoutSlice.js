import { createSlice } from "@reduxjs/toolkit";
import { addAddress, updateAddress, removeAddress } from "../server-requests";
import { toastSuccess, toastError, toastInfo } from "../../utils/useToast";

const initialAddressFields = {
   fullName: "",
   address: "",
   city: "",
   state: "",
   pincode: "",
   phone: "",
};
const initialModalInfo = { task: "add", data: "" };

const initialState = {
   userAddress: [],
   isModalOpen: false,
   modalInfo: initialModalInfo,
   addressFields: initialAddressFields,
   status: "idle",
};

export const checkoutSlice = createSlice({
   name: "checkout",
   initialState,
   reducers: {
      toggleModal: (state, action) => {
         state.isModalOpen = !state.isModalOpen;
         state.modalInfo = action.payload ?? initialModalInfo;
      },
      setAddressFields: (state, action) => {
         state.addressFields = action.payload;
      },
   },
   extraReducers: {
      [addAddress.fulfilled]: (state, action) => {
         state.status = "fulfilled";
         state.userAddress = action.payload.address;
         state.addressFields = initialAddressFields;
         state.isModalOpen = !state.isModalOpen;
         toastSuccess("Address added");
      },
      [addAddress.rejected]: (state, action) => {
         state.status = "rejected";
         toastError(action.payload?.errors[0]);
      },
      [removeAddress.fulfilled]: (state, action) => {
         state.status = "fulfilled";
         state.userAddress = action.payload.address;
         toastInfo("Address removed");
      },
      [removeAddress.rejected]: (state, action) => {
         state.status = "rejected";
         toastError(action.payload?.errors[0]);
      },
      [updateAddress.fulfilled]: (state, action) => {
         state.status = "fulfilled";
         state.userAddress = action.payload.address;
         state.addressFields = initialAddressFields;
         state.isModalOpen = !state.isModalOpen;
         toastSuccess("Address updated");
      },
      [updateAddress.rejected]: (state, action) => {
         state.status = "rejected";
         toastError(action.payload?.errors[0]);
      },
   },
});

export const { toggleModal, setAddressFields } = checkoutSlice.actions;

export default checkoutSlice.reducer;
