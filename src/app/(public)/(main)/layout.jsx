import dynamic from "next/dynamic";

const NavbarComponent = dynamic(() => import("@/components/navbar"));
const DrawerComponent = dynamic(() => import("@/components/drawer/drawer"));
const DrawerContent = dynamic(() =>
  import("@/components/drawer/drawercontent")
);
const DrawerSide = dynamic(() => import("@/components/drawer/drawerside"));

const HomePageLayout = ({ children }) => {
  return (
    <>
      <DrawerComponent>
        <DrawerContent />
        <NavbarComponent />
        <main>{children}</main>
        <DrawerSide />
      </DrawerComponent>
    </>
  );
};
export default HomePageLayout;
