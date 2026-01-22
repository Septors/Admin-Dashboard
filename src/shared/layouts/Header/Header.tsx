import HeaderInput from "./headerInput";
import LanguageSwitcher from "./HeaderLangSwitch";
import UserProfile from "./HeaderProfile";
import { useState } from "react";

import EngFlag from "../../../assets/images/eng-flag.png"
import FakeAvatar from "../../../assets/images/man-438081_960_720.png"

const availableLanguages = [
  { code: "English", label: "English", flag: EngFlag },
  { code: "ua", label: "Українська", flag: "/flags/ua.svg" },
];

const fakeUser = {
  avatar: FakeAvatar,
  username: "Moni Roy",
  role: "Admin"
}

const Header = () => {
  const [language, setLanguage] = useState("English");

  const handleLanguageChange = (code: string) => {
    setLanguage(code);
  }

  return (
    <header className="flex w-[1201px]  px-[30px] bg-[#FFFFFF] justify-between items-center ">
      <HeaderInput />
      <div className="flex items-center gap-[30px]">
        <LanguageSwitcher
          currentLanguage={language}
          availableLanguages={availableLanguages}
          onChange={handleLanguageChange} />
        <UserProfile user={fakeUser} />
      </div>

    </header>
  )
}
export default Header;