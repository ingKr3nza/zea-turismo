import AttractionCard from '@/components/cards/AttractionCard';
import Image from 'next/image';
import styles from '@/styles/pages/conoce-zea.module.css';

export default function ConoceZea() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Conoce a Zea</h1>
          <p className={styles.heroSubtitle}>
            Un viaje por la historia, la cultura y la naturaleza del Rinconcito Encantado
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.historyGrid}>
            <div className={styles.historyContent}>
              <h2>Historia de Zea</h2>
              <p>
                Las tierras que hoy conforman el municipio Zea fueron habitadas inicialmente por 
                los indios motilones. La población formal comenzó hacia 1786, cuando se establecieron 
                los primeros colonos atraídos por la fertilidad de sus suelos y el clima privilegiado.
              </p>
              <p>
                El nombre &quot;Zea&quot; honra la memoria del científico y político venezolano Francisco 
                Antonio Zea, aunque también hace referencia al género botánico del maíz y sus 
                parientes silvestres (teosintes), mostrando la profunda conexión agrícola de la región.
              </p>
              <div className={styles.highlightBox}>
                <h3>Datos históricos clave</h3>
                <ul>
                  <li>1786 - Fundación formal del pueblo</li>
                  <li>Habitantantes originales: Indios Motilones</li>
                  <li>Nombrado en honor a Francisco Antonio Zea</li>
                  <li>Conocido como el &quot;Rinconcito Encantado&quot;</li>
                </ul>
              </div>
            </div>
            <div className={styles.historyImage}>
              <Image src="/campo.jpg" width={400} height={400} alt="Historia de Zea" />
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Atractivos Turísticos</h2>
            <p>Descubre los lugares más impresionantes que Zea tiene para ofrecer</p>
          </div>

          <div className={styles.attractionsGrid}>
            <AttractionCard
              name="Pozo Azul"
              location="Aldea Los Giros"
              imageUrl="/pozo_azul.jpg"
              badgeText="Imperdible"
              price="Entrada: $5"
              duration="Todo el día"
              maxPeople={15}
            />
            <AttractionCard
              name="Mirador de Zea"
              location="Parroquia Zea"
              imageUrl="/zea.jpg"
              price="Gratis"
              duration="1-2 horas"
              maxPeople={20}
            />
            <AttractionCard
              name="Recorrido al casco histórico"
              location="Parroquia Zea"
              imageUrl="/iglesia.jpg"
              badgeText="Aventura"
              duration="4 horas"
              maxPeople={8}
            />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Zea en Video</h2>
            <p>Conoce el Rinconcito Encantado a través de este recorrido visual</p>
          </div>

          <div className={styles.videoContainer}>
            <iframe
              src="https://www.youtube.com/embed/nxHH_KbvuWk"
              title="Zea, Mérida - Rinconcito Encantado"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className={`${styles.section} ${styles.cultureSection}`}>
        <div className={styles.container}>
          <div className={styles.cultureGrid}>
            <div className={styles.cultureContent}>
              <h2>Cultura y Tradiciones</h2>
              <p>
                Zea mantiene vivas sus tradiciones a través de festividades religiosas, 
                ferias agrícolas y expresiones culturales que reflejan la identidad andina.
              </p>
              
              <div className={styles.cultureFeatures}>
                <div className={styles.cultureFeature}>
                  <span>🎭</span>
                  <h4>Festivales</h4>
                  <p>Feria del Café en enero, Fiestas Patronales en junio</p>
                </div>
                <div className={styles.cultureFeature}>
                  <span>🍲</span>
                  <h4>Gastronomía</h4>
                  <p>Pisca andina, arepas de trigo, café de altura</p>
                </div>
                <div className={styles.cultureFeature}>
                  <span>🧶</span>
                  <h4>Artesanía</h4>
                  <p>Tejidos de lana, cerámica tradicional</p>
                </div>
                <div className={styles.cultureFeature}>
                  <span>✝</span>
                  <h4>Religión</h4>
                  <p>Subida al niño de la cuchilla, tradicional viacrucis</p>
                </div>
              </div>
            </div>
            
            <div className={styles.historyImage}>
              <Image src="/iglesia.jpg" width={400} height={400} alt="Cultura de Zea" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}