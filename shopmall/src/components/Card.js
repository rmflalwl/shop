import React from "react";
function Card({shoes,i}) {
  return (
    <div className="col-md-4">
      <img
        src={"shoes" + (i + 1) + ".jpg"} width="100%"
      />
      <h4>{shoes.title}</h4>
      <p>{shoes.content} & {shoes.price}</p>
    </div>
  )
}
export default Card;