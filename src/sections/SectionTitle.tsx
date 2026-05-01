import Circle from "../components/Circle";
import Divider from "../components/Divider";
import { useInViewOnce } from "../hooks/useInViewOnce";

interface SectionTitleProps {
  title: string;
  partLabel?: string;
  dotsCount?: 1 | 2 | 3;
  headingId?: string;
}

const SectionTitle = ({
  title,
  partLabel = "Part",
  dotsCount = 1,
  headingId,
}: SectionTitleProps) => {
  const { ref, inViewOnce } = useInViewOnce<HTMLHeadingElement>({
    threshold: 0.1,
  });

  return (
    <div className="section-vh flex flex-col relative ml-3 justify-center phone-md:pb-10 tablet-sm:ml-9 desktop-lg:ml-10">
      <Divider
        widthPx="var(--hero-div-w)"
        heightPx="var(--section-top-div-height)"
        leftPx={0}
        color="grey-2"
        topPx="var(--section-top-div-top)"
      />
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <span className="text-(length:--part-label) leading-1 tracking-wide font-medium text-section-title desktop-sm:text-3xl desktop-md:text-4xl">
            {partLabel}
          </span>

          {inViewOnce && (
            <>
              {Array.from({ length: dotsCount }).map((_, index) => (
                <Circle
                  key={`dot-${index}`}
                  className="circle-drop w-5 h-5 tablet-sm:w-6 tablet-sm:h-6 desktop-lg:w-7 desktop-lg:h-7"
                  style={{ animationDelay: `${index * 0.6}s` }}
                />
              ))}
            </>
          )}
        </div>

        <h2
          id={headingId}
          ref={ref}
          className="font-extrabold tracking-[0.2em] text-[3rem] tablet-sm:leading-16 tablet-sm:text-[3.5rem] desktop-sm:text-[5rem] desktop-lg:text-[5.5rem] desktop-sm:leading-21 text-section-title"
        >
          {title}
        </h2>
      </div>

      <Divider
        widthPx="var(--hero-div-w)"
        heightPx="var(--section-bot-div-height)"
        leftPx={0}
        color="grey-2"
        topPx="var(--section-bot-div-top)"
      />
    </div>
  );
};
export default SectionTitle;
