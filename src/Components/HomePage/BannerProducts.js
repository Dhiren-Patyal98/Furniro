import React from "react";
import "./BannerProducts.css";

import discount1 from "../../Images/Homepageimages/discount 1.png";
import discount2 from '../../Images/Homepageimages/Discount 2.png'
 import labelnew from '../../Images/Homepageimages/label new.png'
export default function BannerProducts() {
  return (
    <div className="TopContainer">
      <div style={{ paddingTop: "3%" }}>
        <div className="HeadContainer">
          <div className="Heading">
            <div>Our Products</div>
          </div>
          <div className="Products">
            <div className="productcard">
              <div className="inner-productcard" id="bg-img1">
                <div className="discount">
                  <img src={discount1} alt=""></img>
                </div>
              </div>
              <div className="product-discription">
                <div>
                  <text className="text-one">Syltherine</text>
                  <text className="text-two">Stylish cafe chair</text>
                </div>

                <div>
                  <p className="paratext">
                    Rp 2.500.000{" "}
                    <span className="card-span"> Rp 3.500.000</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="productcard">
              <div className="inner-productcard" id="bg-img2">
                <div className="discount">
                  <img src={""} alt=""></img>
                </div>
              </div>
              <div className="product-discription">
                <div>
                  <text className="text-one">Leviosa</text>
                  <text className="text-two">Stylish cafe chair</text>
                </div>

                <div>
                  <p className="paratext">Rp 2.500.000</p>
                </div>
              </div>
            </div>

            <div className="productcard">
              <div className="inner-productcard" id="bg-img3">
                <div className="discount">
                  <img src={discount2} alt=""></img>
                </div>
              </div>
              <div className="product-discription">
                <div>
                  <text className="text-one">Lolito</text>
                  <text className="text-two">Luxury big sofa</text>
                </div>

                <div>
                  <p className="paratext">
                    Rp 7.000.000
                    <span className="card-span"> Rp 14.000.000</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="productcard">
              <div className="inner-productcard" id="bg-img4">
                <div className="discount">
                  <img src={labelnew} alt=""></img>
                </div>
              </div>
              <div className="product-discription">
                <div>
                  <text className="text-one">Respira</text>
                  <text className="text-two">Outdoor bar table and stool</text>
                </div>

                <div>
                  <p className="paratext">Rp 500.000</p>
                </div>
              </div>
            </div>

            <div className="productcard">
              <div className="inner-productcard" id="bg-img5">
                <div className="discount">
                  <img src={discount1} alt=""></img>
                </div>
              </div>
              <div className="product-discription">
                <div>
                  <text className="text-one">Grifo</text>
                  <text className="text-two">Night lamp</text>
                </div>

                <div>
                  <p className="paratext">Rp 1.500.000</p>
                </div>
              </div>
            </div>

            <div className="productcard">
              <div className="inner-productcard" id="bg-img6">
                <div className="discount">
                  <img src={labelnew} alt=""></img>
                </div>
              </div>
              <div className="product-discription">
                <div>
                  <text className="text-one">Muggo</text>
                  <text className="text-two">Small mug</text>
                </div>

                <div>
                  <p className="paratext">Rp 150.000</p>
                </div>
              </div>
            </div>

            <div className="productcard">
              <div className="inner-productcard" id="bg-img7">
                <div className="discount">
                  <img src={discount2} alt=""></img>
                </div>
              </div>
              <div className="product-discription">
                <div>
                  <text className="text-one">Pingky</text>
                  <text className="text-two">Cute bed set</text>
                </div>

                <div>
                  <p className="paratext">
                    Rp 7.000.000{" "}
                    <span className="card-span"> Rp 14.000.000</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="productcard">
              <div className="inner-productcard" id="bg-img8">
                <div className="discount">
                  <img src={labelnew} alt=""></img>
                </div>
              </div>
              <div className="product-discription">
                <div>
                  <text className="text-one">Potty</text>
                  <text className="text-two">Minimalist flower pot</text>
                </div>

                <div>
                  <p className="paratext">Rp 500.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="button-header">
          <button className="product-button">
            Show More
          </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
