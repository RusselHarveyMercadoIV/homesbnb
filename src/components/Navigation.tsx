import NavigationMenu from "./ui/NavigationMenu";
import { NavLink } from "react-router";

export default function Navigation() {
  return (
    <header className="sticky top-0 bg-white flex flex-row h-30 justify-between items-center mx-20 z-100">
      <div>
        <h1 className="text-3xl font-bold">homesbnb</h1>
      </div>
      <NavigationMenu>
        <NavLink to="/" end>
          Explore
        </NavLink>
      </NavigationMenu>
      <div className="w-[120px]"></div>
    </header>
  );
}
