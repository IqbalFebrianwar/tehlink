const DrawerComponent = ({children}) => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      {children}
    </div>
  );
};
export default DrawerComponent;