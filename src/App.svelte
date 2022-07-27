<script>
	import InputForm from './InputForm.svelte'
	import Table from './Table.svelte'
	// import { animals } from './animals'

	export let name;

	let myAnimals=[];

	async function getAnimals() {
		const res = await fetch(`/animals/`, {
            mode: 'no-cors'
        });
		myAnimals = await res.json();
        console.log(myAnimals);
		// myAnimals=[...myAnimals, ...newAnimals]
		// return myAnimals
	}
	getAnimals()
	if (myAnimals.length == 0){
		myAnimals=[{
        id: 1,
        name: "Bond",
        type: "dog",
        age: 6
    }]
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<!-- <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p> -->
	<p>Pets management App</p>
	<InputForm on:newAnimal={getAnimals}/>	
	<Table animals={myAnimals}/>
</main>	
<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	p {
		color: #0044ff;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 200;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
