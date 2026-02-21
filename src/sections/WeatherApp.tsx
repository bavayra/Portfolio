import { Divider } from "../components/Divider";

export const WeatherApp = () => {
  return (
    <section className="relative h-144 py-12 ml-3">
      <Divider
        widthPx={2}
        heightPx={420}
        leftPx={0}
        color="grey-medium"
        topPx={116}
      />
      <p className="text-grey-dark">03</p>
      <h2 className="text-2xl text-grey-medium font-medium">
        WHAT IS SHE LIKE
      </h2>
      <p className="mt-2 text-xs text-grey-dark leading-loose tracking-wide ml-3 w-full max-w-[15rem] break-words whitespace-normal">
        I'm a curious and disciplined developer who enjoys solving UI problems
        with clean, maintainable code. I prioritize performance and
        accessibility, and I'm committed to continuous learning. I work well in
        teams, bringing empathy and adaptability to collaborations. I'm
        detail-oriented and strive for perfection, learn quickly, and stay
        self-motivated to deliver reliable results.
      </p>
    </section>
  );
};

export default WeatherApp;
