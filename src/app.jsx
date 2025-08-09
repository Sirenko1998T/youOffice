import React from 'react';
import { useState } from 'react';
export default function FAQ() {
   let [open, setOpen] = useState(Array(11).fill(false));
   function toggle(index) {
      let newArr = [...open];
      newArr[index] = !newArr[index];
      setOpen(newArr);
   }
   return (
      <>
         <h1>Frequently Asked Questions</h1>
         <h3>Frequently Asked Questions (FAQ)</h3>
         <Questions title='IMPORTANT: Requirements for Online Prices' description={open[0] && (<><div>Requirements</div> 1. Credit Card / Bank Transfer Payment </>)} onClick={() => toggle(0)} />
         <Questions title='Cash / Cheque On Delivery (Retail Price)' description={open[1] && (<>Cash / Cheque Payment ( <span>Calculated </span> at <span> Retail Prices</span>)(Same as our Retail Outlet's Selling Price)</>)} onClick={() => toggle(1)} />
         <Questions title='Order Status Updates (Email Notifications)' description={open[2] && (<> <div>Order Received     -  Order not yet processed</div> <div> Order Processing  -  Order processed and sent for packing</div> <div> Order Shipped      -  Order shipped out from warehouse, delivery likely within the same day</div></>)} onClick={() => toggle(2)} />
         <Questions title='Delivery Lead Time & Timing' description={open[3] && (<> <span>Lead Time</span>: Delivered within <span>5 Working Days </span>(excluding Sat, Sun & Public Holidays)<span>Delivery Hours:</span> Monday to Friday, During Office Hours (10.00am – 6.00pm) </>)} onClick={() => toggle(3)} />
         <Questions title='Delivery Charges' description={open[4] && (<> <div> Up to $100        -   $10.90</div> <div> $100 to $200     -   $5.45</div> <div> $200 & Above   -   FREE</div> <p>Kindly note, free delivery only applies to lift access floor level.If stair climbing is required, additional charges will apply.</p></>)} onClick={() => toggle(4)} />
         <Questions title='Return & Refund' description={open[5] && (<> See Return & Refund Policy or <a href="#"> Click Here</a></>)} onClick={() => toggle(5)} />
         <Questions title='Self-Collection (FREE Delivery)' description={open[6] && (<>  <a href="#"> Click Here</a> for Outlet Address <a href="#"> Click Here</a></>)} onClick={() => toggle(6)} />
         <Questions title='Payment Modes Available' description={open[7] && (<> <div>1.PayNow </div> <div>2.Credit Card (Visa, Master, Amex, Discover)</div> <div>3.Bank Transfer (DBS, OCBC, UOB)</div> <div>4.PayPal</div> <div>5.Cash on Delivery <span>(Retail Price)</span> </div> <div>Cheque on Delivery <span>(Retail Price)</span></div>  </>)} onClick={() => toggle(7)} />
         <Questions title='Forgot Password?' description={open[8] && (<> Click span <span> forgot password? </span>at the Login Page or  <a href="#"> Click Here</a></>)} onClick={() => toggle(8)} />
         <Questions title='Change Account Details?' description={open[9] && (<> Click <span>‘My Account’</span>  after Login or <a href="#"> Click Here</a></>)} onClick={() => toggle(9)} />
         <Questions title='Email Us At: ' description={open[10] && (<> Email Us At: <a href="#"> enquiry@homenoffice.sg</a></>)} onClick={() => toggle(10)} />









      </>
   )
}

function Questions({ title, description, onClick }) {
   return (
      <div>
         <h4 onClick={onClick}>{title}</h4>
         <p>{description}</p>
      </div>
   );
}