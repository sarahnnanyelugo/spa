import Logo from "../../../assets/images/logo.svg";
import "./top-nav.scss";
export const TopNav = () => {
  return (
    <>
      <div className="top-nav d-flex">
        <div style={{ flexGrow: 1 }}>
          {" "}
          <div className="col-md-1">
            <img src={Logo} width="70%" />
          </div>
        </div>
        <ul className="list-inline list-unstyled">
          <li className="list-inline-item">
            <a href="#about">About SAP</a>
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
        </ul>
      </div>
    </>
  );
};
