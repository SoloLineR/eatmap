import { Link } from "react-router-dom";
import { HambugerMenu } from "./HambugerMenu";

export default function NavigationBar() {
  return (
    <nav className="py-4 ">
      <div className=" mx-auto container   flex justify-between items-center">
        <Link to="/">
          <img className=" max-w-28" src="/logoeatmap.png" alt="" />
        </Link>

        <ul className=" hidden max-w-[500px] w-full justify-around md:flex   ">
          <li>
            <Link
              className=" text-my-cream bg-primary p-3 hover:bg-my-less-red rounded-lg "
              to="/"
            >
              Главная
            </Link>
          </li>
          <li>
            <Link
              className=" text-my-cream bg-primary p-3 hover:bg-my-less-red rounded-lg "
              to="/search"
            >
              Поиск
            </Link>
          </li>
        </ul>
        <ul className="hidden   gap-10 justify-around  md:flex ">
          <li>
            <Link
              className=" text-my-cream bg-primary p-3 hover:bg-my-less-red rounded-lg "
              to="/"
            >
              Войти
            </Link>
          </li>
          <li>
            <Link
              className=" text-my-cream bg-primary p-3 hover:bg-my-less-red rounded-lg "
              to="/"
            >
              Регистрация
            </Link>
          </li>
        </ul>
        <HambugerMenu />
      </div>
    </nav>
  );
}
