import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

function Error() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />

      <main className="flex items-center flex-1">
        <Card className=" mx-auto w-full max-w-sm ">
          <CardHeader>
            <CardTitle>Opps!</CardTitle>
            <CardDescription>
              Something went wrong! Plese contact to Administrator.
            </CardDescription>
          </CardHeader>

          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              <Link to="/" className="w-full">
                Return to Home Page
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

export default Error;
