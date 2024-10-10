import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

export function HambugerMenu() {
  return (
    <div className=" md:hidden flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18L20 18"
                stroke="#fcf5e8"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#fcf5e8"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 6L20 6"
                stroke="#fcf5e8"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-screen bg-my-cream">
          <DropdownMenuLabel className="text-3xl text-my-red">
            EatMap
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-my-red" />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link className="text-2xl" to="/">
                Главная
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link className="text-2xl" to="/search">
                Поиск
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="bg-my-red" />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              {" "}
              <Link className="text-2xl" to="/search">
                Войти
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <Link className="text-2xl" to="/search">
                Регистрация
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
