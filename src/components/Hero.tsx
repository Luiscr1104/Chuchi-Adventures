import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Floating tour logo badge */}
            <div className="absolute top-6 left-6 z-10 hidden md:flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg px-4 py-2">
                <div className="h-10 w-10 rounded-full overflow-hidden border border-slate-200 bg-slate-50">
                    <img
                        src="/logoTour.webp"
                        alt="BeyondArenal tour badge"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="flex flex-col leading-tight">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                        Local Tour Operator
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                        BeyondArenal • Local Experts
                    </span>
                </div>
            </div>

            {/* Background Image / Video */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                    src="https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/54a5c2c2-3d08-4516-0804-2e722847be00/public"
                    alt="La Fortuna Landscape"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-50/10"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[var(--color-secondary)] font-semibold tracking-wider uppercase text-sm"
                >
                    Costa Rica • Pura Vida
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 drop-shadow-2xl leading-tight tracking-tight"
                >
                    Explore the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500">
                        Extraordinary
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-md font-light"
                >
                    Authentic adventures in La Fortuna & Peñas Blancas designed by locals.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a href="#tours">
                        <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-[var(--color-primary)] border-none hover:bg-[var(--color-primary-dark)] shadow-emerald-900/20 shadow-xl cursor-pointer">
                            View Adventures
                        </Button>
                    </a>
                    <a href="https://wa.me/50684291847" target="_blank">
                        <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 cursor-pointer">
                            Plan Trip
                        </Button>
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
            >
                <ArrowDown className="w-8 h-8 opacity-70" />
            </motion.div>
        </section>
    );
}
