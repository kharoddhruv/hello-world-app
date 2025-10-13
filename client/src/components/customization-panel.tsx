import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CustomizationPanelProps {
  textColor: string;
  onTextColorChange: (color: string) => void;
  font: string;
  onFontChange: (font: string) => void;
  gradient: boolean;
  onGradientChange: (gradient: boolean) => void;
}

const colors = [
  { name: "Primary", value: "hsl(var(--primary))" },
  { name: "Default", value: "hsl(var(--foreground))" },
  { name: "Cyan", value: "#06b6d4" },
  { name: "Purple", value: "#a855f7" },
  { name: "Pink", value: "#ec4899" },
  { name: "Orange", value: "#f97316" },
];

const fonts = [
  { name: "Inter", value: "Inter, sans-serif" },
  { name: "Playfair", value: "Playfair Display, serif" },
  { name: "Poppins", value: "Poppins, sans-serif" },
  { name: "Roboto", value: "Roboto, sans-serif" },
  { name: "Montserrat", value: "Montserrat, sans-serif" },
];

export function CustomizationPanel({
  textColor,
  onTextColorChange,
  font,
  onFontChange,
  gradient,
  onGradientChange,
}: CustomizationPanelProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="fixed left-4 top-4"
          data-testid="button-settings"
        >
          <Settings className="h-5 w-5" />
          <span className="sr-only">Customize</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72" data-testid="panel-customization">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="text-color">Text Color</Label>
            <Select value={textColor} onValueChange={onTextColorChange}>
              <SelectTrigger id="text-color" data-testid="select-text-color">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {colors.map((color) => (
                  <SelectItem key={color.value} value={color.value}>
                    <div className="flex items-center gap-2">
                      <div
                        className="h-4 w-4 rounded border"
                        style={{ backgroundColor: color.value }}
                      />
                      {color.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="font">Font</Label>
            <Select value={font} onValueChange={onFontChange}>
              <SelectTrigger id="font" data-testid="select-font">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {fonts.map((f) => (
                  <SelectItem key={f.value} value={f.value}>
                    {f.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="gradient">Background</Label>
            <Select
              value={gradient ? "gradient" : "solid"}
              onValueChange={(val) => onGradientChange(val === "gradient")}
            >
              <SelectTrigger id="gradient" data-testid="select-background">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="solid">Solid</SelectItem>
                <SelectItem value="gradient">Gradient</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
