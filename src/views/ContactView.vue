<script setup></script>
<template>
    <section>
        <form class="w-full max-w-lg bg-base-200 p-10 rounded shadow-lg">
            <img src="/src/assets/images/logo1.png"/>
            <div class="flex flex-wrap -mx-3 mt-10 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label for="name-input" class="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Nombre
                    </label>
                    <input
                        class="input input-error"
                        id="name-input" 
                        type="text"
                        required />
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="lastname-input">
                        Apellidos
                    </label>
                    <input
                        class="input input-error"
                        id="lastname-input" 
                        type="text"
                        required />
                </div>
            </div>
            <div class="-mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="email-input">
                        Correo
                    </label>
                    <input
                        type="email"
                        placeholder="nombredeusuario@email.com"
                        class="input input-error w-full"
                        id="email-input"
                        required />
                </div>
                <div class="w-full px-3 mt-5">
                    <label for="asunto-input" class="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Asunto
                    </label>
                    <input 
                        type="text"
                        placeholder="Asunto"
                        class="input input-error w-full"
                        id="asunto-input"
                        required />

                </div>

            </div>
            <div>
                <label for="message-input" class="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Mensaje
                </label>
                <textarea id="message-input" class="textarea textarea-error w-full h-50" required></textarea>
            </div>
            <div class="mt-5">
                <button type="submit" class="btn btn-block btn-error">Enviar</button>
            </div>
        </form>
    </section>
</template>