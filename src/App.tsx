import { useState } from 'react';
import { Zap, ShieldCheck, Star, MessageSquare, ChevronRight, Wrench, Home, AlertTriangle, FileText } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '', requestType: 'booking' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const type = formData.requestType === 'quote' ? 'Quote request' : 'Booking';
    console.log(`${type} submitted:`, formData);
    alert(`Thank you! We'll get back to you about your ${formData.requestType === 'quote' ? 'quote' : 'booking'} shortly.`);
  };

  const services = [
    { title: 'Electrical Repairs & Maintenance', icon: Wrench },
    { title: 'New Installations', icon: Home },
    { title: '24-Hour Emergency Call-Outs', icon: AlertTriangle },
  ];

  const testimonials = [
    { text: "Quick response and professional work. Sorted out our DB board issue in no time. Highly recommended.", name: "Francois D." },
    { text: "Reliable and honest electrician. Came out late on a Saturday for an emergency and didn't overcharge.", name: "Mariette V." },
    { text: "Did all the electrical for our new granny flat. Neat, on time, and passed COC first time.", name: "Andre P." },
  ];

  return (
    <div className="min-h-screen bg-black text-slate-100 font-sans">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/27641437036?text=Hi%20R%20%26%20R%20Electrical,%20I%20found%20your%20website%20and%20need%20help%20with%20an%20electrical%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-amber-500 text-black p-4 rounded-full shadow-lg z-50 hover:bg-amber-400 transition"
      >
        <MessageSquare size={24} />
      </a>

      {/* Hero */}
      <header className="relative text-white py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/hero-electrician.jpg" alt="Electrical work" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold text-amber-500 mb-2">R & R</h1>
          <span className="text-2xl font-semibold text-slate-100">Electrical</span>
        </div>
        <p className="relative z-10 text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          Reliable electrical services in Durbanville, Cape Town — 4.6 stars on Google. Available 24/7 for all your electrical needs.
        </p>
        <div className="relative z-10 flex gap-4 justify-center flex-wrap">
          <a href="#booking" onClick={() => setFormData({...formData, requestType: 'booking'})} className="bg-amber-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-amber-400 transition">Book Now</a>
          <a href="#booking" onClick={() => setFormData({...formData, requestType: 'quote'})} className="border-2 border-amber-500 text-amber-500 px-8 py-3 rounded-lg font-bold hover:bg-amber-500 hover:text-black transition">Request Quote</a>
        </div>
      </header>

      {/* Trust Bar */}
      <div className="bg-black border-b border-slate-800 py-6 text-center">
        <a href="https://maps.app.goo.gl/5k4Km71JsrfLzo7X6" target="_blank" className="flex items-center justify-center gap-2 text-slate-300 hover:text-amber-500 transition">
          <ShieldCheck className="text-amber-500" />
          <span className="font-semibold">Google Verified Electrician — 4.6 ★</span>
        </a>
      </div>

      {/* Services */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-6 bg-slate-900 rounded-xl shadow-sm border border-slate-800 text-center">
              <s.icon className="mx-auto mb-4 text-amber-500" size={32} />
              <h3 className="text-xl font-semibold">{s.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-slate-950 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by Local Customers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((review, i) => (
              <div key={i} className="bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-800">
                <div className="flex text-amber-500 mb-2 gap-1">{[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}</div>
                <p className="text-slate-300 italic mb-4">"{review.text}"</p>
                <div className="font-semibold text-white">— {review.name}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="https://maps.app.goo.gl/5k4Km71JsrfLzo7X6" className="text-amber-500 font-semibold flex items-center justify-center gap-1 hover:underline">
              Write a Review on Google <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Booking / Quote Form */}
      <section id="booking" className="py-16 px-6">
        <div className="max-w-xl mx-auto bg-slate-900 p-8 rounded-xl shadow-md border border-slate-800">
          <h2 className="text-2xl font-bold mb-2">{formData.requestType === 'quote' ? 'Request a Quote' : 'Schedule Your Service'}</h2>
          <p className="text-slate-400 mb-6 text-sm">{formData.requestType === 'quote' ? "Tell us about your project and we'll send you a free estimate." : "Fill in your details and we'll confirm your booking."}</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-3 mb-2">
              <button type="button" onClick={() => setFormData({...formData, requestType: 'booking'})} className={`flex-1 py-2 rounded-lg font-medium transition ${formData.requestType === 'booking' ? 'bg-amber-500 text-black' : 'bg-slate-800 text-slate-400 hover:text-white'}`}>Book Service</button>
              <button type="button" onClick={() => setFormData({...formData, requestType: 'quote'})} className={`flex-1 py-2 rounded-lg font-medium transition ${formData.requestType === 'quote' ? 'bg-amber-500 text-black' : 'bg-slate-800 text-slate-400 hover:text-white'}`}>Get a Quote</button>
            </div>
            <input type="text" placeholder="Name" className="w-full p-3 bg-black border border-slate-700 rounded-lg text-white" onChange={e => setFormData({...formData, name: e.target.value})} required />
            <input type="tel" placeholder="Phone" className="w-full p-3 bg-black border border-slate-700 rounded-lg text-white" onChange={e => setFormData({...formData, phone: e.target.value})} required />
            <select className="w-full p-3 bg-black border border-slate-700 rounded-lg text-white" onChange={e => setFormData({...formData, service: e.target.value})}>
                <option value="">Select Service</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="emergency">Emergency</option>
            </select>
            <textarea placeholder={formData.requestType === 'quote' ? "Describe your project..." : "Message"} className="w-full p-3 bg-black border border-slate-700 rounded-lg text-white h-32" onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
            <button type="submit" className="w-full bg-amber-500 text-black py-3 rounded-lg font-bold hover:bg-amber-400 transition">{formData.requestType === 'quote' ? 'Send Quote Request' : 'Book Now'}</button>
          </form>
        </div>
      </section>

      <footer className="py-8 text-center border-t border-slate-800 text-slate-500 text-sm">
        <p>R & R Electrical | 064 143 7036</p>
        <p>Pascali St, Durbanville, Cape Town, 7550</p>
      </footer>
    </div>
  );
}
