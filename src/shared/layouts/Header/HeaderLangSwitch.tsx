import { useState } from "react";

interface Language {
  code: string;
  label: string;
  flag: any;
}

interface LanguageSwitcherProps {
  currentLanguage: string;
  availableLanguages: Language[];
  onChange: (code: string) => void;
}

const LanguageSwitcher = ({ currentLanguage, availableLanguages, onChange }: LanguageSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const current = availableLanguages.find(lang => lang.code === currentLanguage);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-[16px] px-3 py-1 border-none rounded-md hover:bg-gray-100"
      >
        <img src={current?.flag} alt={current?.label} className="w-[40px] h-[25px]" />
        <span className="text-sm font-semibold">{current?.code}</span>
      </button>

      {isOpen && (
        <ul className="absolute top-full mt-1 right-0 w-32 bg-white border rounded-md shadow-md z-10">
          {availableLanguages.map(lang => (
            <li key={lang.code}>
              <button
                className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-100"
                onClick={() => {
                  onChange(lang.code);
                  setIsOpen(false);
                }}
              >
                <img src={lang.flag} alt={lang.label} className="w-[40px] h-[25px]" />
                <span className="text-sm">{lang.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
