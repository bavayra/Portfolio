import DiscordIcon from "../assets/Icons/DiscordIcon.svg?react";
import GitHubIcon from "../assets/Icons/GitHubIcon.svg?react";
import GmailIcon from "../assets/Icons/GmailIcon.svg?react";
import LinkedInIcon from "../assets/Icons/LinkedInIcon.svg?react";
import TelegramIcon from "../assets/Icons/TelegramIcon.svg?react";

import Icon from "./Icon";

interface SocialLinksProps {
  size?: "sm" | "md";
  className?: string;
  iconColor?: string;
}

const SOCIAL_NETWORKS = [
  {
    name: "Discord",
    icon: DiscordIcon,
    url: "https://www.discord.com/users/285883834749157388",
    gridClass: "col-start-1 row-start-1",
  },
  {
    name: "GitHub",
    icon: GitHubIcon,
    url: "https://www.github.com/bavayra",
    gridClass: "col-start-3 row-start-1",
  },
  {
    name: "Telegram",
    icon: TelegramIcon,
    url: "https://t.me/bavayra",
    gridClass: "col-start-5 row-start-1",
  },
  {
    name: "Gmail",
    icon: GmailIcon,
    url: "mailto:x.bavayra@gmail.com",
    gridClass: "col-start-2 row-start-2",
  },
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/bavayra",
    gridClass: "col-start-4 row-start-2",
  },
] as const;

const SIZE_CLASSES = {
  sm: "w-10 h-10 desktop-sm:w-[120px] desktop-sm:h-[120px]",
  md: "w-20 h-20 tablet-sm:w-[58px] tablet-sm:h-[58px] desktop-sm:w-[68px] desktop-sm:h-[68px]",
} as const;

const ICON_SIZE_CLASSES = {
  sm: "w-7 h-7 tablet-sm:w-[28px] tablet-sm:h-[28px] desktop-sm:w-[48px] desktop-sm:h-[48px]",
  md: "w-12 h-12 tablet-sm:w-[56px] tablet-sm:h-[56px] desktop-sm:w-[68px] desktop-sm:h-[68px]",
} as const;

const SocialLinks = ({
  size = "md",
  className,
  iconColor = "text-accent-red",
}: SocialLinksProps) => {
  const wrapperClass = `${SIZE_CLASSES[size]} shrink-0 flex items-center justify-center rounded-full transition-transform hover:scale-110 ${iconColor}`;
  const iconClasses = `${ICON_SIZE_CLASSES[size]} border-none rounded-full`;

  return (
    <div className={`desktop-sm:mx-4 desktop-sm:my-16 ${className ?? ""}`}>
      {SOCIAL_NETWORKS.map((social) => {
        const isExternalUrl = social.url.startsWith("http");
        return (
          <a
            key={social.name}
            href={social.url}
            target={isExternalUrl ? "_blank" : undefined}
            rel={isExternalUrl ? "noopener noreferrer" : undefined}
            className={`${wrapperClass} ${social.gridClass}`}
            aria-label={social.name}
          >
            <Icon as={social.icon} className={iconClasses} aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
