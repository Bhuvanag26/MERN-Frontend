import React from "react";
import { API} from "../../backend";


const ImageHelper = ({product}) => {
   const imageurl = product ? `${API}/product/photo/${product._id}`:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRg7eouq7Q5ZYVGTMocqWkn6FYJ42bVz5_-w&usqp=CAU`;
  return (
    
    <div className="rounded border border-success p-2">
                <img
                  src={imageurl}
                  alt="photo"
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  className="mb-3 rounded "
                  // width="240px"
                  // height="320"

                />
              </div>
              

  )
  }

export default ImageHelper;
