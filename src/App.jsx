import React from "react";
import "./styles/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import articleImg from "./assets/images/logo.png";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <section id="articles">
          <Article
            title="Exemplo"
            provider="NASA"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            nihil omnis laborum iste molestias ipsa, perspiciatis, quae
            voluptate qui doloremque harum fugiat iusto sint unde porro vel
            libero. Provident, blanditiis!"
            thumbnail={articleImg}
          />
        </section>
      </>
    );
  }
}

export default App;
