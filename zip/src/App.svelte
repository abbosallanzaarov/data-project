<script lang="ts">
import { Router, Route } from 'svelte-navigator'
import Navbar from "./components/Navbar.svelte";
import Main from "./pages/Main.svelte";
import Overview from './pages/Overview.svelte';

</script>

<main>
	<Router>
		<Navbar/>
		<div class="container 2xl:px-0 px-16 m-auto">
			<Route path='/' component={Main}></Route>
			<Route path='/project/:id' let:params>
				<Overview id={params.id}/>
			</Route>
		</div>

	</Router>
</main>

<style>

</style>