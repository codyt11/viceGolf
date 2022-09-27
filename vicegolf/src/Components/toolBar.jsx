import {React, useState} from "react";
import './toolBar.css';
import Flag from '../images/USA.svg';
import Phone from '../images/phone.svg';

function ToolBar() {
    
    return(
        <div className="text-center bg-light" >
            <div className="row d-flex justify-content-between w-100 topRow">
                <div className="col-4 h-100 d-flex justify-content-between align-items-center">
                    <div className="selector align-items-center d-flex">
                        <select className="test bg-light"></select>
                        <img className="flag" src={Flag} alt="" />
                        <h4 className="country">USA</h4>
                    </div>
                    <div className="order d-flex w-100 mx-5 align-items-center">
                        <img className="phone mx-1" src={Phone} alt="" />
                        <a className="order text-decoration-none text-dark">ORDER BY PHONE</a>
                    </div>
                </div>
                <div className="col-3 cart d-flex h-100">
                    <div className="title d-flex flex-column">
                        <div className="fst-italic vice">VICE</div>
                        <div className="fs-5 fw-bold cart">CART</div>
                    </div>
                    <h1 className="number">0</h1>
                </div>
            </div>
        </div>
    )
}

export default ToolBar