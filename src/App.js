import logo from './near.PNG'
import logo2 from './near2.PNG'
import logo5 from './dp.PNG'

import './App.css';
import './all.css';
import { Icone } from './Icone';
import { Paymants } from './Paymants';
// import { Wallet } from './Wallet';
import { Centerbox} from './Centerbox';
import { Activitylist} from './Activitylist';
import {Wlist} from './Wlist';
function App() {
  var x = window.matchMedia("(max-width: 1100px)")
  return (

    <div>
        <div class='left-side' id='navShow'>
      
                <img src={logo}/>
                <div className='closeIcone' onClick={() =>x.matches?document.getElementById('navShow').removeAttribute('style','display:block;'):console.log('screen')}><i class="far fa-times-circle"/></div>
                <div className='Icone-box'>
                     <Icone name='Dashboard' icone='fas fa-bars'/>
                     <Icone name='Calculator' icone='fas fa-calculator'/>
                     <Icone name='Wallet' icone='fas fa-wallet'/>
                     <Icone name='Solving' icone='fab fa-resolving'/>
                     <Icone name='Currency' icone='fas fa-money-check'/>
                     <Icone name='Expances' icone='fas fa-shopping-bag'/>
                     <div className='Icone-2box'>
                        <Icone name='Upcoming' icone='fas fa-circle'/>
                        <Icone name='Food' icone='fas fa-hamburger'/>
                        <Icone name='Health' icone='fas fa-first-aid'/>
                        <Icone name='Account' icone="fas fa-user"/>
                     </div>
                    

                </div>
                <div className='GetPro-btn'>
                    <div>
                       <img src={logo2}/>
                    </div>
                    <div className='btn-block'>
                       <button class='btn'>
                            GetProNow
                       </button>
                    </div>
                </div>
           </div>
           <div class='right-side'>
                 <div className='rs-left'>
                <div className='searchNav'>
                 <div className='search'>
                    <form className="example ok"  >
                        <button type="submit"><i className="fas fa-search"></i></button>
                          <input type="text" placeholder="Search.." name="search2"/>
                      </form>
                  </div>
                  <div className='mblBar-1100' onClick={() =>x.matches?document.getElementById('navShow').setAttribute('style','display:block;'):console.log('screen')}><i class="fas fa-ellipsis-v"></i><i class="fas fa-ellipsis-v"></i><i class="fas fa-ellipsis-v"></i></div>
                 
                </div>
                 <div class='hii'><h2>Hii Ankush <sup class='supc'>23</sup></h2></div>
                     <div className='boxes'>
                        <Centerbox />
                        <Centerbox/>
                        <Centerbox/>
                       
                      </div>
                     
                      <div>
                         <table class='ltst-Activity'><tr><td><h2>Latest Activity</h2><p>update 12 min ago</p></td><td class='centerBtn'><button class='btnlis '><i class="fas fa-cog"></i></button><button class='btnlis btnblu'>+</button></td></tr></table>
                      </div>
                      
                      <div>
                           <Activitylist name='Insurance' value='property coverage' time='7 june 21'/>
                           <Activitylist name='Insurance' value='property coverage' time='7 june 21'/>
                      </div>
                </div>
                <div id='navShowRight' className='rs-right'>
                <div className='closeIcone2' onClick={() =>x.matches?document.getElementById('navShowRight').removeAttribute('style','display:block;'):console.log('screen')}><i class="far fa-times-circle"/></div>
                    <div className='img-box'>
                         <div>Quit</div>
                         <div>Personal</div>
                         <div><img className='dp' src={logo5}/></div>
                    </div>
                    <div class='PaymentBox'>
                      <label><h2>Payment</h2></label>
                      <div><button>Clear</button></div>
                    </div>
                    <div>
                        <Paymants/>
                        <Paymants/>
                    </div>
                    <table class='table2'>
                      <tr>
                          <td><button class='edt-btn'><i class="fas fa-pencil-alt"></i></button></td>
                          <td> + New transfer</td>
                      </tr>

                </table>
                <table class='w80'>
                      <tr>
                        <td >
                            <h2>Wallets</h2>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <Wlist name='data' value='dsi'/>
                            <Wlist name='data' value='dsi'/>
                            <Wlist name='data' value='dsi'/>
                        </td>
                      </tr>
                </table>
                </div>
           </div>
           <button className='mblIcon'onClick={() =>x.matches?document.getElementById('navShowRight').setAttribute('style','display:block;'):console.log('screen')}><i class="fas fa-database"></i></button>
    </div>
  );
}

export default App;
