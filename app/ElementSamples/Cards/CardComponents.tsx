'use client';

// type CardOneProps = {
//   title?: string;
//   description?: string;
// }

// export function CardOne({ title = "Card Title", description = "This is a beautiful card component with hover effects." }: CardOneProps) {
//   return (
//     <div className="max-w-sm bg-card rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-card-foreground mb-2">{title}</h3>
//         <p className="text-card-foreground/70">{description}</p>
//       </div>
//     </div>
//   );
// }

type CardOneProps = {
  title?: string;
  description?: string;
  icon?: string;
}

export function CardOne({ title = "Feature Card", description = "Highlight your key features with this elegant card design.", icon = "✨" }: CardOneProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-foreground/50 transition-all duration-300 group cursor-pointer">
      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-lg font-semibold text-card-foreground mb-2">{title}</h3>
      <p className="text-card-foreground/70 text-sm">{description}</p>
    </div>
  );
}