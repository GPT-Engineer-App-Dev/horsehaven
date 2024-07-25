import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronRight, Horseshoe } from "lucide-react";

const HorseFactCard = ({ title, description }) => (
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
  const horseFacts = [
    { title: "Speed", description: "Horses can run at speeds up to 55 mph (88 km/h)." },
    { title: "Lifespan", description: "The average lifespan of a horse is 25-30 years." },
    { title: "Sleep", description: "Horses can sleep both standing up and lying down." },
    { title: "Memory", description: "Horses have excellent memories and can recognize human emotions." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-amber-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <Horseshoe className="w-24 h-24 mx-auto mb-4 text-amber-700" />
          <h1 className="text-5xl font-bold text-amber-900 mb-4">Discover the Majesty of Horses</h1>
          <p className="text-xl text-amber-800 max-w-2xl mx-auto">
            Explore the beauty, strength, and grace of these magnificent creatures that have been our companions throughout history.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-amber-900 mb-8 text-center">Fascinating Horse Facts</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {horseFacts.map((fact, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <HorseFactCard title={fact.title} description={fact.description} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-amber-900 mb-4">Experience the Wonder</h2>
          <p className="text-xl text-amber-800 mb-8 max-w-2xl mx-auto">
            Whether you're an experienced equestrian or new to the world of horses, there's always more to learn and explore.
          </p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
            Learn More <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-amber-900 mb-4">Join Our Community</h2>
            <p className="text-xl text-amber-800 mb-4">
              Connect with fellow horse enthusiasts, share your experiences, and stay updated on the latest in equine care and events.
            </p>
            <Button variant="outline" size="lg" className="border-amber-600 text-amber-600 hover:bg-amber-100">
              Sign Up Now
            </Button>
          </div>
          <div className="aspect-video relative">
            <img
              src="/placeholder.svg"
              alt="Horses running in a field"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
