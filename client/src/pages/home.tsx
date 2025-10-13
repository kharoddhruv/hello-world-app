import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { CustomizationPanel } from "@/components/customization-panel";
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
  const [textColor, setTextColor] = useState("hsl(var(--foreground))");
  const [font, setFont] = useState("Inter, sans-serif");
  const [gradient, setGradient] = useState(false);

  const changeMessage = () => {
    setCurrentIndex((prev) => (prev + 1) % messages.length);
  };

  const backgroundStyle = gradient
    ? {
        background: "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--accent)) 100%)",
      }
    : {};

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 transition-all duration-500 md:px-8"
      style={backgroundStyle}
    >
      <CustomizationPanel
        textColor={textColor}
        onTextColorChange={setTextColor}
        font={font}
        onFontChange={setFont}
        gradient={gradient}
        onGradientChange={setGradient}
      />
      <ThemeToggle />
      
      <h1 
        key={currentIndex}
        className="animate-fade-in-up text-center text-5xl font-bold leading-none tracking-tight transition-all duration-300 sm:text-6xl lg:text-9xl"
        style={{ color: textColor, fontFamily: font }}
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
