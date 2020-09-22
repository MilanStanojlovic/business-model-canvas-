import React from 'react'
import style from './backdrop.module.scss';

const Backdrop = ({ toggle, children }) => {
  return (
    <div className={style.backdrop} onClick={toggle}>
      {children}
    </div>
  )
}

export default Backdrop;