import React from "react";

const PharmacySelect = (props) => {
  return(
    <fieldset>
      <label for={props.id}>{props.label}</label>
      <select id={props.id} onChange={props.onPharmacyChanged}>
        <option>Lees</option>
        <option>Smiths</option>
        <option>Walgreens</option>
        <option>Walmart</option>
      </select>
    </fieldset>
  )
}

export default PharmacySelect

// this is a component that behaves like a normal HTML <select> element
// but that exposes some extra behavior
// and is specialized for selecting pharmacies
//
// the <select> `change` event is native HTML DOM behavior
// react exposes this as `onChange`
//
// this component expects a change event handler to be passed as a prop
