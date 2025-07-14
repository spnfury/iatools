import { Metadata } from 'next';

export interface ServiceMetadata {
  es: {
    title: string;
    description: string;
    keywords: string;
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
  };
  en: {
    title: string;
    description: string;
    keywords: string;
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
  };
}

export const serviceMetadata: { [key: string]: ServiceMetadata } = {
  'elevenlabs': {
    es: {
      title: 'ElevenLabs Unlimited - Text to Speech AI Gratis | IA Tools',
      description: 'Accede a ElevenLabs Pro con voces ilimitadas, sin límites de caracteres. La mejor IA de texto a voz en español. Incluido en IA Tools.',
      keywords: 'elevenlabs, elevenlabs precios más baratos, elevenlabs alternativa económica, elevenlabs descuento, elevenlabs gratis vs pro, elevenlabs pagar menos por voz IA, mejor alternativa barata a elevenlabs, tts más barato que elevenlabs, elevenlabs vs unreal speech precio, elevenlabs vs amazon polly costos, voz IA low cost, servicio voz IA económico, unreal speech más barato que elevenlabs, opciones tts baratas para audiolibros, elevenlabs promo, elevenlabs plan gratuito límites, text to speech, tts, ai voice, unlimited, free, gratis, voces, audio, español, inteligencia artificial, síntesis de voz, amazon polly, murf, play.ht, wellsaid, speechify, speaktor',
      ogTitle: 'ElevenLabs Unlimited - Text to Speech AI Gratis',
      ogDescription: 'Accede a ElevenLabs Pro con voces ilimitadas y sin límites. La mejor IA de texto a voz.',
      twitterTitle: 'ElevenLabs Unlimited - Text to Speech AI Gratis',
      twitterDescription: 'Accede a ElevenLabs Pro con voces ilimitadas y sin límites. La mejor IA de texto a voz.'
    },
    en: {
      title: 'ElevenLabs Unlimited - Free Text to Speech AI | IA Tools',
      description: 'Access ElevenLabs Pro with unlimited voices, no character limits. The best AI text-to-speech in English. Included in IA Tools.',
      keywords: 'elevenlabs, elevenlabs cheaper prices, elevenlabs affordable alternative, elevenlabs discount, elevenlabs free vs pro, elevenlabs pay less for ai voice, best cheap alternative to elevenlabs, tts cheaper than elevenlabs, elevenlabs vs unreal speech price, elevenlabs vs amazon polly costs, ai voice low cost, affordable ai voice service, unreal speech cheaper than elevenlabs, cheap tts options for audiobooks, elevenlabs promo, elevenlabs free plan limits, text to speech, tts, ai voice, unlimited, free, voices, audio, english, artificial intelligence, voice synthesis, amazon polly, murf, play.ht, wellsaid, speechify, speaktor',
      ogTitle: 'ElevenLabs Unlimited - Free Text to Speech AI',
      ogDescription: 'Access ElevenLabs Pro with unlimited voices and no limits. The best AI text-to-speech.',
      twitterTitle: 'ElevenLabs Unlimited - Free Text to Speech AI',
      twitterDescription: 'Access ElevenLabs Pro with unlimited voices and no limits. The best AI text-to-speech.'
    }
  },
  'heygen': {
    es: {
      title: 'HeyGen Unlimited - Creación y Traducción de Videos IA Gratis | IA Tools',
      description: 'Crea, traduce y personaliza videos en minutos con IA. Avatares, voces naturales y traducción automática. Incluido en IA Tools.',
      keywords: 'heygen, heygen precios más baratos, heygen alternativa económica, heygen descuento, heygen gratis vs pro, heygen pagar menos por videos IA, mejor alternativa barata a heygen, creación videos más barata que heygen, heygen vs synthesia precio, heygen vs descript costos, videos IA low cost, servicio videos IA económico, synthesia más barato que heygen, opciones videos IA baratas, heygen promo, heygen plan gratuito límites, creación videos, avatares IA, traducción videos, unlimited, free, gratis, español, inteligencia artificial, videos, synthesia, descript, runway, pika labs',
      ogTitle: 'HeyGen Unlimited - Creación y Traducción de Videos IA Gratis',
      ogDescription: 'Crea, traduce y personaliza videos en minutos con IA. Avatares y voces naturales.',
      twitterTitle: 'HeyGen Unlimited - Creación y Traducción de Videos IA Gratis',
      twitterDescription: 'Crea, traduce y personaliza videos en minutos con IA. Avatares y voces naturales.'
    },
    en: {
      title: 'HeyGen Unlimited - Free AI Video Creation & Translation | IA Tools',
      description: 'Create, translate and personalize videos in minutes with AI. Avatars, natural voices and automatic translation. Included in IA Tools.',
      keywords: 'heygen, heygen cheaper prices, heygen affordable alternative, heygen discount, heygen free vs pro, heygen pay less for ai videos, best cheap alternative to heygen, video creation cheaper than heygen, heygen vs synthesia price, heygen vs descript costs, ai videos low cost, affordable ai video service, synthesia cheaper than heygen, cheap ai video options, heygen promo, heygen free plan limits, video creation, ai avatars, video translation, unlimited, free, english, artificial intelligence, videos, synthesia, descript, runway, pika labs',
      ogTitle: 'HeyGen Unlimited - Free AI Video Creation & Translation',
      ogDescription: 'Create, translate and personalize videos in minutes with AI. Avatars and natural voices.',
      twitterTitle: 'HeyGen Unlimited - Free AI Video Creation & Translation',
      twitterDescription: 'Create, translate and personalize videos in minutes with AI. Avatars and natural voices.'
    }
  },
  'fish-audio': {
    es: {
      title: 'Fish Audio Unlimited - Text to Speech IA Gratis | IA Tools',
      description: 'La alternativa más realista a ElevenLabs. Text to Speech, Voice Cloning y Speech to Text con voces naturales. Incluido en IA Tools.',
      keywords: 'fish audio, fish audio precios más baratos, fish audio alternativa económica, fish audio descuento, fish audio gratis vs pro, fish audio pagar menos por voz IA, mejor alternativa barata a fish audio, tts más barato que fish audio, fish audio vs elevenlabs precio, fish audio vs amazon polly costos, voz IA low cost, servicio voz IA económico, elevenlabs más barato que fish audio, opciones tts baratas para audiolibros, fish audio promo, fish audio plan gratuito límites, text to speech, tts, ai voice, voice cloning, speech to text, unlimited, free, gratis, voces, audio, español, inteligencia artificial, síntesis de voz, elevenlabs, amazon polly, murf, play.ht',
      ogTitle: 'Fish Audio Unlimited - Text to Speech IA Gratis',
      ogDescription: 'La alternativa más realista a ElevenLabs. Text to Speech, Voice Cloning y Speech to Text.',
      twitterTitle: 'Fish Audio Unlimited - Text to Speech IA Gratis',
      twitterDescription: 'La alternativa más realista a ElevenLabs. Text to Speech, Voice Cloning y Speech to Text.'
    },
    en: {
      title: 'Fish Audio Unlimited - Free AI Text to Speech | IA Tools',
      description: 'The most realistic alternative to ElevenLabs. Text to Speech, Voice Cloning and Speech to Text with natural voices. Included in IA Tools.',
      keywords: 'fish audio, fish audio cheaper prices, fish audio affordable alternative, fish audio discount, fish audio free vs pro, fish audio pay less for ai voice, best cheap alternative to fish audio, tts cheaper than fish audio, fish audio vs elevenlabs price, fish audio vs amazon polly costs, ai voice low cost, affordable ai voice service, elevenlabs cheaper than fish audio, cheap tts options for audiobooks, fish audio promo, fish audio free plan limits, text to speech, tts, ai voice, voice cloning, speech to text, unlimited, free, voices, audio, english, artificial intelligence, voice synthesis, elevenlabs, amazon polly, murf, play.ht',
      ogTitle: 'Fish Audio Unlimited - Free AI Text to Speech',
      ogDescription: 'The most realistic alternative to ElevenLabs. Text to Speech, Voice Cloning and Speech to Text.',
      twitterTitle: 'Fish Audio Unlimited - Free AI Text to Speech',
      twitterDescription: 'The most realistic alternative to ElevenLabs. Text to Speech, Voice Cloning and Speech to Text.'
    }
  },
  'turboscribe': {
    es: {
      title: 'Turboscribe Unlimited - Transcripción IA Gratis | IA Tools',
      description: 'Transcripción ilimitada de audio y video a texto preciso en segundos. La mejor herramienta de transcripción IA. Incluido en IA Tools.',
      keywords: 'turboscribe, turboscribe precios más baratos, turboscribe alternativa económica, turboscribe descuento, turboscribe gratis vs pro, turboscribe pagar menos por transcripción, mejor alternativa barata a turboscribe, transcripción más barata que turboscribe, turboscribe vs otter precio, turboscribe vs rev costos, transcripción IA low cost, servicio transcripción económico, otter más barato que turboscribe, opciones transcripción baratas, turboscribe promo, turboscribe plan gratuito límites, transcripción, audio a texto, video a texto, speech to text, unlimited, free, gratis, español, inteligencia artificial, otter, rev, descript, trint',
      ogTitle: 'Turboscribe Unlimited - Transcripción IA Gratis',
      ogDescription: 'Transcripción ilimitada de audio y video a texto preciso en segundos.',
      twitterTitle: 'Turboscribe Unlimited - Transcripción IA Gratis',
      twitterDescription: 'Transcripción ilimitada de audio y video a texto preciso en segundos.'
    },
    en: {
      title: 'Turboscribe Unlimited - Free AI Transcription | IA Tools',
      description: 'Unlimited audio and video transcription to accurate text in seconds. The best AI transcription tool. Included in IA Tools.',
      keywords: 'turboscribe, turboscribe cheaper prices, turboscribe affordable alternative, turboscribe discount, turboscribe free vs pro, turboscribe pay less for transcription, best cheap alternative to turboscribe, transcription cheaper than turboscribe, turboscribe vs otter price, turboscribe vs rev costs, ai transcription low cost, affordable transcription service, otter cheaper than turboscribe, cheap transcription options, turboscribe promo, turboscribe free plan limits, transcription, audio to text, video to text, speech to text, unlimited, free, english, artificial intelligence, otter, rev, descript, trint',
      ogTitle: 'Turboscribe Unlimited - Free AI Transcription',
      ogDescription: 'Unlimited audio and video transcription to accurate text in seconds.',
      twitterTitle: 'Turboscribe Unlimited - Free AI Transcription',
      twitterDescription: 'Unlimited audio and video transcription to accurate text in seconds.'
    }
  },
  'cramly': {
    es: {
      title: 'Cramly Unlimited - Asistente de Estudio IA Gratis | IA Tools',
      description: 'Asistente de estudio potenciado por IA para aprendizaje eficiente, parafraseo y detección de plagio. Incluido en IA Tools.',
      keywords: 'cramly, cramly precios más baratos, cramly alternativa económica, cramly descuento, cramly gratis vs pro, cramly pagar menos por estudio IA, mejor alternativa barata a cramly, asistente estudio más barato que cramly, cramly vs quillbot precio, cramly vs grammarly costos, estudio IA low cost, servicio estudio económico, quillbot más barato que cramly, opciones estudio baratas, cramly promo, cramly plan gratuito límites, asistente estudio, parafraseo, detección plagio, unlimited, free, gratis, español, inteligencia artificial, quillbot, grammarly, turnitin, copyscape',
      ogTitle: 'Cramly Unlimited - Asistente de Estudio IA Gratis',
      ogDescription: 'Asistente de estudio potenciado por IA para aprendizaje eficiente y detección de plagio.',
      twitterTitle: 'Cramly Unlimited - Asistente de Estudio IA Gratis',
      twitterDescription: 'Asistente de estudio potenciado por IA para aprendizaje eficiente y detección de plagio.'
    },
    en: {
      title: 'Cramly Unlimited - Free AI Study Assistant | IA Tools',
      description: 'AI-powered study assistant for efficient learning, paraphrasing and plagiarism detection. Included in IA Tools.',
      keywords: 'cramly, cramly cheaper prices, cramly affordable alternative, cramly discount, cramly free vs pro, cramly pay less for ai study, best cheap alternative to cramly, study assistant cheaper than cramly, cramly vs quillbot price, cramly vs grammarly costs, ai study low cost, affordable study service, quillbot cheaper than cramly, cheap study options, cramly promo, cramly free plan limits, study assistant, paraphrasing, plagiarism detection, unlimited, free, english, artificial intelligence, quillbot, grammarly, turnitin, copyscape',
      ogTitle: 'Cramly Unlimited - Free AI Study Assistant',
      ogDescription: 'AI-powered study assistant for efficient learning and plagiarism detection.',
      twitterTitle: 'Cramly Unlimited - Free AI Study Assistant',
      twitterDescription: 'AI-powered study assistant for efficient learning and plagiarism detection.'
    }
  },
  'gamma': {
    es: {
      title: 'Gamma Unlimited - Diseño IA Gratis | IA Tools',
      description: 'Crea presentaciones, sitios web y más con IA. Sin necesidad de habilidades de diseño o programación. Incluido en IA Tools.',
      keywords: 'gamma, gamma precios más baratos, gamma alternativa económica, gamma descuento, gamma gratis vs pro, gamma pagar menos por diseño IA, mejor alternativa barata a gamma, diseño más barato que gamma, gamma vs canva precio, gamma vs figma costos, diseño IA low cost, servicio diseño económico, canva más barato que gamma, opciones diseño baratas, gamma promo, gamma plan gratuito límites, presentaciones, sitios web, diseño IA, unlimited, free, gratis, español, inteligencia artificial, canva, figma, powerpoint, keynote',
      ogTitle: 'Gamma Unlimited - Diseño IA Gratis',
      ogDescription: 'Crea presentaciones, sitios web y más con IA. Sin necesidad de habilidades técnicas.',
      twitterTitle: 'Gamma Unlimited - Diseño IA Gratis',
      twitterDescription: 'Crea presentaciones, sitios web y más con IA. Sin necesidad de habilidades técnicas.'
    },
    en: {
      title: 'Gamma Unlimited - Free AI Design | IA Tools',
      description: 'Create presentations, websites and more with AI. No design or programming skills required. Included in IA Tools.',
      keywords: 'gamma, gamma cheaper prices, gamma affordable alternative, gamma discount, gamma free vs pro, gamma pay less for ai design, best cheap alternative to gamma, design cheaper than gamma, gamma vs canva price, gamma vs figma costs, ai design low cost, affordable design service, canva cheaper than gamma, cheap design options, gamma promo, gamma free plan limits, presentations, websites, ai design, unlimited, free, english, artificial intelligence, canva, figma, powerpoint, keynote',
      ogTitle: 'Gamma Unlimited - Free AI Design',
      ogDescription: 'Create presentations, websites and more with AI. No technical skills required.',
      twitterTitle: 'Gamma Unlimited - Free AI Design',
      twitterDescription: 'Create presentations, websites and more with AI. No technical skills required.'
    }
  },
  'play-ht': {
    es: {
      title: 'Play.HT Unlimited - Text to Speech IA Gratis | IA Tools',
      description: 'Alternativa económica a ElevenLabs. Generador de texto a voz con voces naturales y expresivas. Incluido en IA Tools.',
      keywords: 'play.ht, play.ht precios más baratos, play.ht alternativa económica, play.ht descuento, play.ht gratis vs pro, play.ht pagar menos por voz IA, mejor alternativa barata a play.ht, tts más barato que play.ht, play.ht vs elevenlabs precio, play.ht vs amazon polly costos, voz IA low cost, servicio voz IA económico, elevenlabs más barato que play.ht, opciones tts baratas para audiolibros, play.ht promo, play.ht plan gratuito límites, text to speech, tts, ai voice, unlimited, free, gratis, voces, audio, español, inteligencia artificial, síntesis de voz, elevenlabs, amazon polly, murf, fish audio',
      ogTitle: 'Play.HT Unlimited - Text to Speech IA Gratis',
      ogDescription: 'Alternativa económica a ElevenLabs. Generador de texto a voz con voces naturales.',
      twitterTitle: 'Play.HT Unlimited - Text to Speech IA Gratis',
      twitterDescription: 'Alternativa económica a ElevenLabs. Generador de texto a voz con voces naturales.'
    },
    en: {
      title: 'Play.HT Unlimited - Free AI Text to Speech | IA Tools',
      description: 'Affordable alternative to ElevenLabs. Text to speech generator with natural and expressive voices. Included in IA Tools.',
      keywords: 'play.ht, play.ht cheaper prices, play.ht affordable alternative, play.ht discount, play.ht free vs pro, play.ht pay less for ai voice, best cheap alternative to play.ht, tts cheaper than play.ht, play.ht vs elevenlabs price, play.ht vs amazon polly costs, ai voice low cost, affordable ai voice service, elevenlabs cheaper than play.ht, cheap tts options for audiobooks, play.ht promo, play.ht free plan limits, text to speech, tts, ai voice, unlimited, free, voices, audio, english, artificial intelligence, voice synthesis, elevenlabs, amazon polly, murf, fish audio',
      ogTitle: 'Play.HT Unlimited - Free AI Text to Speech',
      ogDescription: 'Affordable alternative to ElevenLabs. Text to speech generator with natural voices.',
      twitterTitle: 'Play.HT Unlimited - Free AI Text to Speech',
      twitterDescription: 'Affordable alternative to ElevenLabs. Text to speech generator with natural voices.'
    }
  },
  'chatbot-ai': {
    es: {
      title: 'ChatBot AI Unlimited - Chatbot Todo en Uno Gratis | IA Tools',
      description: 'Chatbot completo con Claude, generación de imágenes, análisis de PDFs y más. Todo en una sola plataforma. Incluido en IA Tools.',
      keywords: 'chatbot ai, chatbot ai precios más baratos, chatbot ai alternativa económica, chatbot ai descuento, chatbot ai gratis vs pro, chatbot ai pagar menos por ia, mejor alternativa barata a chatbot ai, chatbot más barato que chatbot ai, chatbot ai vs chatgpt precio, chatbot ai vs claude costos, chatbot IA low cost, servicio chatbot económico, chatgpt más barato que chatbot ai, opciones chatbot baratas, chatbot ai promo, chatbot ai plan gratuito límites, chatbot, claude, generación imágenes, análisis pdfs, unlimited, free, gratis, español, inteligencia artificial, chatgpt, claude, gemini, bard',
      ogTitle: 'ChatBot AI Unlimited - Chatbot Todo en Uno Gratis',
      ogDescription: 'Chatbot completo con Claude, generación de imágenes y análisis de PDFs.',
      twitterTitle: 'ChatBot AI Unlimited - Chatbot Todo en Uno Gratis',
      twitterDescription: 'Chatbot completo con Claude, generación de imágenes y análisis de PDFs.'
    },
    en: {
      title: 'ChatBot AI Unlimited - Free All-in-One Chatbot | IA Tools',
      description: 'Complete chatbot with Claude, image generation, PDF analysis and more. Everything in one platform. Included in IA Tools.',
      keywords: 'chatbot ai, chatbot ai cheaper prices, chatbot ai affordable alternative, chatbot ai discount, chatbot ai free vs pro, chatbot ai pay less for ai, best cheap alternative to chatbot ai, chatbot cheaper than chatbot ai, chatbot ai vs chatgpt price, chatbot ai vs claude costs, chatbot ai low cost, affordable chatbot service, chatgpt cheaper than chatbot ai, cheap chatbot options, chatbot ai promo, chatbot ai free plan limits, chatbot, claude, image generation, pdf analysis, unlimited, free, english, artificial intelligence, chatgpt, claude, gemini, bard',
      ogTitle: 'ChatBot AI Unlimited - Free All-in-One Chatbot',
      ogDescription: 'Complete chatbot with Claude, image generation and PDF analysis.',
      twitterTitle: 'ChatBot AI Unlimited - Free All-in-One Chatbot',
      twitterDescription: 'Complete chatbot with Claude, image generation and PDF analysis.'
    }
  },
  'deepl-pro': {
    es: {
      title: 'DeepL Pro Unlimited - Traducción IA Gratis | IA Tools',
      description: 'Accede a DeepL Pro con traducciones ilimitadas, sin límites de caracteres. La mejor IA de traducción en español. Incluido en IA Tools.',
      keywords: 'deepl, deepl precios más baratos, deepl alternativa económica, deepl descuento, deepl gratis vs pro, deepl pagar menos por traducción, mejor alternativa barata a deepl, traducción más barata que deepl, deepl vs google translate precio, deepl vs microsoft translator costos, traducción IA low cost, servicio traducción económico, google translate más barato que deepl, opciones traducción baratas, deepl promo, deepl plan gratuito límites, traducción, translation, ai, unlimited, free, gratis, idiomas, español, inglés, inteligencia artificial, traductor, google translate, microsoft translator, reverso, linguee',
      ogTitle: 'DeepL Pro Unlimited - Traducción IA Gratis',
      ogDescription: 'Accede a DeepL Pro con traducciones ilimitadas y sin límites. La mejor IA de traducción.',
      twitterTitle: 'DeepL Pro Unlimited - Traducción IA Gratis',
      twitterDescription: 'Accede a DeepL Pro con traducciones ilimitadas y sin límites. La mejor IA de traducción.'
    },
    en: {
      title: 'DeepL Pro Unlimited - Free AI Translation | IA Tools',
      description: 'Access DeepL Pro with unlimited translations, no character limits. The best AI translation in English. Included in IA Tools.',
      keywords: 'deepl, deepl cheaper prices, deepl affordable alternative, deepl discount, deepl free vs pro, deepl pay less for translation, best cheap alternative to deepl, translation cheaper than deepl, deepl vs google translate price, deepl vs microsoft translator costs, ai translation low cost, affordable translation service, google translate cheaper than deepl, cheap translation options, deepl promo, deepl free plan limits, translation, ai, unlimited, free, languages, english, spanish, artificial intelligence, translator, google translate, microsoft translator, reverso, linguee',
      ogTitle: 'DeepL Pro Unlimited - Free AI Translation',
      ogDescription: 'Access DeepL Pro with unlimited translations and no limits. The best AI translation.',
      twitterTitle: 'DeepL Pro Unlimited - Free AI Translation',
      twitterDescription: 'Access DeepL Pro with unlimited translations and no limits. The best AI translation.'
    }
  },
  'chatgpt-pro': {
    es: {
      title: 'ChatGPT Pro Unlimited - IA Gratis | IA Tools',
      description: 'Accede a ChatGPT Pro con uso ilimitado, sin límites de mensajes. La mejor IA conversacional en español. Incluido en IA Tools.',
      keywords: 'chatgpt, chatgpt precios más baratos, chatgpt alternativa económica, chatgpt descuento, chatgpt gratis vs pro, chatgpt pagar menos por ia, mejor alternativa barata a chatgpt, ia conversacional más barata que chatgpt, chatgpt vs claude precio, chatgpt vs gemini costos, ia low cost, servicio ia económico, claude más barato que chatgpt, opciones ia baratas, chatgpt promo, chatgpt plan gratuito límites, gpt-4, ai, unlimited, free, gratis, chat, conversación, español, inglés, inteligencia artificial, chatbot, claude, gemini, bard, perplexity',
      ogTitle: 'ChatGPT Pro Unlimited - IA Gratis',
      ogDescription: 'Accede a ChatGPT Pro con uso ilimitado y sin límites. La mejor IA conversacional.',
      twitterTitle: 'ChatGPT Pro Unlimited - IA Gratis',
      twitterDescription: 'Accede a ChatGPT Pro con uso ilimitado y sin límites. La mejor IA conversacional.'
    },
    en: {
      title: 'ChatGPT Pro Unlimited - Free AI | IA Tools',
      description: 'Access ChatGPT Pro with unlimited usage, no message limits. The best conversational AI in English. Included in IA Tools.',
      keywords: 'chatgpt, chatgpt cheaper prices, chatgpt affordable alternative, chatgpt discount, chatgpt free vs pro, chatgpt pay less for ai, best cheap alternative to chatgpt, conversational ai cheaper than chatgpt, chatgpt vs claude price, chatgpt vs gemini costs, ai low cost, affordable ai service, claude cheaper than chatgpt, cheap ai options, chatgpt promo, chatgpt free plan limits, gpt-4, ai, unlimited, free, chat, conversation, english, spanish, artificial intelligence, chatbot, claude, gemini, bard, perplexity',
      ogTitle: 'ChatGPT Pro Unlimited - Free AI',
      ogDescription: 'Access ChatGPT Pro with unlimited usage and no limits. The best conversational AI.',
      twitterTitle: 'ChatGPT Pro Unlimited - Free AI',
      twitterDescription: 'Access ChatGPT Pro with unlimited usage and no limits. The best conversational AI.'
    }
  },
  'midjourney': {
    es: {
      title: 'Midjourney Unlimited - IA Generación de Imágenes Gratis | IA Tools',
      description: 'Accede a Midjourney con generación ilimitada de imágenes, sin límites. La mejor IA de generación de imágenes en español. Incluido en IA Tools.',
      keywords: 'midjourney, midjourney precios más baratos, midjourney alternativa económica, midjourney descuento, midjourney gratis vs pro, midjourney pagar menos por ia art, mejor alternativa barata a midjourney, generación imágenes más barata que midjourney, midjourney vs dalle precio, midjourney vs stable diffusion costos, ia art low cost, servicio ia art económico, dalle más barato que midjourney, opciones ia art baratas, midjourney promo, midjourney plan gratuito límites, ai art, generación de imágenes, unlimited, free, gratis, arte, imágenes, español, inglés, inteligencia artificial, arte digital, dalle, stable diffusion, bing image creator, canva ai',
      ogTitle: 'Midjourney Unlimited - IA Generación de Imágenes Gratis',
      ogDescription: 'Accede a Midjourney con generación ilimitada y sin límites. La mejor IA de generación de imágenes.',
      twitterTitle: 'Midjourney Unlimited - IA Generación de Imágenes Gratis',
      twitterDescription: 'Accede a Midjourney con generación ilimitada y sin límites. La mejor IA de generación de imágenes.'
    },
    en: {
      title: 'Midjourney Unlimited - Free AI Image Generation | IA Tools',
      description: 'Access Midjourney with unlimited image generation, no limits. The best AI image generation in English. Included in IA Tools.',
      keywords: 'midjourney, midjourney cheaper prices, midjourney affordable alternative, midjourney discount, midjourney free vs pro, midjourney pay less for ai art, best cheap alternative to midjourney, image generation cheaper than midjourney, midjourney vs dalle price, midjourney vs stable diffusion costs, ai art low cost, affordable ai art service, dalle cheaper than midjourney, cheap ai art options, midjourney promo, midjourney free plan limits, ai art, image generation, unlimited, free, art, images, english, spanish, artificial intelligence, digital art, dalle, stable diffusion, bing image creator, canva ai',
      ogTitle: 'Midjourney Unlimited - Free AI Image Generation',
      ogDescription: 'Access Midjourney with unlimited generation and no limits. The best AI image generation.',
      twitterTitle: 'Midjourney Unlimited - Free AI Image Generation',
      twitterDescription: 'Access Midjourney with unlimited generation and no limits. The best AI image generation.'
    }
  },
  'canva-pro': {
    es: {
      title: 'Canva Pro Unlimited - Diseño Gratis | IA Tools',
      description: 'Accede a Canva Pro con elementos ilimitados, sin límites. La mejor herramienta de diseño en español. Incluido en IA Tools.',
      keywords: 'canva, canva precios más baratos, canva alternativa económica, canva descuento, canva gratis vs pro, canva pagar menos por diseño, mejor alternativa barata a canva, diseño más barato que canva, canva vs figma precio, canva vs adobe express costos, diseño low cost, servicio diseño económico, figma más barato que canva, opciones diseño baratas, canva promo, canva plan gratuito límites, diseño, design, unlimited, free, gratis, plantillas, templates, español, inglés, herramientas de diseño, gráficos, figma, adobe express, snapseed, pixlr',
      ogTitle: 'Canva Pro Unlimited - Diseño Gratis',
      ogDescription: 'Accede a Canva Pro con elementos ilimitados y sin límites. La mejor herramienta de diseño.',
      twitterTitle: 'Canva Pro Unlimited - Diseño Gratis',
      twitterDescription: 'Accede a Canva Pro con elementos ilimitados y sin límites. La mejor herramienta de diseño.'
    },
    en: {
      title: 'Canva Pro Unlimited - Free Design | IA Tools',
      description: 'Access Canva Pro with unlimited elements, no limits. The best design tool in English. Included in IA Tools.',
      keywords: 'canva, canva cheaper prices, canva affordable alternative, canva discount, canva free vs pro, canva pay less for design, best cheap alternative to canva, design cheaper than canva, canva vs figma price, canva vs adobe express costs, design low cost, affordable design service, figma cheaper than canva, cheap design options, canva promo, canva free plan limits, design, unlimited, free, templates, english, spanish, design tools, graphics, figma, adobe express, snapseed, pixlr',
      ogTitle: 'Canva Pro Unlimited - Free Design',
      ogDescription: 'Access Canva Pro with unlimited elements and no limits. The best design tool.',
      twitterTitle: 'Canva Pro Unlimited - Free Design',
      twitterDescription: 'Access Canva Pro with unlimited elements and no limits. The best design tool.'
    }
  },
  'semrush': {
    es: {
      title: 'SEMrush Unlimited - SEO Gratis | IA Tools',
      description: 'Accede a SEMrush con análisis ilimitado, sin límites. La mejor herramienta de SEO en español. Incluido en IA Tools.',
      keywords: 'semrush, semrush precios más baratos, semrush alternativa económica, semrush descuento, semrush gratis vs pro, semrush pagar menos por seo, mejor alternativa barata a semrush, seo más barato que semrush, semrush vs ahrefs precio, semrush vs moz costos, seo low cost, servicio seo económico, ahrefs más barato que semrush, opciones seo baratas, semrush promo, semrush plan gratuito límites, seo, keywords, unlimited, free, gratis, análisis, competencia, español, inglés, posicionamiento web, marketing digital, ahrefs, moz, ubersuggest, keywordtool',
      ogTitle: 'SEMrush Unlimited - SEO Gratis',
      ogDescription: 'Accede a SEMrush con análisis ilimitado y sin límites. La mejor herramienta de SEO.',
      twitterTitle: 'SEMrush Unlimited - SEO Gratis',
      twitterDescription: 'Accede a SEMrush con análisis ilimitado y sin límites. La mejor herramienta de SEO.'
    },
    en: {
      title: 'SEMrush Unlimited - Free SEO | IA Tools',
      description: 'Access SEMrush with unlimited analysis, no limits. The best SEO tool in English. Included in IA Tools.',
      keywords: 'semrush, semrush cheaper prices, semrush affordable alternative, semrush discount, semrush free vs pro, semrush pay less for seo, best cheap alternative to semrush, seo cheaper than semrush, semrush vs ahrefs price, semrush vs moz costs, seo low cost, affordable seo service, ahrefs cheaper than semrush, cheap seo options, semrush promo, semrush free plan limits, seo, keywords, unlimited, free, analysis, competition, english, spanish, web positioning, digital marketing, ahrefs, moz, ubersuggest, keywordtool',
      ogTitle: 'SEMrush Unlimited - Free SEO',
      ogDescription: 'Access SEMrush with unlimited analysis and no limits. The best SEO tool.',
      twitterTitle: 'SEMrush Unlimited - Free SEO',
      twitterDescription: 'Access SEMrush with unlimited analysis and no limits. The best SEO tool.'
    }
  },
  'freepik': {
    es: {
      title: 'Freepik Unlimited - Recursos Gratis | IA Tools',
      description: 'Accede a Freepik con descargas ilimitadas, sin límites. La mejor biblioteca de recursos gráficos en español. Incluido en IA Tools.',
      keywords: 'freepik, freepik precios más baratos, freepik alternativa económica, freepik descuento, freepik gratis vs pro, freepik pagar menos por recursos, mejor alternativa barata a freepik, recursos más baratos que freepik, freepik vs shutterstock precio, freepik vs istock costos, recursos low cost, servicio recursos económico, shutterstock más barato que freepik, opciones recursos baratas, freepik promo, freepik plan gratuito límites, recursos, vectores, fotos, unlimited, free, gratis, gráficos, español, inglés, stock photos, vectores gratis, shutterstock, istock, unsplash, pexels',
      ogTitle: 'Freepik Unlimited - Recursos Gratis',
      ogDescription: 'Accede a Freepik con descargas ilimitadas y sin límites. La mejor biblioteca de recursos gráficos.',
      twitterTitle: 'Freepik Unlimited - Recursos Gratis',
      twitterDescription: 'Accede a Freepik con descargas ilimitadas y sin límites. La mejor biblioteca de recursos gráficos.'
    },
    en: {
      title: 'Freepik Unlimited - Free Resources | IA Tools',
      description: 'Access Freepik with unlimited downloads, no limits. The best graphic resources library in English. Included in IA Tools.',
      keywords: 'freepik, freepik cheaper prices, freepik affordable alternative, freepik discount, freepik free vs pro, freepik pay less for resources, best cheap alternative to freepik, resources cheaper than freepik, freepik vs shutterstock price, freepik vs istock costs, resources low cost, affordable resources service, shutterstock cheaper than freepik, cheap resources options, freepik promo, freepik free plan limits, resources, vectors, photos, unlimited, free, graphics, english, spanish, stock photos, free vectors, shutterstock, istock, unsplash, pexels',
      ogTitle: 'Freepik Unlimited - Free Resources',
      ogDescription: 'Access Freepik with unlimited downloads and no limits. The best graphic resources library.',
      twitterTitle: 'Freepik Unlimited - Free Resources',
      twitterDescription: 'Access Freepik with unlimited downloads and no limits. The best graphic resources library.'
    }
  }
};

export function generateServiceMetadata(service: string, lang: 'es' | 'en' = 'es'): Metadata {
  const metadata = serviceMetadata[service];
  if (!metadata) {
    return {
      title: 'IA Tools - Herramientas Premium',
      description: 'Acceso a herramientas de IA premium'
    };
  }

  const currentMetadata = metadata[lang];

  return {
    title: currentMetadata.title,
    description: currentMetadata.description,
    keywords: currentMetadata.keywords,
    openGraph: {
      title: currentMetadata.ogTitle,
      description: currentMetadata.ogDescription,
      type: 'website',
      locale: lang === 'es' ? 'es_ES' : 'en_US',
      url: `https://iatools.shop/${service}`,
      siteName: 'IA Tools',
      images: [
        {
          url: '/favicon.svg',
          width: 32,
          height: 32,
          alt: 'IA Tools Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: currentMetadata.twitterTitle,
      description: currentMetadata.twitterDescription,
      creator: '@iatools',
      images: ['/favicon.svg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `https://iatools.shop/${service}`,
      languages: {
        'es': `https://iatools.shop/${service}`,
        'en': `https://iatools.shop/${service}?lang=en`,
      },
    },
  };
} 