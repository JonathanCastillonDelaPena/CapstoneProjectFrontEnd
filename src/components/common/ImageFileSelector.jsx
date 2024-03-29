import React, { createRef, useEffect, useState } from "react";

const ImageFileSelector = (props) => {
  const [image, _setImage] = useState();
  const inputFileRef = createRef();

  const cleanUp = () => {
    URL.revokeObjectURL(image && props.image);
    inputFileRef.current.value = null;
  };

  const setImage = (newImage) => {
    if (image) {
      cleanUp();
    }
    _setImage(newImage);
  };

  const handleOnChange = (event) => {
    const newImage = event.target.files[0];
    if (newImage) {
      setImage(URL.createObjectURL(newImage));
    }
    props.imagePreview(event);
  };

  useEffect(() => {
    if (props.postState.isPostSubmitted) {
      cleanUp();
      _setImage();
      props.postState.setIsPostSubmitted(false);
    }
  }, [props.postState.isPostSubmitted]);

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      {/* img element for Image Preview */}
      <img src={image} alt="" className="w-50" />
      <div className="mb-2">
      <input
        ref={inputFileRef}
        accept="image/*"
        hidden
        id="imageFileSelector"
        type="file"
        onChange={handleOnChange}
      />
      <label htmlFor="imageFileSelector">
        <span className="btn btn-primary me-2">
          <i className="bi bi-camera-fill me-2"></i>
          {image ? "Change Image" : "Select Image"}
        </span>
      </label>
      {image ? (
        <span
          className="btn btn-danger"
          onClick={() => {
            setImage();
            props.postState.setImage();
          }}
        >
          <i className="me-2"></i>
          Remove Image
        </span>
      ) : (
        <></>
      )}
      </div>
    </div>
  );
};

export default ImageFileSelector;
