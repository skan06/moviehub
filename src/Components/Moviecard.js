import React from 'react';
import './MovieCards.css';

const Moviecard = ({x}) => {
  return (
    <div>
        <figure className="image-block">
  <h1></h1>
  <img
    src={x.imgUrl}
    alt=""
  />
  <figcaption>
    <h3>{x.title}</h3>
    <p>
      {x.rate}
      <br/>
      {x.description}
      <br/>
    </p>
    <button>More Info</button>
  </figcaption>
</figure>
    </div>
  )
}

export default Moviecard