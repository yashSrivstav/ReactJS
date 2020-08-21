import React, { Component } from 'react';
import classes from "./BlockCard.module.css";
const BlockCard = (props) => {
    // state = {
    //     LikeCount: 0
    // }
    // LikeCountUpdate = () => {
    //     this.setState((prevState, prevProps) => {
    //         return { LikeCount: prevState.LikeCount + 1 }
    //     })
    // }
    return (
        <div className={classes.blogCard}>
            <h3>{props.title}</h3>
            <p>{props.description}
            </p>
            <p>Like Count:<span className={classes.LikeCount}> {props.LikeCount}</span> </p>
            <button className={classes.button} onClick={props.LikeCountUpdate}>Love</button>
        </div>)
}

export default BlockCard
