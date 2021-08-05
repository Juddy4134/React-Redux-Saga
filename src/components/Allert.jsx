import React from "react"

export const Allert = ({text})=>{
    return (
        <div className="alert alert-danger" role="alert">
            {text}
        </div>
    )
}