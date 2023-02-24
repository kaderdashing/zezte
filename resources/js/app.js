import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'

createInertiaApp({
    resolve: async(name) => {
        // la function async va charger la totalité des pages (glob)
        const pages =
            import.meta.glob('./Pages/**/*.vue')
            // la await method va attendre que tt les pages seront charger pour retourner la vue
        return (await pages[`./Pages/${name}.vue`]())
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },
})