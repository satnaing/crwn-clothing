import React from "react";
import CollectionItem from "../collection-item/CollectionItem";
import "./preview-collection.scss";

const PreviewCollection = (props) => {
  console.log(props);
  return (
    <div className="collection-preview">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <div className="preview">
        {props.items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} {...otherProps} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
