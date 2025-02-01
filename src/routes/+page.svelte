<script lang="ts">
    import { HeartSolid } from 'flowbite-svelte-icons';
</script>

<div class="min-w-full min-h-screen flex flex-col justify-evenly items-center">
    <h1 class="text-2xl font-bold text-theme uppercase font-main-alt">This is template with sveltekit</h1>
    <HeartSolid class="text-theme-r h-20 w-20" />
    <HeartSolid class="text-theme" size={'xl'} />
    <a href="/home" class="p-2 text-md rounded-md bg-theme hover:bg-theme-alt text-theme-w">Home</a>
</div>