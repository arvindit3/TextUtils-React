import React from 'react'



function  Alert (props) {
    const capitalise =(word) =>{
        word = word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1);    
      }
  return (
    <div style={{height: '70px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                        <strong>{capitalise(props.alert.type)}:</strong> {props.alert.msg}        
                      </div>}
    </div>
  )
}

export default Alert
