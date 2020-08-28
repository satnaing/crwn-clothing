import React from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../components/preview-collection/PreviewCollection";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    return (
      <div>
        {this.state.collections.map(({ id, ...otherProps }) => {
          return <PreviewCollection key={id} {...otherProps} />;
        })}
        {/* <PreviewCollection /> */}
      </div>
    );
  }
}

export default ShopPage;
