import React, { useRef, useState } from "react";

function ImageUploader() {
  const inputFileRef = useRef();
  const [image, setImage] = useState(null);

  const handleChooseFile = () => {
    inputFileRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }

   const handleDeleteImage = () => {
    setImage('');
    inputFileRef.current.value = "";
  }; 

  return (
    <div>
      <input
        type="file"
        ref={inputFileRef}
        style={{ display: "none" }}
        onChange={handleFileChange}/>

      <button onClick={handleChooseFile}>Choose Image</button>

      {image && (
        <div style={{ marginTop: "20px" }}>
          <img src={image} alt="Preview" width="200" style={{ borderRadius: "8px" }}/>
          <br />
          <button onClick={handleDeleteImage}>Delete Image</button>
        </div>
      )} 
    </div>
  );
}
export default ImageUploader;
