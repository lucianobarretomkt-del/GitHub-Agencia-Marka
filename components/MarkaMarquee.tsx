import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MarkaMarquee = () => {
    const [isHovered, setIsHovered] = useState(false);

    const partners = [
        "Gráfica União (STG)",
        "Colégio Medianeira (STG)",
        "Jornal Expresso Ilustrado (STG)",
        "Jornal Folha Regional (STG)",
        "Expresso Cópias (CB)",
        "Lymyts Calçados (CB)",
        "Máquinas Klein (NH)",
        "Sunlux Persianas (CB)",
        "Clínica Dimagem (CB)",
        "InfoTarget Informática (CB)",
        "Arquiteto Fernando Schneider (CB)",
        "Café Central (CB)",
        "Bonattus Reparação Automotiva (CB)",
        "Gráfica Papuesta (CB)",
        "Gráfica Dynâmica (CB)",
        "Petit Sablé Indústria de Alimentos (POA)",
        "P1 Assessoria (NH)",
        "Jornal CBNews (CB)",
        "Play TV News Produtora CB)",
        "Luma Cor (NH)",
        "Papryka (CB)",
        "Reval Industrial (Caxias do Sul)",
        "Del Sur Viagens (Caxias do Sul)",
        "Rações Confiança (BH)",
        "Ludwig Advocacia (NH)",
        "Illumminus Consultoria (POA)",
        "Becker Embalagens (CB)",
        "Acord Musical (PR)",
        "Fatto Concursos (NH)",
        "Dufloss Gourmet (CB)",
        "Instituto Sabbi (POA)",
        "Flávio Cursos (POA)",
        "CT Treinaço (CB)",
        "Breshop (CB)",
        "Ateliê Rose Conrad (Sta. Cruz)",
        "Ótica Reflexo (CB)",
        "Top Motors (NH)",
        "UP Brinquedos (NH)",
        "Fino Pé Calçados (CB)",
        "Dhiolly Solar (NH)",
        "Defumador Dufloss (CB)",
        "Luxo Feminino (TRM)",
        "Airo Energia (NH)",
        "Solary Metais (NH)",
        "G&S Assessoria (NH)"
    ];

    // Use original order starting with "Gráfica União"
    // Duplicate the list once to create the infinite scroll effect
    const marqueeItems = [...partners, ...partners];

    return (
        <section className="bg-[#f59e0b] py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <h2 className="text-black/40 text-xs md:text-sm font-bold uppercase tracking-[0.5em] text-center font-sans">
                    Parcerias de Negócio há Décadas
                </h2>
            </div>

            <div
                className="relative flex overflow-hidden border-y border-black/10 bg-[#f59e0b] group h-[80px] items-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Visual Polish: Side Gradient Fades (to Gold/Amber) */}
                <div className="absolute top-0 bottom-0 left-0 w-32 md:w-80 bg-gradient-to-r from-[#f59e0b] via-[#f59e0b]/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-32 md:w-80 bg-gradient-to-l from-[#f59e0b] via-[#f59e0b]/80 to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{
                        x: isHovered ? undefined : ["0%", "-50%"]
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30, // Adjusted for smooth, continuous speed
                            ease: "linear"
                        }
                    }}
                    style={{
                        transform: 'translate3d(0,0,0)',
                        willChange: 'transform'
                    }}
                >
                    {marqueeItems.map((partner, i) => (
                        <span
                            key={i}
                            className="text-lg md:text-xl font-heading font-black px-10 text-black transition-all duration-500 cursor-default hover:text-white hover:scale-110 select-none flex items-center uppercase"
                        >
                            {partner}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default MarkaMarquee;
