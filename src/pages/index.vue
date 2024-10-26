<script setup>
import mainSlider from '../components/main-slider.vue';


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
	}
]
</script>
<template>
	<div>
		<mainSlider></mainSlider>
		<div>
			<h3 class="text-lg xl:text-2xl font-bold mt-5 lg:mt-10">
				Актуальные новости
			</h3>
			<div class="mt-4 -mx-3">
				<div class="flex flex-wrap">
					<div v-for="item in news"
							 :key="item.id"
							 class="w-full md:w-1/2 lg:w-4/12 xxl:w-1/5 px-3 mb-5">
						<div class="b-31">
							<a href=""
								 class="hover:opacity-80 transition-opacity">
								<img src="/src/assets/ex-1.jpeg"
										 class="object-cover h-[264px] w-full"
										 alt="">
							</a>
						</div>
						<div class="text-center mt-4">
							<a href=""
								 class="hover:opacity-80 transition-opacity">Название новости</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>