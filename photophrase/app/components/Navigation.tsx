import { Button } from "@mui/material";
import Link from "next/link";

const navigation = [
  { page: "Home", path: "/" },
  { page: "Account", path: "/pages/account" },
  { page: "Captions", path: "/pages/captions" },
  { page: "Settings", path: "/pages/settings" },
];

function Navigation() {
  return (
    <div>
      {navigation.map((nav, index) => (
        <Button key={index}>
          <Link href={nav.path}>{nav.page}</Link>
        </Button>
      ))}
    </div>
  );
}

export default Navigation;
