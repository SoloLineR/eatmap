import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const mock = [
  "https://utfs.io/f/17qrxp3X86jafgPPlsCpU0nvX3quO1fmzHAhL4RaIQMtWB7p",
  "https://utfs.io/f/17qrxp3X86ja7DJCPlrsQS2ObAyjmVHWqL6DgcniB1KrNCho",
];
export function Gallery() {
  return (
    <Carousel className="w-full max-w-[700px]">
      <CarouselContent>
        {mock.map((img, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center  ">
                  <img src={img} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
