"use client";
import { Button } from "@mui/material";
import { useRef, useState } from "react";
import SelectLanguage from "./components/SelectLanguage";

export default function Page() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<string | null>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const fileURL = URL.createObjectURL(selectedFile);
      setImage(fileURL);
      console.log("File selected:", selectedFile.name);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
          }}
        >
          Welcome to PhotoPhrase. Generate a caption for your images!✨
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }} 
          />
          <Button
            variant="contained"
            onClick={handleButtonClick}
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            Select an Image...
          </Button>
          {image && (
            <div style={{ marginTop: "10px" }}>
              <img
                src={image}
                alt="Uploaded"
                style={{ width: "300px", height: "300px", objectFit: "cover" }}
              />
            </div>
          )}
          <SelectLanguage />
        </div>
      </div>
    </div>
  );
}
