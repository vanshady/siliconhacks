const React = require('react');

const FaqCard = React.createClass({

  render() {
    // var cardStyle = {
    //   fontFamily: "Proxima Nova, Open Sans, sans-serif",
    //   marginBottom: "20px",
    //   backgroundColor: "white",
    //   borderRadius: "4px",
    //   color: "#3E3E3E",
    //   padding: "40px 30px",
    //   position: "relative",
    //   textAlign: "left",
    //   width: "100%"
    // };
    //
    // var cardTitleStyle = {
    //   fontSize: "20px",
    //   lineHeight: 1.5,
    //   marginBottom: "25px",
    //   fontWeight: "bold",
    // };
    //
    // var cardBodyStyle = {
    //   fontSize: "14px",
    //   lineHeight: 1.7,
    //   fontWeight: 400
    // };

    return (
      <div className="faq-card">
        <div className="card-title">{this.props.title}</div>
        <div className="card-body">{this.props.body}</div>
      </div>
    );
  }
});

module.exports = FaqCard;
