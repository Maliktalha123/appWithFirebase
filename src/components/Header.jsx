import React, { useContext } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Avatar,
} from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Badge, Button, Tooltip } from "antd";
import {
  MoonOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { CartContext } from "../context/CartContextProvider";

const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default function Header() {
  const { cartItems } = useContext(CartContext);
  const Navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  console.log("User in header = >", user);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleProfile = () => {
    Navigate("/profile");
  };

  const handleLogout = async () => {
    await signOut(auth);
    Navigate("/signin");
  };

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" to="/features">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
        <NavbarItem>
          Theme
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        {user?.isLogin ? (
          <>
            <Link to={"/cart"}>
              <Badge count={cartItems.length}>
                <ShoppingCartOutlined className="text-2xl" />
              </Badge>
            </Link>

            {/* <Button  className="rounded-xl" onClick={handleProfile}> <Avatar src={user?.userInfo?.photoUrl} /></Button> */}
            <NavbarItem className="hidden lg:flex">
              <Button color="primary" variant="light" onClick={handleLogout}>
                Logout
              </Button>
            </NavbarItem>
          </>
        ) : (
          <div className="flex gap-2">
            <NavbarItem className="hidden lg:flex">
              <Button as={Link} to="/signin" color="warning" variant="flat">
                Login
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} to="/signup" color="warning" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </div>
        )}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
