'use client';

import { useState } from 'react';
import styles from '@/styles/components/guide-form.module.css';
import { FiAlertCircle } from 'react-icons/fi';

export default function GuideForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    personas: '',
    comentarios: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.nombre) newErrors.nombre = 'El nombre es requerido';
    if (!formData.email) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.telefono) newErrors.telefono = 'El teléfono es requerido';
    if (!formData.fecha) newErrors.fecha = 'La fecha es requerida';
    if (!formData.personas) newErrors.personas = 'Selecciona el número de personas';

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  if (isSuccess) {
    return (
      <div className={styles.successMessage}>
        <div className={styles.successIcon}>🎉</div>
        <h3 className={styles.successTitle}>¡Solicitud Enviada!</h3>
        <p className={styles.successText}>
          Un guía local se contactará contigo en las próximas 24 horas para organizar tu aventura en Zea.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Solicita tu Guía Local</h2>
      <p className={styles.subtitle}>
        Completa el formulario y un experto en turismo de Zea te contactará para personalizar tu experiencia.
      </p>

      <div className={styles.row}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Nombre completo *</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={`${styles.input} ${errors.nombre ? styles.inputError : ''}`}
            placeholder="Ej: María González"
          />
          {errors.nombre && (
            <div className={styles.errorMessage}>
              <FiAlertCircle /> {errors.nombre}
            </div>
          )}
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            placeholder="maria@email.com"
          />
          {errors.email && (
            <div className={styles.errorMessage}>
              <FiAlertCircle /> {errors.email}
            </div>
          )}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Teléfono *</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className={`${styles.input} ${errors.telefono ? styles.inputError : ''}`}
            placeholder="+58 412 1234567"
          />
          {errors.telefono && (
            <div className={styles.errorMessage}>
              <FiAlertCircle /> {errors.telefono}
            </div>
          )}
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Fecha de visita *</label>
          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            className={`${styles.input} ${errors.fecha ? styles.inputError : ''}`}
          />
          {errors.fecha && (
            <div className={styles.errorMessage}>
              <FiAlertCircle /> {errors.fecha}
            </div>
          )}
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>Número de personas *</label>
        <select
          name="personas"
          value={formData.personas}
          onChange={handleChange}
          className={`${styles.input} ${errors.personas ? styles.inputError : ''}`}
        >
          <option value="">Selecciona...</option>
          <option value="1">1 persona</option>
          <option value="2">2 personas</option>
          <option value="3-5">3-5 personas</option>
          <option value="6-10">6-10 personas</option>
          <option value="10+">Más de 10 personas</option>
        </select>
        {errors.personas && (
          <div className={styles.errorMessage}>
            <FiAlertCircle /> {errors.personas}
          </div>
        )}
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>Comentarios adicionales</label>
        <textarea
          name="comentarios"
          rows={4}
          value={formData.comentarios}
          onChange={handleChange}
          className={styles.input}
          placeholder="Cuéntanos qué lugares te interesan, preferencias especiales, etc."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={styles.submitButton}
      >
        {isSubmitting ? 'Enviando...' : 'Solicitar Guía'}
      </button>
    </form>
  );
}