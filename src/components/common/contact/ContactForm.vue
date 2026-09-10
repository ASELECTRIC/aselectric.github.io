<script setup>
import { ref, computed } from 'vue';

const form = ref({
    name: '',
    subname: '',
    email: '',
    subject: '',
    message: ''
});

const touched = ref({
    name: false,
    subname: false,
    email: false,
    subject: false,
    message: false
});

const errors = computed(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return {
        name: !form.value.name.trim()
            ? 'El nombre es obligatorio.'
            : '',
        subname: !form.value.subname.trim()
            ? 'El apellido es obligatorio.'
            : '',
        email: !form.value.email.trim()
            ? 'El correo es oblicatorio'
            : !emailRegex.test(form.value.email)
                ? 'El formato del correo es incorrecto.'
                : '',
        subject: !form.value.subject.trim()
            ? 'El asunto del mensaje es obligatorio.'
            : '',
        message: !form.value.subject.trim()
            ? 'El mensaje es obligatorio.'
            : '',
    };
});

const isFormValid = computed(() =>
    !errors.value.name &&
    !errors.value.subname &&
    !errors.value.email &&
    !errors.value.subject &&
    !errors.value.message
);

function handleContactForm() {
    touched.value.name = true;
    touched.value.subname = true;
    touched.value.email = true;
    touched.value.subject = true;
    touched.value.message = true;

    const destinyEmail = "iker@aselectric.es";
    const subject = encodeURIComponent(`${form.value.subject}`);

    const body = encodeURIComponent(
        `Nombre de remitente: ${form.value.name}\n` +
        `Email de respuesta: ${form.value.email}\n\n` +
        `Mensaje: ${form.value.message}`
    );

    window.location.href = `mailto:${destinyEmail}?subject=${subject}&body=${body}`;

    if (!isFormValid.value) return;
    alert(`¡Mensaje enviado con éxito!\nGracias ${form.value.name}, nos pondremos en contacto contigo pronto.`);

    form.value = {
        name: '',
        subname: '',
        email: '',
        subject: '',
        message: ''
    }

    touched.value = {
        name: false,
        subname: false,
        email: false,
        subject: false,
        message: false
    }
}
</script>
<template>
    <form @submit.prevent="handleContactForm" id="contact-form"
        class="w-full max-w-lg bg-base-200 p-10 rounded shadow-lg">
        <img src="/images/logo1.png" />
        <div class="flex flex-wrap -mx-3 mt-10 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label for="name-input" class="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Nombre
                </label>
                <input v-model="form.name" @blur="touched.name = true" class="input input-error" id="name-input"
                    type="text" required />
                <label v-if="touched.name && errors.name" class="label py-0.5">
                    <span class="label-text-alt text-error font-medium">{{ errors.name }}</span>
                </label>
            </div>
            <div class="w-full md:w-1/2 px-3">
                <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="lastname-input">
                    Apellidos
                </label>
                <input v-model="form.subname" @blur="touched.subname = true" class="input input-error"
                    id="lastname-input" type="text" required />
                <label v-if="touched.subname && errors.subname" class="label py-0.5">
                    <span class="label-text-alt text-error font-medium">{{ errors.subname }}</span>
                </label>
            </div>
        </div>
        <div class="-mx-3 mb-6">
            <div class="w-full px-3">
                <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="email-input">
                    Correo
                </label>
                <input v-model="form.email" @blur="touched.email = true" type="email"
                    placeholder="nombredeusuario@email.com" class="input input-error w-full" id="email-input"
                    required />
                <label v-if="touched.email && errors.email" class="label py-0.5">
                    <span class="label-text-alt text-error font-medium">{{ errors.email }}</span>
                </label>
            </div>
            <div class="w-full px-3 mt-5">
                <label for="asunto-input" class="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Asunto
                </label>
                <input v-model="form.subject" @blur="touched.subject = true" type="text" placeholder="Asunto"
                    class="input input-error w-full" id="asunto-input" required />
                <label v-if="touched.subject && errors.subject" class="label py-0.5">
                    <span class="label-text-alt text-error font-medium">{{ errors.subject }}</span>
                </label>
            </div>
        </div>
        <div>
            <label for="message-input" class="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                Mensaje
            </label>
            <textarea v-model="form.message" @blur="touched.message = true" id="message-input" class="textarea textarea-error w-full h-50" required></textarea>
            <label v-if="touched.message && errors.message" class="label py-0.5">
                <span class="label-text-alt text-error font-medium">{{ errors.message }}</span>
            </label>
        </div>
        <div class="mt-5">
            <button type="submit" class="btn btn-block btn-error">Enviar</button>
        </div>
    </form>
</template>