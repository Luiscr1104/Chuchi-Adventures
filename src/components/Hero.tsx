import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowDown, MapPin } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Image with Parallax-like effect */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.15, opacity: 0.8 }}
                    animate={{ scale: 1.05, opacity: 1 }}
                    transition={{ duration: 15, ease: "easeOut" }}
                    src="https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/54a5c2c2-3d08-4516-0804-2e722847be00/public"
                    alt="La Fortuna Landscape"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-slate-900/40"></div>
                <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 w-full">
                <div className="container-custom mx-auto px-4">
                    <div className="max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <div className="h-px w-12 bg-[var(--color-secondary)]"></div>
                            <span className="text-[var(--color-secondary)] font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
                                Experience Costa Rica
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-bold text-white leading-[0.9] tracking-tighter mb-12 drop-shadow-2xl uppercase"
                        >
                            AUTHENTIC <br />
                            <span className="text-[var(--color-secondary)]">LA FORTUNA</span><br />
                            ADVENTURES.
                        </motion.h1>

                        <div className="flex flex-col md:flex-row items-start md:items-center gap-12 pt-12 border-t border-white/20 max-w-4xl">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8, duration: 1 }}
                                className="text-lg md:text-2xl text-white/80 max-w-md font-light leading-relaxed"
                            >
                                Boutique adventures in <span className="text-white font-medium italic underline decoration-[var(--color-secondary)] underline-offset-8">La Fortuna</span> designed for those who seek the authentic.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="flex flex-wrap gap-5"
                            >
                                <a href="#tours">
                                    <Button size="lg" className="h-16 px-10 rounded-2xl bg-[var(--color-secondary)] text-slate-900 hover:bg-white transition-all duration-500 font-black uppercase tracking-widest text-sm shadow-2xl shadow-emerald-500/20">
                                        Explore Now
                                    </Button>
                                </a>
                                <a href="https://wa.me/50688201065" target="_blank">
                                    <Button variant="outline" size="lg" className="h-16 px-10 rounded-2xl bg-white/5 backdrop-blur-md text-white border-white/20 hover:bg-white/10 transition-all duration-500 font-bold uppercase tracking-widest text-sm">
                                        Private Trip
                                    </Button>
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 2 }}
                className="absolute bottom-12 right-12 z-20 flex flex-col items-center gap-6"
            >
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.5em] vertical-text transform rotate-180 mb-4 whitespace-nowrap">
                    Scroll to discover
                </span>
                <div className="w-px h-24 bg-gradient-to-b from-white to-transparent relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 96, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-transparent via-[var(--color-secondary)] to-transparent"
                    />
                </div>
            </motion.div>
        </section>
    );
}
