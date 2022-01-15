import "./styles/App.css";
import Header from "./components/header/Header";
import CarouselBootstrap from "./components/carousel/CarouselBootstrap";
import ProductBanner from "./components/productBanner/ProductBanner";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProducts from "./routes/allProducts/AllProducts";
import Contact from './routes/contact/Contact'
import MostLiked from "./routes/mostliked/MostLiked";
import AboutUs from "./routes/about/AboutUs";
import MostPopular from "./routes/mostpopular/MostPopular";
import Liked from "./routes/liked/Liked";
import SelectedToBuy from "./routes/selected/SelectedToBuy";
import Login from "./auth/login/Login";
import Register from "./auth/login/Register";
import Footer from "./components/footer/Footer";



function App() {
  return (
   <Router>

<div>
  <Header/>
  <CarouselBootstrap/>
  <ProductBanner/>
<Routes>
  {/* <Route path="/" exact element={<Header/>} /> */}
  <Route path="/allproducts"  element={<AllProducts />}/>
  <Route path="/mostpopular"  element={<MostPopular/>} />
  <Route path="/mostliked"  element={<MostLiked/>} />
  <Route path="/contact"  element={<Contact/>} />
  <Route path="/aboutus"  element={<AboutUs/>} />
  <Route path="/liked"  element={<Liked/>} />
  <Route path="/selectedtobuy"  element={<SelectedToBuy/>} />
  <Route path="/login"  element={<Login/>} />
  <Route path="/register"  element={<Register/>} />

</Routes>
<Footer/>


</div>




   </Router>
  );
}

export default App;

{
}
