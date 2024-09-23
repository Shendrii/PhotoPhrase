"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoPhrase from "../../assets/photophrase.jpg";

export default function Page() {
  const imageSample = PhotoPhrase; // Use the imported image
  const [generatedCaption, setGeneratedCaption] = useState("");

  const token = process.env.NEXT_PUBLIC_HUGGING_FACE_TOKEN;

  return (
    <div>
      <h3
        style={{ fontSize: "2rem", display: "flex", justifyContent: "center" }}
      >
        Generated Caption: {generatedCaption}
      </h3>
    </div>
  );
}
