import HomePage from "@/pages/HomePage.vue";
import WorkPage from "@/pages/WorkPage.vue";
import AboutPage from "@/pages/AboutPage.vue";

export default [
    {
        name: 'Home',
        path: '/',
        component: HomePage
    },
    {
        name: 'Work',
        path: '/work',
        component: WorkPage
    },
    {
        name: 'About',
        path: '/about',
        component: AboutPage
    }
]