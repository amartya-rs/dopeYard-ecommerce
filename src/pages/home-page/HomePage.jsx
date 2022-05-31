import "./home-page.css";
import {
   Footer,
   HomePageCard,
   TopNav,
   CategoryCard,
   Header,
} from "../../components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   loadProductData,
   loadProductCategories,
} from "../../features/server-requests";
import { filterByCategory } from "../../features/product/productSlice";

const HomePage = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { products, categories } = useSelector((state) => state.product);

   useEffect(() => {
      dispatch(loadProductData());
      dispatch(loadProductCategories());
   }, []);

   const toProductPage = (item) => {
      navigate("/products");
      dispatch(filterByCategory(item.toLowerCase().replaceAll(" ", "")));
   };

   return (
      <div className="home-page">
         <TopNav />
         <main className="mb-6">
            <Header />
            <h2 className="mt-8">Categories</h2>
            <hr className="my-1" />
            <section className="featured mt-4 mb-2">
               {categories?.length !== 0 &&
                  categories?.map((item) => (
                     <CategoryCard
                        key={item._id}
                        card={item}
                        toProductPage={toProductPage}
                     />
                  ))}
            </section>
            <h2 className="mt-8">Bestsellers</h2>
            <hr className="my-1" />
            <section className="featured mt-4 mb-8">
               {products?.length !== 0 &&
                  products
                     ?.filter((item) => item.rating >= 4.5 && item.inStock)
                     ?.map((item) => (
                        <HomePageCard
                           key={item._id}
                           card={item}
                           toProductPage={toProductPage}
                        />
                     ))}
            </section>
         </main>
         <Footer />
      </div>
   );
};

export { HomePage };
