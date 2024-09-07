import Image from "next/image";
import styles from "./page.module.css";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6">Hello</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
