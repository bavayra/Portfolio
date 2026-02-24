import { Divider } from "../components/Divider";
import GitHubLink from "../components/GitHubLink";

export const WeatherApp = () => {
  return (
    <section id="projects" className="relative h-auto py-8 ml-3">
      <Divider
        widthPx={2}
        heightPx={272}
        leftPx={0}
        color="grey-2"
        topPx={100}
      />
      <p className="text-text">04</p>
      <h2 className="text-2xl text-grey-2 font-medium">WEATHER APP</h2>
      <p className="mt-2 text-xs text-text leading-loose tracking-wide ml-3 w-full max-w-60 wrap-break-words whitespace-normal">
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
