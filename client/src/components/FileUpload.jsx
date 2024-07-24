import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../firebase";
import { v4 } from "uuid";

function FileUpload() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const imageRefList = ref(storage, "images/");

  function uploadImage() {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snaphsot) => {
      getDownloadURL(snaphsot.ref).then((url) => {
        console.log(url)
        setImageList((prev) => [...prev, url]);
      });
    });
  }

  useEffect(() => {
    listAll(imageRefList).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prevValues) => {
            return [...prevValues, url];
          });
        });
      });
    });
  }, []);

  return (
    <div>
      <input
        type="file"
        onChange={(event) => setImageUpload(event.target.files[0])}
      />
      <button onClick={uploadImage}>Upload Image</button>

      {imageList.map((image, index) => (
        <img key={index} src={image} />
      ))}
    </div>
  );
}
export default FileUpload;
