import DarkModeSwitcher from "../DarkModeSwitcher";

const Navbar = () => {
  return (
    <div className="px-20 py-6 lg:px-4 flex justify-between shadow-sm bg-light-mode-element dark:bg-dark-mode-element">
      <h1 className="font-extrabold text-2xl lg:text-xl mobile:text-base">
        Where in the world?
      </h1>
      <DarkModeSwitcher />
    </div>
  );
};

export default Navbar;
