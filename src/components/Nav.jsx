import { RxHamburgerMenu } from "react-icons/rx";
export const Nav = () => {
  return (
    <>
      <nav className="grid grid-cols-[0.5fr_1fr] h-32 items-center">
        <div className="w-44">
          <img className="min-w-44" src="logo.png" alt="logo" />
        </div>
        <li className="gap-14 hidden h-32 items-center sm:md:flex justify-end">
          <ul>
            <a href="#" className="hover:text-primary-clr hover:underline">
              Home
            </a>
          </ul>
          <ul>
            <a href="#" className="hover:text-primary-clr hover:underline">
              Men
            </a>
          </ul>
          <ul>
            <a href="#" className="hover:text-primary-clr hover:underline">
              Women
            </a>
          </ul>
          <ul>
            <a href="#" className="hover:text-primary-clr hover:underline">
              Electronics
            </a>
          </ul>
          <ul>
            <a href="#" className="hover:text-primary-clr hover:underline">
              Jowelery
            </a>
          </ul>
        </li>
        <div className="flex justify-end">
          <RxHamburgerMenu className="text-4xl cursor-pointer hover:text-primary-clr sm:md:hidden" />
        </div>
      </nav>
    </>
  );
};
