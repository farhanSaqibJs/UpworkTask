import React from "react";
import './style.less'
import {Link} from "react-router-dom";
import {CheckOutlined} from "@ant-design/icons";

const PaymentCard = () => {
  return (
    <>
      <div className="cardPreContent">
        <div className="sectionTitle">
          <h1>Selected plan</h1>
          <p>
            Pay one subscription and visit different gyms. Use our app as a ticket to the gyms
          </p>
        </div>
      </div>
      <div className="paymentCard">
        <div className="cardHead">
          <h2><label htmlFor="">49</label> <p>$</p> <span>/Month</span></h2>
        </div>
        <div className="planType" style={{
          backgroundImage: `url(./paymentCardType.png)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
          <h3>Gold</h3>
        </div>

        <div className="planPoints">
          <ul>
            <li>
              <label><CheckOutlined /></label>
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <label><CheckOutlined /></label>
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <label><CheckOutlined /></label>
              <p>Lorem ipsum dolor sit.</p>
            </li>
          </ul>
        </div>

        <div style={{textTransform: 'uppercase', marginTop: '50px', textAlign: 'center'}}>
          <Link to="./login">Discover related gyms</Link>
        </div>
      </div>
    </>
  );
}

export default PaymentCard;