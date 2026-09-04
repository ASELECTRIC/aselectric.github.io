<script setup>
import SliderHome from '@/components/common/home/HomeSlider.vue';
import Carrousel from '@/components/ui/carrousel/Carrousel.vue';

const solutionImages = [
  { id: 1, src: '/src/assets/images/home/solutions/solution1.jpeg' },
  { id: 2, src: '/src/assets/images/home/solutions/solution2.jpeg' },
  { id: 3, src: '/src/assets/images/home/solutions/solution3.jpeg' },
  { id: 4, src: '/src/assets/images/home/solutions/solution4.jpeg' }
];

</script>
<template>
  <SliderHome />
  <section class="w-full py-8 container mt-30">
    <h1 class="text-5xl text-red-500 text-center font-bold">¿Qué ofrecemos?</h1>
    <br><br>
    <!-- Tarjetas con las palabras claves que definen nuestra empresa -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      <!-- Tarjeta 1 -->
      <div class="card bg-base-100 shadow-xl border border-base-200">
        <div class="card-body">
          <div class="text-3xl mb-2">
            <img src="/src/assets/svg/phone.svg" alt="Icono de teléfono" class="w-8 h-8">
          </div>
          <h2 class="card-title text-primary">Conductividad</h2>
          <p>Con nuestra APP telemática puede tener el control de sus instalaciones ahorrando tiempo y recursos.</p>
        </div>
      </div>

      <!-- Tarjeta 2 -->
      <div class="card bg-base-100 shadow-xl border border-base-200">
        <div class="card-body">
          <div class="text-3xl mb-2">
            <img src="/src/assets/svg/security.svg" alt="Icono de balanza" class="w-8 h-8">
          </div>
          <h2 class="card-title text-secondary">Estabilidad</h2>
          <p>Nuestros equipos proporcionan estabilidad y garantía en todos los sistemas que quiera controlar de forma
            sencilla y segura.</p>
        </div>
      </div>

      <!-- Tarjeta 3 -->
      <div class="card bg-base-100 shadow-xl border border-base-200">
        <div class="card-body">
          <div class="text-3xl mb-2">
            <img src="/src/assets/svg/tools.svg" alt="Icono de eficiencia" class="w-8 h-8">
          </div>
          <h2 class="card-title text-accent">Eficiencia</h2>
          <p>Aumente eficiencia y rentabilidad en sus instalaciones, aumente la productividad. Manténgase informado.</p>
        </div>
      </div>
    </div>
    <br>
    <p class="py-6 text-base md:text-lg leading-relaxed text-center text-base-content/80">
      As Electric dispone de una amplia gama de productos electrónicos y eléctricos para satisfacer
      necesidades y
      soluciones en el sector del automatismo tales como; arrancadores progresivos analógicos y digitales,
      aparamenta industrial, electrónica para control de sistemas y motores, etc.
    </p>
    <br><br>
    <!-- Div de una explicación acerca de lo que ofrece la empresa -->
    <div class="bg-base-200 py-16 px-4 md:px-8">
      <div class="max-w-6xl mx-auto flex flex-col gap-16 md:gap-24">
        <!-- Segunda Sección: Nuestras Soluciones (Imagen a la izquierda en escritorio) -->
        <div class="bg-base-200">
          <div class="hero-content p-0 flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full">
            <div class="flex-1 flex justify-center lg:justify-start w-full">
              <Carrousel :slides="solutionImages" />
            </div>
            <div class="flex-1 text-center lg:text-left">
              <h1 class="text-4xl md:text-5xl font-bold text-red-500">Nuestras Soluciones</h1>
              <p class="py-6 text-base md:text-lg leading-relaxed text-base-content/80">
                Bombeo solar, bombeo normal, grupos de presión, residuales, control Pivot… y diseños personalizados para
                cualquier necesidad del sector.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Nuestro software de gestión-->
    <div class="mt-30">
      <div>
        <h1 class="text-4xl md:text-5xl font-bold text-red-500 text-center">Nuestro Software de Gestión</h1>
        <h2 class="text-2xl md:text-3xl font-semibold text-center text-base-content/80">
          Panel de control para instaladores, app y dispositivos hardware
        </h2>
        <br>
        <p class="text-center">
          Nuestra APP de control telemático proporciona la diferencia a la hora de realizar un control e Información
          sobre
          las instalaciones realizadas con nuestros sistemas aumentando la productividad y rentabilidad. La conectividad
          puede ser GPRS 4G o WIFI.
          <br><br>
          Disponga de un mapa de todas sus
          Instalaciones con el localizador GPS incorporado. Facilite a su cliente un servicio de información y control
          de
          su instalación.
        </p>
      </div>
      <div class="mt-20">
        <h1 class="text-red-500 text-3xl text-center font-bold">
          Comunicarse con la máquina o con las máquinas de tu cliente (instalador)
        </h1>
        <br>
        <p class="text-center">
          Nuestro conjunto de Software, controlado por nuestra app, permite ver datos y ejecutar acciones de gran
          utilidad por su carácter remoto. La app funciona en Android así como en IOS.
          Los niveles de jerarquía permiten tener un control restringido al cliente final y un control absoluto al
          instalador, consiguiendo un perfecto mantenimiento de cada máquina.<br>
          Control remoto de máquinas
        </p>
      </div>
      <div class="mt-20">
        <h1 class="text-red-500 text-3xl text-center font-bold">
          Nuestro soporte técnico y políticas de postventa
        </h1>
        <br>
        <p class="text-center">
          Disponemos de un equipo técnico y humano para realizar todo tipo de aplicaciones, realizando diseños SCADA,
          ofreciendo montajes adaptados y personalizados. Nuestras soluciones son inmediatas y eficaces.
          5000
          Más de cinco mil clientes contentos están utilizando nuestros sistemas
          100%
          de satisfacción de nuestros clientes con nuestros productos
        </p>
      </div>
    </div>
  </section>
</template>
