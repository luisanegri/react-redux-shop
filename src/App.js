import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ProductsContainer from './components/ProductsContainer';
import ProductDetailContainer from './components/ProductDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContainer from './components/CartContainer';
import WishListContainer from './components/WishListContainer';
import Footer from './components/Footer';
import Home from './components/Home';
import NavbarContainer from './components/NavbarContainer';
import SignInAndSignUpPage from './components/SignInAndUp';
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
    // when the user signs in
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // get back the userRef from the createUserProfileDocument
        // method from the userAuth obj being passed in
        const userRef = await createUserProfileDocument(userAuth);
        console.log('const userRef', userRef);

        // provide the user data to the app
        userRef.onSnapshot((snapShot) => {
          setCurrentUser(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              console.log('onSnapshot', this.state);
            }
          );
        });
      } else {
        // when user logs out currentUser is null
        setCurrentUser(userAuth);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <NavbarContainer currentUser={this.state.currentUser} />
        {console.log('parent - props being passed', this.state.currentUser)}
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/products" component={ProductsContainer}></Route>
          <Route path="/product/:id" component={ProductDetailContainer}></Route>
          <Route path="/cart" component={CartContainer} />
          <Route path="/wishlist" component={WishListContainer}></Route>
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
