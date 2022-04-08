import React from "react"
import ReactDOM from "react-dom"

export default function Card(props) {
  return (
    <div className="card">
      <section>
        <div className="img--container">
          <img src={props.item.url} />
        </div>

        <div className="card--content"> 
          <p><i className='fas fa-map-marker-alt location'></i> {props.item.countryName}
            <a href="https://www.bing.com/search?q=google+maps&cvid=c38a51a9682f4eba8bb4677d3a538c4e&aqs=edge.0.0l7j69i60j69i65.10480j0j1&pglt=171&FORM=ANNTA1&PC=U531">
              View on Google Maps
            </a>
          </p>
          <h1>{props.item.landmarkName}</h1>
          <p>{props.item.dateInterval}</p>
          <p>{props.item.content}</p>
          <hr />
        </div>
      </section>
    </div>
  )
}