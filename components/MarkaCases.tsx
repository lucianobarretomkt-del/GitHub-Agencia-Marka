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

            {/* 1. GALERIA DE CASES (RESPONSIVIDADE TOTAL) */}
            <div className="max-w-[1440px] mx-auto space-y-24 py-32 px-4 md:px-10">

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
                                className="w-full h-auto transition-transform duration-[3s] ease-out group-hover:scale-[1.02]"
                                loading="lazy"
                            />
                        </picture>

                        <div className="absolute top-8 right-8 pointer-events-none">
                            <span className="bg-black/40 backdrop-blur-xl border border-white/10 text-white/50 px-4 py-2 rounded-full text-[10px] tracking-[0.3em] uppercase">
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
                            <source media="(max-width: 767px)" srcSet="/img/carrossel-solary-31012026-mobile-1.png" />
                            <img
                                src="/img/carrossel-solary-31012026-desktop-1.png"
                                alt="Case Solary Metais - E-commerce Nacional"
                                className="w-full h-auto transition-transform duration-[3s] ease-out group-hover:scale-[1.02]"
                                loading="lazy"
                            />
                        </picture>

                        <div className="absolute top-8 right-8 pointer-events-none">
                            <span className="bg-black/40 backdrop-blur-xl border border-white/10 text-white/50 px-4 py-2 rounded-full text-[10px] tracking-[0.3em] uppercase">
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

            </div>

        </section>
    );
};

export default MarkaCases;
