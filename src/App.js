import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProductsContainer from './components/products/ProductsContainer';
import ProductDetailContainer from './components/product-detail/ProductDetailContainer';
import CartContainer from './components/cart/CartContainer';
import WishListContainer from './components/wishlist/WishListContainer';
import NavbarContainer from './components/navbar/NavbarContainer';
import SignInAndSignUpPage from './components/auth/SignInAndUp';
import Footer from './components/static/Footer';
import Home from './components/static/Home';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './actions/user';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <NavbarContainer currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/products" component={ProductsContainer}></Route>
          <Route path="/product/:id" component={ProductDetailContainer}></Route>
          <Route path="/cart" component={CartContainer} />
          <Route path="/wishlist" component={WishListContainer}></Route>
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/products" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
