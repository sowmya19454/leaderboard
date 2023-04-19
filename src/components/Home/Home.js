import React from 'react'
import "./Home.css"
import image1 from '../Images/image1.png';
import image2 from '../Images/image2.png';
import image3 from '../Images/image3.png';
import image4 from '../Images/image4.png';


const Home= () => {
  return (
    <div className='about'>
         <h3 style={{color:"#D5B4B4"}}>HIGHLIGHTS</h3>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  <div className="carousel-inner"  >
    <div className="carousel-item active"  >
            <img className="d-block w-100" src={image1} alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
    <h5 style={{color:"#000000"}}> All teams</h5>
  </div>
    </div>
    <div className="carousel-item">
            <img className="d-block w-100" src={image2} alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
    <h5 style={{color:"#000000"}}> India</h5>
  </div>
            
    </div>
    <div className="carousel-item"  >
      <img className="d-block w-100" src={image3} alt="Third slide"/>
      <div className="carousel-caption d-none d-md-block">
    <h5 style={{color:"#000000"}}>Competetors</h5>
  </div>
    </div>
    <div className="carousel-item">
            <img className="d-block w-100" src={image4} alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
    <h5 style={{color:"#000000"}}>Champions</h5>
  </div>
            
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
      </div>
    
       
    
    
  )
}
export default Home;