/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Globe, Zap, Target, BarChart2, CheckCircle, Menu, X, ArrowRight, MapPin, Mail, Phone, ChevronLeft, ChevronRight, Instagram, Linkedin, Loader2, Send } from 'lucide-react';
import FluidBackground from './components/FluidBackground';
import GradientText from './components/GlitchText';
import CustomCursor from './components/CustomCursor';
import ServiceCard from './components/ArtistCard'; // Reusing visual component but with Service logic
import AIChat from './components/AIChat';
import MarkaCases from './components/MarkaCases';
import MarkaMarquee from './components/MarkaMarquee';
import { ServiceItem } from './types';

// Services Data (Agência Marka)
const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Tráfego Pago',
    subtitle: 'Meta & Google Ads',
    tag: 'Conversão',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    description: 'Campanhas estratégicas no Meta Ads e Google Ads para maximizar resultados e ROI. Anúncios otimizados para conversão.',
    details: ['Meta Ads', 'Google Ads', 'Gestão de E-commerce']
  },
  {
    id: '2',
    title: 'Branding',
    subtitle: 'Posicionamento',
    tag: 'Identidade',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop',
    description: 'Construímos marcas fortes e memoráveis. Identidade visual, estratégia de marca e posicionamento competitivo no mercado.',
    details: ['Identidade Visual', 'Estratégia de Marca', 'Posicionamento']
  },
  {
    id: '3',
    title: 'Performance',
    subtitle: 'Análise de Dados',
    tag: 'Analytics',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop',
    description: 'Monitoramento e análise contínua de métricas. Otimização constante para garantir alta performance em todos os canais.',
    details: ['Analytics', 'Dashboards', 'Otimização Contínua']
  },
  {
    id: '4',
    title: 'Estratégia',
    subtitle: 'Planejamento',
    tag: 'Crescimento',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop',
    description: 'Estratégias personalizadas baseadas em dados e insights do mercado. Planos de ação focados em crescimento escalável.',
    details: ['Análise de Mercado', 'Metas & KPIs', 'Plano de Ação']
  },
];

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // Handle keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedService) return;
      if (e.key === 'ArrowLeft') navigateService('prev');
      if (e.key === 'ArrowRight') navigateService('next');
      if (e.key === 'Escape') setSelectedService(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedService]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navigateService = (direction: 'next' | 'prev') => {
    if (!selectedService) return;
    const currentIndex = SERVICES.findIndex(a => a.id === selectedService.id);
    let nextIndex;
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % SERVICES.length;
    } else {
      nextIndex = (currentIndex - 1 + SERVICES.length) % SERVICES.length;
    }
    setSelectedService(SERVICES[nextIndex]);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.whatsapp) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://hook.us2.make.com/7xj1a4k9g4se5ake5bw6qvmic7ig8w1p', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          source: 'Website Contact Form'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', whatsapp: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen text-white selection:bg-[#FFD700] selection:text-black cursor-auto md:cursor-none overflow-x-hidden">
      <CustomCursor />
      <FluidBackground />
      <AIChat />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-12 py-4 md:py-6 mix-blend-difference w-full max-w-[100vw]">
        {/* Logo Section - Consistently visible across all devices */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="z-50 shrink-0 cursor-pointer flex items-center"
          onClick={() => scrollToSection('hero')}
          data-hover="true"
        >
          <img src="/logo.png" className="h-10 w-auto" alt="Agência Marka" />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-wrap items-center gap-6 lg:gap-10 text-sm font-bold tracking-widest uppercase">
          {[
            { label: 'Sobre', id: 'about' },
            { label: 'Serviços', id: 'services' },
            { label: 'Cases', id: 'cases' },
            { label: 'Contato', id: 'contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-[#FFD700] transition-colors text-white cursor-pointer bg-transparent border-none whitespace-nowrap"
              data-hover="true"
            >
              {item.label}
            </button>
          ))}

          <a
            href="https://wa.me/message/53S7L76U2J4SF1"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-6 py-2 lg:px-8 lg:py-3 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 text-white cursor-pointer bg-transparent whitespace-nowrap"
            data-hover="true"
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white z-50 relative w-10 h-10 flex items-center justify-center shrink-0"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {[
              { label: 'Sobre', id: 'about' },
              { label: 'Serviços', id: 'services' },
              { label: 'Cases', id: 'cases' },
              { label: 'Contato', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-4xl font-heading font-bold text-white hover:text-[#FFD700] transition-colors uppercase bg-transparent border-none"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/message/53S7L76U2J4SF1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 border border-white px-10 py-4 text-sm font-bold tracking-widest uppercase bg-white text-black"
            >
              Fale Conosco
            </a>

            <div className="flex gap-8 mt-4">
              <a href="https://www.instagram.com/agencia.marka/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFD700] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/lucianobarretomkt/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFD700] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <header id="hero" className="relative h-[100svh] min-h-[700px] flex flex-col items-center justify-center overflow-hidden px-4 pt-[140px] md:pt-[180px]">
        <motion.div
          style={{ y, opacity, transform: 'translate3d(0,0,0)' }}
          className="z-20 text-center flex flex-col items-center w-full max-w-6xl pb-24 md:pb-32"
        >
          <div className="relative w-full flex justify-center items-center">
            <GradientText
              text="MARKA"
              as="h1"
              className="text-[16vw] md:text-[16vw] leading-[0.85] font-black tracking-tighter text-center"
            />
            <motion.div
              className="absolute -z-20 w-[50vw] h-[50vw] bg-white/5 blur-[40px] rounded-full pointer-events-none will-change-transform"
              animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 6, repeat: Infinity }}
              style={{ transform: 'translateZ(0)' }}
            />
          </div>

          <div className="mt-12 md:mt-16 space-y-8 max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-2xl md:text-4xl font-light italic font-serif text-white/95 leading-tight tracking-tight px-4"
            >
              “Desde 1997, construo marcas. Não comecei no digital — <span className="text-amber-500">eu cheguei até ele.</span>”
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="space-y-4"
            >
              <div className="w-12 h-px bg-[#FFD700]/40 mx-auto" />
              <p className="text-white/60 font-light italic text-base md:text-xl tracking-wide font-serif">
                Luciano Barreto, <span className="text-white/40 not-italic font-sans text-sm tracking-[0.2em] uppercase ml-2">Designer Gráfico.</span>
              </p>
            </motion.div>

          </div>

          <motion.a
            href="https://wa.me/message/53S7L76U2J4SF1"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="mt-12 px-10 py-5 bg-[#FFD700] text-black font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all duration-500 flex items-center gap-3 group cursor-pointer shadow-[0_0_30px_rgba(255,215,0,0.2)]"
            data-hover="true"
          >
            Fale Conosco <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        <div
          className="absolute bottom-10 md:bottom-14 left-0 w-full py-2 md:py-2.5 bg-white text-black z-10 overflow-hidden border-y border-black/10 rotate-1 shadow-2xl will-change-transform flex items-center"
          style={{ transform: 'translate3d(0,0,0) rotate(1deg)' }}
        >
          <motion.div
            className="flex w-fit will-change-transform"
            animate={{ x: "-50%" }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            {[0, 1].map((key) => (
              <div key={key} className="flex whitespace-nowrap shrink-0 items-center">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-xl md:text-3xl font-heading font-black px-10 flex items-center gap-6">
                    RESULTADOS RÁPIDOS <span className="text-[#FFD700] text-lg md:text-2xl opacity-100">●</span>
                    FOCO EM PERFORMANCE <span className="text-[#FFD700] text-lg md:text-2xl opacity-100">●</span>
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section id="about" className="relative z-10 py-20 md:py-32 bg-black/20 backdrop-blur-sm border-t border-white/10 overflow-hidden">
        <div className="absolute top-1/2 right-[-20%] w-[50vw] h-[50vw] bg-[#FFD700]/10 rounded-full blur-[40px] pointer-events-none will-change-transform" style={{ transform: 'translateZ(0)' }} />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-6xl font-heading font-bold mb-6 md:mb-8 leading-tight">
                Sobre a <br /> <GradientText text="MARKA" className="text-4xl md:text-7xl" />
              </h2>
              <p className="text-base md:text-xl text-gray-200 mb-8 md:mb-12 font-light leading-relaxed drop-shadow-md">
                Somos uma agência digital focada em transformar marcas em resultados. Nossa missão é combinar criatividade, estratégia e tecnologia para entregar campanhas de alto impacto. Com expertise em Meta Ads, Google Ads e branding estratégico.
              </p>

              <div className="space-y-6 md:space-y-8">
                {[
                  { icon: Zap, title: 'Resultados Rápidos', desc: 'Estratégias ágeis e eficientes para acelerar o crescimento.' },
                  { icon: CheckCircle, title: 'Profissionalismo', desc: 'Equipe especializada e comprometida com a excelência.' },
                  { icon: BarChart2, title: 'Foco em Performance', desc: 'Decisões baseadas em dados e métricas para maximizar ROI.' },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-6"
                  >
                    <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/5">
                      <feature.icon className="w-6 h-6 text-[#FFD700]" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2 font-heading text-white">{feature.title}</h4>
                      <p className="text-sm text-gray-300">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 relative h-[350px] md:h-[700px] w-full order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#333333] rounded-3xl rotate-3 opacity-30 blur-xl" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
                  alt="Team brainstorming"
                  className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 will-change-transform filter grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                  <div className="text-4xl md:text-8xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0 opacity-50">
                    24/7
                  </div>
                  <div className="text-sm md:text-xl font-bold tracking-widest uppercase mt-2 text-white">
                    Suporte & Dedicação
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="relative z-10 py-20 md:py-32">
        <div className="max-w-[1600px] mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 px-4 gap-6">
            <h2 className="text-2xl sm:text-3xl md:text-8xl font-heading font-bold uppercase leading-[1.1] md:leading-[0.9] drop-shadow-lg w-full md:w-auto">
              Nossos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA000]">Serviços</span>
            </h2>
            <p className="text-white/60 max-w-sm text-left">
              Soluções completas em marketing digital para alcançar seus objetivos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 border-t border-l border-white/10 bg-black/20 backdrop-blur-sm">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} onClick={() => setSelectedService(service)} />
            ))}
          </div>
        </div>
      </section>
      <MarkaCases />

      <MarkaMarquee />

      {/* CONTACT SECTION */}
      <section id="contact" className="relative z-10 py-20 md:py-32 px-4 md:px-6 bg-[#050505]">
        {/* Subtitle radial glow for depth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl md:text-8xl font-heading font-bold opacity-20 text-white">
              CONTATO
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">Vamos Conversar</h3>
              <p className="text-gray-300 text-base md:text-lg font-light">
                Transforme sua presença digital em resultados reais. Vamos criar uma estratégia personalizada para o seu negócio.
              </p>

              <div className="space-y-6 mt-8">
                <a href="mailto:lucianobarretomkt@gmail.com" className="flex items-center gap-4 text-white hover:text-[#FFD700] transition-colors w-fit">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <span className="text-sm md:text-lg">lucianobarretomkt@gmail.com</span>
                </a>

                <a href="https://wa.me/message/53S7L76U2J4SF1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:text-[#FFD700] transition-colors w-fit">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <span className="text-sm md:text-lg">(51) 98468-7497</span>
                </a>

                <div className="flex items-center gap-4 text-white hover:text-[#FFD700] transition-colors">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <span className="text-sm md:text-lg">Campo Bom, Rio Grande do Sul</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/40 border border-white/5 p-6 md:p-10 backdrop-blur-2xl relative overflow-hidden group/form transition-all duration-700 hover:border-amber-500/10">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent scale-x-0 group-hover/form:scale-x-100 transition-transform duration-1000" />

              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div>
                  <label className="block text-[10px] md:text-xs uppercase tracking-widest text-gray-400 mb-2">Nome</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 p-3 md:p-4 text-white focus:border-[#FFD700] focus:outline-none transition-colors text-sm"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-[10px] md:text-xs uppercase tracking-widest text-gray-400 mb-2">WhatsApp / Telefone</label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 p-3 md:p-4 text-white focus:border-[#FFD700] focus:outline-none transition-colors text-sm"
                    placeholder="(DD) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-[10px] md:text-xs uppercase tracking-widest text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 p-3 md:p-4 text-white focus:border-[#FFD700] focus:outline-none transition-colors text-sm"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-[10px] md:text-xs uppercase tracking-widest text-gray-400 mb-2">Mensagem</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 p-3 md:p-4 text-white focus:border-[#FFD700] focus:outline-none transition-colors resize-none text-sm"
                    placeholder="Conte sobre seu projeto..."
                  />
                </div>

                <div className="relative">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 md:py-5 bg-white text-black font-bold uppercase tracking-[0.2em] hover:bg-[#FFD700] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center gap-3 group cursor-pointer text-xs md:text-sm"
                    data-hover="true"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensagem
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-[#FFD700] text-center mt-4 font-mono text-[10px] md:text-sm uppercase tracking-wider"
                      >
                        Mensagem enviada com sucesso! 🚀
                      </motion.p>
                    )}
                    {submitStatus === 'error' && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-red-500 text-center mt-4 font-mono text-[10px] md:text-sm uppercase tracking-wider"
                      >
                        Ocorreu um erro. Tente novamente ou use o WhatsApp.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 pt-12 pb-32 md:py-16 md:pb-24 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 text-center md:text-left">
          <div className="w-full md:w-auto">
            <div className="font-heading text-2xl md:text-4xl font-bold tracking-tighter mb-4 text-white uppercase">Agência Marka</div>
            <div className="flex justify-center md:justify-start gap-2 text-[10px] font-mono text-gray-400">
              <span>&copy; 2026 Agência Marka. Todos os direitos reservados.</span>
            </div>
          </div>

          <div className="flex gap-4 md:gap-8 flex-wrap justify-center w-full md:w-auto">
            <a href="https://www.instagram.com/agencia.marka/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white font-bold uppercase text-[10px] tracking-widest transition-colors cursor-pointer group" data-hover="true">
              <Instagram className="w-3 h-3 md:w-4 md:h-4 group-hover:text-[#FFD700] transition-colors" />
              <span>Instagram</span>
            </a>
            <a href="https://www.linkedin.com/company/agenciamarka/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white font-bold uppercase text-[10px] tracking-widest transition-colors cursor-pointer group" data-hover="true">
              <Linkedin className="w-3 h-3 md:w-4 md:h-4 group-hover:text-[#FFD700] transition-colors" />
              <span>LinkedIn</span>
            </a>
            <a href="https://wa.me/message/53S7L76U2J4SF1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white font-bold uppercase text-[10px] tracking-widest transition-colors cursor-pointer group" data-hover="true">
              <Phone className="w-3 h-3 md:w-4 md:h-4 group-hover:text-[#FFD700] transition-colors" />
              <span>WhatsApp</span>
            </a>
            <a href="/politica-privacidade.html" className="flex items-center gap-2 text-gray-400 hover:text-white font-bold uppercase text-[10px] tracking-widest transition-colors cursor-pointer group border-l border-white/10 pl-4" data-hover="true">
              <span>Política de Privacidade</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md cursor-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-[#111111] border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl shadow-[#FFD700]/10 group/modal max-h-[90vh] overflow-y-auto md:overflow-visible"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors"
                data-hover="true"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); navigateService('prev'); }}
                className="absolute left-4 bottom-4 translate-y-0 md:top-1/2 md:bottom-auto md:-translate-y-1/2 z-20 p-3 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors border border-white/10 backdrop-blur-sm"
                data-hover="true"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); navigateService('next'); }}
                className="absolute right-4 bottom-4 translate-y-0 md:top-1/2 md:bottom-auto md:-translate-y-1/2 z-20 p-3 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors border border-white/10 backdrop-blur-sm md:right-8"
                data-hover="true"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="w-full md:w-1/2 h-48 md:h-auto relative overflow-hidden shrink-0">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedService.id}
                    src={selectedService.image}
                    alt={selectedService.title}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full object-cover grayscale"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent md:bg-gradient-to-r" />
              </div>

              <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center relative bg-[#111111]">
                <motion.div
                  key={selectedService.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="flex items-center gap-3 text-[#FFD700] mb-4">
                    <Target className="w-4 h-4" />
                    <span className="font-mono text-xs tracking-widest uppercase">{selectedService.tag}</span>
                  </div>

                  <h3 className="text-2xl md:text-5xl font-heading font-bold uppercase leading-none mb-2 text-white">
                    {selectedService.title}
                  </h3>

                  <p className="text-sm md:text-lg text-[#FDE047] font-medium tracking-widest uppercase mb-6">
                    {selectedService.subtitle}
                  </p>

                  <div className="h-px w-20 bg-white/20 mb-6" />

                  <p className="text-gray-300 leading-relaxed text-sm md:text-lg font-light mb-8">
                    {selectedService.description}
                  </p>

                  <ul className="space-y-2">
                    {selectedService.details.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/80 text-sm md:text-base">
                        <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => { setSelectedService(null); scrollToSection('contact'); }}
                    className="mt-8 px-6 py-3 border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors w-fit"
                  >
                    Solicitar Proposta
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;