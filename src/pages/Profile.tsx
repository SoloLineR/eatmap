import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Profile() {
  const booked = JSON.parse(localStorage.getItem("booked")!) || [];
  function handleUnBooked(name: string) {
    let booked = JSON.parse(localStorage.getItem("booked") || "[]");

    booked = booked.filter((item: string) => item !== name);

    localStorage.setItem("booked", JSON.stringify(booked));
    window.location.reload();
  }
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-my-red text-center">
        Ваши забронированные места
      </h1>
      <ul className="flex flex-col gap-5">
        {booked.length === 0 ? (
          <h1 className="text-center pt-20 text-3xl">
            Вы еще не забронировали места
          </h1>
        ) : (
          booked.map((name: string) => (
            <li>
              <Card>
                <CardHeader className="flex  flex-row items-center justify-start gap-5">
                  <CardTitle>{name}</CardTitle>
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
