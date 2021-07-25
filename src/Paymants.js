import React from 'react'
import './App.css'
import logo3 from './pymnt.PNG'
import logo4 from './p3.PNG'
export const Paymants = () => {
    return (
        <div>
            <div>
                <table className='pay-table'><tr>
                <td><table>
                    <tr>
                        <td><img className='img'  src={logo3}/></td>
                        <td><label>Recevies</label></td>
                    </tr>
                </table></td><td>+15.08USD</td>
                </tr>
                <tr>
                    <td class="pd">
                        15/20/2028/19:22
                    </td>
                    <td>
                        <img src={logo4}/>
                    </td>
                </tr>
                </table>
               
            
            </div>

        </div>
    )
}
