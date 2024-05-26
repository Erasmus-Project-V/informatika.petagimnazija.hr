import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Primijenjena informatika",
    description: "Kurikulum web programiranja za srednje škole",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Pocetna', link: '/' },
            { text: "Upute za nastavnike", link: "/" },
            { text: "Udzbenik", link: "https://udzbenik.informatika.petagimnazija.hr" },
            { text: "", link: "" },
            {text: 'Examples', link: '/markdown-examples'}
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
