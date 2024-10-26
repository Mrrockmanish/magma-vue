<script setup>
const production = [
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
		<h1 class="text-3xl font-bold">Продукты</h1>
		<div class="mt-4 -mx-3">
			<div class="flex flex-wrap">
				<div v-for="item in production"
						 :key="item.id"
						 class="w-full mt-6">

				</div>
			</div>
		</div>
	</div>
</template>