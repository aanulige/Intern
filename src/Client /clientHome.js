import logo from './logo.svg';
function clientHome() {
  return (
<>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
  />
  <title>Services - Brand</title>
  <nav
    id="mainNav"
    className="navbar navbar-expand-md sticky-top navbar-shrink py-3 navbar-light"
  >
    <div className="container">
      <a className="navbar-brand d-flex align-items-center" href="/">
        <span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon" />
        <span />
      </a>
      <button
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navcol-1"
      >
        <span className="visually-hidden">Toggle navigation</span>
        <span className="navbar-toggler-icon" />
      </button>
      <div id="navcol-1" className="collapse navbar-collapse">
        <div className="btn-group" role="group" />
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Support
            </a>
          </li>
        </ul>
        <a href="#" style={{ width: "76.8672px", padding: 8 }}>
          Support
        </a>
        <ul className="navbar-nav mx-auto">
          <li className="nav-item" />
        </ul>
        <nav className="navbar navbar-expand-md bg-body py-3">
          <div className="container">
            <button
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navcol-2"
            >
              <span className="visually-hidden">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
            </button>
            <div id="navcol-2" className="collapse navbar-collapse" />
          </div>
        </nav>
        <a className="btn btn-primary shadow" role="button" href="signup.html">
          Search
        </a>
      </div>
    </div>
  </nav>
  <section className="py-5">
    <div className="container py-5">
      <div className="row mb-4 mb-lg-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <p className="fw-bold text-success mb-2">title</p>
          <h3 className="fw-bold">Paragraph</h3>
        </div>
      </div>
      <div
        className="row row-cols-1 row-cols-md-2 mx-auto"
        style={{ maxWidth: 900 }}
      >
        <div className="col mb-5">
          <img className="rounded img-fluid shadow" src="products/1.jpg" />
        </div>
        <div className="col d-md-flex align-items-md-end align-items-lg-center mb-5">
          <div>
            <h5 className="fw-bold">Lorem ipsum dolor sit&nbsp;</h5>
            <p className="text-muted mb-4">
              Erat netus est hendrerit, nullam et quis ad cras porttitor
              iaculis. Bibendum vulputate cras aenean.
            </p>
          </div>
        </div>
      </div>
      <div
        className="row row-cols-1 row-cols-md-2 mx-auto"
        style={{ maxWidth: 900 }}
      >
        <div className="col order-md-last mb-5">
          <img className="rounded img-fluid shadow" src="products/2.jpg" />
        </div>
        <div className="col d-md-flex align-items-md-end align-items-lg-center mb-5">
          <div>
            <h5 className="fw-bold">Lorem ipsum dolor sit&nbsp;</h5>
            <p className="text-muted mb-4">
              Erat netus est hendrerit, nullam et quis ad cras porttitor
              iaculis. Bibendum vulputate cras aenean.
            </p>
          </div>
        </div>
      </div>
      <div
        className="row row-cols-1 row-cols-md-2 mx-auto"
        style={{ maxWidth: 900 }}
      >
        <div className="col-md-10 mb-5">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>option</th>
                  <th>option</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>option</td>
                  <td>Cell 2</td>
                </tr>
                <tr>
                  <td>option</td>
                  <td>Cell 4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="bg-primary-gradient">
    <div className="container py-4 py-lg-5">
      <div className="row justify-content-center">
        <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column">
          <h3 className="fs-6 fw-bold">title</h3>
          <ul className="list-unstyled">
            <li>Paragraph</li>
          </ul>
        </div>
        <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column">
          <h3 className="fs-6 fw-bold">Social</h3>
          <ul className="list-unstyled">
            <li>
              <a href="#">a</a>
            </li>
            <li>
              <a href="#">a</a>
            </li>
            <li>
              <a href="#">a</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  </footer>
</>


  );
}

export default clientHome;
