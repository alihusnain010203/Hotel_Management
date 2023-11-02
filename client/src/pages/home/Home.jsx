import './home.css'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Featured from '../../components/feature/Featured'
import ListProperty from '../../components/listproperty/ListProperty'
import FeatureProperty from '../../components/FeatureProperty/FeatureProperty'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse properties By type</h1>
        <ListProperty/>
        <h1 className='homeTitle'>Homes guest love</h1>
        <FeatureProperty/>
        
      </div><Footer/>
    </div>
  )
}

export default Home