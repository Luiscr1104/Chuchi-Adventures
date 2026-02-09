import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MapPin, ArrowRight, Plane, Car } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

export default function TransportFilter() {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        passengers: '2',
        pickup: '',
        dropoff: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const generateWhatsAppLink = () => {
        const { date, time, passengers, pickup, dropoff } = formData;
        const message = `Pura Vida! I would like to get a quote for private transport:%0A
📅 *Date:* ${date || 'TBD'}%0A
⏰ *Time:* ${time || 'TBD'}%0A
👥 *Passengers:* ${passengers}%0A
📍 *From:* ${pickup || 'TBD'}%0A
🏁 *To:* ${dropoff || 'TBD'}`;

        return `https://wa.me/50688201065?text=${message}`;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-7xl mx-auto"
        >
            <div className="relative bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] overflow-hidden border border-slate-100">
                {/* Visual Header */}
                <div className="bg-slate-900 text-white px-6 md:px-10 py-5 md:py-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[var(--color-secondary)] flex items-center justify-center text-slate-900 shrink-0 shadow-lg shadow-emerald-500/20">
                            <Car className="w-5 h-5" />
                        </div>
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-secondary)] block mb-0.5">Premium Service</span>
                            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-white leading-none">Instant Booking Request</span>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Status: Online
                    </div>
                </div>

                <div className="p-6 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-10 items-end">

                        {/* Origins & Destinations */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                    <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 flex items-center gap-2">
                                        <Plane className="w-3 h-3 text-[var(--color-primary)]" /> Origin
                                    </Label>
                                    <Input
                                        placeholder="SJO Airport, Hotel, etc."
                                        name="pickup"
                                        value={formData.pickup}
                                        onChange={handleChange}
                                        className="h-16 px-6 rounded-2xl border-2 border-slate-100 bg-white focus:border-[var(--color-primary)] focus:ring-0 transition-all text-sm font-bold text-slate-900 placeholder:text-slate-300"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1 flex items-center gap-2">
                                        <MapPin className="w-3 h-3 text-[var(--color-secondary)]" /> Destination
                                    </Label>
                                    <Input
                                        placeholder="La Fortuna, Guanacaste..."
                                        name="dropoff"
                                        value={formData.dropoff}
                                        onChange={handleChange}
                                        className="h-16 px-6 rounded-2xl border-2 border-slate-100 bg-white focus:border-[var(--color-secondary)] focus:ring-0 transition-all text-sm font-bold text-slate-900 placeholder:text-slate-300"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Schedule Metadata */}
                        <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="space-y-3">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Date</Label>
                                <Input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="h-16 px-4 rounded-2xl border-2 border-slate-100 bg-white focus:border-[var(--color-primary)] focus:ring-0 transition-all text-xs font-bold uppercase text-slate-900"
                                />
                            </div>
                            <div className="space-y-3">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Time</Label>
                                <Input
                                    type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    className="h-16 px-4 rounded-2xl border-2 border-slate-100 bg-white focus:border-[var(--color-primary)] focus:ring-0 transition-all text-xs font-bold text-slate-900"
                                />
                            </div>
                            <div className="space-y-3 col-span-2 md:col-span-1">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Group</Label>
                                <div className="relative">
                                    <Input
                                        type="number"
                                        name="passengers"
                                        value={formData.passengers}
                                        onChange={handleChange}
                                        className="h-16 px-6 rounded-2xl border-2 border-slate-100 bg-white focus:border-[var(--color-primary)] focus:ring-0 transition-all text-sm font-black text-slate-900"
                                    />
                                    <Users className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="lg:col-span-3">
                            <a href={generateWhatsAppLink()} target="_blank" className="block group">
                                <Button className="w-full h-16 md:h-20 rounded-[1.5rem] bg-[var(--color-primary)] text-white font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-emerald-500/20 hover:scale-[1.02] active:scale-95 transition-all duration-500 flex items-center justify-between px-8">
                                    Get Quote
                                    <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-emerald-600 transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Status Bar */}
                <div className="px-6 md:px-12 py-4 bg-slate-50 border-t border-slate-100 flex flex-wrap gap-x-6 gap-y-3 items-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]"></div>
                        Privacy Guaranteed
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]"></div>
                        Professional Drivers
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]"></div>
                        Door-to-Door Service
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
