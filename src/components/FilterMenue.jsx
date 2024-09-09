import { Link, useLocation } from 'react-router-dom'

export default function FilterMenue() {
  const location = useLocation()
  const newPathname = location.pathname.replace(/^\//, '')
  const finalPathname = newPathname.replace(/\//g, ' / ')
  console.log(location.pathname)
  return (
    <>
      <div className="col-12 d-flex flex-column">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {finalPathname}
            </li>
          </ol>
        </nav>
        <div className="col-12 d-flex flex-column gap-1">
          <div className="col-12 border d-flex align-items-center gap-2">
            <div
              id="openFilter"
              className="p-1 bg-primary col-2 d-flex justify-content-center align-items-center "
            >
              +
            </div>
            <h2 className="m-0">brand</h2>
          </div>
          <div className="col-12 border d-flex align-items-center gap-2">
            <div
              id="openFilter"
              className="p-1 bg-primary col-2 d-flex justify-content-center align-items-center "
            >
              +
            </div>
            <h2 className="m-0">Stock</h2>
          </div>
          <div className="col-12 border d-flex align-items-center gap-2">
            <div
              id="openFilter"
              className="p-1 bg-primary col-2 d-flex justify-content-center align-items-center "
            >
              +
            </div>
            <h2 className="m-0">price</h2>
          </div>
        </div>
      </div>
    </>
  )
}
