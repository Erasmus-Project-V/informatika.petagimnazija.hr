import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Primijenjena informatika",
    description: "Kurikulum web programiranja za srednje škole",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Početna', link: '/' },
            { text: "Upute za nastavnike", link: "/" },
            { text: "Udžbenik", link: "https://udzbenik.informatika.petagimnazija.hr" },
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    {text: 'Projekti učenika', link: '/student-projects'},
                    {text: 'Interaktivni kod', link: '/udzbenik'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
