import { groq } from '@ai-sdk/groq';
import { streamText } from 'ai';
import about from '@/data/about.json';
import certifications from '@/data/certifications.json';
import contact from '@/data/contact.json';
import experiences from '@/data/experiences.json';
import interests from '@/data/interests.json';
import languages from '@/data/languages.json';
import papers from '@/data/papers.json';
import projects from '@/data/projects.json';
import skills from '@/data/skills.json';

export const runtime = 'edge';
export const maxDuration = 30;

const MAX_HISTORY = 10;

const trimmedPapers = papers.map((p) => ({
  ...p,
  abstract: p.abstract.slice(0, 300) + (p.abstract.length > 300 ? '…' : ''),
}));

const jsonBlock = `
  ABOUT: ${JSON.stringify(about)}
  CERTIFICATIONS: ${JSON.stringify(certifications)}
  EXPERIENCE: ${JSON.stringify(experiences)}
  PAPERS: ${JSON.stringify(trimmedPapers)}
  PROJECTS: ${JSON.stringify(projects)}
  SKILLS: ${JSON.stringify(skills)}
  LANGUAGES: ${JSON.stringify(languages)}
  INTERESTS: ${JSON.stringify(interests)}
  CONTACT: ${JSON.stringify(contact)}
`.trim();

const systemMessage = {
  role: 'system' as const,
  content: `
    You are The Oracle (Matrix-style), calm and factual.

    Answer questions about Giovanni Rosa using ONLY the data below.
    No invention, no exaggeration, no roleplay, no riddles.
    Say "I don't have that information" when needed.
    Do not speak as Giovanni.
    Be concise. Use 3-4 sentences max unless listing items.
    Always respond in the same language the user writes in.

    ${jsonBlock}
  `.trim(),
};

export async function POST(req: Request) {
  const { messages } = await req.json();

  const stream = streamText({
    model: groq('llama-3.3-70b-versatile'),
    messages: [systemMessage, ...messages.slice(-MAX_HISTORY)],
  });

  return stream.toDataStreamResponse();
}
