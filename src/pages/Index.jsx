import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronRight, Leaf } from "lucide-react";

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
  const natureFacts = [
    { title: "Trees", description: "Trees can communicate and share nutrients through underground fungal networks." },
    { title: "Oceans", description: "The ocean produces over half of the world's oxygen and absorbs 50 times more CO2 than our atmosphere." },
    { title: "Biodiversity", description: "A single handful of soil contains more microorganisms than there are people on Earth." },
    { title: "Ecosystems", description: "Coral reefs support more species per unit area than any other marine environment." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <Leaf className="w-24 h-24 mx-auto mb-4 text-green-700" />
          <h1 className="text-5xl font-bold text-green-900 mb-4">Discover the Wonders of Nature</h1>
          <p className="text-xl text-green-800 max-w-2xl mx-auto">
            Explore the beauty, complexity, and importance of the natural world that surrounds us.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-green-900 mb-8 text-center">Fascinating Nature Facts</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {natureFacts.map((fact, index) => (
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
          <h2 className="text-3xl font-semibold text-green-900 mb-4">Experience the Wonder</h2>
          <p className="text-xl text-green-800 mb-8 max-w-2xl mx-auto">
            Whether you're a seasoned naturalist or new to environmental studies, there's always more to learn and explore.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            Learn More <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-green-900 mb-4">Join Our Community</h2>
            <p className="text-xl text-green-800 mb-4">
              Connect with fellow nature enthusiasts, share your experiences, and stay updated on the latest in environmental conservation.
            </p>
            <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-100">
              Sign Up Now
            </Button>
          </div>
          <div className="aspect-video relative">
            <img
              src="/placeholder.svg"
              alt="Lush forest landscape"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
