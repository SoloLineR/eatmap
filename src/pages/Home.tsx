import { Gallery } from "@/components/Gallery";
import MapFiller from "@/components/MapFiller";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 justify-center items-center">
          <div className=" flex flex-col gap-4 justify-center items-center   ">
            <h1 className="text-3xl font-bold text-my-red text-center ">
              Найди вкусное место!
            </h1>
            <p className="text-xl text-my-red text-center">
              EatMap — это интерактивная платформа, которая помогает
              пользователям находить заведения с учетом их загруженности в
              реальном времени.
            </p>
          </div>
          <MapFiller />
          <Gallery />
        </div>
      </div>
    </div>
  );
}
