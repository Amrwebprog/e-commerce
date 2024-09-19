import { faRocketchat } from '@fortawesome/free-brands-svg-icons'
import {
  faMoneyCheckDollar,
  faShieldHalved,
  faTruck,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SmallAds from './SmallAds'

export default function FeaturesMenue() {
  return (
    <div className="p-2 d-flex flex-column gap-2">
      <SmallAds />
      <div className="card p-2">
        <div className="d-flex flex-row gap-2">
          <FontAwesomeIcon className="text-info" icon={faTruck} />
          <div className="d-flex flex-column gap-2">
            <h5 className="m-0"> Fast Delivery</h5>
            <p className="m-0">2-5 Days</p>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-row gap-2">
          <FontAwesomeIcon className="text-info" icon={faRocketchat} />
          <div className="d-flex flex-column gap-2">
            <h5 className="m-0">Online support</h5>
            <p className="m-0">Chat and Phone</p>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-row gap-2">
          <FontAwesomeIcon className="text-info" icon={faShieldHalved} />
          <div className="d-flex flex-column gap-2">
            <h5 className="m-0">order protection</h5>
            <p className="m-0">secured information</p>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-row gap-2">
          <FontAwesomeIcon className="text-info" icon={faMoneyCheckDollar} />
          <div className="d-flex flex-column gap-2">
            <h5 className="m-0">Money Back</h5>
            <p className="m-0">return over 14 days</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  )
}
