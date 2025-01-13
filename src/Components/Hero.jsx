import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-banner">
        <h2>
          Transforming <em>Moments</em> into <em>Memories</em>!
        </h2>
        <p>
          Ready to elevate your event from ordinary to extraordinary? Make it
          <span className="pop"> POP </span>
          with ballon arts and themed backdrop! Say hello to endless smiles and
          joy
        </p>
        <Link to="/contact" className="hero-btn">
          contact us now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
