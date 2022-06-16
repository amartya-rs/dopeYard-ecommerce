import {
   toggleModal,
   setAddressFields,
} from "../../features/checkout/checkoutSlice";
import { useSelector, useDispatch } from "react-redux";
import { toastError, toastSuccess } from "../../utils/useToast";
import { useNavigate } from "react-router-dom";
import { clearCart, removeAddress } from "../../features/server-requests";
import { Edit, Delete } from "../../assets/icons";
import { useState } from "react";
import {
   Modal,
   TopNav,
   Footer,
   CheckoutCard,
   PriceCard,
} from "../../components";
import "./checkout-page.css";

const CheckoutPage = () => {
   const [selectedAddress, setSelectedAddress] = useState("");
   const { cart } = useSelector((state) => state.cart);
   const { userAddress } = useSelector((state) => state.checkout);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   return (
      <div className="checkout-page">
         <TopNav />
         <main>
            <section className="order-info">
               <div className="order-summary">
                  <h5 className="font-medium">Order Summary</h5>
                  {cart?.map((item) => (
                     <CheckoutCard key={item._id} card={item} />
                  ))}
               </div>
               <div className="order-address mt-4">
                  <h5 className="font-medium">Delivery Address</h5>
                  <ul>
                     {userAddress?.length !== 0 ? (
                        userAddress.map((ele, index) => (
                           <li className="address-wrapper my-1" key={ele._id}>
                              <input
                                 name="delivery address"
                                 id={`address-${index}`}
                                 type="radio"
                                 onChange={(e) =>
                                    setSelectedAddress(e.target.value)
                                 }
                                 value={ele}
                              />
                              <label htmlFor={`address-${index}`}>
                                 <div className="user-address">
                                    <div>{ele.fullName}</div>
                                    <div>{`${ele.address}, ${ele.city}`}</div>
                                    <div>{`${ele.state} - ${ele.pincode}`}</div>
                                    <div>Phone: {ele.phone}</div>
                                 </div>
                              </label>
                              <div className="icon-wrapper">
                                 <Edit
                                    onClick={() => {
                                       dispatch(
                                          toggleModal({
                                             task: "update",
                                             data: ele._id,
                                          })
                                       );
                                       dispatch(setAddressFields(ele));
                                    }}
                                 />
                                 <Delete
                                    onClick={() => dispatch(removeAddress(ele))}
                                 />
                              </div>
                           </li>
                        ))
                     ) : (
                        <h5 className="grey-text font-medium text-center">
                           No address found
                        </h5>
                     )}
                  </ul>
                  <button
                     className="button primary"
                     onClick={() => dispatch(toggleModal())}
                  >
                     Add address
                  </button>
               </div>
            </section>
            <section className="order-details">
               <PriceCard cart={cart} heading={"ORDER DETAILS"}>
                  <button
                     className="button primary mt-1"
                     onClick={() => {
                        if (userAddress.length === 0) {
                           toastError("Add an address");
                           return;
                        }
                        if (selectedAddress === "") {
                           toastError("Select an address");
                           return;
                        }
                        dispatch(clearCart());
                        navigate("/");
                        toastSuccess("Order placed successfully");
                     }}
                  >
                     PLACE ORDER
                  </button>
               </PriceCard>
            </section>
         </main>
         <Footer />
         <Modal />
      </div>
   );
};

export { CheckoutPage };
