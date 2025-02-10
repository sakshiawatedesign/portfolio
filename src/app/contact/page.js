'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO: Update with your service ID here --> https://dashboard.emailjs.com/
        const serviceId = 'service_m72gv1d';  // these three view in whatsapp private message
        const templateId = 'template_6u9r7zn';
        const publicKey = 'xYo5uX5W2JJkrjjvD';

        emailjs.send(serviceId, templateId, {
            to_name: 'Arun Vishwakarma',
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: 'arunvishwakarma3009@gmail.com'
        }, publicKey)
            .then(() => {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                setStatus('Failed to send message. Please try again.');
                console.error('Email send error:', error);
            });
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row items-start justify-center ">
            <div className="lg:w-1/2 w-full flex justify-center mb-6 lg:mb-0 lg:pr-8 order-2 lg:order-1">
                <img
                    src="https://img.freepik.com/free-vector/customer-support-flat-design-illustration_23-2148889374.jpg?t=st=1738602740~exp=1738606340~hmac=af117a22cb7c3688ca14602de1930fe0f00c5a611b5006eba0d3d5548cf7c02b&w=740"
                    alt="Contact Us"
                    className="w-full max-w-lg rounded-lg"
                />
            </div>

            {/* Right Form Section */}
            <div className="lg:w-1/2 w-full bg-white rounded-xl shadow-xl p-8 order-1 lg:order-2">
                <h2 className="text-center text-3xl font-bold text-[#2c7a7b] mb-6">
                    Contact Me
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2b6cb0] focus:border-[#2b6cb0]"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2b6cb0] focus:border-[#2b6cb0]"
                            placeholder="Your Email"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2b6cb0] focus:border-[#2b6cb0]"
                            placeholder="Hey there! Let's connect"
                        />
                    </div>
                    {status && (
                        <div className={`text-center ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                            {status}
                        </div>
                    )}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 px-6 text-white bg-[#2c7a7b] rounded-lg shadow-md hover:bg-[#265f62] transition duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
