'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/patrimonio-tradiciones.module.css';

interface Category {
  id: string;
  title: string;
  icon: string;
  items: {
    title: string;
    description: string;
    image?: string;
  }[];
}

const categories: Category[] = [
  {
    id: 'lugares',
    title: 'Lugares Emblemáticos',
    icon: '/icon/building.svg',
    items: [
      {
        title: 'Centro Cultural',
        description: 'Este centro cultural fue fundado el 15 de abril de 1994, en cuyo acto hubo presentaciones de grupos culturales de la comunidad y pueblos circunvecinos. En sus espacios se desempeñan diferentes agrupaciones culturales de la entidad, entre ellas los grupos de teatro Mi Zedeñita y Sueño Andino. También brinda albergue a la Escuela de Música Francisco María Araque y a la filarmónica Aida Contreras. En este centro cultural funciona la Biblioteca Emiro Duque Sánchez, coordinada por el Ibime, al igual que en sus salas se hacen exposiciones de las escuelas del municipio, dictan charlas de los consejos comunales, cursos, talleres y otros eventos.',
        image: '/images/lugares/centro-cultural.jpg'
      },
      {
        title: 'Centro Social 19 de Abril',
        description: 'El Centro Social 19 de Abril fue fundado el 19 de abril de 1924, con el propósito de encauzar las manifestaciones culturales de sus pobladores. En sus amplios espacios se han desarrollado actividades relacionadas con el progreso cultural de Zea, como fiestas bailables, donde la mayoría de las orquestas de renombre nacional e internacional como Los Melódicos, Los Solistas, Súper Combo, Los Tropicales y Oscar D´León. También se realizan eventos deportivos y recreativos, como torneos de bolas criollas, dominó y billar. Ha sido la primera institución cultural de Zea, fundada en la segunda década del siglo XX.',
        image: '/images/lugares/centro-social.jpg'
      },
      {
        title: 'Plaza Bolívar',
        description: 'Inaugurada el 15 de diciembre de 1950, con motivo de cumplirse el primer centenario de la elevación del caserío a la categoría de parroquia civil. Se trata de una vistosa plaza con bancas, áreas verdes y una glorieta que forma parte del atractivo turístico admirado por los habitantes y turistas. Fue remodelada en su totalidad el 17 de diciembre de 2001, con un nuevo sistema eléctrico y una fuente de agua con ornamentación de 26 funciones, entre juego de luces y chorros de agua.',
        image: '/images/lugares/plaza-bolivar.jpg'
      },
      {
        title: 'Plaza los Primeros Pobladores',
        description: 'Inaugurada el 27 de abril de 1996, a dos días de haberse cumplido 210 años de la posesión legal de las tierras de Murmuquena. Tiene forma triangular, con tres estatuas pedestres que rememoran las figuras de los tres labriegos: Felipe Márquez, Matías y Juan Antonio Escalante, con ropas de campesinos, sombrero de cogollos y alpargatas. Es un lugar de tradición histórica, un espacio en el cual se realizan concentraciones, fiestas y celebraciones del municipio.',
        image: '/images/lugares/plaza-primeros-pobladores.jpg'
      },
      {
        title: 'Parque Domingo Adriani',
        description: 'Parque ubicado en los terrenos donados por Olimpia de Adriani, en ocasión del Primer Retorno a Zea en septiembre de 1969. Fue construido por el ejecutivo del estado Mérida e inaugurado el 20 de diciembre de 1972. En el interior consta de una cancha múltiple para voleibol, básquetbol y fútbol de salón, una cancha de bolas criollas, un parque para niños que incluye columpios, toboganes y otros entretenimientos, dos áreas recreativas, camineras, áreas verdes y una tarima elevada.',
        image: '/images/lugares/parque-adriani.jpg'
      }
    ]
  },
  {
    id: 'tradiciones',
    title: 'Tradiciones',
    icon: '/icon/tradition.svg',
    items: [
      {
        title: 'Danzas Murmuquena',
        description: 'El grupo Danzas Murmuquema fue creado por iniciativa de la junta directiva del Centro Social 19 de Abril, según acta del 1º de octubre de 1990. Se inició con 60 niños bajo la instrucción de Rodolfo Guerrero y Jesús Cedeño en las clases de danza, música y coreografía. Durante su existencia el grupo de danza ha forjado una reconocida trayectoria en la comunidad y en presentaciones en la capital del estado, así como en otras regiones como Táchira, Barinas, Portuguesa, Lara, Falcón y Monagas, entre otras.',
        image: '/images/lugares/danza.jpg'
      },
      {
        title: 'Leyenda del Oso de la Montaña',
        description: 'Según cuenta la tradición, existió una época en que la gente de la comunidad se veía afectada y atemorizada por un oso enorme que bajaba de la montaña que se ve desde cualquiera de las calles del poblado. Dicho animal llegaba a las calles a media noche y perseguía a las personas que conseguía hasta que entraban en las casas a resguardarse. Hubo un período en el cual el oso no se apareció, por lo que los habitantes mostraron curiosidad y un grupo de ellos subió a la montaña a buscarlo, pero sin resultados favorables. Es una historia muy difundida entre los pobladores de Zea.',
        image: '/images/lugares/oso.jpg'
      },
      {
        title: 'Cabalgatas',
        description: 'Las Cabalgatas de Zea fueron iniciativa de Idelfonso Romero, en la que se agrupan jinetes de ambos sexos de la región andina y sur del lago de Maracaibo, norte del estado Táchira, Mérida, Maracay, pueblos circunvecinos como Santa Cruz de Mora, Tovar, Bailadores y La Azulita. Se iniciaron en 1986, con el propósito de concentrar jinetes de las diferentes asociaciones conocedoras de esta práctica, siendo la más concurrida la de 1987, en homenaje a Chucho Méndez.',
        image: '/images/lugares/cabalgatas.jpeg'
      },
      {
        title: 'Carnaval',
        description: 'Esta tradición comenzó a consolidarse entre las décadas de 1960 a 1970. En la actualidad durante estas fiestas se realizan desfiles de carrozas en las que participan todas las instituciones educativas del municipio, junto con la elección de la reina. El segundo día de fiesta se celebran competencias como el maratón del caucho, y el día martes más de cuatrocientas personas recorren el pueblo para festejar el tradicional Día del Agua.',
        image: '/images/lugares/carnaval.jpg'
      }
    ]
  },
  {
    id: 'patrimonio',
    title: 'Patrimonio Municipal',
    icon: '/icon/heritage.svg',
    items: [
      {
        title: 'Documentos de los Orígenes de Zea',
        description: 'Son documentos escritos con letra bastardilla de fines del siglo XVIII. Aparecieron reseñados por primera vez en el periódico El Impulso del 10 de octubre de 1925. Los originales se encuentran en buen estado, resguardados dentro de un sarcófago de cristal en la sede de la alcaldía del municipio.',
        image: '/images/lugares/documentos.jpg'
      },
      {
        title: 'Casa Natal de Alberto Adriani',
        description: 'Fue una gran casa colonial donde vivió el ilustre personaje zedeño Alberto Adriani. La edificación fue construida a finales del siglo XIX. Su espacio se disponía en planta rectangular, con un esquema de patio central alrededor del cual se distribuyen los espacios sociales y privados de la casa. Fue a inicios del siglo XX el centro del desarrollo económico del sector, pues en ella funcionó el bufete de trabajo del doctor Alberto Adriani.',
        image: '/images/lugares/casa-adriani.jpg'
      },
      {
        title: 'Monumento al Carro de La Roca',
        description: 'El carro de la roca fue una iniciativa del profesor Omar Rosales Márquez, siendo un modelo de la década de 1950 que reposa sobre un pedestal desde el 19 de septiembre de 1969. La idea de esta escultura fue sensibilizar a la población para evitar en lo posible los accidentes automovilísticos. En la parte posterior del vehículo se encuentra un poema que dice: "Volar no cuesta nada, Amar es retornar, Tu vida es más valiosa, Si vuelves a tu hogar".',
        image: '/images/lugares/carro-roca.jpg'
      },
      {
        title: 'Cruz de Misión',
        description: 'En el municipio Zea se encuentran varias cruces misioneras que fueron erigidas con motivo de las visitas de los padres redentoristas a las comunidades, con el propósito de evangelizar. La mayoría de las cruces de misión tienen punta ojival en cada uno de los extremos y una altura de 6 metros aproximadamente, elaboradas en cemento armado. En el casco urbano de Zea hay una en la entrada sur, en el sitio de Palmira, construida el 14 de septiembre de 1960.',
        image: '/images/lugares/cruz-mision.jpg'
      }
    ]
  },
  {
    id: 'iglesia',
    title: 'Arquitectura Religiosa',
    icon: '/icon/church.svg',
    items: [
      {
        title: 'Iglesia Nuestra Señora de las Mercedes',
        description: 'La iglesia Nuestra Señora de las Mercedes es una importante casa religiosa construida luego de la destrucción de los dos primeros templos. La actual se culminó entre 1929 y 1940. Su planta rectangular es de 52,5 metros de longitud por 15,1 metros de ancho. Presenta tres naves separadas por columnas, siete de cada lado que se unen con arcos en la parte superior. Las paredes poseen ventanas con vitrales de imágenes de diversos santos. Sobre el área del presbiterio se ubica una cúpula en forma de ½ circunferencia.',
        image: '/images/lugares/iglesia-mercedes.jpeg'
      },
      {
        title: 'Santuario Santo Niño de La Cuchilla',
        description: 'La Capilla del Santo Niño de La Cuchilla fue bendecida el 30 de diciembre de 1950. En 1995 la capilla fue remodelada y elevada a la categoría de santuario, cuando se reconstruyeron sus espacios aledaños y el camino que conduce hasta el cerro más alto. El nuevo santuario fue bendecido el 27 de diciembre de 1995. Es un lugar de culto cuya forma arquitectónica se desarrolla a partir de la liturgia, con amplias áreas verdes y bancos de hierro forjado.',
        image: '/images/lugares/santuario-cuchilla.JPG'
      },
      {
        title: 'Santo Niño de La Cuchilla',
        description: 'La imagen del Santo Niño de La Cuchilla hecha de mármol traslúcido, representa al Divino Niño recién nacido recostado en la fosa de un sepulcro con el mundo frente a su cuerpecito y la cabeza reclinada sobre el brazo derecho en actitud durmiente con una calavera por almohada, mide 9 centímetros. Es bajado cada 31 de diciembre hasta el sitio Pata de Gallina, para la tradicional romería que se hace por las calles del centro poblado.',
        image: '/images/lugares/santo-nino.jpg'
      }
    ]
  }
];

export default function PatrimonioTradiciones() {
  const [activeCategory, setActiveCategory] = useState('lugares');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const currentCategoryData = categories.find(c => c.id === activeCategory);
  const items = currentCategoryData?.items || [];
  const totalItems = items.length;

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % totalItems);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-play cada 8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex, totalItems]);

  return (
    <div className={styles.patrimonioContainer}>
      <div className={styles.sectionHeader}>
        <h2>Patrimonio y Tradiciones</h2>
        <p>Descubre la riqueza cultural, histórica y religiosa de Zea</p>
      </div>

      {/* Tabs de categorías */}
      <div className={styles.tabsContainer}>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setActiveCategory(category.id);
              setCurrentIndex(0);
            }}
            className={`${styles.tabButton} ${activeCategory === category.id ? styles.active : ''}`}
          >
            <Image src={category.icon} alt={category.title} width={24} height={24} />
            <span>{category.title}</span>
          </button>
        ))}
      </div>

      {/* Slider de contenido */}
      {items.length > 0 && (
        <div className={styles.sliderContainer}>
          <button onClick={goToPrev} className={`${styles.navButton} ${styles.navPrev}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className={styles.sliderWrapper}>
            <div 
              ref={sliderRef}
              className={styles.sliderTrack}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {items.map((item, index) => (
                <div key={index} className={styles.slide}>
                  <div className={styles.slideImage}>
                    <Image 
                      src={item.image || '/images/placeholder.jpg'} 
                      alt={item.title}
                      fill
                      className={styles.image}
                    />
                    <div className={styles.imageOverlay}></div>
                  </div>
                  <div className={styles.slideContent}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={goToNext} className={`${styles.navButton} ${styles.navNext}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Indicadores */}
          <div className={styles.indicators}>
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}