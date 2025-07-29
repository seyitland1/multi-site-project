import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Samar - Creative Agency Bootstrap Template</title>
        <meta name="description" content="Samar Creative Agency Bootstrap Template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Samar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`${styles.hero} d-flex align-items-center`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold text-white mb-4">
                We Are Creative <span className="text-primary">Digital Agency</span>
              </h1>
              <p className="lead text-light mb-4">
                We create digital experiences that are human, authentic and purposeful. 
                Our team of designers and developers work together to create beautiful, 
                functional websites and applications.
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-primary btn-lg px-4">Get Started</button>
                <button className="btn btn-outline-light btn-lg px-4">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="display-5 fw-bold">What We Do Best</h2>
              <p className="lead text-muted">Our Digital Services</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                    <i className="fas fa-code fs-4"></i>
                  </div>
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text text-muted">
                    Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. 
                    Praesent lacus magna, rhoncus quis magna quis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                    <i className="fas fa-chart-line fs-4"></i>
                  </div>
                  <h5 className="card-title">Strategy & Research</h5>
                  <p className="card-text text-muted">
                    Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. 
                    Praesent lacus magna, rhoncus quis magna quis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                    <i className="fas fa-chart-bar fs-4"></i>
                  </div>
                  <h5 className="card-title">Growth Tracking</h5>
                  <p className="card-text text-muted">
                    Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. 
                    Praesent lacus magna, rhoncus quis magna quis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">About Us</h2>
              <h3 className="h4 mb-3">Build Your Business Website Better</h3>
              <p className="text-muted mb-4">
                Proin laoreet leo vel enim gravida, at porttitor metus ultricies. 
                Cras eu velit enim. Vivamus blandit, dolor ut aliquet rutrum, 
                ex elit mattis sapien, non molestie felis neque et nulla.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="fas fa-check text-primary me-2"></i>
                  We support programs that create advancement opportunities
                </li>
                <li className="mb-2">
                  <i className="fas fa-check text-primary me-2"></i>
                  Get a view of events and trends. Be updated on our recent news
                </li>
                <li className="mb-2">
                  <i className="fas fa-check text-primary me-2"></i>
                  Finally, it all comes down to people. Creating a winning team
                </li>
              </ul>
              <button className="btn btn-primary btn-lg mt-3">Learn More</button>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <div className="bg-white p-4 rounded shadow-sm text-center">
                    <h3 className="display-6 fw-bold text-primary mb-0">16M</h3>
                    <p className="text-muted mb-0">Satisfied Clients</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="bg-white p-4 rounded shadow-sm text-center">
                    <h3 className="display-6 fw-bold text-primary mb-0">18M</h3>
                    <p className="text-muted mb-0">Project Completed</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="bg-white p-4 rounded shadow-sm text-center">
                    <h3 className="display-6 fw-bold text-primary mb-0">17M</h3>
                    <p className="text-muted mb-0">Project Launched</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="bg-white p-4 rounded shadow-sm text-center">
                    <h3 className="display-6 fw-bold text-primary mb-0">45</h3>
                    <p className="text-muted mb-0">Years Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="display-5 fw-bold">Portfolio</h2>
              <p className="lead text-muted">Our Latest Work</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm">
                <div className="card-img-top bg-primary" style={{height: '200px'}}></div>
                <div className="card-body">
                  <h5 className="card-title">Web Development Project</h5>
                  <p className="card-text text-muted">Modern responsive website design</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm">
                <div className="card-img-top bg-success" style={{height: '200px'}}></div>
                <div className="card-body">
                  <h5 className="card-title">Mobile App Design</h5>
                  <p className="card-text text-muted">User-friendly mobile application</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm">
                <div className="card-img-top bg-warning" style={{height: '200px'}}></div>
                <div className="card-body">
                  <h5 className="card-title">Brand Identity</h5>
                  <p className="card-text text-muted">Complete brand identity design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="display-5 fw-bold">Get In Touch</h2>
              <p className="lead text-muted">Ready to start your project?</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control" placeholder="Your Email" />
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control" placeholder="Subject" />
                  </div>
                  <div className="col-12">
                    <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary btn-lg px-5">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="mb-0">&copy; 2024 Samar. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://kit.fontawesome.com/your-fontawesome-kit.js"></script>
    </>
  )
}