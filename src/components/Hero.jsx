const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <span className="tagline" data-aos="fade-down" data-aos-delay="200">
          The Future of Financial Literacy
        </span>
        <h1 data-aos="fade-up" data-aos-delay="300">
          Trade with Intelligence.<br />Learn with Clarity.
        </h1>
        <p data-aos="fade-up" data-aos-delay="400">
          A world-class curriculum designed for high-performance individuals looking to master the art and science of the financial markets.
        </p>
        <div data-aos="fade-up" data-aos-delay="500" style={{ marginTop: '30px' }}>
          <a href="#curriculum" className="btn-hero">Explore Learning Paths</a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
