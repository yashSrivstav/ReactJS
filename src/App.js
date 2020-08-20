import React from 'react';
import logo from './logo.svg';
import classes from './BlockCard.module.css';
import BlockCard from './BlockCard';
import { isArrayEmpty } from "./utils";

function App() {
  const firstName = "Yash";
  const lastName = "Srivastava"
  const age = 20;
  const job = "Student"
  const inputPlaceholder = "Enter Your Details"
  // const getFullName = (firstName, lastName) => {
  //   return `${firstName} ${lastName}`
  // }
  const mArr = [1, 2, 3, 4, 5]
  const mObj = [
    {
      id: 1,
      blogName: "Yash Srivastava",
      description: "Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar"
    }, {
      id: 2,
      blogName: "Muskan Rajpal",
      description: "Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar"
    }, {
      id: 3,
      blogName: "Mohit Tiwari",
      description: "Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar"
    }]
  const blogCards = isArrayEmpty(mObj) ? [] : mObj.map((item) => {
    return (
      <BlockCard key={item.id} title={item.blogName} description={item.description} />
      // <div className="blogCard" key={item.id}>
      //   <h3>{item.blogName}</h3>
      //   <p>{item.description}
      //   </p>
      // </div>
    )
  })
  return (
    <div className={classes.App}>
      {/* <div className="blogCard">
        <h3>Blog Title 1</h3>
        <p>Lorem Ipsum Dolar
        Lorem Ipsum Dolar
        Lorem Ipsum Dolar
        Lorem Ipsum Dolar Lorem Ipsum Dolar
        </p>
      </div> */}
      {blogCards}
    </div>
  );
}

export default App;
