<script lang="ts">
import Category from "./Category.svelte";

    export let items: string[] = ['Web', 'Visual Effect', 'Android', 'Architecture']
</script>

<div class="flex gap-3 p-3 justify-center">
    {#each items as item} 
        <Category name={item}/>
    {/each}
</div>

