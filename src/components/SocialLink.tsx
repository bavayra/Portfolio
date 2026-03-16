import DiscordIcon from "../assets/Icons/DiscordIcon.svg?react";
import GitHubIcon from "../assets/Icons/GitHubIcon.svg?react";
import GmailIcon from "../assets/Icons/GmailIcon.svg?react";
import InstagramIcon from "../assets/Icons/InstagramIcon.svg?react";
import LinkedInIcon from "../assets/Icons/LinkedInIcon.svg?react";
import TelegramIcon from "../assets/Icons/TelegramIcon.svg?react";

import Icon from "./Icon";

interface SocialLinksProps {
  size?: "sm" | "md";
  className?: string;
  iconColor?: string;
}

const SocialLinks = ({
  size = "md",
  className,
  iconColor = "text-accent-red",
}: SocialLinksProps) => {
  const Links = {
    discord: "https://www.discord.com/bavayra",
    github: "https://www.github.com/bavayra",
    telegram: "https://web.telegram.org/bavayra",
    gmail: "https://mail.google.com/mail/u/0/#inbox",
    instagram: "https://www.instagram.com/bavayra",
    linkedin: "https://www.linkedin.com/in/bavayra",
  };
  const socialNetworks = [
    { name: "Discord", icon: DiscordIcon, url: Links.discord },
    { name: "GitHub", icon: GitHubIcon, url: Links.github },
    { name: "Telegram", icon: TelegramIcon, url: Links.telegram },
    { name: "Gmail", icon: GmailIcon, url: Links.gmail },
    { name: "Instagram", icon: InstagramIcon, url: Links.instagram },
    { name: "LinkedIn", icon: LinkedInIcon, url: Links.linkedin },
  ];

  const sizeClasses = {
    sm: "w-10 h-10 desktop-sm:w-[120px] desktop-sm:h-[120px]",
    md: "w-20 h-20 tablet-sm:w-[58px] tablet-sm:h-[58px] desktop-sm:w-[68px] desktop-sm:h-[68px]",
  };

  const iconBaseSize = size === "md" ? "w-12 h-12" : "w-7 h-7";
  const iconTabletSize =
    size === "md"
      ? "tablet-sm:w-[56px] tablet-sm:h-[56px]"
      : "tablet-sm:w-[28px] tablet-sm:h-[28px]";
  const iconDesktopSize =
    size === "md"
      ? "desktop-sm:w-[68px] desktop-sm:h-[68px]"
      : "desktop-sm:w-[48px] desktop-sm:h-[48px]";

  const iconClasses = [
    iconColor,
    iconBaseSize,
    iconTabletSize,
    iconDesktopSize,
    "border-none",
    "rounded-full",
  ].join(" ");

  return (
    <div
      className={`flex items-center desktop-sm:mx-4 desktop-sm:my-16 justify-center ${className || ""}`}
    >
      {socialNetworks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${sizeClasses[size]} shrink-0 flex items-center justify-center rounded-full transition-transform hover:scale-110`}
          aria-label={social.name}
        >
          <Icon
            as={social.icon}
            className={`${iconColor} ${iconClasses}`}
            aria-hidden="true"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
