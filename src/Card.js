import React from "react";

export default function Card(props) {

    return (
        <div className="card">
            <img src={props.item.coverImg} className="card--image" />
            <div className="card--data-container">
                <div className="location--container">
                    <img src="images/maps-pin.png" className="card--maps-pin"/>
                    <h5 className="card--location">{props.item.location}</h5>
                    <p className="card--google-maps"><a href={props.item.link}>View on Google Maps</a></p>
                </div>
                <h1 className="card--place">{props.item.place}</h1>
                <div class="dates--container">
                    <p className="card--date">{props.item.startDate} -</p>
                    <p className="card--date">- {props.item.endDate}</p>
                </div>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    )
}