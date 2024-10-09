import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { ArtEcommerceLogo } from "./ArtEcommerceLogo";

interface NavbarComponentProps {
  isActive: string;
}

export default function NavbarComponent({ isActive }: NavbarComponentProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "Appointments", href: "/appointments" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      isBlurred={false}
      position="static"
      className="bg-[var(--dark-grey)]"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <ArtEcommerceLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index} isActive={isActive === item.name && isActive !== ""}>
            <Link
              href={item.href}
              className={isActive === item.name && isActive !== "" ? "text-primary" : "text-white"}
              aria-current={isActive === item.name && isActive !== "" ? "page" : undefined}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="bg-[var(--dark-grey)]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index} isActive={isActive === item.name && isActive !== ""}>
            <Link
              className="w-full text-white"
              href={item.href}
              size="lg"
              aria-current={isActive === item.name && isActive !== "" ? "page" : undefined}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
