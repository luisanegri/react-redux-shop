import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ProductsContainer from './components/ProductsContainer';
import ProductDetailContainer from './components/ProductDetailContainer';
import CartContainer from './components/CartContainer';
import WishListContainer from './components/WishListContainer';
import Footer from './components/Footer';
import Home from './components/Home';
import NavbarContainer from './components/NavbarContainer';
import SignInAndSignUpPage from './components/SignInAndUp';

import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from './firebase/firebase.utils';
import { setCurrentUser } from './actions/user';
import { selectCurrentUser } from './reducers/user.selectors';
import { selectProductsForPreview } from './reducers/products.selector';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    const { setCurrentUser, productsArray } = this.props;
    console.log('arr', productsArray);

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
        addCollectionAndDocuments('collections', productsArray);
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  productsArray: selectProductsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
