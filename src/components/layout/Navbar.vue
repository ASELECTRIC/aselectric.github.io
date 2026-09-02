<script setup></script>
<template>
    <div class="navbar bg-base-100 shadow-sm sticky top-0 z-50">
        <!-- Sección del Logo -->
        <div class="flex-1">
            <a href="#">
                <img src="/src/assets/images/logo1.png" alt="Logo" width="100" height="40">
            </a>
        </div>
        <div class="flex-4"></div>
        <!-- Sección del Menú -->
        <div class="flex-none">
            <!-- Menú Hamburguesa para Móviles (Oculto en pantallas grandes 'lg') -->
            <div class="dropdown dropdown-end lg:hidden">
                <button tabindex="0" class="btn btn-ghost btn-circle" aria-label="Abrir menú">
                    <svg xmlns="http://w3.org" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </button>
                <ul tabindex="0"
                    class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Inicio</a></li>
                    <li><a>Tecnología</a></li>
                    <li><a>Catálogos</a></li>
                    <li><a>Información Técnica</a></li>
                    <li><a>Contacto</a></li>
                    <li><a>Ubicación</a></li>
                </ul>
            </div>

            <!-- Menú Horizontal para Tablets/Escritorio (Oculto en pantallas pequeñas) -->
            <ul class="menu menu-horizontal px-1 hidden lg:flex">
                <li><a>Inicio</a></li>
                <li><a>Tecnología</a></li>
                <li><a>Catálogos</a></li>
                <li><a>Información Técnica</a></li>
                <li><a>Contacto</a></li>
                <li><a>Ubicación</a></li>
            </ul>
        </div>
    </div>
</template>
<style scoped></style>