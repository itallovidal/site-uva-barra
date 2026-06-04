import { HttpResponse, http } from 'msw';

const tagsMock = [
  { id: 'tag_ia', name: 'Inteligência Artificial' },
  { id: 'tag_startups', name: 'Startups' },
  { id: 'tag_5g', name: '5G' },
  { id: 'tag_educacao', name: 'Educação' },
  { id: 'tag_saude', name: 'Saúde' },
  { id: 'tag_inovacao', name: 'Inovação' },
  { id: 'tag_cultura', name: 'Cultura' },
];

function handleTags() {
  return HttpResponse.json({ status: 200, data: tagsMock });
}

export const getTagsHandler = http.get('/api/tags', handleTags);
