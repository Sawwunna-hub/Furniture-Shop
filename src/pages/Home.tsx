import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import couch from "@/data/images/couch.png";
import CarouselCard from "@/components/common/CarouselCard";
import { products } from "@/data/products";
import { posts } from "@/data/posts";
import BLogCard from "@/components/BLogCard";

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

      <CarouselCard products={products} />

      <div>
        <div className="flex flex-col md:flex-row ml-8 justify-between mt-12 mr-8">
          <h3 className="font-bold text-lg">Recent Blog Posts</h3>
          <Link to="/blogs" className="font-light underline self-end">
            View more posts
          </Link>
        </div>

        <BLogCard posts={posts} />
      </div>
    </div>
  );
}

export default Home;
