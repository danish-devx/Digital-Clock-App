import { useEffect, useState } from "react";
import heroImage from "../../assets/pngwing.com.png";

const DigitalClock = () => {
  const [now, setNow] = useState(() => new Date());
  const [isTwentyFourHour, setIsTwentyFourHour] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const currentHour = now.getHours();
  const displayHour = isTwentyFourHour ? currentHour : currentHour % 12 || 12;
  const hours = displayHour.toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const period = currentHour >= 12 ? "PM" : "AM";
  const dateLabel = now.toDateString();
  const shortDate = now.toLocaleDateString();
  const weekday = now.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <main
      className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[#3e1e1e] bg-[image:var(--hero-image)] bg-cover bg-center text-[#fffaf5]"
      style={{ "--hero-image": `url(${heroImage})` }}
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(31,14,15,.88),rgba(48,20,20,.45)_48%,rgba(31,13,14,.18))]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_74%_33%,rgba(255,181,154,.18),transparent_28%),linear-gradient(180deg,rgba(29,12,13,.35),transparent_48%,rgba(27,12,12,.82))]" />
      <header className="mx-auto flex w-[calc(100%-40px)] max-w-[1180px] items-center justify-between pt-6 sm:w-[calc(100%-80px)] sm:pt-9">
        <div className="text-[11px] font-extrabold tracking-[.23em] text-[#fbe6d8]">
          <span className="mr-2 inline-block h-[7px] w-[7px] rounded-full bg-[#ee806d] shadow-[0_0_14px_#ee806d]" />{" "}
          CHERRY HOUR
        </div>
        <button
          className="cursor-pointer rounded-full border border-[rgba(255,220,201,.3)] bg-[rgba(36,12,13,.2)] px-[15px] py-2 text-[10px] font-bold uppercase tracking-[.14em] text-[#f8d9c8] transition hover:border-[rgba(255,255,255,.6)] hover:bg-[rgba(255,255,255,.13)]"
          type="button"
          onClick={() => setIsTwentyFourHour((value) => !value)}
        >
          <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#ffaf93]" />{" "}
          {isTwentyFourHour ? "24 hour" : "12 hour"}
        </button>
      </header>
      <section className="mx-auto flex w-[calc(100%-40px)] max-w-[1180px] flex-1 flex-col justify-center pb-[14vh] sm:w-[calc(100%-80px)] sm:pb-[8vh]">
        <div className="flex items-center gap-2.5 text-[10px] font-extrabold tracking-[.25em] text-[#ffad91]">
          <span className="h-[7px] w-[7px] rounded-full border border-[#ffaf93] shadow-[0_0_0_3px_rgba(255,175,147,.15)]" />{" "}
          LOCAL TIME{" "}
          <span className="ml-1.5 h-px w-12 bg-[rgba(255,175,147,.55)]" />
        </div>
        <p className="my-[25px] mb-1.5 font-['Playfair_Display'] text-[clamp(1.25rem,2.3vw,2rem)] italic text-[#f6d4c3]">
          {dateLabel}
        </p>
        <div
          className="flex items-baseline font-['DM_Mono'] text-[clamp(3.2rem,17vw,6rem)] leading-[.95] tracking-[-.08em] text-[#fff8f0] drop-shadow-[0_9px_35px_rgba(15,4,4,.25)] sm:text-[clamp(4.5rem,12vw,10.6rem)]"
          aria-label={`${hours}:${minutes}:${seconds} ${period}`}
        >
          <span>{hours}</span>
          <b className="mx-[.06em] text-[.68em] font-normal text-[#ffad90] motion-safe:animate-[clock-pulse_2s_infinite]">
            :
          </b>
          <span>{minutes}</span>
          <b className="mx-[.06em] text-[.68em] font-normal text-[#ffad90] motion-safe:animate-[clock-pulse_2s_infinite]">
            :
          </b>
          <span className="text-[#ffc4aa]">{seconds}</span>
          {!isTwentyFourHour && (
            <small className="ml-3 self-center font-['Manrope'] text-[.65rem] font-extrabold tracking-[.18em] text-[#ffad90] sm:ml-[22px] sm:text-[clamp(.8rem,1.4vw,1.15rem)]">
              {period}
            </small>
          )}
        </div>
        <div className="mt-[22px] text-[10px] font-bold leading-8 tracking-[.17em] text-[rgba(255,232,219,.65)]">
          <span className="mr-1.5 inline-grid h-[15px] w-[15px] place-items-center rounded-full border border-[rgba(255,175,147,.7)] text-[13px] leading-[10px] text-[#ffad90]">
            +
          </span>{" "}
          LOCAL TIME{" "}
          <strong className="ml-[22px] font-medium tracking-[.08em] text-[#f5d8c9] sm:ml-3">
            YOUR DEVICE
          </strong>
        </div>
      </section>
      <footer className="mx-auto flex w-[calc(100%-40px)] max-w-[1180px] items-end gap-[18px] pb-[25px] sm:w-[calc(100%-80px)] sm:gap-[38px] sm:pb-[38px]">
        <div className="flex flex-col gap-2">
          <span className="text-[9px] font-extrabold tracking-[.23em] text-[#ee9b83]">
            TODAY
          </span>
          <strong className="text-[15px] font-medium text-[#f9e0d2]">
            {shortDate}
          </strong>
        </div>
        <div className="h-8 w-px bg-[rgba(255,219,200,.25)] sm:h-[39px]" />
        <div className="flex flex-col gap-2">
          <span className="text-[9px] font-extrabold tracking-[.23em] text-[#ee9b83]">
            DAY OF THE WEEK
          </span>
          <strong className="text-[15px] font-medium text-[#f9e0d2]">
            {weekday}
          </strong>
        </div>
        <div className="ml-auto hidden font-['Playfair_Display'] text-right text-base italic leading-[1.3] text-[rgba(255,220,205,.6)] sm:block">
          A little time
          <br />
          for yourself.
        </div>
      </footer>
    </main>
  );
};

export default DigitalClock;
