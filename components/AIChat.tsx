/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
// import { sendMessageToGemini } from '../services/geminiService'; // Disabled for Mock AI
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá! Sou a IA da Agência Marka. Como posso ajudar a alavancar seu negócio hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isLoading]);

  const getMockResponse = (text: string): string => {
    const lowerText = text.toLowerCase();

    if (lowerText.includes('preço') || lowerText.includes('valor') || lowerText.includes('custo')) {
      return 'Nossos projetos são personalizados. Para um orçamento exato, preciso entender sua necessidade. Posso te chamar no WhatsApp?';
    }
    
    if (lowerText.includes('serviço') || lowerText.includes('marketing') || lowerText.includes('tráfego') || lowerText.includes('trafego')) {
      return 'Oferecemos Tráfego Pago, Social Media e Criação de Sites. Qual desses você busca hoje?';
    }
    
    if (lowerText.includes('contato') || lowerText.includes('telefone') || lowerText.includes('falar')) {
      return 'Você pode falar diretamente com o Barreto pelo WhatsApp no link abaixo ou pelo (51) 98468-7497.';
    }

    // Gratitude and Praise detection
    const gratitudeKeywords = ['obrigado', 'obrigada', 'valeu', 'top', 'sensacional', 'ótimo', 'incrível', 'parabéns', 'tchau', 'até mais'];
    if (gratitudeKeywords.some(word => lowerText.includes(word))) {
      return 'Fico muito feliz em poder ajudar! 🖤 A equipe da Agência Marka agradece o seu contato. Estamos prontos para transformar o seu negócio. Até breve! 🚀';
    }

    // Resposta Padrão
    return 'Entendi! Para te dar uma resposta mais detalhada, recomendo falar com nosso especialista no WhatsApp. Clique no botão amarelo ao lado!';
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input;
    const userMessage: ChatMessage = { role: 'user', text: userText };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate typing delay
    setTimeout(() => {
      // 1. Phone Number Detection Regex (Brazilian Format)
      // Matches: (51) 99999-9999, 51 99999 9999, 99999-9999, etc.
      const phoneRegex = /(?:(?:\+|00)?55\s?)?(?:\(?\d{2}\)?\s?)?(?:9\d{4}|\d{4})[-.\s]?\d{4}/g;
      const phoneMatch = userText.match(phoneRegex);

      let responseMessage: ChatMessage;

      if (phoneMatch) {
        const detectedNumber = phoneMatch[0];
        // Clean number for display inside the URL message
        const messageText = `Olá, deixei meu contato ${detectedNumber} no chat do site. Aguardo retorno.`;
        const whatsappUrl = `https://wa.me/5551984687497?text=${encodeURIComponent(messageText)}`;

        responseMessage = {
          role: 'model',
          text: 'Perfeito! Identifiquei seu número. Para agilizar, clique no botão abaixo para enviar esse contato diretamente para nossa equipe no WhatsApp.',
          action: {
            label: 'Confirmar Envio no WhatsApp',
            url: whatsappUrl
          }
        };
      } else {
        // Fallback to keyword logic (includes gratitude refinement)
        const textResponse = getMockResponse(userText);
        responseMessage = { role: 'model', text: textResponse };
      }

      setMessages(prev => [...prev, responseMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end pointer-events-auto">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[90vw] md:w-96 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-[#FFD700]/20"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#111111] to-[#333333] p-4 flex justify-between items-center border-b border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#FFD700] animate-pulse" />
                <h3 className="font-heading font-bold text-white tracking-wider">MARKA AI</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white" data-hover="true">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={chatContainerRef}
              className="h-64 md:h-80 overflow-y-auto p-4 space-y-3 scroll-smooth"
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-lg text-sm ${
                      msg.role === 'user'
                        ? 'bg-[#FFD700] text-black rounded-tr-none font-medium'
                        : 'bg-white/10 text-gray-200 rounded-tl-none border border-white/5'
                    }`}
                  >
                    {msg.text}
                  </div>
                  
                  {/* Action Button for AI Messages */}
                  {msg.role === 'model' && msg.action && (
                    <motion.a
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      href={msg.action.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 bg-[#FFD700] text-black px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-white transition-colors shadow-lg shadow-[#FFD700]/10 max-w-[85%]"
                    >
                       <ExternalLink className="w-3 h-3" />
                       {msg.action.label}
                    </motion.a>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-lg rounded-tl-none flex items-center gap-2 border border-white/5">
                    <span className="text-xs text-gray-400">Digitando</span>
                    <div className="flex gap-1">
                      <span className="w-1 h-1 bg-[#FFD700] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1 h-1 bg-[#FFD700] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1 h-1 bg-[#FFD700] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10 bg-black/40">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Pergunte sobre nossos serviços..."
                  className="flex-1 bg-transparent text-white placeholder-white/30 text-sm focus:outline-none"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-[#FFD700] p-2 rounded-lg hover:bg-[#FDE047] hover:text-black transition-colors disabled:opacity-50 text-black"
                  data-hover="true"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-[#FFD700] to-[#FFA000] flex items-center justify-center shadow-lg shadow-[#FFD700]/20 border border-white/20 z-50 group"
        data-hover="true"
      >
        {isOpen ? (
          <X className="w-5 h-5 md:w-6 md:h-6 text-black" />
        ) : (
          <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-black group-hover:animate-bounce" />
        )}
      </motion.button>
    </div>
  );
};

export default AIChat;