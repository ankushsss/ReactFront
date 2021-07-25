import React from 'react'
import logo8 from './alist1.PNG'
import './App.css';
export const Wlist = (props) => {
    return (
        <div>
            <table class='lstable'>
                 <tr>
                    <td><img src={logo8}/></td>
                    <td><span>{props.name}</span><br/><p>{props.value}</p></td>
                    <td><span>37%</span><br/><p>2.5</p></td>
                    </tr>
            </table>
        </div>
    )
}
