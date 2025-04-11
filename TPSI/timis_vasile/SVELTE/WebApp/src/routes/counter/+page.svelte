
<script>
    import Counter from "$lib/components/counter.svelte";
    let contatore = 0;
    import DoubleCounter from "$lib/components/double_counter.svelte";
    let double_contatore = 0;
    let numeri = [1,7,2,6,9,10];
    
</script>


<h1>Pagina Counter!!!</h1>

{#if contatore < 5}
    <h2 class="rosso">Il valore del contatore 1 vale: {contatore}</h2>
{:else}
    <h2 class="verde">Il valore del contatore 1 vale: {contatore}</h2>
{/if}

<Counter bind:counter={contatore}/>

<br><br>

{#if double_contatore < 5}
    <h2 class="rosso">Il valore del contatore 2 vale: {double_contatore}</h2>
{:else}
    <h2 class="verde">Il valore del contatore 2 vale: {double_contatore}</h2>
{/if}
<DoubleCounter bind:counter={double_contatore}/>


<ul>
    {#each numeri as numero,indice}
    <li>numeri[{indice}]:{numero}</li>
    {/each}
</ul>

<style>
    .rosso { color: red;}
    .verde { color: greenyellow;}
</style>