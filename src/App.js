import React from "react";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUp";

import { auth, createUserProfileDoc } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/actions/setCurrentUser";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/selectors/user.selectors";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);
        const doc = await userRef.get();
        this.props.setCurrentUser({ ...doc.data() });
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }

  // componentDidMount() {
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
  //     if (user) {
  //       const userRef = firebase.firestore().collection("users").doc(user.uid);
  //       const doc = await userRef.get();
  //       this.setState(
  //         {
  //           currentUser: {
  //             ...doc.data(),
  //           },
  //         },
  //         () => console.log(this.state)
  //       );
  //     }
  //     // this.setState({ currentUser: user });
  //     // console.log(SignInWithGoogle);

  //     this.setState({ currentUser: user });
  //   });
  // }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <Header />
//       <Switch>
//         <Route exact path="/" component={HomePage} />
//         <Route exact path="/shop" component={ShopPage} />
//         <Route exact path="/signin" component={SignInAndSignUp} />
//       </Switch>
//     </div>
//   );
// }

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
