import { Divider } from "../components/Divider";
import GitHubLink from "../components/GitHubLink";

export const WeatherApp = () => {
  return (
    <section
      id="projects"
      className="relative h-auto py-8 ml-3 tablet-sm:ml-12"
    >
      <Divider
        widthPx={2}
        heightPx="var(--block-div-lg-h)"
        leftPx={0}
        color="grey-2"
        topPx="var(--block-div-top)"
      />
      <p className="text-text phone-sm:text-xl tablet-sm:text-2xl">04</p>
      <h2 className="text-2xl tablet-md:my-2 phone-sm:text-3xl tablet-md:text-5xl phone-lg:text-4xl text-grey-2 font-medium">
        WEATHER APP
      </h2>
      <p className="mt-2 phone-lg:pl-2 tablet-md:max-w-116 text-xs phone-lg:max-w-80 tablet-sm:text-lg tablet-sm:max-w-92 phone-sm:text-sm phone-md:text-base phone-md:max-w-76 phone-sm:max-w-68 text-text leading-loose tracking-wide ml-3 w-full max-w-60 wrap-break-words whitespace-normal">
        A responsive weather app built with vanilla JavaScript that displays
        current conditions, hourly and daily forecasts using the OpenWeather
        API. Features city search, unit toggle (°C/°F), optional browser
        geolocation, and graceful error handling. Optimized for performance and
        accessibility with client‑side caching and a clean mobile‑first UI.
      </p>
      <GitHubLink />
    </section>
  );
};

export default WeatherApp;
