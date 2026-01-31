import React from 'react';

/**
 * MarkaAuthority Component - Senior Modular Implementation
 * 
 * Aesthetic: Deep Black (#050505)
 * Narrative: Legacy since 1997 + AI/Traffic + CRM Digital
 * Performance: Responsive <picture> tags & Infinite Marquee
 */

const brands = [
    "LP Engenharia (1989)", "Gráfica União (1995)", "Jornal Folha Regional",
    "Marka Design", "Herval", "West Coast", "Clicheria Blumenau",
    "Gestão de Tráfego & IA", "Agência Marka (2026)"
];

const MarkaAuthority: React.FC = () => {
    return (
        <section id="cases" className="bg-[#050505] text-white font-sans overflow-hidden selection:bg-amber-500 selection:text-black">

            {/* 1. NARRATIVA REFINADA (AUTORIDADE SÊNIOR) */}
            <div className="max-w-4xl mx-auto py-24 md:py-32 px-6 text-center">
                <h2 className="text-4xl md:text-7xl font-light mb-12 tracking-tight leading-none">
                    O branding que <span className="italic font-serif text-amber-500">resiste ao tempo.</span>
                </h2>

                <div className="space-y-10 text-zinc-400 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
                    <p>
                        Designer gráfico de origem, <strong className="text-white font-medium">Luciano Barreto</strong> carrega a sabedoria de quem constrói marcas desde
                        <strong className="text-white ml-1">1997</strong>, transformando negócios em autoridades digitais.
                    </p>
                </div>
            </div>

            {/* 2. INFINITE MARQUEE (HISTÓRICO) */}
            <div className="border-y border-zinc-900/40 py-14 bg-[#080808] flex relative overflow-hidden group">
                <div className="flex animate-marquee whitespace-nowrap">
                    {brands.concat(brands).map((brand, i) => (
                        <span
                            key={i}
                            className="mx-14 text-3xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900 group-hover:text-zinc-800 transition-colors duration-700"
                        >
                            {brand}
                        </span>
                    ))}
                </div>
                <div className="absolute top-0 bottom-0 left-0 w-40 bg-gradient-to-r from-[#050505] to-transparent z-10" />
                <div className="absolute top-0 bottom-0 right-0 w-40 bg-gradient-to-l from-[#050505] to-transparent z-10" />
            </div>

            {/* 3. GALERIA DE CASES (RESPONSIVIDADE TOTAL) */}
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
                        <h4 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
                            G&S Contabilidade
                        </h4>
                        <p className="text-zinc-500 text-lg font-light">Estratégia Omnichannel & Performance Digital</p>
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
                        <h4 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
                            Solary Metais
                        </h4>
                        <p className="text-zinc-500 text-lg font-light">Escala de Vendas & Posicionamento Premium</p>
                    </div>
                </article>

            </div>

            {/* 4. AJUSTE DE REDES SOCIAIS & RODAPÉ */}
            <div className="bg-[#080808] border-t border-zinc-900/50 py-24 px-6 text-center space-y-12">
                <div className="max-w-xl mx-auto space-y-8">
                    <div className="flex flex-col items-center gap-8">
                        <p className="text-zinc-500 text-xs md:text-sm tracking-[0.4em] font-medium uppercase">
                            PARCEIROS DE NEGÓCIO EM TODO O BRASIL
                        </p>

                        <a
                            href="https://www.linkedin.com/company/agenciamarka/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-5 rounded-full border border-zinc-800 text-white font-medium hover:bg-white hover:text-black transition-all duration-500 group flex items-center gap-3"
                        >
                            <span>Siga a Agência Marka no LinkedIn</span>
                            <svg
                                className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarkaAuthority;
