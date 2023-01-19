import React from 'react';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    const product1Style = value >= 0 && value < 50 ? {} : { display: 'none' };
    const product2Style = value >= 50 && value <= 100 ? {} : { display: 'none' };

    return (
      <div>
        <header>
          <h1>Welcome to Our Store</h1>
        </header>
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={this.handleChange}
        />
        <div style={product1Style}>
          <img src="product1.jpg" alt="Product 1" />
          <p>Product 1</p>
        </div>
        <div style={product2Style}>
          <img src="product2.jpg" alt="Product 2" />
          <p>Product 2</p>
        </div>
        <footer className="footer-basic">
          <div className="social">
            <a href="https://www.instagram.com/"><i className="icon ion-social-instagram"></i></a>
            <a href="https://twitter.com/"><i className="icon ion-social-twitter"></i></a>
            <a href="https://www.facebook.com/"><i className="icon ion-social-facebook"></i></a>
          </div>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="https://www.instagram.com/">Home</a></li>
            <li className="list-inline-item"><a href="https://www.instagram.com/">Products</a></li>
            <li className="list-inline-item"><a href="https://www.instagram.com/">Contact</a></li>
          </ul>
          <p className="copyright">Portugal News Access © 2022</p>
        </footer>
      </div>
    );
  }
}

export default HomePage;





// // import logo from './logo.svg';
// // import './App.css';
// import React from 'react';

// class HomePage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: 0 };
//   }

//   handleChange = (event) => {
//     this.setState({ value: event.target.value });
//   }

//   render() {
//     const { value } = this.state;
//     const product1Style = value >= 0 && value < 50 ? {} : { display: 'none' };
//     const product2Style = value >= 50 && value <= 100 ? {} : { display: 'none' };

//     return (
//       <div>
//         <header>
//           <h1>Welcome to Our Store</h1>
//         </header>
//         <input
//           type="range"
//           min={0}
//           max={100}
//           value={value}
//           onChange={this.handleChange}
//         />
//         <div style={product1Style}>
//           <img src="product1.jpg" alt="Product 1" />
//           <p>Product 1</p>
//         </div>
//         <div style={product2Style}>
//           <img src="product2.jpg" alt="Product 2" />
//           <p>Product 2</p>
//         </div>
//         <footer>
//           <p>Copyright {new Date().getFullYear()}</p>
//         </footer>
//       </div>
//     );
//   }
// }

// export default HomePage;

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;