import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './BlockCard.module.css';
import BlockCard from './BlockCard';
import { isArrayEmpty } from "./utils";
import './App.css'

class App extends Component {
  
  state =  {
    hideBlog: true,
    mObj: [
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

  LikeCountUpdate = (pos) => {
    const updateList = this.state.mObj;
    const updateCountobj = updateList[pos];
    updateCountobj.LikeCount = updateCountobj.LikeCount + 1;
    updateList[pos] = updateCountobj;

    this.setState({ mObj: updateList })
  }


  hideblogs = () => {
    // let toggleblogs = !this.state.hideBlog;
    this.setState((prevState, prevProps) => {
      return { hideBlog: !prevState.hideBlog }
    }); 
    // alert("button is clicked")
  }
  render() {
    console.log("Render Called")
    const blogCards = isArrayEmpty(this.state.mObj) ? [] : this.state.mObj.map((item, pos) => {
      return (
        <BlockCard key={item.id} title={item.blogName} description={item.description} LikeCount={item.LikeCount} LikeCountUpdate={() => this.LikeCountUpdate(pos)} />
        // <div className="blogCard" key={item.id}>
        //   <h3>{item.blogName}</h3>
        //   <p>{item.description}
        //   </p>
        // </div>
      )
    })
    return (

      < div >
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
            this.state.hideBlog ? blogCards : null
          }
        </div>
      </div >
    );
  }

}



export default App;
