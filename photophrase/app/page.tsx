"use client";
import { Button } from "@mui/material";
import { useRef, useState } from "react";
import SelectLanguage from "./components/SelectLanguage";
import Image from "next/image";

export default function Page() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [caption, setCaption] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const fileURL = URL.createObjectURL(selectedFile);
      setImage(fileURL);
      console.log("File selected:", selectedFile.name);
      // Store the selected file for upload
      setSelectedFile(selectedFile); // Use this state to hold the file
    }
  };

  const handleGenerateCaption = async () => {
    if (selectedFile) {
      // Check that selectedFile is not null
      const formData = new FormData();
      formData.append("file", selectedFile); // Use the selectedFile here

      const response = await fetch("/api/generateCaption", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Check if the response is okay
        const result = await response.json();
        setCaption(result.caption);
      } else {
        console.error("Failed to generate caption:", response.status);
      }
    } else {
      console.error("No file selected."); // Handle the case where no file is selected
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
              <Image
                src={image}
                alt="Uploaded"
                width={0}
                height={0}
                style={{ width: "300px", height: "auto" }}
              />
            </div>
          )}
          <SelectLanguage />

          <Button
            variant="contained"
            onClick={handleGenerateCaption}
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            Generate Caption
          </Button>
          {caption && <p>Caption: {caption}</p>}
        </div>
      </div>
    </div>
  );
}
