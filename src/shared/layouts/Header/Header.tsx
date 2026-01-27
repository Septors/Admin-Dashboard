import { useState } from "react";
import HeaderInput from "./HeaderInput";
import LanguageSwitcher from "./HeaderLangSwitch";
import UserProfile from "./HeaderProfile";

import EngFlag from "../../../assets/images/eng-flag.png";
import UkrFlag from "../../../assets/images/Flag_of_Ukraine.png"
import FakeAvatar from "../../../assets/images/man-438081_960_720.png";

const availableLanguages = [
  { code: "English", label: "English", flag: EngFlag },
  { code: "ua", label: "Українська", flag: UkrFlag },
];

const fakeUser = {
  avatar: FakeAvatar,
  username: "Moni Roy",
  role: "Admin",
};

const Header = () => {
  const [language, setLanguage] = useState("English");

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white  w-[1201px]">
      <HeaderInput />
      <div className="flex items-center gap-6">
        <LanguageSwitcher
          currentLanguage={language}
          availableLanguages={availableLanguages}
          onChange={setLanguage}
        />
        <UserProfile user={fakeUser} />
      </div>
    </header>
  );
};

export default Header;

