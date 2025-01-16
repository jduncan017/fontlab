import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Copy } from "lucide-react";
import { Check } from "lucide-react";
import { useState } from "react";
import { pxToRem } from "@/lib/utils";
type TailwindConfigBoxProps = {
  fontSizes: Record<string, number>;
  headerFont: string;
  bodyFont: string;
  baseLineHeight: string;
  unit: string;
};

export default function TailwindConfigBox({
  fontSizes,
  headerFont,
  bodyFont,
  baseLineHeight,
  unit,
}: TailwindConfigBoxProps) {
  const [copied, setCopied] = useState(false);

  // Generate Tailwind config
  const getTailwindConfig = () => {
    // Map header sizes to Tailwind's size scale
    const tailwindSizes = {
      lg: fontSizes.h6,
      xl: fontSizes.h5,
      "2xl": fontSizes.h4,
      "3xl": fontSizes.h3,
      "4xl": fontSizes.h2,
      "5xl": fontSizes.h1,
      ...fontSizes, // Include original header sizes
    };

    const sizeEntries = Object.entries(tailwindSizes)
      .map(
        ([key, value]) =>
          `        '${key}': '${unit === "px" ? value + "px" : pxToRem(value ?? 16) + "rem"}'`,
      )
      .join(",\n");

    return `module.exports = {
  theme: {
    extend: {
      fontSize: {
${sizeEntries}
      },
      fontFamily: {
        'headers': ['${headerFont}'],
        'body': ['${bodyFont}'],
      },
      lineHeight: {
        'body': '${baseLineHeight}',
      },
    },
  },
}`;
  };

  const handleCopyConfig = async () => {
    await navigator.clipboard.writeText(getTailwindConfig());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="shadow-themeBase">
      <CardHeader>
        <CardTitle>Tailwind Configuration</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <button
            onClick={handleCopyConfig}
            className="absolute right-2 top-2 rounded-md bg-white p-2 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700"
          >
            {copied ? (
              <Check className="h-5 w-5 text-green-500" />
            ) : (
              <Copy className="h-5 w-5" />
            )}
          </button>
          <pre className="bg-background3 overflow-x-auto rounded-lg p-4 dark:text-white">
            <code>{getTailwindConfig()}</code>
          </pre>
        </div>
      </CardContent>
    </Card>
  );
}
