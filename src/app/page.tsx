"use client";
import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import HowToUse from "@/components/HowToUse";
import TailwindConfigBox from "@/components/TailwindConfigBox";
import PreviewSection from "@/components/PreviewSection";
import { pxToRem } from "@/lib/utils";

type Preset = {
  name: string;
  ratio: number;
};

const SCALE_PRESETS: Record<string, Preset> = {
  modern_web: { name: "Modern Web (3x)", ratio: 3 },
  golden_ratio: { name: "Golden Ratio (1.618x)", ratio: 1.618 },
  perfect_fifth: { name: "Perfect Fifth (1.5x)", ratio: 1.5 },
  perfect_fourth: { name: "Perfect Fourth (1.333x)", ratio: 1.333 },
  major_third: { name: "Major Third (1.25x)", ratio: 1.25 },
};

type selectedRatio = keyof typeof SCALE_PRESETS;

const INPUT_ORDER = ["base", "sm", "h6", "h5", "h4", "h3", "h2", "h1"];

const TypographyPreview = () => {
  const [headerFont, setHeaderFont] = useState("font-sans");
  const [bodyFont, setBodyFont] = useState("font-sans");
  const [usePresetRatio, setUsePresetRatio] = useState(true);
  const [selectedRatio, setSelectedRatio] =
    useState<selectedRatio>("golden_ratio");
  const [baseLineHeight, setBaseLineHeight] = useState(1.2);
  const [unit, setUnit] = useState("px");

  // Initialize all font sizes (in pixels)
  const [fontSizes, setFontSizes] = useState<Record<string, number>>({
    sm: 14,
    base: 16,
    h1: 48,
    h2: 40,
    h3: 32,
    h4: 28,
    h5: 24,
    h6: 20,
  });

  // Update sizes when using preset ratios
  useEffect(() => {
    if (usePresetRatio && selectedRatio) {
      const ratio = SCALE_PRESETS[selectedRatio]?.ratio ?? 1.618;
      const base = fontSizes.base ?? 16; // Provide default value
      setFontSizes(() => ({
        sm: Math.round(base * 0.875),
        base: base,
        h6: Math.round(base * ratio ** 0.75),
        h5: Math.round(base * ratio),
        h4: Math.round(base * ratio ** 1.25),
        h3: Math.round(base * ratio ** 1.5),
        h2: Math.round(base * ratio ** 1.75),
        h1: Math.round(base * ratio ** 2),
      }));
    }
  }, [usePresetRatio, selectedRatio, fontSizes.base]);

  const handleFontSizeChange = (key: string, value: string | number) => {
    const numValue = typeof value === "string" ? parseFloat(value) : value;
    let newValue = numValue;
    if (unit === "rem") {
      newValue = Math.round(numValue * 16);
    }
    setFontSizes((prev) => ({
      ...prev,
      [key]: newValue || 0,
    }));
  };

  return (
    <div className="Page mx-auto flex w-fit flex-col items-center space-y-10 p-10">
      <Card className="flex w-full flex-col gap-4 p-20">
        <h1 className="text-5xl font-bold">
          Welcome to The DigitalNova Fontlab
        </h1>
        <p className="text-lg">
          A tool that helps you create consistent typography scaling for your
          Tailwind CSS projects.
        </p>
      </Card>
      <HowToUse />

      <Card className="TypographyConfig w-full shadow-themeBase">
        <CardHeader>
          <CardTitle>Typography Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Font Selection */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Header Font</Label>
                <Select value={headerFont} onValueChange={setHeaderFont}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="font-sans">Sans Serif</SelectItem>
                    <SelectItem value="font-serif">Serif</SelectItem>
                    <SelectItem value="font-mono">Monospace</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Body Font</Label>
                <Select value={bodyFont} onValueChange={setBodyFont}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="font-sans">Sans Serif</SelectItem>
                    <SelectItem value="font-serif">Serif</SelectItem>
                    <SelectItem value="font-mono">Monospace</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Unit Selection */}
            <div className="space-y-2">
              <Label>Unit</Label>
              <RadioGroup
                value={unit}
                onValueChange={setUnit}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="px" id="px" />
                  <Label htmlFor="px">Pixels</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="rem" id="rem" />
                  <Label htmlFor="rem">REM</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Preset Ratio Toggle */}
            <div className="flex items-center space-x-4">
              <Switch
                checked={usePresetRatio}
                onCheckedChange={setUsePresetRatio}
                id="ratio-mode"
              />
              <Label htmlFor="ratio-mode">Use Preset Ratio</Label>

              {usePresetRatio && (
                <Select value={selectedRatio} onValueChange={setSelectedRatio}>
                  <SelectTrigger className="w-64">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(SCALE_PRESETS).map(([key, { name }]) => (
                      <SelectItem key={key} value={key}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>

            {/* Line Height Control */}
            <div className="space-y-2">
              <Label>Base Line Height: {baseLineHeight.toFixed(1)}</Label>
              <Slider
                value={[baseLineHeight]}
                onValueChange={(value) => setBaseLineHeight(value[0] ?? 1.2)}
                min={1}
                max={2}
                step={0.1}
                className="w-full"
              />
            </div>

            {/* Font Size Controls */}
            <div className="grid grid-cols-2 gap-4">
              {INPUT_ORDER.map((size) => (
                <div key={size}>
                  <Label>{size.toUpperCase()} Size</Label>
                  <Input
                    type="number"
                    value={
                      unit === "px"
                        ? fontSizes[size]
                        : pxToRem(fontSizes[size] ?? 1)
                    }
                    onChange={(e) => handleFontSizeChange(size, e.target.value)}
                    disabled={usePresetRatio && size !== "base"}
                    min="8"
                    step={unit === "px" ? 1 : 0.125}
                    className="h-12 text-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preview Section */}
      <PreviewSection
        headerFont={headerFont}
        bodyFont={bodyFont}
        fontSizes={fontSizes}
        baseLineHeight={baseLineHeight}
        unit={unit}
      />

      <TailwindConfigBox
        fontSizes={fontSizes}
        headerFont={headerFont}
        bodyFont={bodyFont}
        baseLineHeight={baseLineHeight.toString()}
        unit={unit}
      />
    </div>
  );
};

export default TypographyPreview;
