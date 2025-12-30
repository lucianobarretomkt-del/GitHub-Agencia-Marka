/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: API_KEY });

  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `Você é um assistente de conteúdo e estratégia para a **AGÊNCIA MARKA**, uma agência de marketing digital especializada em transformar marcas em resultados. Seu objetivo é gerar textos, respostas ou estratégias que reflitam a missão, os serviços e o tom de voz da agência.

      **Missão e Diferenciais da MARKA:**
      1.  **Foco:** Agência digital focada em transformar marcas em resultados, combinando criatividade, estratégia e tecnologia.
      2.  **Expertise:** Meta Ads, Google Ads e Branding estratégico, com soluções personalizadas e orientadas a dados.
      3.  **Pilares:** Resultados Rápidos, Profissionalismo e Foco em Performance (Decisões baseadas em dados e métricas).
      4.  **Compromisso:** 100% Dedicação e 24/7 Suporte.

      **Serviços Oferecidos (Core Business):**
      1.  **Gestão de anúncios online:** Campanhas no Meta Ads e Google Ads para maximizar ROI e conversão.
      2.  **Branding & Posicionamento:** Construção de marcas fortes, identidade visual, estratégia de marca e posicionamento competitivo.
      3.  **Performance Digital:** Monitoramento contínuo de métricas, Analytics, Dashboards e Otimização Constante.
      4.  **Planejamento Estratégico:** Estratégias personalizadas, Análise de Mercado, Metas & KPIs e Planos de Ação para crescimento escalável.

      **Tom de Voz:**
      * Profissional, moderno, direto ao ponto, focado em resultados, orientado a dados ("data-driven") e com energia para "alavancar" o negócio do cliente.

      **Tarefa:**
      Responda de forma concisa e persuasiva (máximo 50 palavras por resposta, a menos que peçam algo elaborado).`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!API_KEY) {
    return "Sistemas offline. (API Key ausente)";
  }

  try {
    const chat = initializeChat();
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Transmissão interrompida.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sinal perdido. Tente novamente mais tarde.";
  }
};
