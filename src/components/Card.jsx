import React from "react";

export default function Card(props) {
  return (
    <>
    <div className="itemOne">
    <div className="item">
      <img src={props.item.imageUrl} className="card--image" />
      <div className="info">
      <img src="src/images/fill.png" className="fill--image" /><span>{props.item.location}</span>
        <a href={props.item.googleMapsUrl}>View on google maps</a>
        <h2>{props.item.title}</h2>
        <span>{props.item.startDate} - </span>
        <span>{props.item.endDate}</span>
        <p>{props.item.description} </p>
      </div>
    </div>
    </div>
    </>
  );
}
