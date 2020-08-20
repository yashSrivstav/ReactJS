import React from 'react';
import classes from "./BlockCard.module.css";
const BlockCard = (props) => {
    return (<div className={classes.blogCard}>
        <h3>{props.title}</h3>
        <p>{props.description}
        </p>
    </div>)
}
export default BlockCard
