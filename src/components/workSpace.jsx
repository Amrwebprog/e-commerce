import { faGrip, faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useParams } from 'react-router-dom'
import Card from './Card'

export default function WorkSpace() {
  let allProducts = JSON.parse(localStorage.getItem('Allproducts'))
  console.log(allProducts)

  const { cat } = useParams()

  let filteredProducts = !cat
    ? allProducts
    : allProducts.filter(
        (el) => el.Categores.toLowerCase() == cat.toLowerCase()
      )
  console.log(filteredProducts)
  return (
    <>
      <div className="d-flex flex-column gap-4 col-12 p-4">
        <div className="d-flex flex-column gap-2">
          <h2 className="mb-0">Laptops</h2>
          <div id="line" className="col-12">
            <div id="line-tow" className="col-3"></div>
          </div>
        </div>
        <div className="d-flex flex-row gap-1">
          <FontAwesomeIcon
            id="myIcon"
            className="text-white bg-primary p-1"
            icon={faGrip}
          />
          <FontAwesomeIcon
            id="myIcon"
            className="text-white bg-secondary p-1"
            icon={faList}
          />
        </div>
        <div className="d-flex flex-row flex-wrap col-12 row g-3">
          {filteredProducts.length != 0 ? (
            filteredProducts.map((el, index) => (
              <Card
                key={index}
                productName={el.product_name}
                brand={el.brand}
                price={el.price}
                description={el.description}
                Specifications={el.Specifications}
              />
            ))
          ) : (
            <h1 className="text-danger">هذة الفئة لم تعد متاحة</h1>
          )}
        </div>
      </div>
    </>
  )
}
