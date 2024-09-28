<script setup>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
</script>

<template>
	<Header></Header>
	<main>
		<RouterView />
	</main>
	<Footer></Footer>
</template>

<style scoped></style>
