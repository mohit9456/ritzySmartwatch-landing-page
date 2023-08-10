import React from 'react'
import './style.css'

const Watches = () => {
    return (
        <div>
            <div className='container'>
                <nav className=' d-flex justify-content-between'>
                    <div className='d-flex'>
                        <img style={{ "border-radius": "50%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReouQyEnYyVRDUL1mebfJ_zsvldAAOKfW3Pg&usqp=CAU" alt="Boat Watches" height={90} width={130} />
                        <h1 style={{ "color": "crimson" }} className='fs-3 fw-bold mt-4 px-3'>Boat WaVe</h1>
                    </div>
                    <div className='mt-4 d-flex'>
                        <a href="https://www.boat-lifestyle.com/collections/smart-watches" className='text-decoration-none text-black'><p style={{ "background": "crimson", "borderRadius": "25%", "cursor": "pointer" }} className='p-3 fw-bold text-center'>Purchase Watches</p></a>
                    </div>

                </nav>
                <section className='mt-5 pt-5 text-white tme'>
                    <div className='text-center fw-bolder fs-4 tme-1'>
                        <span>Time Matters !!</span>
                    </div>
                    <h1 className='display-2 text-center fw-bolder'>The new reality is <br /> closer than you think</h1>
                    <div className="text-center mt-3">
                        To build the ultimate watch, We crafted every element
                    </div>
                    <div className='text-center'>
                        <a href="https://youtu.be/u6LatWkVWac">
                        <button className='btn mt-5 px-3 py-2 text-white' style={{ "background-color": "crimson" }}>
                            Watch video
                        </button>
                        </a>
                    </div>

                </section>
                <div className=' mt-5 pt-5 service'>
                    <div className="row service">
                        <div className="col-md-4 text-center mb-4 mb-md-0 cls">
                            <div className="card h-100 lerning text-white rounded-3" style={{ "backgroundColor": "rgb(24, 28, 29)", "color": "crimson" }} >
                                <i className="fa-solid fa-moon mx-5 mt-4 fs-1 fw-bold text-white"></i>
                                <div className="card-body mt-3" style={{ "font-family": "'Ubuntu', sans-serif" }}>
                                    <h4 className="fw-bold mb-4">Sleep Monitoring</h4>
                                    <p>Provide quick access laptop while front accessories</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center mb-4 mb-md-0 cls">
                            <div className="card h-100 lerning text-white rounded-3" style={{ "backgroundColor": "rgb(24, 28, 29)", "color": "crimson" }} >
                                <i className="fa-solid fa-bell mx-5 mt-4 fs-1 fw-bold text-white"></i>
                                <div className="card-body mt-3" style={{ "font-family": "'Ubuntu', sans-serif" }}>
                                    <h4 className="fw-bold mb-4">Get Notifications</h4>
                                    <p>Provide quick access laptop while front accessories</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center mb-4 mb-md-0 cls">
                            <div className="card h-100 lerning text-white rounded-3" style={{ "backgroundColor": "rgb(24, 28, 29)", "color": "crimson" }}>
                                <i className="fa-solid fa-stopwatch mx-5 mt-4 fs-1 fw-bold text-white"></i>
                                <div className="card-body mt-3" style={{ "font-family": "'Ubuntu', sans-serif" }}>
                                    <h4 className="fw-bold mb-4">Smart Alarm</h4>
                                    <p>Provide quick access laptop while front accessories</p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mt-5 pt-5 service">
                    <div className="row service">
                        <div className="col-md-12 mb-4 mb-md-0 service">
                            <div class="card cls">
                                <h5 class="card-header bg-black text-white">Our Services</h5>
                                <div class="card-body text-white " style={{ "backgroundColor": "rgb(24, 28, 29)" }}>
                                    <h5 class="card-title">Laxmi Nagar, Delhi</h5>
                                    <p class="card-text">BT-Globe Connexion & Services (Laxmi Nagar, DL), 47-A, Vijay Block, Behind Nathu Sweet, Opp. Pillar No. 53, Laxmi Nagar, Delhi 110092 <br />Customer Care: 011-42486680</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <footer className="mt-5 pt-2 d-flex justify-content-between text-white" style={{ "backgroundColor": "rgb(24, 28, 29)" }}>
                <div className='mx-5 mt-3'>
                    <a href="https://www.twitter.com" style={{"color" : "crimson"}}><i class="fa-brands fa-twitter fs-3  mx-3"></i></a>
                    <a href="https://www.instagram.com" style={{"color" : "crimson"}}><i class="fa-brands fa-instagram fs-3 mx-3 fw-bold"></i></a>
                </div>
                <div className=' mt-2 d-flex flex-column text-center mx-5 mb-3' style={{"color" : "crimson"}}>
                    <a href="https://www.github.com/mohit9456" className='text-decoration-none text-white ' ><span className='fs-5'>Documentation</span></a>
                    <span>Feedback</span>
                </div>

            </footer>
        </div>
    )
}

export default Watches
