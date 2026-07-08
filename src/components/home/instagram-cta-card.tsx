import { InstagramLogoIcon } from '@phosphor-icons/react';

const INSTAGRAM_URL = 'https://www.instagram.com/agenciauvabarra/';

function InstagramCtaCard() {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-1 flex-col overflow-hidden rounded-lg transition-opacity hover:opacity-90"
    >
      <div className="flex flex-1 flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,#F58529,#DD2A7B,#8134AF,#515BD4)] px-6 py-8 text-center text-white">
        <InstagramLogoIcon size={32} weight="fill" />
        <p className="text-sm leading-snug">
          Acompanhe a Agência UVA no Instagram e fique por dentro de tudo!
        </p>
        <span className="inline-flex items-center justify-center gap-1.5 rounded-md bg-white px-5 py-2 text-xs font-semibold text-[#DD2A7B]">
          Saber mais
        </span>
      </div>
    </a>
  );
}

export { InstagramCtaCard };
