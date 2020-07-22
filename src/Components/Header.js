import React, { Component } from 'react'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    header: {    
    display: 'inline',
    }
});

const Header = (props) => {
    const classes = useStyles();
    return (
        <div className='card-header'>
            <h1 className='card-header-title header'>      
                You have {props.numOfTodo} tasks!
            </h1>
        </div>
        
    )
}

export default Header
