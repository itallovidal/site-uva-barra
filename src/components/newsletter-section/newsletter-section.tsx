import { PaperPlaneRightIcon } from '@phosphor-icons/react';
import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email) {
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/newsletter/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar. Tente novamente.');
      }

      setStatus('success');
      setMessage('Inscrição realizada com sucesso!');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Erro ao cadastrar. Tente novamente.');
    }
  }

  return (
    <section className="bg-[linear-gradient(45deg,#EF4444,#991B1B)] text-white rounded-lg px-6 py-8 md:py-10 md:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold leading-tight md:text-3xl">
          A ética que move o Jornalismo
        </h2>
        <p className="mt-2 text-sm text-white/80 md:text-base">
          Inscreva-se na nossa newsletter para receber todas as novidades direto no seu email!
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={status === 'loading'}
            required
            className="flex-1 rounded-md bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-60"
          />

          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-red-700 transition-colors hover:bg-red-50 disabled:opacity-60"
          >
            {status === 'loading' ? (
              <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-red-700 border-t-transparent" />
            ) : (
              <PaperPlaneRightIcon size={18} weight="bold" />
            )}
            Inscrever-se
          </button>
        </form>

        {message && (
          <p className={`mt-3 text-sm ${status === 'success' ? 'text-green-200' : 'text-red-200'}`}>
            {message}
          </p>
        )}
      </div>
    </section>
  );
}

export { NewsletterSection };
