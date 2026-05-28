import type { TeamMember } from '@/types/team-member-types';
import { TeamMemberCard } from './team-member-card';

interface TeamSectionProps {
  category: string;
  members: TeamMember[];
}

function TeamSection({ category, members }: TeamSectionProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1.5 rounded-full bg-red-600" />
        <h2 className="text-2xl font-bold text-zinc-900">{category}</h2>
      </div>

      {members.length === 0 ? (
        <p className="text-neutral-400">Nenhum membro nesta categoria.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      )}
    </section>
  );
}

export { TeamSection };
