import React from "react";
import pic from "../images/mine.jpg";
export default function Section(){
    return (
                    
                    <div className="container">

                        <div className="row row-cols-1 row-cols-md-3  g-4 p-3">
                        <div className="col">
                            <div className="card h-100">
                            <img src= {pic}className="card-img-top bg-dark"  alt="..." />
                            <div className="card-body bg-dark text-white">
                                <h2 className="card-title text-center">Joshua Amarfio</h2>
                                <h5 className="info text-center">Front-end Developer</h5>
                                <h6 className="info text-center">mywebsite.com</h6>
                                <div className="d-grid gap-2">
                                <button className="btn btn-outline-primary">
                                 <i className="fa fa-envelope"> </i> 
                                    &nbsp; Email</button>
                                </div>
                                <p></p>
                                <h4 className="info align-left">About</h4>
                                <p className="card-text">I am a front-end developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices and am always looking for new things to learn</p>
                                <h4 className="info align-left">Interests</h4>
                                <p className="card-text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Enterpreneur. Travel geek. Pop culture ninja. Coffee fanatic</p>
                            </div>
                            <div className="card-footer text-center bg-dark">
                            <a href="#" className="text-white"><i className="fa fa-facebook p-2" aria-hidden="true"></i></a>
                            <a href="#" className="text-white"><i className="fa fa-twitter p-2" aria-hidden="true"></i></a>
                            </div>
                            </div>
                        </div>
                        
                        </div>


                    </div>
    );
}