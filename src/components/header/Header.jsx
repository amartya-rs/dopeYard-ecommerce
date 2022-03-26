import { useNavigate } from "react-router-dom";

export const Header = () => {
   const navigate = useNavigate();
   const toProductPage = () => {
      navigate("/products");
      window.scroll(0, 0);
   };
   return (
      <>
         <header>
            <a className="h1 brand" href="/index.html">
               dopeYard
            </a>
            <h3 className="font-semibold">
               The ultimate merchandise store for the hardcore hiphop fans.
            </h3>
            <div className="overlay">
               <button className="button primary mt-3" onClick={toProductPage}>
                  <span className="h6 font-semibold">SHOP NOW</span>
               </button>
            </div>
         </header>
      </>
   );
};
