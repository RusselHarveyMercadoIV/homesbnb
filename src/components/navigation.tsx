import NavigationMenu from "./ui/navigationMenu";
import { NavLink } from "react-router";

import PROFILE from "../assets/icons/profile.png";
import { useUserContext } from "@/context/user";

export default function Navigation() {
  const { user } = useUserContext();

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
      <div className="w-[120px] flex gap-2 justify-center items-center">
        <img src={PROFILE} alt="profile" width={35} height={35} />
        {!user ? (
          <NavLink
            to="/login"
            className="bg-black text-white px-6 py-1 rounded-xl"
          >
            Login
          </NavLink>
        ) : (
          user.name
        )}
      </div>
    </header>
  );
}
