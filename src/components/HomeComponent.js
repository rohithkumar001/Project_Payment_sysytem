import React from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import $ from 'jquery';
import { useState, useEffect } from "react";
import axios from 'axios';
const HomeComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    axios.get("https://2eeb-15-207-119-101.in.ngrok.io/transaction/getall").then((data) => {
        console.log(data);
    });

    return (
        <div className="container m-0 p-0 ">
            <div className="Header row bg-primary col-12 m-0" style={{ height: '50px' }}>
            </div>
            <div className="row mt-2">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            <form>
                                <input className="col md-4 m-1" type="text" name="sendername" placeholder="Sender Name"></input>
                                <input className="col md-4 m-1" type="text" name="senderacno" placeholder="Sender A/C No" minLength={9} maxLength={10}></input>
                                <input className="col md-1 m-1" type="text" name="amount" placeholder="Amount"></input>
                                <Dropdown>
                                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                                        Transfer Type
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item value="1">Customer Transfer</Dropdown.Item>
                                        <Dropdown.Item value="2">Bank Transfer</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <div className="btn btn-primary btn-md">transfer</div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <form>
                                <input className="col md-4 m-1" type="text" name="recievername" placeholder="Reciever Name"></input>
                                <input className="col md-4 m-1" type="text" name="recieveracno" placeholder="Reciever A/C No"></input>
                                <input className="col md-4 m-1" type="text" name="bic" placeholder="BIC"></input>
                                <input className="col md-4 m-1" type="text" name="institutionname" placeholder="Institution name"></input>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent;