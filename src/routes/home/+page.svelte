<script lang="ts">
    let count = $state(0);

</script>

<div class="min-w-full min-h-screen flex flex-col justify-evenly items-center">
    This is Home page
    <button onclick={() => count += 1} class="bg-theme p-2 text-theme-w rounded-md hover:bg-theme-alt">Click: {count}</button>
    <a href="/" class="p-2 text-md rounded-md bg-theme hover:bg-theme-alt text-theme-w">Back</a>
</div>