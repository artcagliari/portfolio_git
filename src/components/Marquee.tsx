import { Star } from "lucide-react";

const items = [
  "Full Stack Developer",
  "React",
  "TypeScript",
  "Laravel",
  "Node.js",
  "UI Engineering",
  "Do protótipo ao deploy",
];

const Marquee = () => {
  const content = (
    <div className="marquee__track" aria-hidden="true">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-8">
          <span className="font-display text-3xl md:text-5xl font-medium whitespace-nowrap">
            {item}
          </span>
          <Star className="w-5 h-5 md:w-7 md:h-7 text-primary shrink-0 fill-primary" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="py-8 md:py-12 border-y border-border bg-secondary/20">
      <div className="marquee">
        {content}
        {content}
      </div>
    </div>
  );
};

export default Marquee;
