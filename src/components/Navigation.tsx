import NavigationMenu from "../components/ui/NavigationMenu";
import { NavLink } from "react-router";

export default function Navigation() {
  return (
    <header className="sticky flex flex-row h-30 justify-between items-center px-20">
      <div>
        <h1 className="text-3xl font-bold">Roamify</h1>
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
