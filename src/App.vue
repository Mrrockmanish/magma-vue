<script setup>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Menu from './components/menu.vue';
</script>

<template>
	<Header></Header>
	<main class="main flex flex-wrap lg:flex-nowrap container px-4">
		<Menu></Menu>
		<RouterView class="pt-4 pb-16 lg:px-4" />
	</main>
	<Footer></Footer>
</template>

<style scoped></style>
