import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { pxToRem } from "@/lib/utils";
const PREVIEW_ORDER = ["h1", "h2", "h3", "h4", "h5", "h6", "base", "sm"];

type PreviewSectionProps = {
  headerFont: string;
  bodyFont: string;
  fontSizes: Record<string, number>;
  baseLineHeight: number;
  unit: string;
};

export default function PreviewSection({
  headerFont,
  bodyFont,
  fontSizes,
  baseLineHeight,
  unit,
}: PreviewSectionProps) {
  return (
    <Card className="dark:bg-zinc-900">
      <CardHeader>
        <CardTitle>Preview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {[...PREVIEW_ORDER].map((size) => (
            <div
              key={size}
              className={`${size.startsWith("h") ? headerFont : bodyFont} dark:text-white`}
              style={{
                fontSize: `${fontSizes[size]}px`,
                lineHeight: size.startsWith("h")
                  ? Math.max(
                      1.1,
                      baseLineHeight - 0.1 * parseInt(size[1] ?? "0"),
                    )
                  : baseLineHeight,
              }}
            >
              {size.toUpperCase()} -{" "}
              {unit === "px"
                ? `${fontSizes[size]}px`
                : `${pxToRem(fontSizes[size] ?? 1)}rem`}
              {!size.startsWith("h") &&
                ": The quick brown fox jumps over the lazy dog."}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
