<script setup>
const production = [
	{
		id: 1,
		title: 'Аккустика для домашних кинотеатров',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quas asperiores quos, saepe dolorum perspiciatis facere molestias molestiae dolor! Esse placeat reiciendis odit pariatur nesciunt neque suscipit deserunt? Perspiciatis, recusandae?'
	},
	{
		id: 2,
		title: 'Кабельная продукция',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quas asperiores quos, saepe dolorum perspiciatis facere molestias molestiae dolor! Esse placeat reiciendis odit pariatur nesciunt neque suscipit deserunt? Perspiciatis, recusandae?'
	},
	{
		id: 3,
		title: 'Предварительные усилители',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quas asperiores quos, saepe dolorum perspiciatis facere molestias molestiae dolor! Esse placeat reiciendis odit pariatur nesciunt neque suscipit deserunt? Perspiciatis, recusandae?'
	},

]
</script>
<template>
	<div class="max-w-[1300px] mx-auto">
		<h1 class="text-3xl font-bold text-center mb-12">Продукты</h1>
		<div v-for="item in production"
				 :key="item.id"
				 class="flex -mx-4 flex-wrap items-start w-full mt-8">
			<div class="order-last md:order-first flex-2 w-full md:w-7/12 lg:w-8/12 px-4">
				<h3 class="text-lg xl:text-2xl font-bold leading-tight mt-4 md:mt-0">
					{{ item.title }}
				</h3>
				<div class="mt-4">
					{{ item.desc }}
				</div>
			</div>
			<div class="order-first md:order-last w-full md:w-5/12 lg:w-4/12 px-4">
				<img src="/cabel.jpg"
						 alt="">
			</div>
		</div>
	</div>
</template>