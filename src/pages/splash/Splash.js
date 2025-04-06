import React, { Component, useState, useEffect } from "react"; 
import "./Splash.css";
import { Redirect } from "react-router-dom";

function AnimatedSplash(props) {
  const text = "Yogeshkumar Rupeliya";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100); // Adjust typing speed here
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: props.theme.splashBg }}>
        <h1 className="name-text">{displayedText}</h1>
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <AnimatedSplash theme={this.props.theme} />
    );
  }
}

export default Splash;
