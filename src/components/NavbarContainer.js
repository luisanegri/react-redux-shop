// import React, { Component } from "react";
// import NavBar from "./NavBar";
// import { connect } from "react-redux";

// export class NavbarContainer extends Component {
//   render() {
//     return (
//       <div>
//         <NavBar products={this.props.products} />;
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             SEARCH
//             <input
//               type="text"
//               value={this.value}
//               onChange={this.handleChange}
//             ></input>
//           </label>
//           <input type="Submit" />
//         </form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     products: state.products
//   };
// };

// export default connect(
//   null,
//   mapStateToProps
// )(NavBarContainer);
