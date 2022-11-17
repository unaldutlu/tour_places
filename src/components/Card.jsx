import React from "react";

function Cards({ title, desc, image }) {
  return (
    <div className=''>
      <div className='cardd'>
        <p className='p_title text-light'>{title}</p>
        <div className='image'>
          <img src={image} alt='' className='img-fluid' />
          <div className='desc'>{desc}</div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
