<script lang="ts">
import Project from "./Project.svelte";
    export let categories = new Array(3)
    export let items = new Array(5)
</script>

<div class="flex justify center">
    <div class="grid grid-cols-3 gap-6 p-5 m-auto ">
        {#each items  as item, i}
            <Project id={i}/>
        {/each}
    </div>
</div>
