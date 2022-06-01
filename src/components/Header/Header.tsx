import React from 'react';
import  classes from './Header.module.css'
const Header = () => {
    return (
        <header className={classes.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAecDzIjyZy5VPQINC84MGWcrwT7UZKRkBIE6o1vrFttqHU2BnK9pfOw1TEpJWGzrxSGs&usqp=CAU'
                alt="Logo"/>
        </header>
    );
};

export default Header;