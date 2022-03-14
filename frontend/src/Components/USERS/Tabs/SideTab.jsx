import { useState } from 'react';
import {Tabs,Tab} from 'react-bootstrap'
import Modal from '../Addproduct/Addproduct';
import Shop from '../NewShop/NewShop';
import Myorders from '../Myorders/Myorders';
import WishList from '../Wishlist/WishList';
import './sidetab.css'
const Sidetab = ({nwUser}) => {
  const [key, setKey] = useState('home');
  return (
    <Tabs  defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 d-flex justify-content-center">
    <Tab style={{width:'100%'}} className='bg-light' eventKey="profile" title="Profile">
    <div style={{color:'#000'}} > 
      <span> <h1>Name:<i>{nwUser&& nwUser.Name}</i></h1></span>
      <span> <h3>Email:<i>{nwUser&& nwUser.Email}</i></h3></span>
      <span> <h1>Phone Number:<i>{nwUser&& nwUser.Phone}</i></h1></span>
      <span> <h1>Address:<i>{nwUser&& nwUser.Address}</i></h1></span>
        
      </div>
    </Tab>
    {/* <Tab style={{width:'100%'}} className='bg-light' eventKey="wishlist" title="Wishlist">
    <div>
    <WishList/>
        
      </div>
    </Tab> */}
    <Tab style={{width:'100%'}} className='bg-light' eventKey="order" title="My Orders" >
      <div>
      <Myorders/>
      </div>
    </Tab>
  </Tabs>
  )
}

export default Sidetab;

