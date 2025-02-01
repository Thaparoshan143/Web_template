<script lang="ts">
	const navItems = ["Home", "Connect"]
</script>

<nav
	class="w-full p-2 fixed left-0 top-0 z-50 flex flex-row items-center justify-evenly shadow-md font-main-alt"
>
	{#each navItems as item, ind}
		<a href="/{item}" class="text-md text-theme hover:scale-105 font-bold uppercase" >{item}</a>
	{/each}
</nav>
