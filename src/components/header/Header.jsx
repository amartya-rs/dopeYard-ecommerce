import { useNavigate } from "react-router-dom";

export const Header = () => {
   const navigate = useNavigate();

   return (
      <header>
         <span className="h1 brand">dopeYard</span>
         <h3 className="font-semibold">
            The ultimate merchandise store for the hardcore hiphop fans.
         </h3>
         <div className="overlay">
            <button
               className="button primary mt-3"
               onClick={() => navigate("/products")}
            >
               <span className="h6 font-semibold">SHOP NOW</span>
            </button>
         </div>
      </header>
   );
};
