/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import FormModal from './FormModal';
import Social from './Social';
import { Mail, User, MessageSquare, FileText, Send } from 'lucide-react';

const ContactForm = () => {
    const [inputs, setInputs] = useState({
        name: '',
        subject: '',
        email: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [requiredFieldError, setRequiredFieldError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [focused, setFocused] = useState(null);

    const isDisabled = !(inputs.name && inputs.email && inputs.message);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showModal]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
        
        // Clear error when user types
        if (value.trim() !== '') {
            setRequiredFieldError('');
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();
        
        // Form validation
        if (isDisabled) {
            if (!inputs.name) {
                setRequiredFieldError('Name is a required field.');
            } else if (!inputs.email) {
                setRequiredFieldError('Email address is a required field.');
            } else if (!inputs.message) {
                setRequiredFieldError('Message is a required field.');
            }
            return;
        }
        
        emailjs
            .sendForm(
                'service_4yu24wb',
                'contact_form',
                e.target,
                'arI1lbCnWE-Tlm6HA',
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setIsSubmitted(true);
                    handleOpenModal();
                    setInputs({ name: '', email: '', subject: '', message: '' });
                },
                (error) => {
                    console.log(error.text);
                    setRequiredFieldError('Failed to send message. Please try again.');
                },
            );
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setFocused(null);
        
        if (name === 'name' && value === '') {
            setRequiredFieldError('Name is a required field.');
        } else if (name === 'email' && value === '') {
            setRequiredFieldError('Email address is a required field.');
        } else if (name === 'message' && value === '') {
            setRequiredFieldError('Message is a required field.');
        } else {
            setRequiredFieldError('');
        }
    };

    const handleFocus = (field) => {
        setFocused(field);
        setRequiredFieldError('');
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

  
    const InputField = ({ type, name, icon, placeholder, value, multiline = false, required = false }) => (
        <div className={`mb-6 relative group ${focused === name ? 'focused' : ''}`}>
            <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 group-hover:shadow-md">
                <div 
                    className={`
                        flex items-center justify-center p-3 text-gray-400
                        ${focused === name ? 'text-rose-500' : 'group-hover:text-lavender-500'}
                        transition-colors duration-300
                    `}
                >
                    {icon}
                </div>
                
                {multiline ? (
                    <textarea
                        id={name}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        placeholder={placeholder}
                        onBlur={handleBlur}
                        onFocus={() => handleFocus(name)}
                        rows="4"
                        required={required}
                        className="w-full px-3 py-3 bg-transparent border-none focus:outline-none resize-none"
                    />
                ) : (
                    <input
                        type={type}
                        id={name}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        placeholder={placeholder}
                        onBlur={handleBlur}
                        onFocus={() => handleFocus(name)}
                        required={required}
                        className="w-full px-3 py-3 bg-transparent border-none focus:outline-none"
                    />
                )}
            </div>
            {required && focused === name && (
                <span className="text-xs text-rose-500 absolute -bottom-5 left-0">
                    * Required field
                </span>
            )}
        </div>
    );

    return (
        <section 
            className="py-24 relative bg-gradient-to-b from-gray-50 to-lavender-light/30" 
            id="Contact"
        >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-32 bg-rose-light/50 -skew-y-2 transform-gpu" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-lavender-light/50 skew-y-2 transform-gpu" />
            
            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-lavender-deep to-rose-deep bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                        Interested in working together? I'd love to hear from you!
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-8 items-start">
                    {/* Contact Info & Social Side */}
                    <div className="md:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="h-24 bg-gradient-to-r from-lavender-deep to-rose-deep flex items-center justify-center">
                            <h3 className="text-2xl font-semibold text-white">Let's Connect</h3>
                        </div>
                        
                        <div className="p-6">
                            <Social />
                            
                            <div className="mt-8 space-y-4">
                                <p className="text-gray-600">
                                    Feel free to reach out with any questions or opportunities. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Contact Form */}
                    <div className="md:col-span-3 bg-white rounded-2xl shadow-lg p-8 relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-lavender-light rounded-bl-full -z-10 opacity-50" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-rose-light rounded-tr-full -z-10 opacity-50" />
                        
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Me a Message</h3>
                        
                        <form onSubmit={sendEmail}>
                            <input 
                                type="text"
                                name="name"
                                icon={<User size={20} />}
                                placeholder="Your Name *"
                                value={inputs.name}
                                required={true}
                                  onChange={handleChange}
                            />
                            
                            <input 
                                type="email"
                                name="email"
                                icon={<Mail size={20} />}
                                placeholder="Your Email *"
                                value={inputs.email}
                                required={true}
                                  onChange={handleChange}
                            />
                            
                            <input 
                                type="text"
                                name="subject"
                                icon={<FileText size={20} />}
                                placeholder="Subject (Optional)"
                                value={inputs.subject}
                                  onChange={handleChange}
                            />
                            
                            <input 
                                name="message"
                                icon={<MessageSquare size={20} />}
                                placeholder="Your Message *"
                                value={inputs.message}
                              onChange={handleChange}
                                required={true}
                            />
                            
                            {requiredFieldError && (
                                <div className="mb-6 px-4 py-3 bg-rose-50 border-l-4 border-rose-500 text-rose-700 rounded">
                                    <p>{requiredFieldError}</p>
                                </div>
                            )}
                            
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className={`
                                        group relative overflow-hidden rounded-lg px-6 py-3 
                                        font-medium transition-all duration-300
                                        ${isDisabled 
                                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-lavender-deep to-rose-deep text-white shadow-md hover:shadow-lg transform hover:-translate-y-1'
                                        }
                                    `}
                                    disabled={isDisabled}
                                >
                                    <span className="relative flex items-center gap-2">
                                        Send Message
                                        <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            <FormModal
                show={showModal}
                handleClose={handleCloseModal}
                setShowModal={setShowModal}
            />
        </section>
    );
};


export default ContactForm;