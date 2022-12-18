import React, {useEffect, useState} from "react";

const PharmacySelect = (props) => {

    

    

    return(
    
        <fieldset>
            <label for={props.id}>{props.label}</label>
            <select id={props.id} onChange={props.onChange()}>
                <option>Lees</option>
                <option>Smiths</option>
                <option>Walgreens</option>
                <option>Walmart</option>
            </select>
        </fieldset>
    )
}





export default PharmacySelect

