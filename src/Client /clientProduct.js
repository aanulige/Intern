function clientProduct() {
  return (
<>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
  />
  <title>Product - Brand</title>
  <nav
    id="mainNav"
    className="navbar navbar-expand-md sticky-top navbar-shrink py-3 navbar-light"
  >
    <div className="container">
      <a className="navbar-brand d-flex align-items-center" href="/">
        <span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon">
          <svg
            className="bi bi-bezier"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
            />
            <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z" />
          </svg>
        </span>
        <span>Brand</span>
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
            <div id="navcol-2" className="collapse navbar-collapse">
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
                    Supoort
                  </a>
                </li>
              </ul>
            </div>
            <a href="#">Contact Us</a>
          </div>
        </nav>
        <ul className="navbar-nav mx-auto" />
        <a className="btn btn-primary shadow" role="button" href="signup.html">
          Sign up
        </a>
      </div>
    </div>
  </nav>
  <section className="py-5">
    <div className="container py-5">
      <picture>
        <img style={{ display: "inline-grid", margin: 10 }} />
      </picture>
      <picture>
        <img style={{ display: "inline-grid", margin: 10 }} />
      </picture>
      <picture>
        <img style={{ display: "inline-grid", margin: 10 }} />
      </picture>
      <div
        data-reflow-type="product"
        data-bss-dynamic-product=""
        data-bss-dynamic-product-param="product"
        data-reflow-shoppingcart-url="shopping-cart.html"
      >
        <div className="reflow-product">
          <div className="ref-media">
            <div className="ref-preview">
              <img
                className="ref-image active"
                /*src*/
                data-reflow-preview-type="image"
              />
            </div>
            <div className="ref-promo-badge">SALE</div>
          </div>
          <div className="ref-product-data">
            <h2 className="ref-name">Piggy Bank</h2>
            <div className="ref-categories">
              <span className="ref-category">Toys</span>
            </div>
            <strong className="ref-price ref-on-sale">
              <s className="ref-original-price">Price</s>
            </strong>
            <span
              data-reflow-type="add-to-cart"
              data-reflow-shoppingcart-url="shopping-cart.html"
              data-reflow-addtocart-text=""
              data-reflow-product={717978921}
              data-reflow-variant="199976733_s"
            >
              <div className="reflow-add-to-cart ref-product-controls">
                <div className="ref-variant">
                  <label>
                    <span>Size</span>
                    <select
                      className="ref-form-control ref-field-variants"
                      name="variant-state"
                      required=""
                    >
                      <option value="199976733_s">S</option>
                      <option value="199976733_m">M</option>
                      <option value="199976733_l" disabled="">
                        L
                      </option>
                    </select>
                  </label>
                </div>
                <span
                  data-reflow-variant="199976733_s"
                  data-reflow-product={717978921}
                  data-reflow-max-qty={999}
                  data-reflow-quantity={1}
                >
                  <div className="ref-quantity-widget">
                    <div className="ref-decrease">
                      <span />
                    </div>
                    <input type="text" defaultValue={1} />
                    <div className="ref-increase">
                      <span />
                    </div>
                  </div>
                </span>
                <a className="ref-button" href="#">
                  Add to Cart
                </a>
              </div>
            </span>
            <div className="ref-description">
              Porro eius <b>voluptate</b> quia <i>necessitatibus.</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="bg-primary-gradient">
    <div className="container py-4 py-lg-5">
      <div className="row justify-content-center">
        <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column">
          <h3 className="fs-6 fw-bold">Title</h3>
          <ul className="list-unstyled">
            <li />
            <li />
            <li>
              <a href="#">Paragraph</a>
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
      </div>
    </div>
  </footer>
</>



  );
}

export default clientProduct;
