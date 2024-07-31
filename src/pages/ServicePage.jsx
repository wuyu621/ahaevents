import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { service } from "../data";

export const loader = ({ request }) => {
  const url = request.url;
  const serviceTitle = url.split("/")[url.split("/").length - 1];

  return { serviceTitle };
};

const ServicePage = () => {
  const { serviceTitle } = useLoaderData();
  const singleService = service.find((item) => item.url === serviceTitle);
  //   console.log(singleService);
  const { img, title, info } = singleService;
  return (
    <section>
      <div className="about">
        <div>
          <img src={img} alt="=Img" className="img" />
        </div>
        <div className="about-info">
          <div>
            <h1>{title}</h1>
            <p>{info}</p>
          </div>
        </div>
      </div>
      <h1>more photo and info here</h1>
      <Link to="/" className="btn link-btn">
        back to home
      </Link>
    </section>
  );
};

export default ServicePage;
