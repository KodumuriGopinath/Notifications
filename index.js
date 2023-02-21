const Notification = (props) => {
  //  Write your code here.
  const { className, imageUrl, paraEl } = props;
  return (
    <div className={`${className}`}>
      <img className="img-logo" src={imageUrl} />
      <p className="img-name">{paraEl}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="items-container">
      <Notification
        className="information-box"
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        paraEl="information Message"
      />

      <Notification
        className="success-box"
        imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        paraEl="Success Message"
      />

      <Notification
        className="warning-box"
        imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        paraEl="Warning Message"
      />

      <Notification
        className="error-box"
        imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        paraEl="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
