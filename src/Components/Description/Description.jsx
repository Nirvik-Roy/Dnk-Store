import React from "react";
import "./Description.css";
import product from "../../Images/product-about-01.jpg";
import product1 from "../../Images/product-about-02.jpg";
import product2 from "../../Images/product-about-03.jpg";
import product3 from "../../Images/product-about-04.jpg";
const Description = () => {
  return (
    <>
      <div className="product_description_main">
        <div className="product_description_main2">
          <hr />
          <div className="description_link_div">
            <a>Description</a>
            <a>Additional Information</a>
            <a>Reviews(0)</a>
          </div>
          <div className="description_heading_div ">
            <h3>Product Description</h3>
          </div>
          <div className="product_description_para_div mt-4">
            <p>
              Since it’s creation lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="product_description_para_div2 mt-5">
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
          <div className="description_img_div">
            <div className="left_product_description_div">
              <img
                className="description_img"
                src={product}
                alt="product Image"
              ></img>
            </div>
            <div className="right_product_description_div ">
              <img
                className="description_img"
                src={product3}
                alt="product Image"
              ></img>
            </div>
          </div>
          <div className="description_img_div1">
            <div className="left_description_div1">
              <img
                className="description_img"
                src={product1}
                alt="product Image"
              ></img>
            </div>
            <div className="right_description_div1 ">
              <div className="product_para3">
                <div className="product_para_main">
                  <div>
                    <h5>Ut enim ad minim</h5>
                  </div>
                  <div>
                    <p className="mb-1">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    </p>
                    <p>sed do eiusmod tempor incididunt.</p>
                  </div>

                  <div className="mt-4">
                    <h5 className="mb-1">Quis nostrud</h5>
                  </div>
                  <div>
                    <p>Sed do eiusmod tempor incididunt ut labore.</p>
                  </div>

                  <div className="mt-4">
                    <h5>Duis aute irure</h5>
                  </div>
                  <div>
                    <p className="mb-1">
                      Dolor sit amet, consectetur adipisicing elit, sed do
                    </p>
                    <p>eiusmod tempor incididunt ut labore.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="more_details_main">
            <div className="more_details_divs">
              <div className="left_more_details_div">
                <div className="product_para4">
                  <div className="product_main2">
                    <div>
                      <h5>More about the product</h5>
                    </div>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right_more_details_div">
                <img
                  className="description_img"
                  src={product2}
                  alt="product Image"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
