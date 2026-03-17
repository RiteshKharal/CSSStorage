// CODE NAMES MUST START WITH 'code_ID' AND THE ID FOR WHICH THE CODE IS FOR SHOULD ALSO BE ADDED AFTER THE '...ID[COMPONENT ID]'


export const code_ID1 =
`
'use client';

type CardTwoProps = {
  title?: string;
  description?: string;
  icon?: string;
}

export function CardTwo({ title = "Feature Card", description = "Highlight your key features with this elegant card design.", icon = "✨" }: CardTwoProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-foreground/50 transition-all duration-300 group cursor-pointer">
      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-lg font-semibold text-card-foreground mb-2">{title}</h3>
      <p className="text-card-foreground/70 text-sm">{description}</p>
    </div>
  );
}
`