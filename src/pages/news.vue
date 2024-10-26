<script setup>
const news = [
	{
		id: 1
	},
	{
		id: 2
	},
	{
		id: 3
	},
	{
		id: 4
	},
	{
		id: 5
	},
	{
		id: 6
	}
]
</script>
<template>
	<div class="max-w-[1300px] mx-auto">
		<h1 class="text-3xl font-bold">Новости</h1>
		<div class="mt-4 -mx-3">
			<div class="flex flex-wrap">
				<div v-for="item in news"
						 :key="item.id"
						 class="w-full md:w-1/2 xl:w-1/3 px-3 mt-6 lg:mt-10">
					<div class="b-31">
						<a href=""
							 class="hover:opacity-80 transition-opacity">
							<img src="/src//assets/ex-1.jpeg"
									 class="object-cover h-[343] lg:h-[406px] w-full"
									 alt="">
						</a>
					</div>
					<div class="text-center text-lg text-2xl font-bold mt-4">
						<a href=""
							 class="hover:opacity-80 transition-opacity">Название новости</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>