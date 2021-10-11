import React from 'react';
import classes from './search.module.css';
import SearchIcon from '../icons/search';

function Search() {
    return (
        <React.Fragment>
             <div className={classes.searchbar}>
                    <div className={classes.search}>Search</div>
                    <div><input type="text" ></input></div>
                    <div className={classes.searchIcon}><button>{<SearchIcon/>}</button></div>
                </div>
        </React.Fragment>
    )
}

export default Search
