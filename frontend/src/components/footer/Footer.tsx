import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import MapYandex from "../map/MapYandex";

function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left footer">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <div
        >
          <MapYandex />
        </div>
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
