import React, { Component } from "react";
// import logo from "./logo.svg";
import "../styles/App.css";
import Example from "../home/components/card/cardBtn";
import API from "../utils/API";


class Mensbig extends Component {
    state = {
      id: "",
      image_URL: "",
      category: "",
      title: ""
    };
  
    componentDidMount() {
      this.loadPins();
    }
  
    loadPins = () => {
      API.getPinCat()
        .then(res =>
          this.setState({ pins: res.data, image_URL: "", category: "", title: "" })
        )
        .catch(err => console.log(err));
    };
  
    deletePins = id => {
      API.deletePins(id)
        .then(res => this.loadPins())
        .catch(err => console.log(err));
    };
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    // handleFormSubmit = event => {
    //   event.preventDefault();
    //   if (this.state.title && this.state.author) {
    //     API.saveBook({
    //       title: this.state.title,
    //       author: this.state.author,
    //       synopsis: this.state.synopsis
    //     })
    //       .then(res => this.loadBooks())
    //       .catch(err => console.log(err));
    //   }
    // };
  

    // render() {
    //     return (
    //         <div className="container">
    //             <div className="Home">
    //                 <div className="Home-header">
    //                     <img src={this.state.images[3]} />
    //                 </div>
    //                 <p className="Home-intro">
    //                     Check out these options!
    //                 </p>
    //             </div>
    //             <div className="row">
    //                 <div className="col-4">
    //                     <Example title="Big Fellas" buttonText="That's Me!" btnhref="/mens" image={this.state.images[0]} />
    //                 </div>
    //                 <div className="col-4">
    //                     <Example title="Middle of the Road" buttonText="That's Me!" btnhref="/mens" image={this.state.images[1]} />
    //                 </div>
    //                 <div className="col-4">
    //                     <Example title="Skinny Non-fat Tall Hombre" buttonText="That's Me!" btnhref="/mens" image={this.state.images[2]} />
    //                 </div>
    //             </div>



    //         </div>


        )

    }
};
export default Mensbig;