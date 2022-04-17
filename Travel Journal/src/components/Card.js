import React from "react";
import ReactDOM from "react-dom";

export default function Card(props) {
  return (
    <div className="card">
      <section className="card--content">
        <img src={props.item.url} />
      </section>

      <section className="card--content">
        <p>
          <i className="fas fa-map-marker-alt location"></i>
          {props.item.countryName}
          <a href="https://www.bing.com/search?q=google+maps&cvid=c38a51a9682f4eba8bb4677d3a538c4e&aqs=edge.0.0l7j69i60j69i65.10480j0j1&pglt=171&FORM=ANNTA1&PC=U531">
            View on Google Maps
          </a>
        </p>
        <h2>{props.item.landmarkName}</h2>
        <p>{props.item.dateInterval}</p>
        <p>{props.item.content}</p>
      </section>
    </div>
  );
}
