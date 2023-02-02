import React from 'react'
import "../assets/css/mystyle.css"
import pic1 from "../assets/images/pic5.jpg"
import pic2 from "../assets/images/pic6.jpg"
import pic3 from "../assets/images/pic7.jpg"
import p1 from "../assets/images/p1.jpg"
import p2 from "../assets/images/p2.jpg"
import p3 from "../assets/images/p3.jpg"
import p4 from "../assets/images/p4.jpg"
import p5 from "../assets/images/p5.jpg"
import p6 from "../assets/images/p6.jpg"
import p7 from "../assets/images/p7.jpg"
import p8 from "../assets/images/p8.jpg"
import p9 from "../assets/images/p9.jpg"
import p10 from "../assets/images/p10.jpg"
import p11 from "../assets/images/p11.jpg"
import p12 from "../assets/images/p12.jpg"
import p13 from "../assets/images/p13.jpg"
import p14 from "../assets/images/p14.jpg"
import p15 from "../assets/images/p15.jpg"
import p16 from "../assets/images/p16.jpg"
import p17 from "../assets/images/p17.jpg"
import p18 from "../assets/images/p18.jpg"
import p19 from "../assets/images/p19.jpg"
import p20 from "../assets/images/p20.jpg"
export default function BootstrapExampleF() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light background fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-light active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-light dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light disabled">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <br></br>
            <br></br>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={pic1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={pic2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={pic3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <h5 className='background text-light text-center p-2 mt-1'>Product Section</h5>
            <div className='row'>
                <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className="card">
                        <img src={p1} className="card-img-top" height="300px" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Adidas Man Jeans Slim Fit</h5>
                                <p className="card-text">Price &#8377;<del>5000</del> 2500</p>
                                <p className="card-text">Discount 50%</p>
                                <a href="#" className="btn background text-light w-100">Add to Cart</a>
                            </div>
                    </div>
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className="card">
                        <img src={p2} className="card-img-top" height="300px" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Adidas Man Jeans Slim Fit</h5>
                                <p className="card-text">Price &#8377;<del>5000</del> 2500</p>
                                <p className="card-text">Discount 50%</p>
                                <a href="#" className="btn background text-light w-100">Add to Cart</a>
                            </div>
                    </div>
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className="card">
                        <img src={p3} className="card-img-top" height="300px" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Adidas Man Jeans Slim Fit</h5>
                                <p className="card-text">Price &#8377;<del>5000</del> 2500</p>
                                <p className="card-text">Discount 50%</p>
                                <a href="#" className="btn background text-light w-100">Add to Cart</a>
                            </div>
                    </div>
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className="card">
                        <img src={p4} className="card-img-top" height="300px" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Adidas Man Jeans Slim Fit</h5>
                                <p className="card-text">Price &#8377;<del>5000</del> 2500</p>
                                <p className="card-text">Discount 50%</p>
                                <a href="#" className="btn background text-light w-100">Add to Cart</a>
                            </div>
                    </div>
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className="card">
                        <img src={p5} className="card-img-top" height="300px" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Adidas Man Jeans Slim Fit</h5>
                                <p className="card-text">Price &#8377;<del>5000</del> 2500</p>
                                <p className="card-text">Discount 50%</p>
                                <a href="#" className="btn background text-light w-100">Add to Cart</a>
                            </div>
                    </div>
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className="card">
                        <img src={p6} className="card-img-top" height="300px" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Adidas Man Jeans Slim Fit</h5>
                                <p className="card-text">Price &#8377;<del>5000</del> 2500</p>
                                <p className="card-text">Discount 50%</p>
                                <a href="#" className="btn background text-light w-100">Add to Cart</a>
                            </div>
                    </div>
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className="card">
                        <img src={p7} className="card-img-top" height="300px" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Adidas Man Jeans Slim Fit</h5>
                                <p className="card-text">Price &#8377;<del>5000</del> 2500</p>
                                <p className="card-text">Discount 50%</p>
                                <a href="#" className="btn background text-light w-100">Add to Cart</a>
                            </div>
                    </div>
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className="card">
                        <img src={p8} className="card-img-top" height="300px" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Adidas Man Jeans Slim Fit</h5>
                                <p className="card-text">Price &#8377;<del>5000</del> 2500</p>
                                <p className="card-text">Discount 50%</p>
                                <a href="#" className="btn background text-light w-100">Add to Cart</a>
                            </div>
                    </div>
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className="card">
                        <img src={p9} className="card-img-top" height="300px" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Adidas Man Jeans Slim Fit</h5>
                                <p className="card-text">Price &#8377;<del>5000</del> 2500</p>
                                <p className="card-text">Discount 50%</p>
                                <a href="#" className="btn background text-light w-100">Add to Cart</a>
                            </div>
                    </div>
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className="card">
                        <img src={p10} className="card-img-top" height="300px" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Adidas Man Jeans Slim Fit</h5>
                                <p className="card-text">Price &#8377;<del>5000</del> 2500</p>
                                <p className="card-text">Discount 50%</p>
                                <a href="#" className="btn background text-light w-100">Add to Cart</a>
                            </div>
                    </div>
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className="card">
                        <img src={p11} className="card-img-top" height="300px" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Adidas Man Jeans Slim Fit</h5>
                                <p className="card-text">Price &#8377;<del>5000</del> 2500</p>
                                <p className="card-text">Discount 50%</p>
                                <a href="#" className="btn background text-light w-100">Add to Cart</a>
                            </div>
                    </div>
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className="card">
                        <img src={p12} className="card-img-top" height="300px" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Adidas Man Jeans Slim Fit</h5>
                                <p className="card-text">Price &#8377;<del>5000</del> 2500</p>
                                <p className="card-text">Discount 50%</p>
                                <a href="#" className="btn background text-light w-100">Add to Cart</a>
                            </div>
                    </div>
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className="card">
                        <img src={p13} className="card-img-top" height="300px" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Adidas Man Jeans Slim Fit</h5>
                                <p className="card-text">Price &#8377;<del>5000</del> 2500</p>
                                <p className="card-text">Discount 50%</p>
                                <a href="#" className="btn background text-light w-100">Add to Cart</a>
                            </div>
                    </div>
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className="card">
                        <img src={p14} className="card-img-top" height="300px" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Adidas Man Jeans Slim Fit</h5>
                                <p className="card-text">Price &#8377;<del>5000</del> 2500</p>
                                <p className="card-text">Discount 50%</p>
                                <a href="#" className="btn background text-light w-100">Add to Cart</a>
                            </div>
                    </div>
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className="card">
                        <img src={p15} className="card-img-top" height="300px" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Adidas Man Jeans Slim Fit</h5>
                                <p className="card-text">Price &#8377;<del>5000</del> 2500</p>
                                <p className="card-text">Discount 50%</p>
                                <a href="#" className="btn background text-light w-100">Add to Cart</a>
                            </div>
                    </div>
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className="card">
                        <img src={p16} className="card-img-top" height="300px" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Adidas Man Jeans Slim Fit</h5>
                                <p className="card-text">Price &#8377;<del>5000</del> 2500</p>
                                <p className="card-text">Discount 50%</p>
                                <a href="#" className="btn background text-light w-100">Add to Cart</a>
                            </div>
                    </div>
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className="card">
                        <img src={p17} className="card-img-top" height="300px" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Adidas Man Jeans Slim Fit</h5>
                                <p className="card-text">Price &#8377;<del>5000</del> 2500</p>
                                <p className="card-text">Discount 50%</p>
                                <a href="#" className="btn background text-light w-100">Add to Cart</a>
                            </div>
                    </div>
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className="card">
                        <img src={p18} className="card-img-top" height="300px" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Adidas Man Jeans Slim Fit</h5>
                                <p className="card-text">Price &#8377;<del>5000</del> 2500</p>
                                <p className="card-text">Discount 50%</p>
                                <a href="#" className="btn background text-light w-100">Add to Cart</a>
                            </div>
                    </div>
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className="card">
                        <img src={p19} className="card-img-top" height="300px" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Adidas Man Jeans Slim Fit</h5>
                                <p className="card-text">Price &#8377;<del>5000</del> 2500</p>
                                <p className="card-text">Discount 50%</p>
                                <a href="#" className="btn background text-light w-100">Add to Cart</a>
                            </div>
                    </div>
                </div>
                <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className="card">
                        <img src={p20} className="card-img-top" height="300px" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Adidas Man Jeans Slim Fit</h5>
                                <p className="card-text">Price &#8377;<del>5000</del> 2500</p>
                                <p className="card-text">Discount 50%</p>
                                <a href="#" className="btn background text-light w-100">Add to Cart</a>
                            </div>
                    </div>
                </div>
            </div>
            <footer className='background text-light text-center p-5'>
                <p>copyright@mysite.com</p>
            </footer>
        </>
    )
}
