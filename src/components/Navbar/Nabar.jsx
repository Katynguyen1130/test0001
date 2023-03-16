import React, { useState, useEffect, useContext } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Switch from "react-switch";
import "./index.css";
import { ThemeContext } from "../context/themeContext";
const Navbar = () => {
  const [Menu, setMenu] = useState(true);
  const { theme, setTheme, toggleMode } = useContext(ThemeContext);

  /* eslint-disable */
  const [currentLink, setcurrentLink] = useState("Home");

  const handleThemeChange = () => {
    toggleMode();
  };

  const [isScrolled, setIsScrolled] = useState(false);

  //   handle background navbar color changes while scrolling.
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("theme >>>", theme);

  //   bla bla bla

  return (
    <div className={`bg-opacity-70 dark:bg-opacity-70 bg-white dark:bg-[#181818] fixed mt-[46px] z-50 w-full`}>
      <nav className={`${!Menu && "bg-[#fff] dark:bg-[#181818]"} mx-5 lg:mx-20  flex h-[67px] items-center flex-col lg:flex-row ${!Menu && "lg:flex-col"} justify-between  `}>
        <div className={`flex items-center justify-between w-full  `}>
          <Link to="/" className={`${!Menu && "opacity-0"} `}>
            <StaticImage src="../../images/Logo.png" alt="Dmple Logo" placeholder="blurred" className="w-[207px] h-[63px]" />
          </Link>

          {/* Switch dark mode button  at large screen */}
          <div className={`flex-row hidden ${!Menu && "opacity-0"} mx-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:flex`}>
            <Switch
              onChange={toggleMode}
              checked={theme === "light" ? false : true}
              handleDiameter={20}
              checkedIcon={false}
              uncheckedIcon={false}
              onColor={"#fff"}
              offColor={"#fff"}
              className="border border-[#DCDCDC]"
            />
            <div className={`mx-2 w-[120px] text-base dark:text-white `}>{theme === "dark" ? "Back to reality " : "Crazy Mode  "}</div>
          </div>

          {/* hamburger menu  */}
          <div className="cursor-pointer self-end my-auto show xl:hidden" onClick={() => setMenu(!Menu)} onKeyDown={() => setMenu(!Menu)}>
            {Menu ? (
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_831_516)">
                  <rect width="44" height="44" rx="22" fill="#282728" />
                  <rect x="9" y="17" width="26" height="2" rx="1" fill="white" />
                  <rect x="9" y="25" width="26" height="2" rx="1" fill="white" />
                </g>
                <defs>
                  <filter id="filter0_b_831_516" x="-33" y="-33" width="110" height="110" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="16.5" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_831_516" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_831_516" result="shape" />
                  </filter>
                </defs>
              </svg>
            ) : (
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_601_7098)">
                  <rect width="44" height="44" rx="22" fill="#282728" />
                  <rect x="12.1006" y="30.3848" width="26" height="2" rx="1" transform="rotate(-45 12.1006 30.3848)" fill="white" />
                  <rect x="30.4854" y="31.799" width="26" height="2" rx="1" transform="rotate(-135 30.4854 31.799)" fill="white" />
                </g>
                <defs>
                  <filter id="filter0_b_601_7098" x="-33" y="-33" width="110" height="110" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="16.5" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_601_7098" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_601_7098" result="shape" />
                  </filter>
                </defs>
              </svg>
            )}
          </div>

          {/* Menu at large screen */}
          <div className="hidden font-medium xl:block ">
            <Link to="/#helloJam" className={`nav-link `}>
              Product
            </Link>
            <Link to="/news" className={`nav-link  hidden`}>
              News
            </Link>
            <Link to="/about" className={`nav-link `}>
              Team
            </Link>
            <Link to="/career" className={`nav-link `}>
              Career
            </Link>
            <LanguageDropdown className="ml-4 border border-black" />
          </div>
        </div>

        {/* hamburger menu when open at phone/table side */}
        <div className={`${Menu && "hidden"} xl:hidden  items-center w-full bg-white dark:bg-[#181818]  pt-10 flex flex-col`}>
          <Link to="/#helloJam" className="nav-link my-2">
            Product
          </Link>
          <Link to="/news" className="nav-link my-2 hidden">
            News
          </Link>
          <Link to="/about" className="nav-link my-2">
            Team
          </Link>
          <Link to="/career" className="nav-link my-2">
            Career
          </Link>
          <div className="flex flex-row my-5">
            <Switch
              onChange={handleThemeChange}
              checked={theme === "light" ? true : false}
              handleDiameter={20}
              checkedIcon={false}
              uncheckedIcon={false}
              onColor={"#fff"}
              offColor={"#fff"}
              className="border border-[#DCDCDC] "
            />
            <div className="mx-2 w-[100px] text-base dark:text-white">{theme === "dark" ? "Back to reality " : "Crazy Mode "}</div>
          </div>
          <div className="flex pt-10 justify-center w-full pb-20">
            {/* twitter */}
            <a href="https://twitter.com/DmpleStudio" target="_blank">
              <div className="mx-5 cursor-pointer">
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.79578 17.5768C14.9455 17.5768 19.4043 10.8232 19.4043 4.96834C19.4043 4.77848 19.4001 4.58439 19.3916 4.39453C20.259 3.76726 21.0075 2.9903 21.602 2.10016C20.7942 2.45957 19.9366 2.69429 19.0583 2.79632C19.983 2.24202 20.6754 1.37125 21.0071 0.345416C20.1372 0.860976 19.1858 1.22466 18.1938 1.42088C17.5254 0.710665 16.6417 0.24042 15.6792 0.0828467C14.7167 -0.074727 13.7292 0.0891468 12.8692 0.549132C12.0092 1.00912 11.3247 1.73959 10.9215 2.62762C10.5183 3.51565 10.4189 4.51177 10.6386 5.46198C8.87708 5.37358 7.15382 4.91599 5.58051 4.11887C4.0072 3.32175 2.61897 2.20289 1.50581 0.834837C0.940048 1.81028 0.766923 2.96455 1.02162 4.06306C1.27633 5.16156 1.93974 6.12187 2.87704 6.74882C2.17337 6.72648 1.48512 6.53702 0.869145 6.19611V6.25096C0.868514 7.27462 1.2224 8.2669 1.87066 9.05914C2.51891 9.85138 3.42151 10.3947 4.42504 10.5967C3.77321 10.775 3.08908 10.801 2.42559 10.6726C2.70877 11.553 3.25972 12.323 4.00157 12.8751C4.74342 13.4273 5.63914 13.734 6.56373 13.7526C4.99405 14.9856 3.05505 15.6544 1.05901 15.6512C0.705025 15.6507 0.351392 15.629 0 15.5862C2.02776 16.8872 4.38659 17.5781 6.79578 17.5768Z"
                    fill="#1B234A"
                    className="dark:fill-white"
                  />
                </svg>
              </div>
            </a>
            {/* face */}
            <a href="https://www.facebook.com/dmplestudio" target="_blank">
              <div className="mx-5 cursor-pointer">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_783_572)">
                    <path
                      d="M21.7654 10.801C21.7654 4.83578 16.9296 0 10.9644 0C4.99911 0 0.16333 4.83578 0.16333 10.801C0.16333 16.192 4.11309 20.6605 9.27669 21.4708V13.9232H6.53424V10.801H9.27669V8.42142C9.27669 5.71442 10.8892 4.21915 13.3564 4.21915C14.5378 4.21915 15.7742 4.43011 15.7742 4.43011V7.08817H14.4122C13.0705 7.08817 12.652 7.92082 12.652 8.77583V10.801H15.6476L15.1687 13.9232H12.652V21.4708C17.8156 20.6605 21.7654 16.192 21.7654 10.801Z"
                      fill="#1B234A"
                      className="dark:fill-white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_783_572">
                      <rect width="21.602" height="21.602" fill="white" transform="translate(0.16333)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </a>
            {/* insta */}
            <a href="https://www.instagram.com/dmple_studio/" target="_blank">
              <div className="mx-5 cursor-pointer">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_783_574)">
                    <path
                      d="M11.1274 1.94503C14.0133 1.94503 14.3551 1.95768 15.49 2.00831C16.5448 2.05473 17.1144 2.23193 17.4941 2.3796C17.9962 2.57368 18.3591 2.80995 18.7346 3.18546C19.1143 3.56518 19.3463 3.92381 19.5404 4.42589C19.6881 4.80561 19.8653 5.37941 19.9117 6.42998C19.9623 7.56915 19.975 7.9109 19.975 10.7926C19.975 13.6785 19.9623 14.0202 19.9117 15.1552C19.8653 16.21 19.6881 16.7796 19.5404 17.1593C19.3463 17.6614 19.1101 18.0242 18.7346 18.3997C18.3548 18.7794 17.9962 19.0115 17.4941 19.2056C17.1144 19.3532 16.5406 19.5304 15.49 19.5769C14.3509 19.6275 14.0091 19.6401 11.1274 19.6401C8.24154 19.6401 7.89979 19.6275 6.76484 19.5769C5.71005 19.5304 5.14047 19.3532 4.76074 19.2056C4.25866 19.0115 3.89582 18.7752 3.52031 18.3997C3.14059 18.02 2.90854 17.6614 2.71445 17.1593C2.56678 16.7796 2.38958 16.2058 2.34317 15.1552C2.29254 14.016 2.27988 13.6743 2.27988 10.7926C2.27988 7.90669 2.29254 7.56493 2.34317 6.42998C2.38958 5.3752 2.56678 4.80561 2.71445 4.42589C2.90854 3.92381 3.14481 3.56096 3.52031 3.18546C3.90004 2.80573 4.25866 2.57368 4.76074 2.3796C5.14047 2.23193 5.71427 2.05473 6.76484 2.00831C7.89979 1.95768 8.24154 1.94503 11.1274 1.94503ZM11.1274 0C8.19513 0 7.82806 0.0126574 6.67624 0.0632872C5.52863 0.113917 4.73965 0.29956 4.05614 0.565366C3.34311 0.84383 2.73977 1.2109 2.14065 1.81423C1.53731 2.41335 1.17025 3.01669 0.891782 3.72551C0.625976 4.41323 0.440333 5.19799 0.389703 6.3456C0.339073 7.50165 0.326416 7.86871 0.326416 10.801C0.326416 13.7333 0.339073 14.1004 0.389703 15.2522C0.440333 16.3998 0.625976 17.1888 0.891782 17.8723C1.17025 18.5854 1.53731 19.1887 2.14065 19.7878C2.73977 20.3869 3.34311 20.7582 4.05192 21.0325C4.73965 21.2983 5.52441 21.4839 6.67202 21.5345C7.82384 21.5852 8.19091 21.5978 11.1232 21.5978C14.0555 21.5978 14.4226 21.5852 15.5744 21.5345C16.722 21.4839 17.511 21.2983 18.1945 21.0325C18.9033 20.7582 19.5067 20.3869 20.1058 19.7878C20.7049 19.1887 21.0762 18.5854 21.3504 17.8765C21.6162 17.1888 21.8019 16.4041 21.8525 15.2564C21.9031 14.1046 21.9158 13.7375 21.9158 10.8052C21.9158 7.87293 21.9031 7.50587 21.8525 6.35404C21.8019 5.20643 21.6162 4.41745 21.3504 3.73395C21.0846 3.01669 20.7176 2.41335 20.1142 1.81423C19.5151 1.21511 18.9118 0.84383 18.203 0.569585C17.5152 0.303779 16.7305 0.118136 15.5829 0.0675064C14.4268 0.0126575 14.0597 0 11.1274 0Z"
                      fill="#1B234A"
                      className="dark:fill-white"
                    />
                    <path
                      d="M11.1275 5.25281C8.06442 5.25281 5.57935 7.73789 5.57935 10.801C5.57935 13.8641 8.06442 16.3492 11.1275 16.3492C14.1906 16.3492 16.6757 13.8641 16.6757 10.801C16.6757 7.73789 14.1906 5.25281 11.1275 5.25281ZM11.1275 14.3999C9.14031 14.3999 7.52859 12.7882 7.52859 10.801C7.52859 8.81377 9.14031 7.20205 11.1275 7.20205C13.1147 7.20205 14.7265 8.81377 14.7265 10.801C14.7265 12.7882 13.1147 14.3999 11.1275 14.3999Z"
                      fill="#1B234A"
                      className="dark:fill-white"
                    />
                    <path
                      d="M18.1904 5.03344C18.1904 5.7507 17.6082 6.32872 16.8951 6.32872C16.1779 6.32872 15.5999 5.74648 15.5999 5.03344C15.5999 4.31618 16.1821 3.73816 16.8951 3.73816C17.6082 3.73816 18.1904 4.3204 18.1904 5.03344Z"
                      fill="#1B234A"
                      className="dark:fill-white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_783_574">
                      <rect width="21.602" height="21.602" fill="white" transform="translate(0.326416)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </a>
            {/* linkedin */}
            <a href="https://www.linkedin.com/company/80190162/admin/" target="_blank">
              <div className="mx-5 cursor-pointer">
                <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_783_575)">
                    <path
                      d="M21.1825 0H2.13958C1.22737 0 0.489746 0.69616 0.489746 1.55687V20.041C0.489746 20.9017 1.22737 21.602 2.13958 21.602H21.1825C22.0947 21.602 22.8367 20.9017 22.8367 20.0452V1.55687C22.8367 0.69616 22.0947 0 21.1825 0ZM7.11963 18.4081H3.80251V8.09655H7.11963V18.4081ZM5.46107 6.69157C4.3961 6.69157 3.53626 5.8604 3.53626 4.83514C3.53626 3.80989 4.3961 2.97872 5.46107 2.97872C6.52167 2.97872 7.38151 3.80989 7.38151 4.83514C7.38151 5.85618 6.52167 6.69157 5.46107 6.69157ZM19.5327 18.4081H16.2199V13.3958C16.2199 12.2018 16.1981 10.6618 14.4959 10.6618C12.7718 10.6618 12.51 11.9655 12.51 13.3114V18.4081H9.20156V8.09655H12.379V9.50574H12.4227C12.8635 8.69567 13.9459 7.83918 15.5565 7.83918C18.9129 7.83918 19.5327 9.97407 19.5327 12.7503V18.4081Z"
                      fill="#1B234A"
                      className="dark:fill-white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_783_575">
                      <rect width="22.3469" height="21.602" fill="white" transform="translate(0.489746)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </a>
            {/* medium */}
            <a href="https://medium.com/@dmplestudio" target="_blank">
              <div className="mx-5 cursor-pointer">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.237 4.999-5 5zm.97-5.649v-.269l-1.247-1.224c-.11-.084-.165-.222-.142-.359v-8.998c-.023-.137.032-.275.142-.359l1.277-1.224v-.269h-4.422l-3.152 7.863-3.586-7.863h-4.638v.269l1.494 1.799c.146.133.221.327.201.523v7.072c.044.255-.037.516-.216.702l-1.681 2.038v.269h4.766v-.269l-1.681-2.038c-.181-.186-.266-.445-.232-.702v-6.116l4.183 9.125h.486l3.593-9.125v7.273c0 .194 0 .232-.127.359l-1.292 1.254v.269h6.274z"
                    fill="#1B234A"
                    className="dark:fill-white"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Eng");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <select value={selectedLanguage} onChange={handleLanguageChange} className="border border-[#E9E9E9] pl-4 font-medium py-1 rounded-full">
      <option value="Eng">EN</option>
      <option value="Spa">SP</option>
      <option value="Ger">GE</option>
      <option value="FR">FR</option>
    </select>
  );
};

export default Navbar;
