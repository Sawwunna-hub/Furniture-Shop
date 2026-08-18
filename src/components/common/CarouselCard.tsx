import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Products } from "@/types/Product";
import { Link } from "react-router";

export default function CarouselCard({ products }: Products) {
  return (
    <Carousel className="w-full max-w-7xl mx-auto px-4 overflow-hidden">
      <CarouselContent className="px-6">
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="basis-1/1 pl-1 lg:basis-1/3 md:basis-1/2"
          >
            <div className="p-1 flex gap-4">
              <img
                src={product.images[0]}
                alt={product.name}
                className="size-20"
              />
              <div className="space-y-3 text-sm">
                <h6 className="font-semibold">{product.name}</h6>
                <p className="font-light line-clamp-2">{product.description}</p>
                <Link to={product.id}>Read More</Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
