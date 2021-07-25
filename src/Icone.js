import React from 'react'
import './App.css'
export const Icone = (props) => {
    return (
        <div className='Icone-container'>
             <button className='Icones'>
             <i class={props.icone}></i>
             </button>
             <div>{props.name}</div>
        </div>
    )
}
