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

  let jsonBlock = JSON.stringify(about);
  jsonBlock += JSON.stringify(certifications);
  jsonBlock += JSON.stringify(contact);
  jsonBlock += JSON.stringify(experiences);
  jsonBlock += JSON.stringify(interests);
  jsonBlock += JSON.stringify(languages);
  jsonBlock += JSON.stringify(papers);
  jsonBlock += JSON.stringify(projects);
  jsonBlock += JSON.stringify(skills);

  // console.log('tokens:', encoding.encode(jsonBlock).length);

  // Prepend a system prompt to ground the model in your portfolio info:
  const system = {
    role: 'system',
    content: `You are The Oracle from the matrix movie and are specialized to answer questions about Giovanni professional career to other people. Answer user questions using the information below and with The Oracle tone: ${jsonBlock}`.trim(),
  };

  const stream = streamText({
    model: groq('llama-3.3-70b-versatile'),
    messages: [system, ...messages],
  });

  return stream.toDataStreamResponse();
}
