import React from 'react'
import logo8 from './alist1.PNG'
import './App.css';
import './all.css';
import './all.js';
export const Activitylist = (props) => {
    return (
        <div >
             <table class='lstable w100'>
                 <tr>
                    <td><img src={logo8}/></td>
                    <td><span>{props.name}</span><br/><p>{props.value}</p></td>
                    <td><span>Insurance</span><br/><p> property coverage</p></td>
                    <td><span>{props.time}</span><br/><p>property coverage</p></td>
                    <td><span>10.24Ltc</span><br/><p>property coverage</p></td>
                 </tr>
             </table>
        </div>
    )
}
