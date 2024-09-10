import { Button } from "@mui/material";
import Link from "next/link";

const navigation = [
  { page: "Home", path: "/" },
  { page: "Account", path: "/account" },
  { page: "Captions", path: "/captions" },
  { page: "Settings", path: "/settings" },
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
