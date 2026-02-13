export const generateTransportQuoteLink = (formData: {
    date: string;
    time: string;
    passengers: string;
    pickup: string;
    dropoff: string;
}) => {
    const { date, time, passengers, pickup, dropoff } = formData;
    const message = `Pura Vida! I would like to get a quote for private transport:%0A
📅 *Date:* ${date || 'TBD'}%0A
⏰ *Time:* ${time || 'TBD'}%0A
👥 *Passengers:* ${passengers}%0A
📍 *From:* ${pickup || 'TBD'}%0A
🏁 *To:* ${dropoff || 'TBD'}`;

    return `https://wa.me/50688201065?text=${message}`;
};
