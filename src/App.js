import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './BlockCard.module.css';
import BlockCard from './BlockCard';
import { isArrayEmpty } from "./utils";
import './App.css'

class App extends Component {
  state = {
    hideBlog: true
  }
  firstName = "Yash";
  lastName = "Srivastava"
  age = 20;
  job = "Student"
  inputPlaceholder = "Enter Your Details"
  // const getFullName = (firstName, lastName) => {
  //   return `${firstName} ${lastName}`
  // }
  mArr = [1, 2, 3, 4, 5]
  mObj = [
    {
      id: 1,
      blogName: "Yash Srivastava",
      description: "Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar",
      LikeCount: 0
    }, {
      id: 2,
      blogName: "Muskan Rajpal",
      description: "Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar",
      LikeCount: 0
    }, {
      id: 3,
      blogName: "Mohit Tiwari",
      description: "Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar",
      LikeCount: 0
    }]
  LikeCountUpdate = () => {
    alert("This is noob");
  }
  blogCards = isArrayEmpty(this.mObj) ? [] : this.mObj.map((item) => {
    return (
      <BlockCard key={item.id} title={item.blogName} description={item.description} LikeCount={item.LikeCount} LikeCountUpdate={this.LikeCountUpdate} />
      // <div className="blogCard" key={item.id}>
      //   <h3>{item.blogName}</h3>
      //   <p>{item.description}
      //   </p>
      // </div>
    )
  })
  hideblogs = () => {
    // let toggleblogs = !this.state.hideBlog;
    this.setState((prevState, prevProps) => {
      return { hideBlog: !prevState.hideBlog }
    });
    // alert("button is clicked")
  }
  render() {
    return (
      <div>
        <button onClick={this.hideblogs}>{this.state.hideBlog ? 'Hide Blog' : 'Show Blog'}</button>
        <br></br>
        {/* <div className="blogCard">
          <h3>Blog Title 1</h3>
          <p>Lorem Ipsum Dolar
          Lorem Ipsum Dolar
          Lorem Ipsum Dolar
          Lorem Ipsum Dolar Lorem Ipsum Dolar
          </p>
        </div> */}
        <div className="App">
          {
            this.state.hideBlog ? this.blogCards : null
          }
        </div>
      </div >
    );
  }

}

export default App;
