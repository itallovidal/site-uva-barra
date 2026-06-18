import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { type ReactNode, useCallback, useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import type { KeenSliderOptions, KeenSliderHooks } from 'keen-slider/react';

type SliderProps = {
  children: ReactNode[];
  options?: KeenSliderOptions<{}, {}, KeenSliderHooks>;
};

function Slider({ children, options }: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    ...options,
  });

  const slideCount = children.length;

  const goToPrev = useCallback(() => {
    instanceRef.current?.prev();
  }, [instanceRef]);

  const goToNext = useCallback(() => {
    instanceRef.current?.next();
  }, [instanceRef]);

  const goToSlide = useCallback(
    (idx: number) => {
      instanceRef.current?.moveToIdx(idx);
    },
    [instanceRef],
  );

  useEffect(() => {
    if (instanceRef.current) {
      setCurrentSlide(instanceRef.current.track.details.rel);
    }
  }, [instanceRef]);

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider">
        {children.map((child, index) => (
          <div key={index} className="keen-slider__slide">
            {child}
          </div>
        ))}
      </div>

      {loaded && slideCount > 1 && (
        <>
          {currentSlide > 0 && (
            <button
              onClick={goToPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              aria-label="Slide anterior"
            >
              <ChevronLeftIcon className="size-5" />
            </button>
          )}

          {currentSlide < slideCount - 1 && (
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              aria-label="Próximo slide"
            >
              <ChevronRightIcon className="size-5" />
            </button>
          )}

          <div className="mt-4 flex items-center justify-center gap-2">
            {Array.from({ length: slideCount }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  idx === currentSlide
                    ? 'w-6 bg-red-600'
                    : 'w-2.5 bg-zinc-300 hover:bg-zinc-400'
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export { Slider };
