import { service } from "../data";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
const Service = () => {
  return (
    <section className="service">
      <h2 className="service-title">Services</h2>
      <div className="title-underline"></div>
      <p>
        Serving the Seattle, WA area, we offer professional event planning and
        execution services. From on-site party venue decoration and the
        provision of balloon props, we make your events fun and memorable.
        Contact us for a free consultation today!
      </p>
      <div className="service-container">
        {service.map((item) => {
          return (
            <article key={uuidv4()} className="service-card">
              <Link to={`/service/${item.url}`} className="link">
                <img src={item.img} alt={item.text} className="img" />
                <h5>{item.title}</h5>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
