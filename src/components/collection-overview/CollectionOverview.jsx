import React from "react";
import "./collection-overview.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../redux/selectors/shop.selector";
import PreviewCollection from "../preview-collection/PreviewCollection";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherProps }) => {
      return <PreviewCollection key={id} {...otherProps} />;
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
