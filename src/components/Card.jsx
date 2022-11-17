import React from "react";

function Cards({ id, title, desc, image }) {
  return (
    <div className=''>
      <div className='cardd'>
        <p className="fs-5 text-light">{title}</p>
        <div className='image'>
          <img src={image} alt='' className='img-fluid' />
        </div>
      </div>
    </div>
  );
}

export default Cards;
