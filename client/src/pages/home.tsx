import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 md:px-8">
      <ThemeToggle />
      <h1 
        className="animate-fade-in-up text-center text-5xl font-bold leading-none tracking-tight sm:text-6xl lg:text-9xl"
        data-testid="text-hello-world"
      >
        Hello World
      </h1>
    </div>
  );
}
