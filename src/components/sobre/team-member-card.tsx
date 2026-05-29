import type { UserProfileDTO } from '@/domain/entities';

interface TeamMemberCardProps {
  member: UserProfileDTO;
}

function TeamMemberCard({ member }: TeamMemberCardProps) {
  const initials = member.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="flex items-center gap-4 rounded-lg border bg-white p-4">
      {member.avatarUrl ? (
        <img
          src={member.avatarUrl}
          alt={member.name}
          className="h-16 w-16 rounded-full object-cover"
        />
      ) : (
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-lg font-bold text-red-600">
          {initials}
        </div>
      )}
      <div>
        <h3 className="font-semibold text-zinc-900">{member.name}</h3>
        <p className="text-sm text-neutral-500">{member.bio}</p>
      </div>
    </div>
  );
}

export { TeamMemberCard };
