import { Link } from "react-router-dom";
import { HambugerMenu } from "./HambugerMenu";
import { Button } from "./ui/button";

export default function NavigationBar() {
  function handleLogin() {
    localStorage.setItem("login", "true");
    window.location.reload();
  }
  function handleLogout() {
    localStorage.removeItem("login");
    window.location.reload();
  }
  const isLOGINTO = localStorage.getItem("login");

  return (
    <nav className="py-4 ">
      <div className=" mx-auto container   flex justify-between items-center">
        <Link to="/">
          <img className=" max-w-28" src="logo.png" alt="" />
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
          <li>
            <Link
              className=" text-my-cream bg-primary p-3 hover:bg-my-less-red rounded-lg "
              to="/discount"
            >
              Акция
            </Link>
          </li>
        </ul>
        <ul className="hidden   gap-10 justify-around  md:flex ">
          {isLOGINTO ? (
            <>
              {" "}
              <li>
                {" "}
                <Button
                  asChild
                  className=" text-my-cream bg-primary p-3 hover:bg-my-less-red rounded-lg "
                >
                  <Link to="/profile">Личный кабинет</Link>
                </Button>
              </li>{" "}
              <li>
                <Button onClick={handleLogout}> Выйти</Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Button
                  onClick={handleLogin}
                  className=" text-my-cream bg-primary p-3 hover:bg-my-less-red rounded-lg "
                >
                  Войти
                </Button>
              </li>
              <li>
                <Button
                  className=" text-my-cream bg-primary p-3 hover:bg-my-less-red rounded-lg "
                  onClick={handleLogin}
                >
                  Регистрация
                </Button>
              </li>
            </>
          )}
        </ul>
        <HambugerMenu />
      </div>
    </nav>
  );
}
