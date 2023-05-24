import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp"
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = () => {
    return <div className="product-card">
        <Link className="link" to="product/1">
        <div className="thumbnail">
            <img src="https://cdn.shopify.com/s/files/1/0600/3680/8804/products/packof3.png?v=1664437358&width=360" alt="" />
        </div>
        
        <div className="product-details">
            <span className="name">Product Name</span>
            <span className="price">₹ Product Price</span>
            <div className="cart-buttons">
                        <button className="add-to-cart-button">
                            <FaCartPlus size={20}/>
                            Add to Cart
                        </button>
                    </div>

        </div>
        </Link>
    </div>;
};

export default Product;
