# dopeYard

The ultimate merchandise store for the hardcore hiphop fans.

Live link - [dopeYard](https://dopeyard-ecom.netlify.app/)

## Preview

![](/preview.gif)

## Features

### Home Page

-  Clicking on SHOP NOW button takes the user to the products page
-  Clicking on category/bestseller card will redirect the user to the product page with the selected category.

### Product Listing Page

-  User can filter the products based on their preferences

   -  Filter by price
   -  Filter by category
   -  Filter by ratings
   -  Sort by price (high to low and vice-versa)
   -  Filter by availability
   -  Clicking on Clear button will clear/reset all the applied filters.
   -  Search products using the search bar

-  User can add a product to the cart by clicking on ADD TO CART button. Once added button changes to GO TO CART.
-  User can add a product to the wishlist by clicking on heart icon button. Once added the heart icon changes to filled.

### Cart page

-  Clicking on +/- button will Increase or Decrease the quantity of a particular product respectively.
-  Clicking on REMOVE FROM CART will remove a product from the cart
-  Clicking on MOVE TO WISHLIST will move a product to the Wishlist
-  Price details card which shows the total price of the products along with a checkout button.

### Wishlist page

-  Clicking on cross icon will remove an item from the wishlist
-  Clicking on MOVE TO CART button will move an item from the wishlist to cart

### Checkout page

-  Add, delete, update address
-  Place order

### Authentication

-  Signup
-  Login
-  Logout

## Run the app locally

-  Clone the repository on your local machine with the command below, and cd into the folder

```
git clone https://github.com/amartya-rs/dopeYard-ecommerce.git

cd dopeYard-ecommerce
```

-  install dependencies

```
npm install
```

-  create a `.env` file with a variable as mentioned below, in the root directory

```
REACT_APP_JWT_SECRET = <JWT_SECRET_KEY_>
```

-  start the server

```
npm start
```
