<script context="module">
	export async function preload(page, { auth }) {
		 console.log(auth);
		// if (auth != undefined && auth) {
        //     return this.redirect(301, 'admin')
        // }
		return { auth }; 
	}
</script>

<script>
	export let auth;
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	import Navbar from "../components/Navbar.svelte";

    import Sidebar from "../components/Sidebar.svelte";
	//import Nav from '../components/Nav.svelte';
	//export let segment;
</script>
<style>
    .page-content-wrapper {
        min-width: 0;
        width: 100%;
    }
</style>
{#if auth}
<div class="d-flex" id="wrapper">
    <Sidebar />
    <div class="page-content-wrapper">
        <Navbar/>
        <slot />
    </div>
</div>
{:else}
	<Header/>
	<slot />
	<Footer />
{/if}
