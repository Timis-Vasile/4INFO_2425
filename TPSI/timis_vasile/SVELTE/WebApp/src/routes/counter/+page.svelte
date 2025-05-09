<script>
    import Counter from "$lib/components/counter.svelte";
    import DoubleCounter from "$lib/components/double_counter.svelte";

    let contatore = 0;
    let double_contatore = 0;
    let numeri = [1, 7, 2, 6, 9, 10];
    let sottolineato = true;
    $: doppio = contatore * 2;

    function gestisci_evento(evento) {
        alert(` ${evento.detail.tipo} -- ${evento.detail.valore}` );
    }
</script>

<h1>Pagina Counter!!!</h1>

<h2 class:sottolineato>
    Il valore del contatore vale: {contatore}
</h2> 

<h2>
    Il suo doppio vale {doppio}
</h2>

{#if contatore < 5}
    <h2 class="rosso">Il valore del contatore 1 vale: {contatore}</h2>
{:else}
    <h2 class="verde">Il valore del contatore 1 vale: {contatore}</h2>
{/if}

<Counter bind:counter={contatore} on:contatore={gestisci_evento}/>

<br><br>

{#if double_contatore %2 == 0}
    <h2 class:sottolineato>Il valore del contatore vale: {double_contatore}</h2>
{:else}
    <h2> Il valore del contatore 2 vale: {double_contatore}</h2>
{/if}

<DoubleCounter bind:counter={double_contatore}/>

<ul>
    {#each numeri as numero, indice}
        <li>numeri[{indice}]: {numero}</li>
    {/each}
</ul>

<style>
    .rosso { color: red; }
    .verde { color: greenyellow; }
    .sottolineato { text-decoration: underline; }
</style>
