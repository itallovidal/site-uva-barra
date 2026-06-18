// import { UserProfession } from '@/domain/constants';
// import type { UserProfileDTO } from '@/domain/entities';
// import { TeamSection } from '@/components/sobre/team-section';
// import { useCollaborators } from '@/hooks/use-collaborators';

// const professionToCategory: Record<string, string> = {
//   [UserProfession.REDATOR]: 'Redação',
//   [UserProfession.EDITOR_CHEFE]: 'Redação',
//   [UserProfession.DESIGNER]: 'Criação',
//   [UserProfession.SOCIAL_MEDIA]: 'Criação',
//   [UserProfession.OUTRO]: 'Criação',
//   [UserProfession.DESENVOLVEDOR]: 'Desenvolvimento',
// };

// const categoryOrder = ['Redação', 'Criação', 'Desenvolvimento'];

// function groupByCategory(members: UserProfileDTO[]): Map<string, UserProfileDTO[]> {
//   const groups = new Map<string, UserProfileDTO[]>();

//   for (const member of members) {
//     const category = professionToCategory[member.profession] ?? 'Outros';
//     if (!groups.has(category)) {
//       groups.set(category, []);
//     }
//     groups.get(category)!.push(member);
//   }

//   return groups;
// }

function SobrePage() {
  // const { collaborators, isLoading, error } = useCollaborators();

  // const grouped = groupByCategory(collaborators);

  return (
    <div className="min-h-screen bg-zinc-50">
      <section
        className="relative flex h-[40vh] w-full items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        {/* <h1 className="relative text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Agência UVA Barra
        </h1> */}
      </section>

      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 ">
        <section className="space-y-4 text-justify leading-relaxed text-zinc-700">
          <p>
            A Agência UVA Barra é uma agência experimental de notícias da Universidade Veiga de
            Almeida, campus Barra, surgiu em 16 de novembro de 2016, que atende aos cursos de
            Jornalismo e Publicidade. A agência é um laboratório que prepara os estudantes para a
            prática profissional e para o mercado de trabalho. Mantém atividades que fomentam a
            prática jornalística, permitindo um espaço de criação para os alunos. A agência tem como
            segmento a cobertura de notícias do cotidiano, eventos culturais pela cidade, além de
            cobrir institucionalmente a Universidade Veiga de Almeida.
          </p>
          <p>
            Na agência UVA, os alunos aprendem técnicas para elaboração de pautas, apuração, redação
            de impressos e mídia web. Dessa forma, estudantes estabelecem contato com a prática
            jornalística, ela atende aos alunos que se matriculam na disciplina de Estágio
            Supervisionado I, II e III, e ainda recebe alunos como colaboradores desde o primeiro
            período. A Agência UVA Barra funciona em sede própria. A partir de março de 2018, passou
            a receber alunos de Publicidade que atuam na função de mídias sociais e fotografia.
          </p>
          <p>
            Em 2025, a Agência UVA Barra conta com a supervisão da estagiária Duda Nicolich e com a
            coordenação geral da Prof. Dra. Renata Feital.
          </p>
        </section>

        {/* <section className="space-y-8">
          <h1 className="text-3xl font-bold text-zinc-900">Colaboradores</h1>

          {isLoading && <p className="text-neutral-500">Carregando colaboradores...</p>}

          {error && <p className="text-red-400">Erro ao carregar colaboradores: {error}</p>}

          {!isLoading && !error && (
            <div className="space-y-8">
              {categoryOrder.map((category) => {
                const members = grouped.get(category) ?? [];
                if (members.length === 0) return null;
                return (
                  <TeamSection key={category} category={category} members={members} />
                );
              })}
            </div>
          )}
        </section> */}
      </main>
    </div>
  );
}

export { SobrePage };
