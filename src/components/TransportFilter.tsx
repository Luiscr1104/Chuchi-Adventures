import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MapPin, ArrowRight } from 'lucide-react';
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
        const message = `Hello, I would like to get a quote for private transport:%0A
📅 *Date:* ${date || 'TBD'}%0A
⏰ *Time:* ${time || 'TBD'}%0A
👥 *Passengers:* ${passengers}%0A
📍 *From:* ${pickup || 'TBD'}%0A
🏁 *To:* ${dropoff || 'TBD'}`;

        return `https://wa.me/50684291847?text=${message}`;
    };

    return (
        <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-100">
            <div className="bg-[var(--color-primary)] text-white p-4 text-center font-bold text-lg">
                Quick Quote: Book your private ride in minutes
            </div>

            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
                {/* Date */}
                <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider">
                        <Calendar className="w-3 h-3" /> Pickup Date
                    </Label>
                    <Input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="border-slate-200 focus:border-[var(--color-primary)] bg-slate-50"
                    />
                </div>

                {/* Time */}
                <div className="space-y-2">
                    <Label htmlFor="time" className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider">
                        <Clock className="w-3 h-3" /> Pickup Time
                    </Label>
                    <Input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="border-slate-200 focus:border-[var(--color-primary)] bg-slate-50"
                    />
                </div>

                {/* Passengers */}
                <div className="space-y-2">
                    <Label htmlFor="passengers" className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider">
                        <Users className="w-3 h-3" /> Persons
                    </Label>
                    <Input
                        type="number"
                        min="1"
                        id="passengers"
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleChange}
                        className="border-slate-200 focus:border-[var(--color-primary)] bg-slate-50"
                    />
                </div>

                {/* Pickup - Combined for simplicity in mobile, split in logic */}
                <div className="space-y-2 lg:col-span-1">
                    <Label htmlFor="pickup" className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider">
                        <MapPin className="w-3 h-3" /> Pickup / Drop-off
                    </Label>
                    <div className="grid grid-cols-1 gap-2">
                        <Input
                            type="text"
                            placeholder="Pickup Location"
                            name="pickup"
                            value={formData.pickup}
                            onChange={handleChange}
                            className="border-slate-200 focus:border-[var(--color-primary)] bg-slate-50"
                        />
                        <Input
                            type="text"
                            placeholder="Drop-off Location"
                            name="dropoff"
                            value={formData.dropoff}
                            onChange={handleChange}
                            className="border-slate-200 focus:border-[var(--color-primary)] bg-slate-50"
                        />
                    </div>
                </div>

                {/* Action */}
                <div className="h-full flex items-end">
                    <a href={generateWhatsAppLink()} target="_blank" className="w-full">
                        <Button className="w-full h-[88px] text-lg font-bold bg-[#e07a5f] hover:bg-[#d0694e] text-white shadow-lg shadow-orange-200 uppercase tracking-wide">
                            Book Now
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}
