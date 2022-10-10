import React from 'react'

export default function Alert(props) {

    const capitalize = (value)=>{
        let lower = value.toLowerCase()
        return lower[0].toUpperCase() + lower.slice(1)
        
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
  <strong>{capitalize(props.alert.type)}:</strong> {props.alert.message}
</div>
  )
}
