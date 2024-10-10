import { place } from "./Card_list";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { toast } from "sonner";

export default function Card_item({ place }: { place: place }) {
  function handleBooked(name: string) {
    const booked = JSON.parse(localStorage.getItem("booked")!) || [];

    if (booked.includes(name)) {
      toast("Вы уже забронировали этот столик");
      return;
    }

    booked.push(name);

    localStorage.setItem("booked", JSON.stringify(booked));

    toast("Ваш столик забронирован");
  }

  const isLogin = localStorage.getItem("login");
  return (
    <li key={place.id}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-my-red">{place.name}</CardTitle>
          <CardDescription className="text-black">
            {place.address}
          </CardDescription>
        </CardHeader>
        <CardContent className=" flex gap-5 items-center ">
          <img
            src={place.img}
            alt=""
            className="max-w-[40%] w-[400px] border-2 rounded-sm   object-cover"
          />
          <div className=" text-sm  md:text-base">
            <p className="text-black">
              <span className="font-bold text-my-red">Атмосфера:</span>{" "}
              {place.mood}
            </p>
            <p className="text-black">
              <span className="font-bold text-my-red">Ассортимент: </span>{" "}
              {place.foodType}
            </p>
            <p className="text-black">
              <span className="font-bold text-my-red">Телефон: </span>{" "}
              {place.phone}
            </p>
            <p className="text-black">
              <span className="font-bold text-my-red">Сайт: </span>{" "}
              {place.website}
            </p>

            <p className="text-black">
              <span className="font-bold text-my-red">Расстояние до вас: </span>
              {place.dist} КМ
            </p>
            <p className="text-black">
              <span className="font-bold text-my-red">
                Кол-во свободных столиков в заведении:{" "}
              </span>
              {place.emptyTables}
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex gap-5 items-center justify-between">
          <p className="text-b">
            {" "}
            <span className="font-bold text-my-red">Рейтинг: </span>{" "}
            {place.rating}
          </p>

          {isLogin === "true" ? (
            <Button onClick={() => handleBooked(place.name)}>
              Забронировать
            </Button>
          ) : (
            <p className="font-bold">Войдите чтобы забронировать</p>
          )}
        </CardFooter>
      </Card>
    </li>
  );
}
