function Footer() {
  return (
    <footer className="bg-dark text-white py-4  bottom-0 w-100">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5 className="mb-3">About Us</h5>
            <p>
              We provide cutting-edge solutions for converting speech to text
              and text to speech, empowering seamless communication.
            </p>
          </div>
          <div className="col-md-3">
            <h5 className="mb-3">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-white text-decoration-none">
                  Features
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="mb-3">Contact</h5>
            <ul className="list-unstyled">
              <li>
                Email:{" "}
                <a
                  href="mailto:info@example.com"
                  className="text-white text-decoration-none"
                >
                  info@example.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+1234567890"
                  className="text-white text-decoration-none"
                >
                  +123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="mb-0">&copy; 2024 Transcribe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
