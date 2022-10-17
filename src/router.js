import React from "react";
import { Route, Switch } from "react-router-dom";
import EmailSubscribe from "./components/EmailSubscribe";
import Home from "./components/Home";
import ImageGallery from "./components/ImageGallery";
import LoginModal from "./components/LoginModal";
import PricingCard from "./components/PricingCard";
import ProductModel from "./components/ProductModel";

const Router = () => {
  return (
    <div>
      <Switch>
        <Route path="/email">
          <EmailSubscribe />
        </Route>
        <Route path="/pricingcard">
          <PricingCard />
        </Route>
        <Route path="/productmodel">
          <ProductModel />
        </Route>
        <Route path="/imagegallery">
          <ImageGallery />
        </Route>
        <Route path="/loginmodal">
          <LoginModal />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default Router;