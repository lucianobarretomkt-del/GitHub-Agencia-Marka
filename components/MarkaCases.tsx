import React from 'react';

/**
 * MarkaCases Component - Focus on Digital Portfolio
 * 
 * Aesthetic: Deep Black (#050505)
 * Performance: Responsive <picture> tags
 */

const MarkaCases: React.FC = () => {
    return (
        <section id="cases" className="bg-[#050505] text-white font-sans overflow-hidden selection:bg-amber-500 selection:text-black">

            {/* HEADER DA SESSÃO - Consistência com Serviços */}
            <div className="max-w-[1600px] mx-auto px-4 md:px-6 pt-20 md:pt-32">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 px-4 gap-6">
                    <h2 className="text-2xl sm:text-3xl md:text-8xl font-heading font-bold uppercase leading-[1.1] md:leading-[0.9] drop-shadow-lg w-full md:w-auto">
                        Nossos <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA000]">Cases</span>
                    </h2>
                    <p className="text-white/60 max-w-sm text-left">
                        Resultados reais construídos com estratégia e design.
                    </p>
                </div>
            </div>

            {/* 1. GALERIA DE CASES (RESPONSIVIDADE TOTAL) */}
            <div className="max-w-[1440px] mx-auto space-y-24 pb-32 px-4 md:px-10">

                {/* CASE G&S CONTABILIDADE */}
                <article className="relative group">
                    <a
                        href="https://gescontabilidade.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-[3rem] overflow-hidden border border-zinc-900 bg-zinc-950/50 transition-all duration-1000 hover:border-amber-500/20 hover:shadow-[0_0_80px_rgba(245,158,11,0.03)]"
                    >
                        <picture>
                            <source media="(max-width: 767px)" srcSet="/img/gs-painel-reforma-tributaria-jan2026-mobile-2.webp" />
                            <img
                                src="/img/gs-painel-reforma-tributaria-jan2026-desktop-2.webp"
                                alt="Case G&S Contabilidade - Reforma Tributária 2026"
                                width={1920}
                                height={1080}
                                className="w-full h-auto aspect-[4/5] md:aspect-auto transition-transform duration-[3s] ease-out group-hover:scale-[1.02]"
                                loading="lazy"
                            />
                        </picture>

                        <div className="absolute top-8 right-8 pointer-events-none">
                            <span className="text-xs font-mono border border-white/30 px-2 py-1 rounded-full backdrop-blur-md uppercase tracking-wider text-white">
                                Marketing Estratégico
                            </span>
                        </div>
                    </a>
                    <div className="mt-10 px-6">
                        <h4 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 font-heading">
                            G&S Contabilidade
                        </h4>
                        <a
                            href="https://gescontabilidade.net"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 text-lg font-medium uppercase underline underline-offset-8 hover:text-amber-500 transition-colors tracking-widest"
                        >
                            SAIBA MAIS
                        </a>
                    </div>
                </article>

                {/* CASE SOLARY METAIS */}
                <article className="relative group">
                    <a
                        href="https://www.lojasolary.com.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-[3rem] overflow-hidden border border-zinc-900 bg-zinc-950/50 transition-all duration-1000 hover:border-amber-500/20 hover:shadow-[0_0_80px_rgba(245,158,11,0.03)]"
                    >
                        <picture>
                            <source media="(max-width: 767px)" srcSet="/img/carrossel-solary-31012026-mobile-1.webp" />
                            <img
                                src="/img/carrossel-solary-31012026-desktop-1.webp"
                                alt="Case Solary Metais - E-commerce Nacional"
                                width={1920}
                                height={1080}
                                className="w-full h-auto aspect-[4/5] md:aspect-auto transition-transform duration-[3s] ease-out group-hover:scale-[1.02]"
                                loading="lazy"
                            />
                        </picture>

                        <div className="absolute top-8 right-8 pointer-events-none">
                            <span className="text-xs font-mono border border-white/30 px-2 py-1 rounded-full backdrop-blur-md uppercase tracking-wider">
                                E-commerce
                            </span>
                        </div>
                    </a>
                    <div className="mt-10 px-6">
                        <h4 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 font-heading">
                            Solary Metais
                        </h4>
                        <a
                            href="https://www.lojasolary.com.br/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 text-lg font-medium uppercase underline underline-offset-8 hover:text-amber-500 transition-colors tracking-widest"
                        >
                            SAIBA MAIS
                        </a>
                    </div>
                </article>

                {/* CASE AIRO ENERGIA SOLAR */}
                <article className="relative group">
                    <a
                        href="https://airoenergia.com.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-[3rem] overflow-hidden border border-zinc-900 bg-zinc-950/50 transition-all duration-1000 hover:border-amber-500/20 hover:shadow-[0_0_80px_rgba(245,158,11,0.03)]"
                    >
                        <picture>
                            <source media="(max-width: 767px)" srcSet="/img/carrossel-airo-13fev2026-mobile-1.webp" />
                            <img
                                src="/img/carrossel-airo-13fev2026-desktop-1.webp"
                                alt="Case Airo Energia Solar - Prestador de Serviços"
                                width={1920}
                                height={1080}
                                className="w-full h-auto aspect-[4/5] md:aspect-auto transition-transform duration-[3s] ease-out group-hover:scale-[1.02]"
                                loading="lazy"
                            />
                        </picture>

                        <div className="absolute top-8 right-8 pointer-events-none">
                            <span className="text-xs font-mono border border-white/30 px-2 py-1 rounded-full backdrop-blur-md uppercase tracking-wider">
                                Prestador de Serviços
                            </span>
                        </div>
                    </a>
                    <div className="mt-10 px-6">
                        <h4 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 font-heading">
                            Airo Energia Solar
                        </h4>
                        <a
                            href="https://airoenergia.com.br/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 text-lg font-medium uppercase underline underline-offset-8 hover:text-amber-500 transition-colors tracking-widest"
                        >
                            SAIBA MAIS
                        </a>
                    </div>
                </article>

            </div>

        </section>
    );
};

export default MarkaCases;
