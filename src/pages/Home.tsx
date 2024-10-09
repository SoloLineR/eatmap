import { Gallery } from "@/components/Gallery";
import MapFiller from "@/components/MapFiller";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 justify-center items-center">
          <div className=" flex flex-col gap-4 justify-center items-center max-w-[50%] w-[750px] ">
            <h1 className="text-4xl font-bold text-my-red text-center">
              Здесь будет слоган
            </h1>
            <p className="text-xl text-my-red">
              Здесь будет описание сайта Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nihil quos corporis laborum sit mollitia sequi
              eaque. Alias qui non aliquid fuga fugit, officiis quod molestiae
              reiciendis, amet autem, minima adipisci!
            </p>
          </div>
          <MapFiller />
          <Gallery />
        </div>
      </div>
    </div>
  );
}
