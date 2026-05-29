function timeAgo(date: string | Date): string {
  const now = Date.now();
  const past = typeof date === 'string' ? new Date(date).getTime() : date.getTime();
  const diffMs = now - past;
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);

  if (diffHours < 1) return 'Há menos de 1 hora';
  if (diffHours < 24) return `Há ${diffHours} hora${diffHours !== 1 ? 's' : ''}`;
  return `Há ${diffDays} dia${diffDays !== 1 ? 's' : ''}`;
}

export { timeAgo };
