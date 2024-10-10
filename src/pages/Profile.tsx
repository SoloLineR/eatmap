import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const navigate = useNavigate();

  const booked = JSON.parse(localStorage.getItem("booked")!) || [];
  function handleUnBooked(name: string) {
    let booked = JSON.parse(localStorage.getItem("booked") || "[]");

    booked = booked.filter((item: string) => item !== name);

    localStorage.setItem("booked", JSON.stringify(booked));
    window.location.reload();
  }

  useEffect(() => {
    if (!localStorage.getItem("login")) {
      navigate("/home");
    }
  }, [navigate]);
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-my-red text-center">
        Ваши забронированные места
      </h1>
      <ul className="flex flex-col gap-5 pt-5 ">
        {booked.length === 0 ? (
          <h1 className="text-center pt-20 text-3xl">
            Вы еще не забронировали места
          </h1>
        ) : (
          booked.map((name: string) => (
            <li key={name}>
              <Card className="w-full max-w-[500px]">
                <CardHeader className="flex  flex-row items-center justify-start gap-5">
                  <CardTitle className="text-2xl text-my-red max-w-[300px] w-full">
                    {name}
                  </CardTitle>
                  <Button onClick={() => handleUnBooked(name)}>
                    {" "}
                    Отменить
                  </Button>
                </CardHeader>
              </Card>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
