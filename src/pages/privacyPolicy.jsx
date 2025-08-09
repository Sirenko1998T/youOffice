import React from "react";
import privacyPolicy from "../files/privacyPolicy.json";
export default function PrivacyPolicy() {
   return (
      <>
         <h1>Privacy Policy</h1>
         {privacyPolicy.map((item, index) => (
            <PrivacyPolicySection key={index} title={item.title} content={item.sections} />
         ))}
      </>
   );
}
function PrivacyPolicySection({ title, content }) {
   return (
      <div>
         <h3>{title}</h3>
         <div>{content.map((i, index) => (
            <p key={index}>{i}</p>
         ))}</div>
      </div>
   );
}  