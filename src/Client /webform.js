function webform() {
    return (
<>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
  />
  <title>Contacts - Brand</title>
  <nav
    id="mainNav"
    className="navbar navbar-expand-md sticky-top navbar-shrink py-3 navbar-light"
  >
    <div className="container">
      <a className="navbar-brand d-flex align-items-center" href="/">
        <span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon" />
        <span>b</span>
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
        <ul className="navbar-nav mx-auto">
          <li className="nav-item" />
        </ul>
        <a className="btn btn-primary shadow" role="button" href="signup.html">
          Search
        </a>
      </div>
    </div>
  </nav>
  <section className="py-5">
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <h2 className="fw-bold">Title</h2>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 col-xl-4">
          <div>
            <form className="p-3 p-xl-4" method="post" data-bs-theme="light">
              <div className="mb-3">
                <input
                  id="name-1"
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
                  style={{ margin: 10 }}
                />
              </div>
              <div className="mb-3">
                <input
                  id="email-1"
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                  style={{ margin: 10 }}
                />
              </div>
              <input
                id="name-2"
                className="form-control"
                type="text"
                name="name"
                placeholder="Name"
                style={{ margin: 10 }}
              />
              <div className="mb-3" />
              <div>
                <button
                  className="btn btn-primary shadow d-block w-100"
                  type="submit"
                  style={{ margin: 10 }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-4 col-xl-4 d-flex justify-content-center justify-content-xl-start">
          <textarea
            id="message-1"
            name="message"
            rows={6}
            placeholder="Message"
            style={{ margin: 10 }}
            defaultValue={""}
          />
        </div>
      </div>
      <button
        className="btn btn-primary text-center"
        type="button"
        style={{ margin: 99, padding: "11.6px 32px", width: "172.633px" }}
      >
        Google Map
      </button>
    </div>
  </section>
  <footer className="bg-primary-gradient">
    <div className="container py-4 py-lg-5">
      <div className="row justify-content-center">
        <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column">
          <h3 className="fs-6 fw-bold">title</h3>
          <ul className="list-unstyled">
            <li>
              <a href="#">link</a>
            </li>
            <li>
              <a href="#">link</a>
            </li>
            <li>
              <a href="#">link</a>
            </li>
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
        <div className="col-lg-3 text-center text-lg-start d-flex flex-column align-items-center order-first align-items-lg-start order-lg-last">
          <div className="fw-bold d-flex align-items-center mb-2" />
        </div>
      </div>
      <hr />
      <div className="text-muted d-flex justify-content-between align-items-center pt-3" />
    </div>
  </footer>
</>

  
  
    );
  }
  
  export default webform;
  