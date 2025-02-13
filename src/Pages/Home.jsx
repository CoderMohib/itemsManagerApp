import { useState } from "react";
export default function Home() {
  const [images, setImages] = useState([]); // State to store images

  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImages((prevImages) => [...prevImages, reader.result]); // Add to state array
      };
      reader.readAsDataURL(file); // Convert to Base64
    }
  };
  return (
    <div className="side-Content">
      <div>
      <input type="file" onChange={handleImageUpload} accept="image/*" />
      <h3>Uploaded Images:</h3>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Uploaded ${index}`} width="100" />
        ))}
      </div>
    </div>
    </div>
  );
}
