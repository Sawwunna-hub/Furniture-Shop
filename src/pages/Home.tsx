import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import couch from "@/data/images/couch.png";

function Home() {
  return (
    <div className="flex flex-col mt-1 lg:mt-0 justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left overflow-hidden">
        <div className="space-y-5 lg:space-y-10 lg:ml-6 ">
          <h1 className="text-5xl font-extrabold color-green-cus">
            Modern Interior Design Studio
          </h1>
          <p className="color-green-cus">
            Furniture is an essential component of any living space, providing
            functionality, comfort and aesthetic appeal.
          </p>

          <div className="space-x-5">
            <Button
              variant="ghostcustom"
              className="bg-amber-400 hover:bg-amber-400/80 hover:shadow-lg"
            >
              <Link to="">Shop Now</Link>
            </Button>
            <Button
              variant="ghostcustom"
              className="bg-white hover:bg-black/20 hover:shadow-lg color-green-cus"
            >
              <Link to="">Explore</Link>
            </Button>
          </div>
        </div>

        <img src={couch} alt="couch" className="size object-contain" />
      </div>
    </div>
  );
}

export default Home;
