import { useEffect, useState } from "react";
import ImageCarousel from "../components/ImageCarousel";

const startDate = new Date("2025-04-11T15:30:00");

const TimerSinceWedding: React.FC = () => {
  const [timePassed, setTimePassed] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();

      if (days < 0) {
        months -= 1;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
      }

      if (months < 0) {
        years -= 1;
        months += 12;
      }

      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");

      setTimePassed(
        `${years} anos, ${months} meses e ${days} dias — ${hours}:${minutes}:${seconds}`,
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-3 py-6 text-center text-white">
      {timePassed ? (
        <div className="flex w-full max-w-md flex-col items-center gap-4 sm:gap-6">
          {/* Player do Spotify */}
          <div className="w-full">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/1gVgkQFOKa8Wc1HYsJtPdH?utm_source=generator&theme=0"
              width="100%"
              height="80"
              frameBorder={0}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          {/* Carrossel centralizado */}
          <ImageCarousel />

          {/* Mensagem */}
          <h1 className="text-lg font-bold sm:text-xl md:text-2xl">
            Desde que dissemos sim, cada segundo ao seu lado é um presente 💖
          </h1>
          <p className="font-mono text-base sm:text-lg md:text-xl">
            {timePassed}
          </p>
        </div>
      ) : (
        <div>
          <p className="text-xl">Carregando sua história... 💫</p>
        </div>
      )}
    </div>
  );
};

export default TimerSinceWedding;
