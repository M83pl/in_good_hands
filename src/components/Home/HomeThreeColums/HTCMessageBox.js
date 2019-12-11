import React from "react";

const HTCMessageBox = props => {
  return (
    <div className="htc__message-box">
      <div className="htc__message-box--title">{props.number}</div>
      <div className="htc__message-box--info">{props.info}</div>
      <p className="htc__message-box--description">{props.description}</p>
    </div>
  );
};

export default HTCMessageBox;
