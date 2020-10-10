import React from "react";

import "./menuitem.scss";
import { withRouter } from "react-router-dom";

class MenuItem extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  handleClick = (e) => {
    this.props.history.push(this.props.linkUrl);
  };
  render() {
    return (
      <div
        className={`${this.props.size} menu-item`}
        onClick={this.handleClick}
      >
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${this.props.imageUrl})`,
          }}
        />
        <div className="content">
          <h1 className="title">{this.props.title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    );
  }
}

//   const MenuItem = ({ title, image, size }) => (
//     <div
//       style={{
//         backgroundImage: `url(${image})`,
//       }}
//       className={`${size} menu-item`}
//     >
//       {console.log(props)}
//       <div
//         className="background-image"
//         style={{
//           backgroundImage: `url(${image})`,
//         }}
//       />
//       <div className="content">
//         <h1 className="title">{title.toUpperCase()}</h1>
//         <span className="subtitle">SHOP NOW</span>
//       </div>
//     </div>
//   );

export default withRouter(MenuItem);
