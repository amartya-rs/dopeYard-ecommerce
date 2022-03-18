import { CartIcon, HeartIcon, UserIcon } from "../../assets/icons";

const TopNav = () => {
   return (
      <>
         <nav className="main-nav">
            <a className="h5 brand" href="">
               dopeYard
            </a>

            <ul className="link-wrapper">
               <li>
                  <a className="link" href="">
                     Home
                  </a>
               </li>
               <li>
                  <a className="link" href="">
                     Products
                  </a>
               </li>
               <li>
                  <a className="icon-link" href="">
                     <UserIcon />
                  </a>
               </li>
               <li>
                  <a className="icon-link" href="">
                     <HeartIcon />
                  </a>
               </li>
               <li>
                  <a className="icon-link" href="">
                     <CartIcon />
                  </a>
               </li>
            </ul>
         </nav>
      </>
   );
};

export { TopNav };
