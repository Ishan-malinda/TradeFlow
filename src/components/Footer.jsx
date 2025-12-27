const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add subscription logic here
    alert('Thank you for subscribing!');
  };

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-col">
          <span className="footer-logo">TRADE ACADEMY</span>
          <p>
            The premier destination for aspiring traders. We bridge the gap between retail ambition and institutional reality.
          </p>
        </div>
        <div className="footer-col">
          <h4>Platform</h4>
          <ul>
            <li><a href="#curriculum">Curriculum</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#instructors">Instructors</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col newsletter">
          <h4>Stay Updated</h4>
          <p style={{ marginBottom: '15px' }}>
            Market insights delivered to your inbox weekly.
          </p>
          <form onSubmit={handleSubscribe}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 TradeAcademy Global.</p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#twitter">Twitter</a>
          <a href="#linkedin">LinkedIn</a>
          <a href="#instagram">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
