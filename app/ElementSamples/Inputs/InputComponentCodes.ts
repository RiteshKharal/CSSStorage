// CODE NAMES MUST START WITH 'code_ID' AND THE ID FOR WHICH THE CODE IS FOR SHOULD ALSO BE ADDED AFTER THE '...ID[COMPONENT ID]'

export const code_ID1 =
`
'use client';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '400', '500', '700', '900'],
  variable: '--font-inter',
});

type InputOneProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputOne({ placeholder = "Enter text...", value, onChange }: InputOneProps) {
  return (
    <div className={\`\${inter.className} relative\`}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-all duration-300 placeholder:text-foreground/40 text-foreground"
      />
    </div>
  );
}
`

export const code_ID2 =
`
'use client';
import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
});

type InputTwoProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

export function InputTwo({ placeholder = "Type here...", value, onChange, label = "Label" }: InputTwoProps) {
  return (
    <div className={\`\${lato.className} relative\`}>
      <label className="block text-sm font-medium text-foreground/80 mb-2">{label}</label>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 placeholder:text-foreground/40 text-foreground"
        />
      </div>
    </div>
  );
}
`