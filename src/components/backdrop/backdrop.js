import React from 'react'
import style from './backdrop.module.scss';

const Backdrop = ({ toggle }) => {
  return (
    <div className={style.backdrop} onClick={toggle}></div>
  )
}

export default Backdrop;