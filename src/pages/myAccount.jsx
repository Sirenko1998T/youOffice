import React from "react";
import AccountBlock from "../components/accountBlock";

export default function MyAccount() {
   return (
      <>
         <AccountBlock title='Update My Profile' subtitle='Access your account details' />
         <AccountBlock title='Update My Password' subtitle='
Keeps your security accesses in check' />
         <AccountBlock title='My Order History' subtitle='Keeps track of your orders' />
         <AccountBlock title='My Address Book' subtitle='
Keeps track of your addresses' />
         <AccountBlock title='
My Wishlist' subtitle='Keeps track of your wishlist' />
      </>
   )
}











