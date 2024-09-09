import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import lap from '../assets/lap.jpg'
export default function Card(props) {
  return (
    <>
      <div className="col-6 col-md-3 col-lg-3">
        <div className="product-card col-12 overflow-visible">
          <div className="product-image position-relative">
            <img src={lap} alt="Product" className="img-fluid" />

            <span id="ProductStatus" className="badge bg-success new">
              {props.brand}
            </span>
            <div className="overlay d-flex flex-column justify-content-center align-items-center">
              <FontAwesomeIcon
                id="myIcon"
                className="text-white bg-primary p-2 rounded-circle"
                icon={faEye}
              />
              <button className="btn btn-primary add-to-cart mt-2">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="product-info text-center p-3">
            <h3 className="product-name">{props.productName}</h3>
            <p className="product-description">{props.description}</p>
            <p className="product-price">{props.price}</p>
          </div>
        </div>
      </div>
    </>
  )
}
