import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import photophrase from "../assets/photophrase.jpg";
import Image from "next/image";
import Navigation from "./Navigation";

export default async function Header() {
  return (
    <div>
      <AppBar
        position="relative"
        color="inherit"
        style={{
          justifyContent: "end",
          alignItems: "center",
          height: "9rem",
          margin: "0px",
        }}
      >
        <Image src={photophrase} alt="" width={150} height={150} priority />

        <Toolbar>
          <Navigation />
          <Typography variant="h6"></Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
