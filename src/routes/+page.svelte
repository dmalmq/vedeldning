<script>
	    /**
	 * @type {any}
	 */
     export let product;
  </script>

<h1>Produkter</h1>

{#if product}
<ul>
    {#each product as product}
      <li>{product}</li>
    {/each}
</ul>
{:else}
      <p>Inga produkter hittades.</p>
{/if}