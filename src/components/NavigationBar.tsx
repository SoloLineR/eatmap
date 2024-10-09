import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <nav className="py-4 ">
      <div className=" mx-auto container   flex justify-between items-center">
        <Link to="/">
          <img className=" max-w-28" src="../../public/logoeatmap.png" alt="" />
        </Link>

        <ul className="flex  max-w-[500px] w-full justify-around">
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
              to="/"
            >
              Поиск
            </Link>
          </li>
        </ul>
        <ul className="flex   gap-10 justify-around">
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
      </div>
    </nav>
  );
}
