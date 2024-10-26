<script setup>

</script>
<template>
	<div class="max-w-[1300px] w-full mx-auto">
		<h1 class="text-3xl text-center font-bold mb-8">Контактная информация</h1>
		<div class="text-lg font-bold lg:text-2xl mb-4">
			Телефоны
		</div>
		<div>
			<a href="tel:8 (800) 777-77-77"
				 class="hover:opacity-80">8 (800) 777-77-77</a> - номер на связи ежедневно с 10:00 до 20:00
		</div>
		<div>
			<a href="tel:8 (800) 777-77-77"
				 class="hover:opacity-80">8 (800) 777-77-77</a> - личный номер руководителя
		</div>
		<div class="text-lg font-bold lg:text-2xl mt-8 mb-4">
			Почта
		</div>
		<div>
			<a href="mailto:info@magmastudio.com"
				 class="hover:opacity-80">info@magmastudio.com</a>
		</div>
		<div class="text-lg font-bold lg:text-2xl mt-8 mb-4">
			Социальные сети
		</div>
		<div class="-mx-2">
			<div class="flex">
				<div class="px-2">
					<a href="tel:555"
						 class="mr-6 hover:opacity-80 h-8 w-8 lg:h-10 lg:w-10">
						<img src="/phone.svg">
					</a>
				</div>
				<div class="px-2">
					<a href="tel:555"
						 class="hover:opacity-80 hover:opacity-80 h-8 w-8 lg:h-10 lg:w-10">
						<img src="/telegram.svg">
					</a>
				</div>
			</div>
		</div>
		<div class="text-lg font-bold lg:text-2xl mt-4 mb-4">
			Оставить заявку на консультацию
		</div>
		<form action=""
					class="-mx-2 flex flex-wrap">
			<div class="w-full lg:w-1/3 px-2">
				<input type="text"
							 class="bg-transparent outline-none border-back border w-full p-3"
							 placeholder="Укажите ваше имя">
			</div>
			<div class="w-full lg:w-1/3 px-2 mt-4 lg:mt-0">
				<input type="text"
							 class="bg-transparent outline-none border-back border w-full p-3"
							 placeholder="Укажите ваш город">
			</div>
			<div class="w-full lg:w-1/3 px-2 mt-4 lg:mt-0">
				<input type="text"
							 class="bg-transparent outline-none border-back border w-full p-3"
							 placeholder="Укажите ваш номер телефона">
			</div>
			<div class="w-full px-2 mt-4">
				<textarea name=""
									placeholder="Опишите вашу задачу"
									id=""
									class="bg-transparent h-[300px] outline-none border-back border w-full p-3 resize-none"></textarea>
			</div>
			<div class="flex w-full justify-end px-2 mt-4">
				<label
							 class="mr-4 cursor-pointer w-[56px] h-[56px] flex bg-white rounded-full items-center justify-center flex-shrink-0 hover:opacity-80 transition-opacity  p-2">
					<input type="file"
								 class="hidden">
					<svg width="35"
							 height="35"
							 xmlns="http://www.w3.org/2000/svg"
							 xmlns:xlink="http://www.w3.org/1999/xlink"
							 version="1.1"
							 id="Capa_1"
							 x="0px"
							 y="0px"
							 viewBox="0 0 30.58 30.58"
							 style="enable-background:new 0 0 30.58 30.58;"
							 xml:space="preserve">
						<g>
							<path style="fill:#010002;"
										d="M28.692,3.179c-1.892-1.892-4.867-3.428-8.295,0L6.5,17.075c-0.107,0.096-1.386,1.297-1.431,3.039 c-0.028,1.076,0.413,2.079,1.313,2.979c0.768,0.768,1.687,1.167,2.655,1.155c1.754-0.021,3.062-1.343,3.204-1.493l10.455-10.454 c0.391-0.391,0.392-1.023,0-1.414c-0.391-0.391-1.023-0.391-1.414,0L10.811,21.358c-0.249,0.256-1.029,0.884-1.807,0.89 c-0.426,0.003-0.821-0.184-1.208-0.57c-0.5-0.5-0.738-0.99-0.728-1.501c0.017-0.907,0.805-1.647,0.813-1.656l13.93-13.928 c1.352-1.351,3.059-2.409,5.467,0c0.882,0.882,1.319,1.796,1.302,2.718c-0.029,1.515-1.257,2.667-1.27,2.679L11.691,25.434 c-0.034,0.034-1.965,1.986-4.316,2.002c-1.237,0.008-2.412-0.536-3.492-1.615c-4.082-4.082-0.262-8.156-0.098-8.327L15.798,5.48 c0.391-0.391,0.391-1.023,0-1.415c-0.392-0.391-1.024-0.39-1.414,0L2.356,16.093c-1.878,1.956-4.249,6.78,0.112,11.142 c1.478,1.477,3.139,2.217,4.937,2.2c3.198-0.028,5.608-2.491,5.709-2.596l15.574-15.4c0.044-0.039,1.832-1.686,1.891-4.064 C30.616,5.879,29.981,4.467,28.692,3.179z" />
						</g>
					</svg>
				</label>
				<button
								class="p-3 bg-31 text-white hover:opacity-80 transition-opacity uppercase font-bold text-2xl px-8">Отправить</button>
			</div>
		</form>
	</div>
</template>