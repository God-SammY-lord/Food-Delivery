import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import NavDesign from "./Components/Navbar/Navbar_Elements";
import Carousel from "./Components/Carousel Top/carousel";
import Breadcrumb from "./Components/Breadcrumb/breadcrumb";
import Divider from "./Components/Divider/divider";
import Display from "./Components/Display Stuff/display";
import Social from "./Components/Social/social";
import Footer from "./Components/Footer/footer";
import SignIn from "./Components/SignIn/signinform";
import SignUp from "./Components/SignUp/signup";
import Cuisines from "./Components/Cuisines/cuisines";
import Alert from "./Components/Conditionals/conditional_alert_signIn";
import PrivateRoute from "./Components/HOC/privateRoute";
import SignedInCuisines from "./Components/SignedIn_Cuisines/signed_In_Cuisines";

class Food extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/">
          <NavDesign />
          <Breadcrumb />
          <Carousel />
          <Divider />
          <Display />
          <Divider />
          <Social />
          <Divider />
          <Footer />
        </Route>
        <Route exact path="/SignIn">
          <NavDesign />
          <Breadcrumb />
          <Divider />
          <SignIn />
          <Divider />
          <Social />
          <Divider />
          <Footer />
        </Route>
        <PrivateRoute path="/SignedInCuisines">
          <NavDesign />
          <Breadcrumb />
          <Divider />
          <Cuisines />
          <Divider />
          <Social />
          <Divider />
          <Footer />
        </PrivateRoute>
        <Route exact path="/SignUp">
          <NavDesign />
          <Breadcrumb />
          <Divider />
          <SignUp />
          <Divider />
          <Social />
          <Divider />
          <Footer />
        </Route>
        <Route exact path="/Cuisines">
          <NavDesign />
          <Breadcrumb />
          <Divider />
          <Cuisines />
          <Divider />
          <Social />
          <Divider />
          <Footer />
        </Route>
      </div>
    );
  }
}

export default Food;
