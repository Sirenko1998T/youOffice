import React from "react";
let termsData = [
   {
      title: "1. Information About Us",
      content: [
         "1.1 www.homenoffice.sg is a site operated by Home n Office Products Pte. Ltd. We are registered in Singapore under the Business Registration Number 201312469W and with our registered office at 4 Changi South Lane #07-01/02, Singapore 486127. Our GST Registration Number is 201312469W."
      ]
   },
   {
      title: "2. Service Availability",
      content: [
         "2.1 Our site is only intended for use by people residing, businesses, and companies in Singapore (\"the Serviced Country\"). We do not accept orders from individuals outside of the Serviced Country."
      ]
   },
   {
      title: "3. Your Status",
      content: [
         "3.1 By placing an order through our site, you warrant that:",
         "3.1.1 You are legally capable of entering into binding contracts;",
         "3.1.2 You are resident in the Serviced Country."
      ]
   },
   {
      title: "4. How the Contract is formed between You and Us",
      content: [
         "4.1 After placing an online order, you will receive an e-mail from us acknowledging that we have received your order. Please note that this does not mean that your order has been accepted. Your order constitutes an offer to us to buy a Product. All online orders are subject to acceptance by us, and we will confirm such acceptance to you by email. The contract between us ('the Contract') will only be formed when we deliver the items to you.",
         "4.2 Subjected to actual stock availability, item orders may be replaced with alternatives subjected to a verbal or written confirmation with you. For items that cannot be replaced, we will contact you to give you the option to cancel. If payment has been made, you will be refunded of the amount paid.",
         "4.3 All orders placed online will be fulfilled within 5 business days unless otherwise advised. Business days exclude Saturday, Sunday and Public Holidays.",
         "4.4 You are obliged to make payment in FULL by the payment option you select when you check out your orders.",
         "4.5 Each batch of goods may differ due to manufacturing constraints. In the event if you are not satisfied with any products, you may return to us within 14 days after delivery. The Product must be unused in the Original condition and it must not be pre-order product. Please refer to our return & refund policy."
      ]
   },
   {
      title: "5. Our Status",
      content: [
         "5.1 We may provide links on our site to the websites of other companies, whether affiliated with us or not. We cannot give any undertaking that the products you purchase from companies to whose website we have provided a link will be of satisfactory quality."
      ]
   },
   {
      title: "6. Price and Payment",
      content: [
         "6.1 The price of any Products will be as quoted on our site from time to time, except in cases of obvious error.",
         "6.2 Our site contains a large number of Products and it is always possible that, despite our best efforts, some of the Products listed on our site may be incorrectly priced. We will normally verify prices as part of our dispatch procedures so that, where a Product's correct price is less than our stated price, we will charge the lower amount when dispatching the Product to you. If a Product’s correct price is higher than the price stated on our site we might at our discretion decide to honour the lower (incorrect) price or either contact you for instructions before dispatching the Product, or reject your order and notify you of such rejection.",
         "6.3 We are under no obligation to provide the Product to you at the incorrect (lower) price even after we have provided you with an email confirmation."
      ]
   },
   {
      title: "7. Our Liability",
      content: [
         "7.1 We warrant to you that any Product purchased from us through our site is of satisfactory quality.",
         "7.2 Our liability in connection with any Product purchased through our site is strictly limited to the purchase price of that Product.",
         "7.3 Unless otherwise stated, all products warranty will be covered by the respective brand owner."
      ]
   },
   {
      title: "8. Notices",
      content: [
         "8.1 All notices given by you to us must be given to Home n Office Products Pte. Ltd. at 4 Changi South Lane #07-01/02, Singapore 486127. We may give notice to you either via an e-mail or postal address that you provided to us when placing an order."
      ]
   },
   {
      title: "9. Events Outside our Control",
      content: [
         "9.1 We will not be liable or responsible for any failure to perform, or delay in performance of, any of our obligations under a Contract that is caused by events outside our reasonable control ('Force Majeure Event').",
         "9.2 A Force Majeure Event includes any act, event, non-happening, omission or accident beyond our reasonable control and includes in particular (without limitation) the following:",
         "9.2.1 strikes, lock-outs or other industrial action;",
         "9.2.2 civil commotion, riot, invasion, terrorist attack or threat of terrorist attack, war (whether declared or not) or threat or preparation for war;",
         "9.2.3 fire, explosion, storm, flood, earthquake, subsidence, epidemic or other natural disaster;",
         "9.2.4 impossibility of the use of railways, shipping, aircraft, motor transport or other means of public or private transport;",
         "9.2.5 impossibility of the use of public or private telecommunications networks; or",
         "9.2.6 the acts, decrees, legislation, regulations or restrictions of any government.",
         "9.3 Our performance under any Contract is deemed to be suspended for the period that the Force Majeure Event continues, and we will have an extension of time for performance for the duration of that period. We will use our reasonable endeavours to bring the Force Majeure Event to a close or to find a solution by which our obligations under the Contract may be performed despite the Force Majeure Event."
      ]
   },
   {
      title: "10. Waiver",
      content: [
         "10.1 If we fail, at any time during the term of a Contract, to insist upon the strict performance of any of your obligations under the Contract or any of these Terms and Conditions, or if we fail to exercise any of the rights or remedies to which we are entitled under the Contract, this shall not constitute a waiver of such rights or remedies and shall not relieve you from compliance with such obligations.",
         "10.2 A waiver by us of any default shall not constitute a waiver of any subsequent default.",
         "10.3 No waiver by us of any of these Terms and Conditions shall be effective unless it is expressly stated to be a waiver and is communicated to you in writing."
      ]
   },
   {
      title: "11. Severability",
      content: [
         "11.1 If any of these Terms and Conditions or any provisions of a Contract are determined by any competent authority to be invalid, unlawful or unenforceable to any extent, such term, condition or provision will to that extent be severed from the remaining terms, conditions and provisions which will continue to be valid to the fullest extent permitted by law."
      ]
   },
   {
      title: "12. Entire Agreement",
      content: [
         "12.1 These Terms and Conditions and any document expressly referred to in them represent the entire agreement between us in relation to the subject matter of any Contract and supersede any prior agreement, understanding or arrangement between us, whether oral or in writing.",
         "12.2 We each acknowledge that, in entering into a Contract, neither of us has relied on any representation, undertaking or promise given by the other and that nothing may be implied from anything said or written in negotiations between us prior to such Contract except as expressly stated in these Terms and Conditions.",
         "12.3 Neither of us shall have any remedy in respect of any untrue statement made by the other, whether orally or in writing, prior to the date of any Contract (unless such untrue statement was made fraudulently) and the other party’s only remedy shall be for breach of contract as provided in these Terms and Conditions."
      ]
   },
   {
      title: "13. Our Right to Vary these Terms and Conditions",
      content: [
         "13.1 We have the right to revise and amend these Terms and Conditions from time to time.",
         "13.2 You will be subject to the Policies and Terms and Conditions in force at the time that you order Products from us, unless any change to those Policies or these Terms and Conditions is required to be made by law or governmental authority (in which case it will apply to orders previously placed by you), or if we notify you of the change to those Policies or these Terms and Conditions before we provide you with the Dispatch Confirmation (in which case we have the right to assume that you have accepted the change to the Terms and Conditions, unless you notify us to the contrary within seven working days of receipt by you of the Products)."
      ]
   },
   {
      title: "14. Law and Jurisdiction",
      content: [
         "14.1 Contracts for the purchase of Products through our site will be governed by the Law of Singapore. Any dispute arising from, or related to, such Contracts shall be subject to the non-exclusive jurisdiction of the Courts of The Republic of Singapore."
      ]
   }
];
export default function TermsCondditions() {
   return (

      <>
         <h1>Terms & Conditions</h1>
         {termsData.map((i) => (
            <>
               <h3>{i.title}</h3>
               <div> {i.content}</div>
            </>
         )

         )}
      </>
   );
}