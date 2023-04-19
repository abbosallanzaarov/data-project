<script lang="ts">
import { Link } from 'svelte-navigator'
</script>

<div class="navbar bg-base-300">
  <div class="navbar-start">
  </div>
  <div class="navbar-center">
    <Link to="/" class="btn btn-ghost normal-case text-2xl anybody">DATA Portfolio</Link>
  </div>
  <div class="navbar-end">
    <Link to="" class="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </Link>
  </div>
</div>

<style>
    .anybody {
        font-family: 'Anybody';
    }
</style>