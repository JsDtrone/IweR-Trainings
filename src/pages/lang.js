import React from "react";

class Lang extends React.Component {
  constructor(props) {
    super(props);
    this.lang = props.lang;
    this.en = 0;
    this.ru = 0;
    this.className = "lang-ch";
    this.state = {
      classNameEN: this.className,
      classNameRU: this.className + " ms-4",
      en: 0,
      ru: 0,
      a: 0,
    };

    this.SetLangRu = () => {
      this.setState({
        classNameRU: this.state.classNameRU + " activeItem",
      });
    };
    this.SetLangEn = () => {
      this.setState({
        classNameEN: this.state.classNameEN + " activeItem",
      });
    };
    this.handleClickEN = this.handleClickEN.bind(this);
    this.handleClickRU = this.handleClickRU.bind(this);
    this.firstremder = this.firstremder.bind(this);
  }
  firstremder = () => {
    if (this.state.a == 0) {
      this.handleClickRU();
      this.setState({ a: 1 });
    }
  };
  handleClickEN = (props) => {
    if (this.state.en == 0) {
      if (this.state.ru == 1) {
        this.setState({ ru: 0 });
        this.setState({
          classNameRU: this.className + " ms-4",
        });
      }
      console.log(this);
      this.SetLangEn();
      this.state.en++;
      console.log(this.state.classNameEN);
    }
  };

  handleClickRU = (props) => {
    if (this.state.ru == 0) {
      if (this.state.en == 1) {
        this.setState({ en: 0 });
        this.setState({
          classNameEN: this.className,
        });
      }
      console.log(this);
      this.SetLangRu();
      this.state.ru++;
      console.log(this.state.classNameRU);
    }
  };

  render() {
    this.firstremder();
    // Такой синтаксис гарантирует, что `this` привязан к handleClick.
    return (
      <li className="nav-item ">
        <button
          className={this.state.classNameEN}
          onClick={() => this.handleClickEN()}
        >
          EN
        </button>
        <button
          className={this.state.classNameRU}
          onClick={() => this.handleClickRU()}
        >
          Ru
        </button>
      </li>
    );
  }
}

export default Lang;
