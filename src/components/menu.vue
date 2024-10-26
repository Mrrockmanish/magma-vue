<script setup>

</script>
<template>
	<div class="hidden lg:block menu bg-31 p-4 text-white font-bold text-lg lg:w-[264px] flex-shrink-0 z-20">
		<ul>
			<li class="py-1">
				<router-link to="about"
										 class="hover:opacity-80 transition-opacity">Компания</router-link>

			</li>
			<li class="py-1">
				<router-link to="news"
										 class="hover:opacity-80 transition-opacity">Новости</router-link>
			</li>
			<li class="py-1">
				<a href=""
					 class="hover:opacity-80 transition-opacity">
					Услуги
				</a>
			</li>
			<li class="py-1">
				<a href=""
					 class="hover:opacity-80 transition-opacity">
					Производство
				</a>
			</li>
			<li class="py-1">
				<router-link to="production"
										 class="hover:opacity-80 transition-opacity">Продукты</router-link>
			</li>
			<li class="py-1">
				<a href="">
					Проекты
				</a>
			</li>
			<li class="py-1">
				<router-link to="contacts"
										 class="hover:opacity-80 transition-opacity">Контакты</router-link>
			</li>
		</ul>
	</div>
</template>