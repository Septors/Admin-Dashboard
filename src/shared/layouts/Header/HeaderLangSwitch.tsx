import { useState, useRef, useEffect } from "react";

interface Language {
  code: string;
  label: string;
  flag: string;
}

interface LanguageSwitcherProps {
  currentLanguage: string;
  availableLanguages: Language[];
  onChange: (code: string) => void;
}

const LanguageSwitcher = ({
  currentLanguage,
  availableLanguages,
  onChange,
}: LanguageSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = availableLanguages.find(lang => lang.code === currentLanguage);


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-gray-100 transition-colors"
      >
        {current && <img src={current.flag} alt={current.label} className="w-6 h-4 object-cover rounded-sm" />}
        <span className="text-sm font-medium">{current?.code.toUpperCase()}</span>
      </button>

      {isOpen && (
        <ul className="absolute right-0 top-full mt-1 w-36 bg-white border rounded-md shadow-lg z-50">
          {availableLanguages.map(lang => (
            <li key={lang.code}>
              <button
                onClick={() => {
                  onChange(lang.code);
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-100 transition-colors"
              >
                <img src={lang.flag} alt={lang.label} className="w-5 h-3 object-cover rounded-sm" />
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
