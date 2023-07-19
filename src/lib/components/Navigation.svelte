<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li>
			<a href="/" on:click={drawerClose}
				><strong class="text-xl uppercase md:hidden">Vedeldning</strong></a
			>
		</li>
		<li><a href="/kaminer" on:click={drawerClose}>Kaminer</a></li>
		<li><a href="/spisinsatser" on:click={drawerClose}>Spisinsatser</a></li>
		<li><a href="/vedspisar" on:click={drawerClose}>Vedspisar</a></li>
	</ul>
</nav>
