import DiscordIcon from "../assets/Icons/DiscordIcon.svg?component";
import GitHubIcon from "../assets/icons/GitHubIcon.svg?component";
import GmailIcon from "../assets/icons/GmailIcon.svg?component";
import InstagramIcon from "../assets/icons/InstagramIcon.svg?component";
import LinkedInIcon from "../assets/icons/LinkedInIcon.svg?component";
import TelegramIcon from "../assets/icons/TelegramIcon.svg?component";

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
    sm: "w-10 h-10",
    md: "w-12  h-12",
  };

  const iconClasses = [
    iconColor,
    " w-10 h-10",
    size === "md"
      ? "border-1 border-primary-100 lg:w-6 lg:h-6"
      : "border-primary-500 border-2",
    "rounded-full",
  ].join(" ");

  const iconSizeMap = {
    sm: "sm" as const,
    md: "md" as const,
  };

  return (
    <div className={` flex items-center justify-center ${className || ""}`}>
      {socialNetworks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${sizeClasses[size]} shrink-0 items-center justify-center rounded-full transition-transform hover:scale-110`}
          aria-label={social.name}
        >
          <Icon
            as={social.icon}
            size={iconSizeMap[size]}
            className={`${iconColor} ${iconClasses}`}
            aria-hidden="true"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
