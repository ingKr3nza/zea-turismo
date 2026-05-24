import AttractionCard from '@/components/cards/AttractionCard';
import Image from 'next/image';
import styles from '@/styles/pages/conoce-zea.module.css';
import VerticalImageSlider from '@/components/VerticalImageSlider';
import PatrimonioTradiciones from '@/components/PatrimonioTradiciones';

export default function ConoceZea() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroOverlay}></div>
          <Image 
            src="/images/hero-conocer.jpg" 
            alt="Zea paisaje" 
            fill
            className={styles.heroImage}
            priority
            sizes="100vw"
          />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Municipio Zea • Mérida • Venezuela</span>
          <h1 className={styles.heroTitle}>
            Conoce a <span className={styles.heroHighlight}>Zea</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Un viaje por la historia, la cultura y la naturaleza del Rinconcito Encantado
          </p>
          <div className={styles.heroButtons}>
            <a href="#history" className={styles.heroButtonPrimary}>
              Descubrir historia
            </a>
            <a href="/como-llegar" className={styles.heroButtonSecondary}>
              ¿Cómo llegar?
            </a>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel}></div>
          </div>
          <span className={styles.scrollText}>Desliza para explorar</span>
        </div>
      </section>

      {/* History Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.historyGrid}>
            <div className={styles.historyContent}>
              <h2>Historia y Orígenes</h2>
              <p>
                Los orígenes del municipio Zea se remontan a mediados del siglo XVIII, cuando los parajes de 
                Murmuquena (como se conocía inicialmente la zona), fueron explorados por funcionarios provenientes 
                de la ciudad de La Grita. La primera mención documentada de este territorio data de 1765, donde se 
                describía como una región bajo jurisdicción de la ciudad Espíritu Santo de la Grita, habitada por 
                indígenas hostiles que impedían el paso hacia el Lago de Maracaibo.
              </p>
              <p>
                El 25 de abril de 1786, el alcalde de La Grita, Don Bernardo Fernández de Mora, posesionó oficialmente 
                las tierras a los primeros colonos en un acto que constituye el primer documento oficial conservado 
                sobre Murmuquena, consolidándose así como el hito fundacional de la historia local.
              </p>
              <p>
                El nombre &quot;Zea&quot; honra la memoria del científico y político venezolano Francisco Antonio Zea, 
                aunque también hace referencia al género botánico del maíz y sus parientes silvestres (teosintes), 
                mostrando la profunda conexión agrícola de la región.
              </p>
              <div className={styles.highlightBox}>
                <h3>Datos históricos clave</h3>
                <ul>
                  <li>1786 - Fundación formal del pueblo</li>
                  <li>1850 - Creación de la Parroquia Francisco Antonio Zea</li>
                  <li>1992 - Consolidación como municipio autónomo</li>
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

      {/* Geography Section */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Características Geográficas</h2>
            <p>Ubicación, relieve y clima del municipio Zea</p>
          </div>

          <div className={styles.geographyGrid}>
            <div className={styles.geographyContent}>
              <p>
                El municipio Zea está ubicado en la parte sur occidental del estado Mérida. Posee una extensión 
                aproximada de 130 Km², a una altura general de 906 m.s.n.m. Se encuentra dividido en dos parroquias: 
                Caño El Tigre (38Km²) y la parroquia Capital Zea (92 Km²).
              </p>
              <p>
                Presenta una temperatura media anual que supera los 22 ºC y precipitaciones anuales de 1390mm. 
                Los principales cursos de agua son los ríos Guaruríes y Escalante.
              </p>
              <div className={styles.geographyFeatures}>
                <div className={styles.geographyFeature}>
                  <div className={styles.geographyFeatureIcon}>
                    <Image src="/icon/mountain.svg" alt="Montaña" width={50} height={50} />
                  </div>
                  <div>
                    <h4>Zona Alta</h4>
                    <p>Entre 1700 - 1000 m.s.n.m, páramo de Mariño</p>
                  </div>
                </div>
                <div className={styles.geographyFeature}>
                  <div className={styles.geographyFeatureIcon}>
                    <Image src="/icon/park.svg" alt="Piedemonte" width={50} height={50} />
                  </div>
                  <div>
                    <h4>Sector Medio</h4>
                    <p>Entre 1000 - 500 m.s.n.m, más de 7000 hectáreas</p>
                  </div>
                </div>
                <div className={styles.geographyFeature}>
                  <div className={styles.geographyFeatureIcon}>
                    <Image src="/icon/agriculture.svg" alt="Tierra Llana" width={50} height={50} />
                  </div>
                  <div>
                    <h4>Zona Baja</h4>
                    <p>Entre 500 - 100 m.s.n.m, parroquia Caño El Tigre</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.geographyImage}>
              <Image src="/images/mirador2.jpg" width={600} height={400} alt="Paisaje de Zea" />
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className={styles.section}>
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

      {/* Symbols Section */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Símbolos Municipales</h2>
            <p>Bandera, escudo e himno que representan la identidad de Zea</p>
          </div>

          <div className={styles.symbolsGrid}>
            <div className={styles.symbolCard}>
              <div className={styles.symbolIcon}>
                <Image src="/icon/flag.svg" alt="Bandera" width={48} height={48} />
              </div>
              <h3>Bandera</h3>
              <p>Tres franjas horizontales: azul (espacio aéreo), blanco (nobleza), rojo (riqueza del café).</p>
            </div>
            <div className={styles.symbolCard}>
              <div className={styles.symbolIcon}>
                <Image src="/icon/shield.svg" alt="Escudo" width={48} height={48} />
              </div>
              <h3>Escudo</h3>
              <p>Dos cuarteles superiores y uno inferior, con ramas de café y caña de azúcar.</p>
            </div>
            <div className={styles.symbolCard}>
              <div className={styles.symbolIcon}>
                <Image src="/icon/music.svg" alt="Himno" width={48} height={48} />
              </div>
              <h3>Himno</h3>
              <p>&ldquo;Esta es la tierra bendita de cafetales en flor...&ldquo;</p>
            </div>
          </div>
        </div>
      </section>
      <PatrimonioTradiciones />
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
                  <div className={styles.cultureFeatureIcon}>
                    <Image src="/icon/calendar.svg" alt="Festivales" width={32} height={32} />
                  </div>
                  <h4>Festivales</h4>
                  <p>Feria del Café en enero, Fiestas Patronales en junio</p>
                </div>
                <div className={styles.cultureFeature}>
                  <div className={styles.cultureFeatureIcon}>
                    <Image src="/icon/food.svg" alt="Gastronomía" width={32} height={32} />
                  </div>
                  <h4>Gastronomía</h4>
                  <p>Pisca andina, arepas de trigo, café de altura</p>
                </div>
                <div className={styles.cultureFeature}>
                  <div className={styles.cultureFeatureIcon}>
                    <Image src="/icon/craft.svg" alt="Artesanía" width={32} height={32} />
                  </div>
                  <h4>Artesanía</h4>
                  <p>Tejidos de lana, cerámica tradicional</p>
                </div>
                <div className={styles.cultureFeature}>
                  <div className={styles.cultureFeatureIcon}>
                    <Image src="/icon/church.svg" alt="Religión" width={32} height={32} />
                  </div>
                  <h4>Religión</h4>
                  <p>Bajada del Santo Niño de la Cuchilla (31 dic - 6 ene)</p>
                </div>
              </div>
            </div>
            
            <div className={styles.cultureImage}>
              <VerticalImageSlider 
                images={[
                  '/images/cultura/1.jpg',
                  '/images/cultura/2.jpg',
                  '/images/cultura/3.jpg',
                  '/images/cultura/4.jpg',
                  '/images/cultura/5.jpg',
                  '/images/cultura/6.JPG',
                  '/images/cultura/7.jpg'
                ]}
                alt="Cultura de Zea"
                interval={5000}
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaText}>
              <span className={styles.ctaBadge}>¿Listo para la aventura?</span>
              <h2>Visita Zea</h2>
              <p>
                Descubre por ti mismo la magia del Rinconcito Encantado. 
                Te esperamos con los brazos abiertos para que vivas una experiencia 
                inolvidable entre montañas, café y tradiciones.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/como-llegar" className={styles.ctaButtonPrimary}>
                  ¿Cómo llegar?
                </a>
                <a href="/solicita-guia" className={styles.ctaButtonSecondary}>
                  Solicitar un guía
                </a>
              </div>
            </div>
            <div className={styles.ctaImage}>
              <Image 
                src="/images/cultura/1.jpg" 
                width={400} 
                height={300} 
                alt="Visita Zea"
                className={styles.ctaImg}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}