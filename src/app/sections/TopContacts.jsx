"use client"
import React from "react";
import "../stylesheet/TopContacts.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Weather from "../components/Weather";

const TopContacts = () => {
  return (
    <div className="pt-2 pl-2 pr-2" id="home">
      <nav className="TopContacts horizontal-menu flex justify-between">
        <ul className="left-menu w-70">
          <li>
            <a href="mailto:contato@hospedariapedradamitra.com.br">
              contato@hospedariapedradamitra.com.br
            </a>
          </li>
          <li>
            <span>
              <a href="https://wa.me/5535998779878" target="_blank">
                <FontAwesomeIcon icon={faWhatsapp} /> +55 (35) 99877-9878
              </a>
            </span>
          </li>
          <li className="text-center"><Weather city="Itamonte" /></li>
        </ul>
        <ul className="right-menu w-auto text-right">
          <li>
            <a href="#">
              <span className="fi fi-gb"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fi fi-fr"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fi fi-it"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fi fi-br"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fi fi-es"></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopContacts;
