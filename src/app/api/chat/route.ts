import { groq } from '@ai-sdk/groq';
import { streamText } from 'ai';
// import wasm from "tiktoken/lite/tiktoken_bg.wasm?module";
// import model from "tiktoken/encoders/cl100k_base.json";
// import { init, Tiktoken } from "tiktoken/lite/init";
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

export async function POST(req: Request) {
  // await init((imports) => WebAssembly.instantiate(wasm, imports));
  // const encoding = new Tiktoken(
  //   model.bpe_ranks,
  //   model.special_tokens,
  //   model.pat_str
  // );
  const { messages } = await req.json();

  const jsonBlock = `
    ABOUT: ${JSON.stringify(about)}
    CERTIFICATIONS: ${JSON.stringify(certifications)}
    EXPERIENCE: ${JSON.stringify(experiences)}
    PAPERS: ${JSON.stringify(papers)}
    PROJECTS: ${JSON.stringify(projects)}
    SKILLS: ${JSON.stringify(skills)}
    LANGUAGES: ${JSON.stringify(languages)}
    INTERESTS: ${JSON.stringify(interests)}
    CONTACT: ${JSON.stringify(contact)}
  `;


  // console.log('tokens:', encoding.encode(jsonBlock).length);

  // Prepend a system prompt to ground the model in your portfolio info:
  const system = {
    role: 'system',
    content: `
      You are The Oracle (Matrix-style), calm and factual.

      Answer questions about Giovanni Rosa using ONLY the data below.
      No invention, no exaggeration, no roleplay, no riddles.
      Say "I don't have that information" when needed.
      Do not speak as Giovanni.

      Professional experience limited to: CINQ, CI&T, GRDS IT Services.
      Other data = academic, projects, certifications, focus areas.
      ${jsonBlock}
    `.trim(),
  };


  const stream = streamText({
    model: groq('llama-3.3-70b-versatile'),
    messages: [system, ...messages],
  });

  return stream.toDataStreamResponse();
}
