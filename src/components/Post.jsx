import React from "react"

export default function Post ({post}) {
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-title">{post.title}</div>
            </div>
        </div>
    )
}