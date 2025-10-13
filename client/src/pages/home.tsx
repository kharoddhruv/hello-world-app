import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

const messages = [
  "Hello World",
  "Bonjour Monde",
  "Hola Mundo",
  "Ciao Mondo",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeMessage = () => {
    setCurrentIndex((prev) => (prev + 1) % messages.length);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 md:px-8">
      <ThemeToggle />
      
      <h1 
        key={currentIndex}
        className="animate-fade-in-up text-center text-5xl font-bold leading-none tracking-tight sm:text-6xl lg:text-9xl"
        data-testid="text-greeting-message"
      >
        {messages[currentIndex]}
      </h1>

      <Button
        variant="outline"
        onClick={changeMessage}
        data-testid="button-change-message"
        className="gap-2"
      >
        <RefreshCw className="h-4 w-4" />
        Change Message
      </Button>
    </div>
  );
}
