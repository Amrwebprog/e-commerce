import { faCartFlatbedSuitcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="headercolor position-sticky top-0 z-3">
      <div className="d-flex flex-row p-3 justify-content-between align-items-center container-xxl ">
        <div>
          <h1>logo</h1>
        </div>
        <div className="d-flex flex-row gap-3">
          <div>
            <Link to="/logreg" className="text-decoration-none">
              Login/Register
            </Link>
          </div>
          <div>
            <FontAwesomeIcon icon={faCartFlatbedSuitcase} />
          </div>
        </div>
      </div>
    </div>
  )
}
