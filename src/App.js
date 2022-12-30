import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Layouts from "./components/layouts/Layouts";
import ProductDetail from "./pages/ProductDetail";
import ProductPage from "./pages/ProductPage";
import Auction from "./pages/Auction";
import LiveBid from "./pages/LiveBid";




function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route path='/' element={ <Layouts /> }>
       <Route index element={<Home />} />
      
      <Route path="/productpage" element={<ProductPage />} />

      <Route path="/productdetail" element={<ProductDetail />} />

      <Route path="/auction" element={<Auction />} />

      <Route path="/live" element={<LiveBid />} />


     </Route>
      )
    );
    return <RouterProvider router={router} />;
}

export default App;