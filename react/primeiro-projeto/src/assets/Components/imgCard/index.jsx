import React from 'react'
import "./style.css"

export default function ImgCard(props) {
  return (
    <div className="image-card">
        <p className="image-card-caption">
            {props.caption}
        </p>
    </div>
  )
}
