
import logo6 from './b.PNG'
import React,{useRef} from 'react'
import './App.css';
export const Centerbox = (props) => {
  const refe = useRef(null)
  const lineFocus = ()=>{
    let hide = document.querySelectorAll('.line')
    let len = hide.length;
    console.log(len)
   for(let x = 0;x<=len-1;x++)
   {
     hide[x].style.background = 'transparent'
   }
 refe.current.style= 'background:red'
  }
    return (
        <div onClick={lineFocus}>
            <div class='center-box'>
                           <table className='table-center'>
                                 <tr>
                                   <td>
                                     <h5> bitcoin</h5>
                                   </td>
                                   <td className='data'>
                                   <i class="fas fa-ellipsis-v"></i>
                                   </td>
                                 </tr>
                                 <tr>
                                     <td class='td-center'>
                                           <img src={logo6} />
                                     </td>
                                 </tr>
                                 <tr>
                                   <td>
                                        <h3>0.22345678</h3>
                                        <p>11.456 USD</p>
                                   </td>
                                 </tr>
                           </table>
                      </div>
                      <div ref={refe} className='line'></div>
        </div>
    )
}
