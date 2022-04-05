const HeartIcon = (props) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill={props.fillColor ?? "none"}
         stroke={props.strokeColor ?? "white"}
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-heart"
      >
         <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
   );
};

const CartIcon = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="white"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-shopping-cart"
      >
         <circle cx="9" cy="21" r="1"></circle>
         <circle cx="20" cy="21" r="1"></circle>
         <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
   );
};

const UserIcon = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="white"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-user"
      >
         <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
         <circle cx="12" cy="7" r="4"></circle>
      </svg>
   );
};

const CrossIcon = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-x"
      >
         <line x1="18" y1="6" x2="6" y2="18" />
         <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
   );
};

const Star = () => {
   return (
      <svg width="20" height="20" viewBox="0 0 24 24">
         <path
            fill="rgb(145, 55, 135)"
            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
         ></path>
      </svg>
   );
};

const LogoutIcon = (props) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="white"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-log-out"
         {...props}
      >
         <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
         <polyline points="16 17 21 12 16 7" />
         <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
   );
};

export { HeartIcon, CartIcon, UserIcon, CrossIcon, Star, LogoutIcon };
