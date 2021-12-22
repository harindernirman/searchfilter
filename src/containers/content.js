import React from "react";
import "./content.css"

class content extends React.Component {
    constructor(prop) {
        super();
        this.prop = prop;
    }
    render() {
        return (
            <>
                <div className="col mx-3 my-5">
                    <h1>{this.prop.id}</h1>
                    <hr />
                    <h2>{this.prop.name}</h2>
                    <p className="text-center">{this.prop.info}</p>
                </div>
            </>
        );
    }
}

export default content

