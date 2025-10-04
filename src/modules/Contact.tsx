import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "marco.dev@email.com",
      link: "mailto:marco.dev@email.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      value: "+52 55 1234 5678",
      link: "tel:+525512345678"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      value: "Ciudad de México, México",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/marco",
      color: "hover:text-mono-white"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/marco",
      color: "hover:text-blue-400"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      url: "https://twitter.com/marco_dev",
      color: "hover:text-blue-400"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      name: "Discord",
      url: "https://discord.com/users/marco",
      color: "hover:text-purple-400"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simular envío del formulario
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // En una aplicación real, aquí enviarías los datos a tu backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <section id="contact" className="min-h-screen bg-mono-800 py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-mono-white mb-4">
            Contáctame
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-mono-400 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-mono-200 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? ¿Quieres colaborar? ¡Me encantaría escuchar de ti!
          </p>
        </div>

        <div className="grid xl:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-mono-white mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-mono-700/50 p-3 rounded-lg border border-mono-600 text-mono-400">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-mono-300 text-sm font-medium">{info.title}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-mono-white hover:text-mono-200 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-mono-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-mono-white mb-4">
                Sígueme en Redes Sociales
              </h4>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-mono-700/50 p-3 rounded-lg border border-mono-600 text-mono-400 transition-all duration-200 hover:border-mono-500 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-mono-700/30 p-6 rounded-xl border border-mono-600">
              <h4 className="text-lg font-semibold text-mono-white mb-3">
                ¿Prefieres una llamada?
              </h4>
              <p className="text-mono-200 mb-4 text-sm">
                Si prefieres hablar directamente, no dudes en programar una videollamada. 
                Siempre es genial conocer nuevas personas y proyectos.
              </p>
              <a
                href="https://calendly.com/marco-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-mono-600 hover:bg-mono-500 text-mono-white px-4 py-2 rounded-lg text-sm transition-all duration-200 inline-flex items-center gap-2"
              >
                <Phone size={16} />
                Programar Llamada
              </a>
            </div>

            {/* Availability */}
            <div className="bg-mono-700/30 p-6 rounded-xl border border-mono-600">
              <h4 className="text-lg font-semibold text-mono-white mb-3">
                Disponibilidad
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-mono-300">Respuesta a emails:</span>
                  <span className="text-mono-white">24-48 horas</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-mono-300">Llamadas/Reuniones:</span>
                  <span className="text-mono-white">Lun-Vie 9AM-6PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-mono-300">Zona horaria:</span>
                  <span className="text-mono-white">GMT-6 (México)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-first xl:order-last">
            <h3 className="text-xl sm:text-2xl font-semibold text-mono-white mb-6">
              Envíame un Mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-mono-200 text-sm font-medium mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-mono-700/50 border border-mono-600 rounded-lg px-4 py-3 text-mono-white placeholder-mono-400 focus:border-mono-500 focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-mono-200 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-mono-700/50 border border-mono-600 rounded-lg px-4 py-3 text-mono-white placeholder-mono-400 focus:border-mono-500 focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-mono-200 text-sm font-medium mb-2">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-mono-700/50 border border-mono-600 rounded-lg px-4 py-3 text-mono-white placeholder-mono-400 focus:border-mono-500 focus:outline-none transition-colors"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-mono-200 text-sm font-medium mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-mono-700/50 border border-mono-600 rounded-lg px-4 py-3 text-mono-white placeholder-mono-400 focus:border-mono-500 focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                />
              </div>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <div className="bg-green-900/20 border border-green-700 rounded-lg p-4">
                  <p className="text-green-400 text-sm">
                    ✓ ¡Mensaje enviado exitosamente! Te responderé pronto.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-900/20 border border-red-700 rounded-lg p-4">
                  <p className="text-red-400 text-sm">
                    ✗ Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                  isFormValid && !isSubmitting
                    ? 'bg-mono-600 hover:bg-mono-500 text-mono-white'
                    : 'bg-mono-700 text-mono-400 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-mono-400 border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>

            <p className="text-mono-400 text-xs mt-4 text-center">
              * Campos obligatorios. Tu información será tratada con confidencialidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;