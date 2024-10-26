import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from './pages/index.vue'
import Company from './pages/company.vue'
import News from './pages/news.vue'
import Contacts from './pages/contacts.vue'
import production from './pages/production.vue'
import product from './pages/product.vue'

const routes = [
  { path: '/', name: 'home', title: 'Главная', component: HomePage },
	{ path: '/about', name: 'about', title: 'О компании', component: Company },
	{ path: '/news', name: 'news', title: 'Новости', component: News },
	{ path: '/contacts', name: 'contacts', title: 'Контакты', component: Contacts },
	{ path: '/production', name: 'production', title: 'Продукция', component: production },
	{ path: '/product', name: 'product', title: 'Продукт', component: product},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
