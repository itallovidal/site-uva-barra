interface NewsHtmlContentProps {
  content: string;
}

function NewsHtmlContent({ content }: NewsHtmlContentProps) {
  return (
    <div
      className={[
        'text-zinc-700 leading-relaxed',
        // Paragraphs — 1rem gap
        '[&_p]:mb-4 [&_p]:leading-relaxed',
        // Headings
        '[&_h1]:mb-4 [&_h1]:mt-8 [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:text-zinc-900',
        '[&_h2]:mb-3 [&_h2]:mt-6 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-zinc-900',
        '[&_h3]:mb-2 [&_h3]:mt-5 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-zinc-900',
        // Figures — full width
        '[&_figure]:my-6 [&_figure]:w-full',
        // Images inside figure — full width + rounded
        '[&_figure_img]:w-full [&_figure_img]:rounded-xl [&_figure_img]:object-cover',
        // Images outside figure — also full width + rounded
        '[&_>_img]:my-6 [&_>_img]:w-full [&_>_img]:rounded-xl [&_>_img]:object-cover',
        // Figcaption
        '[&_figcaption]:mt-2 [&_figcaption]:text-center [&_figcaption]:text-sm [&_figcaption]:italic [&_figcaption]:text-zinc-500',
        // Links
        '[&_a]:text-red-600 [&_a]:underline [&_a:hover]:text-red-700',
        // Lists
        '[&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6',
        '[&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6',
        '[&_li]:mb-1',
        // Blockquote
        '[&_blockquote]:my-4 [&_blockquote]:border-l-4 [&_blockquote]:border-red-600 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-zinc-600',
        // Strong / em
        '[&_strong]:font-semibold [&_strong]:text-zinc-900',
      ].join(' ')}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export { NewsHtmlContent };
