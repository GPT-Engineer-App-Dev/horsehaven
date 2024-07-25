import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronRight, Rocket } from "lucide-react";

const FactCard = ({ title, description }) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const Index = () => {
  const spaceFacts = [
    { title: "Planets", description: "There are eight recognized planets in our solar system, with Earth being the third from the Sun." },
    { title: "Stars", description: "The Sun is just one of billions of stars in the Milky Way galaxy, which is one of billions of galaxies in the universe." },
    { title: "Space Exploration", description: "Humans first landed on the Moon in 1969, and we've been exploring space with robots and telescopes ever since." },
    { title: "Cosmic Scale", description: "The observable universe is estimated to be about 93 billion light-years in diameter." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <Rocket className="w-24 h-24 mx-auto mb-4 text-blue-700" />
          <h1 className="text-5xl font-bold text-blue-900 mb-4">Explore the Wonders of Space</h1>
          <p className="text-xl text-blue-800 max-w-2xl mx-auto">
            Embark on a journey through the cosmos and discover the mysteries of the universe.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-900 mb-8 text-center">Fascinating Space Facts</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {spaceFacts.map((fact, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <FactCard title={fact.title} description={fact.description} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">Embark on a Cosmic Journey</h2>
          <p className="text-xl text-blue-800 mb-8 max-w-2xl mx-auto">
            Whether you're an aspiring astronaut or a curious stargazer, there's always more to discover about our vast universe.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            Launch Exploration <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-blue-900 mb-4">Join Our Space Community</h2>
            <p className="text-xl text-blue-800 mb-4">
              Connect with fellow space enthusiasts, share your cosmic discoveries, and stay updated on the latest in space exploration.
            </p>
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-100">
              Sign Up Now
            </Button>
          </div>
          <div className="aspect-video relative">
            <img
              src="/placeholder.svg"
              alt="Stunning view of a galaxy"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
