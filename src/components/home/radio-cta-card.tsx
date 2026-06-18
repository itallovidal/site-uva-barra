import { Link } from 'react-router-dom';

const RADIO_CATEGORY = 'Rádio UVA Barra';

interface RadioCtaCardProps {
  coverUrl?: string;
}

function RadioCtaCard({ coverUrl }: RadioCtaCardProps) {
  return (
    <Link
      to={`/noticias?categoria=${encodeURIComponent(RADIO_CATEGORY)}`}
      className="flex flex-1 flex-col overflow-hidden rounded-lg transition-opacity hover:opacity-90"
    >
      {coverUrl && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={coverUrl}
            alt="Rádio UVA Barra"
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col items-center justify-center gap-2 bg-[linear-gradient(45deg,#005683,#044263)] px-6 py-8 text-center text-white">
        <span className="text-sm font-bold uppercase tracking-wider text-white/70">
          Rádio UVA Barra
        </span>
        <p className="text-sm leading-snug">
          Fique por dentro das notícias mais relevantes com a nossa seleção especial.
        </p>
        <span className="inline-flex items-center justify-center gap-1.5 rounded-md bg-white px-5 py-2 text-xs font-semibold text-[#005683]">
          Vamos lá!
        </span>
      </div>
    </Link>
  );
}

export { RadioCtaCard };
