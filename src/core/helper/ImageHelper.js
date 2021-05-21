import React from "react";
import { API} from "../../backend";

const ImageHelper = ({product}) => {
   const imageurl = product ? `${API}/product/photo/${product._id}`:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRg7eouq7Q5ZYVGTMocqWkn6FYJ42bVz5_-w&usqp=CAU`;
  return (
    
    <div className="rounded border border-success p-2">
                <img
                  src={imageurl}
                  alt="photo"
                  style={{ Height: "100%", maxWidth: "100%" }}
                  className="img__product"
                  // width="240px"
                  // height="320"
                  height = "250px"

                />
              </div>
              

  )
  }

export default ImageHelper;
