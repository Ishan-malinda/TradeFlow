import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <header className="hero hero-contact">
        <div className="hero-content">
          <span className="tagline" data-aos="fade-down" data-aos-delay="200">
            Get In Touch
          </span>
          <h1 data-aos="fade-up" data-aos-delay="300">
            Let's Connect.<br />We're Here to Help.
          </h1>
          <p data-aos="fade-up" data-aos-delay="400">
            Have questions? Need support? Reach out to us through any of the channels below.
          </p>
        </div>
      </header>
      <main className="page">
        <div className="empty-state" data-aos="fade-up">
          <h1>Contact</h1>
          <p>
            Add your contact methods here (email, Discord, Telegram, or a form).
            If you tell me what you want, I'll build it.
          </p>
          <Link className="btn-hero" to="/">Go to Academy</Link>
        </div>
      </main>
    </>
  );
};

export default Contact;


