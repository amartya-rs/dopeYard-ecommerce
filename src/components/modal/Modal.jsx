import { CrossIcon } from "../../assets/icons";
import { useSelector, useDispatch } from "react-redux/es/exports";
import {
   toggleModal,
   setAddressFields,
} from "../../features/checkout/checkoutSlice";
import { addAddress, updateAddress } from "../../features/server-requests";
import "./modal.css";

const Modal = () => {
   const dispatch = useDispatch();
   const { isModalOpen, addressFields, modalInfo } = useSelector(
      (state) => state.checkout
   );

   const userAddressFields = [
      "fullName",
      "address",
      "city",
      "state",
      "pincode",
      "phone",
   ];

   const dummyAddress = {
      fullName: "Ruby Larkin",
      address: "Suite 910, Alex Rapids",
      city: "Kirlinview",
      state: "New Hampshire",
      pincode: 808608,
      phone: 6876321596,
   };

   return (
      <div className={`modal-container ${!isModalOpen ? "hide-modal" : ""}`}>
         <div className="modal">
            <button
               className="corner-button"
               onClick={() => dispatch(toggleModal())}
            >
               <CrossIcon />
            </button>
            <form
               onSubmit={(e) => {
                  e.preventDefault();
                  modalInfo.task === "add"
                     ? dispatch(addAddress(addressFields))
                     : dispatch(
                          updateAddress({
                             addressId: modalInfo.data,
                             updatedAddress: addressFields,
                          })
                       );
               }}
            >
               {userAddressFields.map((field, index) => (
                  <input
                     required
                     className="text-input"
                     placeholder={field.toLowerCase()}
                     key={index}
                     type={
                        field === "pincode" || field === "phone"
                           ? "Number"
                           : "text"
                     }
                     value={addressFields?.[field]}
                     onChange={(e) =>
                        dispatch(
                           setAddressFields({
                              ...addressFields,
                              [field]: e.target.value,
                           })
                        )
                     }
                  />
               ))}
               <div className="modal-footer">
                  {modalInfo?.task === "add" ? (
                     <>
                        <button
                           type="button"
                           className="button outline-primary"
                           onClick={() =>
                              dispatch(setAddressFields(dummyAddress))
                           }
                        >
                           Enter dummy address
                        </button>
                        <button type="submit" className="button primary">
                           Add address
                        </button>
                     </>
                  ) : (
                     <button type="submit" className="button primary">
                        Update address
                     </button>
                  )}
               </div>
            </form>
         </div>
      </div>
   );
};

export { Modal };
