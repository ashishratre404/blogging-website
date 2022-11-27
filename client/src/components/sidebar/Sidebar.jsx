import "./sidebar.css";
import profile from "../images/profile.jpg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={profile} alt="" />
        <p>
          I am the creater and owner of this wonderful blogging website. you can
          contact me for your own website
        </p>
      </div>
      <div className="sidbarItem">
        <span className="sidebarTitle cat">CATEGORIES</span>
        <ul className="sidebarList">
          {cats &&
            cats.map((cat, i) => (
                <Link to={`/?cat=${cat.name}`} className='link'>
              <li className="sidebarListItem" key={i}>
                {cat.name}
              </li>
              </Link>
            ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocials">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
