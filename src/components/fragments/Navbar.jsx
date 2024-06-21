import Sidebar from "./Sidebar";
import UILogo from "../ui/UILogo";

const Navbar = () => {
  return (
    <div>
      <header className="w-full flex gap-1 items-center font-ubuntu border border-black px-5 py-5">
        {/* view mobile */}
        <section>
          <img src="./svg/hamburger-icon.svg" alt="icon sidebar" />
          <UILogo />
          <Sidebar />
        </section>
      </header>
    </div>
  );
};

export default Navbar;
