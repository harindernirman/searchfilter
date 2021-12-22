import React from "react";
import { Component } from "react/cjs/react.production.min";
import "./Addinfo.css";

class Addinfo extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            "id": "",
            "name": "",
            "info": ""
        };
    }
    idChangedHandler = (event) => {
        this.setState({
            id: event.target.value
        });
        console.log(this.state);
    }
    nameChangedHandler = (event) => {
        this.setState({
            name: event.target.value
        });
        console.log(this.state);
    }
    infoChangedHandler = (event) => {
        this.setState({
            info: event.target.value
            
        });
        console.log(this.state);
        
    }
    render() {
        return (
            <div >
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">ID</label>
                            <input type="text" className="form-control" onChange={this.idChangedHandler} id="exampleFormControlInput1" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Name</label>
                            <input type="text" className="form-control" onChange={this.nameChangedHandler} id="exampleFormControlInput1" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Description</label>
                            <textarea name="info" className="form-control" id="exampleFormControlTextarea1" onChange={this.infoChangedHandler} rows="3"></textarea>
                        </div>
                        <button type="button" onClick={() => { this.props.clickNow(this.state) }} className="btn btn-primary mt-3">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
};

export default Addinfo;