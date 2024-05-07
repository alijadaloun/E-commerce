import React from "react"
import'./DescriptionBox.css'

const DescriptionBox=()=>{
    return (
        <div className='descriptionbox'>
          <div className="descriptionbox-navigator">
           <div className="descriptionbox-nav-box">Description</div>
           <div className="descriptionbox-nav-box fade">Reviews(122)</div>
         </div>
         <div className="descriptionbox-description">
          <p>An e-commerce website is an online platform where users can buy and sell products or services over the internet.
             Typically, these websites feature a user-friendly interface that allows customers to browse through various categories
              of products, view detailed descriptions and images, and make purchases securely using electronic payment methods.</p>
          <p>These are organized into categories and subcategories to help users navigate through the site easily. Each product listing typically includes images, descriptions, pricing,and sometimes reviews or ratings from other customers.</p>
             </div>
        </div>
        
    )
}
export default DescriptionBox