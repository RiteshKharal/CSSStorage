'use client';

type InputOneProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputOne({ placeholder = "Enter text...", value, onChange }: InputOneProps) {
  return (
    <div className="relative">
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

type InputTwoProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

export function InputTwo({ placeholder = "Type here...", value, onChange, label = "Label" }: InputTwoProps) {
  return (
    <div className="relative">
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