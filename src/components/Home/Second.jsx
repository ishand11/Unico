import React from 'react'
import Category from './Category/Category'
import Products from '../Products/Products'
import Newsletter from '../Footer/Newsletter/Newsletter'
import "./Second.scss"

const Second = () => {
  return (
    <div>
      <div className="main-content">
        <div className="layout">
            <Category/>
            <Products headingText={"Top Sellers"}/>
            <Products headingText={"New Arrivals"}/>
            <Products headingText={"on sale"}/>
        </div>
      </div>
      <Newsletter/>

    </div>
  )
}

export default Second
