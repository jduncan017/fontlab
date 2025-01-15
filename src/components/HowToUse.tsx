import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function HowToUse() {
  return (
    <Card className="shadow-themeBase">
      <CardHeader>
        <CardTitle>How to Use This Tool</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          This tool helps you create a consistent typography scale for your
          Tailwind CSS project. The generated config provides two ways to apply
          your typography:
        </p>

        <div className="space-y-2">
          <p>
            <strong>1. Semantic HTML Elements</strong>
          </p>
          <p>
            The h1-h6 classes will automatically apply to their corresponding
            HTML elements, making semantic markup straightforward:
          </p>
          <pre className="bg-background2 text-foreground2 rounded p-2">
            <code>{`<h1>This gets h1 styling</h1>
<h2>This gets h2 styling</h2>`}</code>
          </pre>
        </div>

        <div className="space-y-2">
          <p>
            <strong>2. Utility Classes</strong>
          </p>
          <p>
            For flexible styling, use {`Tailwind's`} size utilities (sm through
            5xl). These map to the same values as the semantic classes:
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>sm → smaller than base</li>
            <li>base → default text size</li>
            <li>lg → h6 size</li>
            <li>xl → h5 size</li>
            <li>2xl → h4 size</li>
            <li>3xl → h3 size</li>
            <li>4xl → h2 size</li>
            <li>5xl → h1 size</li>
          </ul>
        </div>

        <p className="mt-4">To get started:</p>
        <ol className="list-inside list-decimal space-y-2">
          <li>
            Set your <strong>base font size</strong> (default 16px)
          </li>
          <li>
            Choose between <strong>preset ratios</strong> for automatic scaling
            or custom sizes
          </li>
          <li>
            Adjust <strong>line height</strong> to fine-tune readability
          </li>
          <li>
            Toggle between <strong>px and rem</strong> units
          </li>
          <li>Copy the generated Tailwind config</li>
        </ol>
      </CardContent>
    </Card>
  );
}
