import Header from "./components/Header";
import { Button } from "@mui/material";

export default function Page() {
  return (
    <div>
      <Header />

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

        <div>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            Generate your captions...
          </Button>
        </div>
      </div>
    </div>
  );
}
