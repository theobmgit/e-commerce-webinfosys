import React from 'react'
import Header from "../header";
import Footer from "../footer";
import './style.css'
import {Link} from "react-router-dom";

const Index = () => {
    return (
        <>
            <Header/>
            <section className='hero my-5'>
                <div className='container fs-4'>
                    <div style={{padding: '0 10rem'}}>
                        <h1 className='display-1 fw-bold mb-5'>Cutting-edge
                            <span className='display-6 fw-normal d-block'>Shopping experience</span>
                        </h1>
                        <p className='mb-4'>Latest technology devices with 24/7 support and guarantee. Integrate once and never worry
                            about scaling again. TechMart ensures compatibility between ecosystem projects by
                            maintaining
                            a single global state as the network scales. Never deal with fragmented Layer 2 systems or
                            sharded chains.</p>
                        <Link to='/products'>
                            <button className='btn-special px-2 text-white fw-bold fs-1'>Let's Go</button>
                        </Link>
                    </div>
                </div>
                <img src={require("../../assets/images/index_scale_adoption.png")} alt="Homepage"
                     className='img-fluid'/>
            </section>
            <Footer/>
        </>
    )
}
export default Index
