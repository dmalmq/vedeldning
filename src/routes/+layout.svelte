<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell, AppBar, Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import Footer from '$lib/components/Footer.svelte';
	import Navigation from '$lib/components/Navigation.svelte';

	function drawerOpen(): void {
		drawerStore.open();
	}
</script>

<Drawer>
	<Navigation />
</Drawer>

<AppShell slotSidebarLeft="w-0 md:w-52 bg-surface-500/10">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<button class="md:hidden btn btn-sm mr-4" on:click={drawerOpen}>
					<span>
						<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
							<rect width="100" height="20" />
							<rect y="30" width="100" height="20" />
							<rect y="60" width="100" height="20" />
						</svg>
					</span>
				</button>
				<a href="/"><strong class="text-xl uppercase">Vedeldning</strong></a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<ul class="flex gap-4">
					<li><a class="hover:underline" href="/kaminer">Kaminer</a></li>
					<li><a href="/spisinsatser">Spisinsatser</a></li>
					<li><a href="/vedspisar">Vedspisar</a></li>
					<li><a href="/kontakt">Kontakt</a></li>
				</ul>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>
	<div class="container p-10 mx-auto">
		<slot />
	</div>
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
</AppShell>
