import React from "react";
import Button from "../components/button";
export default function Logout() {
   return (
      <>
         <h1>Account Logout</h1>
         <p>You have been logged off your account. It is now safe to leave the computer.

            Your shopping cart has been saved, the items inside it will be restored whenever you log back into your account.</p>
         <Button label='CONTINUE' />
      </>
   )
}