import React from "react";

const PharmacySelect = (props) => {

    return(
    
        <fieldset>
            <label for={props.id}>{props.label}</label>
            <select id={props.id}>
                <option>Lees</option>
                <option>Smiths</option>
                <option>Walgreens</option>
                <option>Walmart</option>
            </select>
        </fieldset>
    )

}



export default PharmacySelect

