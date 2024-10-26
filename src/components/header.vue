<script setup>

</script>
<template>
	<header>
		<div class="bg-7e fixed top-0 left-0 w-full lg:static z-20">
			<div class="container flex items-center py-1 lg:py-2 px-4">
				<div class="w-[70px] lg:w-[200px] xl:w-[264px] flex lg:justify-center hover:opacity-80 transition-opacity">
					<a href="/"><img src="/logo.svg"></a>
				</div>
				<div class="flex-grow flex justify-center">
					<a href="tel:555"
						 class="mr-6 hover:opacity-80 h-8 w-8 lg:h-10 lg:w-10">
						<img src="/phone.svg">
					</a>
					<a href="tel:555"
						 class="hover:opacity-80 hover:opacity-80 h-8 w-8 lg:h-10 lg:w-10">
						<img src="/telegram.svg">
					</a>
				</div>
				<div class="menu-icon lg:hidden cursor-pointer">
					<svg width="40px"
							 height="40px"
							 viewBox="0 0 24 24"
							 fill="none"
							 xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd"
									clip-rule="evenodd"
									d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
									fill="#000000" />
					</svg>
				</div>
			</div>
			<div class="py-0.5 lg:py-1 bg-18"></div>
		</div>
	</header>
</template>