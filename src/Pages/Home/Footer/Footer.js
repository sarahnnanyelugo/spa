import "./footer.scss";
import Logo from "../../../assets/images/logo.svg";
import FB from "../../../assets/images/fb.svg";
import IG from "../../../assets/images/ig.svg";
import X from "../../../assets/images/X.svg";

export const Footer = () => {
  return (
    <>
      <footer id="contact">
        <div className="col-md-10 offset-md-1">
          <div className="d-md-flex">
            <div className="col-md-4">
              <img src={Logo} width="15%" />
            </div>
            <ul className="list-inline list-unstyled anchor-links">
              <li className="list-inline-item">
                <a href="#about">About</a>
              </li>
              <li className="list-inline-item">
                <a href="#methodology">Methodology</a>
              </li>
              <li className="list-inline-item">
                <a href="#results">Results</a>
              </li>
              <li className="list-inline-item">
                <a href="#get-involved">Get Involved</a>
              </li>
              <li className="list-inline-item">
                <a href="#contact">Contact</a>
              </li>
            </ul>{" "}
            <ul className="list-inline list-unstyled anchor-links">
              <li className="list-inline-item">
                <a href="" target="_blank">
                  <img src={FB} width="24px" height="24px" />
                </a>
              </li>{" "}
              <li className="list-inline-item">
                <a href="" target="_blank">
                  <img src={IG} width="24px" height="24px" />
                </a>
              </li>{" "}
              <li className="list-inline-item">
                <a href="" target="_blank">
                  <img src={X} width="24px" height="24px" />
                </a>
              </li>
            </ul>
          </div>
          <hr />

          <div className="d-md-flex col-md-8 offset-md-2 middle-contacts">
            <p>📧 info@sap.gov.ng</p>
            <div>
              <p>📞 +234 (0)800 000 0000</p>
              <p>🤝 Partner Organizations: [Insert logos]</p>
            </div>
            <p>🏛 Ministry of Education (Nigeria)</p>
          </div>
          <hr />
          <div className="d-md-flex offset-md-3 credits">
            <p>© 2025 School Assessment Program (SAP). All rights reserved.</p>
            <a href="" target="_blank">
              Privacy Policy
            </a>
            <a href="" target="_blank">
              Terms of Service
            </a>
            <a href="" target="_blank">
              Cookies Settings
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
