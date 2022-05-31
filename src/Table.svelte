<script>
    import { onMount } from 'svelte';
    // export let animals;
    export let animals = [{
        id: 1,
        name: "Bond",
        type: "dog",
        age: 6
    },{
        id: 2,
        name: "Bondos",
        type: "dog",
        age: 62
    }]

    console.log(animals)

    // onMount(async () => {
	// 	const res = await fetch(`/animals`, {
    //         mode: 'no-cors'
    //     });
	// 	animals = await res.json();
    //     console.log(animals);
	// });

    async function handleClick(id){
        alert('Are you sure you want to delete Animal with id: ' + id +'?')
        console.log(id)
    }

</script>


<h1>Animals List</h1>
<table>
    <thead>
        <tr>
            {#each Object.keys(animals[0]) as header}
            <th>{header}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each Object.values(animals) as row}
        <tr on:click="{handleClick(row.id)}">
            {#each Object.values(row) as cell}
            <td>{cell}</td>
            {/each}
        </tr>
        {/each}
    </tbody>
</table>

<style>
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

 td, th {
  border: 1px solid #ddd;
  padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2;}

tr:hover {background-color: rgb(255, 0, 0);}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #e9ac5c;
  background-color: #ff3e00;
  color: white;
}
</style>