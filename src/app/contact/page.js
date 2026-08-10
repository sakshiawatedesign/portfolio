'use client';
import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLocationDot, FaBehance, FaLinkedinIn } from 'react-icons/fa6';
import themeColors from '../../lib/theme-colors';
import AnimateOnScroll from '../components/AnimateOnScroll';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                }),
            });

            const data = await response.json();
            
            if (response.ok) {
                setStatus('Message sent successfully! I will get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus(`Failed to send message: ${data.error || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('Failed to send message. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen py-10 px-4 md:px-8 max-w-6xl mx-auto">
            <AnimateOnScroll>
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: themeColors.primaryText }}>
                        Get In Touch
                    </h1>
                    <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
                        Have an exciting project, design collaboration, or career opportunity? Let&apos;s build intuitive and impactful digital experiences together.
                    </p>
                </div>
            </AnimateOnScroll>

            <div className="flex flex-col lg:flex-row gap-10 items-start justify-center">
                {/* Left Contact Info Section */}
                <div className="lg:w-5/12 w-full space-y-6">
                    <AnimateOnScroll delay={100} duration={800}>
                        <div className="bg-gradient-to-br from-[#2c7a7b] to-[#1d5051] text-white p-8 rounded-3xl shadow-xl space-y-6">
                            <h2 className="text-2xl font-bold">Contact Information</h2>
                            <p className="text-white/80 text-sm leading-relaxed">
                                Feel free to reach out directly via email, phone, or connect on Behance and LinkedIn.
                            </p>

                            <div className="space-y-4 pt-2">
                                <a 
                                    href="mailto:sakshiawate31@gmail.com" 
                                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm group"
                                >
                                    <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                                        <FaEnvelope className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/70 font-medium">Email</p>
                                        <p className="text-sm font-semibold text-white break-all">sakshiawate31@gmail.com</p>
                                    </div>
                                </a>

                                <a 
                                    href="tel:+919594482689" 
                                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm group"
                                >
                                    <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                                        <FaPhone className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/70 font-medium">Phone</p>
                                        <p className="text-sm font-semibold text-white">+91 9594482689</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm">
                                    <div className="p-3 bg-white/20 rounded-xl">
                                        <FaLocationDot className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/70 font-medium">Location</p>
                                        <p className="text-sm font-semibold text-white">Thane, Maharashtra, India</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-white/20">
                                <p className="text-xs text-white/70 font-medium mb-3">Portfolio & Socials</p>
                                <div className="flex gap-3">
                                    <a
                                        href="https://www.behance.net"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2.5 bg-white text-gray-900 font-bold rounded-xl text-xs flex items-center gap-2 shadow hover:bg-teal-50 transition-all"
                                    >
                                        <FaBehance className="text-[#0057ff] w-4 h-4" />
                                        <span>Behance</span>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2.5 bg-white text-gray-900 font-bold rounded-xl text-xs flex items-center gap-2 shadow hover:bg-teal-50 transition-all"
                                    >
                                        <FaLinkedinIn className="text-[#0a66c2] w-4 h-4" />
                                        <span>LinkedIn</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>

                {/* Right Form Section */}
                <div className="lg:w-7/12 w-full">
                    <AnimateOnScroll delay={200} duration={800}>
                        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                Send a Message
                            </h2>
                            <p className="text-gray-500 text-xs sm:text-sm mb-6">
                                Fill out the form below and I will respond within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                                        Your Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full p-3.5 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2c7a7b] focus:bg-white text-sm transition-all"
                                        placeholder="e.g. Sarah Jenkins"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                                        Your Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-3.5 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2c7a7b] focus:bg-white text-sm transition-all"
                                        placeholder="sarah@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                                        Message / Project Inquiry
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full p-3.5 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2c7a7b] focus:bg-white text-sm transition-all"
                                        placeholder="Describe your design needs, project scope, or questions..."
                                    />
                                </div>

                                {status && (
                                    <div className={`p-4 rounded-xl text-sm font-medium ${
                                        status.includes('successfully')
                                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                                            : 'bg-red-50 text-red-800 border border-red-200'
                                    }`}>
                                        {status}
                                    </div>
                                )}

                                <div>
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full py-4 px-6 text-white font-bold bg-[#2c7a7b] hover:bg-[#236364] rounded-xl shadow-lg transition-all duration-300 disabled:opacity-50 text-sm flex items-center justify-center gap-2"
                                    >
                                        {isLoading ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                <span>Sending Message...</span>
                                            </>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;