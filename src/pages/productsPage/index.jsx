import FilterMenue from '../../components/FilterMenue'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import WorkSpace from '../../components/workSpace'
import './index.scss'
export default function ProductsPage() {
  return (
    <>
      <Header />
      <NavBar />
      <div className="container-xxl d-flex flex-row gap-2 pt-5 flex-wrap">
        <div className="col-12 col-lg-3 col-sm-3 pt-3">
          <FilterMenue />
        </div>
        <div className="col-12 col-lg-7 col-sm-7 pt-3">
          <WorkSpace />
        </div>
      </div>
      <Footer />
    </>
  )
}
