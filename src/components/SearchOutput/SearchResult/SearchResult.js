import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log(props);
    return (
        <article className={classes.Result}>
            <h1>City: {props.city}</h1>
            <h2> Current Weather </h2>
            <h3> {props.tempf} F </h3>
            <h3> {props.tempc} C </h3>
            <img src = {props.iconlink}> </img>
        </article>
    );
}

export default SearchResult;