"use client";
import React, { useEffect, useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const LanguageSelector = () => {
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        const languageList = data.flatMap((country) =>
          Object.values(country.languages || {})
        );

        const uniqueLanguages = Array.from(new Set(languageList)).sort();

        setLanguages(uniqueLanguages);
      } catch (error) {
        console.error("Error fetching languages:", error);
      }
    };

    fetchLanguages();
  }, []);

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <FormControl fullWidth>
        <InputLabel  id="language-select-label">
          Select Language
        </InputLabel>
        <Select
          label="Language"
          labelId="language-select-label"
          value={selectedLanguage}
          onChange={handleChange}
          variant="outlined"
          size="medium"
          style={{ minWidth: 200 }}
        >
          {languages.map((language, index) => (
            <MenuItem key={index} value={language}>
              {language}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default LanguageSelector;
