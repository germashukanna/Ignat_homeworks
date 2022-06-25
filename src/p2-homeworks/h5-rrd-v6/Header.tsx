import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Pages';
import s from './Header.module.css'


function Header() {
    return (
        <div className={s.header}>
            <NavLink className={s.nav} to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>
            <NavLink className={s.nav} to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink className={s.nav} to={PATH.JUNIOR_PLUS}>Junior-Plus</NavLink>
            <div className={s.block}></div>
        </div>
    )
}

export default Header
