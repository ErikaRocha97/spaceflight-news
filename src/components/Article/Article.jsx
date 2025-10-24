// antes
import React from "react";
import articleImg from "../../assets/images/logo.png";
import "./styles.css";

export class Article extends React.Component {
  render() {
    return (
      <article id="article">
        <img src={articleImg} alt="" />
        <div className="article-infos">
          <h2>Designing Dashboards</h2>
          <h3>NASA</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            nihil omnis laborum iste molestias ipsa, perspiciatis, quae
            voluptate qui doloremque harum fugiat iusto sint unde porro vel
            libero. Provident, blanditiis!
          </p>
        </div>
      </article>
    );
  }
}
