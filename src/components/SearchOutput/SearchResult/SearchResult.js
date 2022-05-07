import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log(props);
    return (
        <article className={classes.Result}>
            <h1> {props.city}</h1>
            <h3> Current Weather </h3>
            <h4> {props.tempf} F </h4>
            <h4> {props.tempc} C </h4>
        </article>
    );
}

export default SearchResult;