import dynamic from "next/dynamic";

const NavbarComponent = dynamic(() => import("@/components/navbar"));
const DrawerComponent = dynamic(() => import("@/components/drawer/drawer"));
const FooterComponent = dynamic(() => import("@/components/footer"));
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
        <main className="w-full absolute font-body justify-between bg-white">
          {children}
          <FooterComponent />
        </main>
        <DrawerSide />
      </DrawerComponent>
    </>
  );
};
export default HomePageLayout;
