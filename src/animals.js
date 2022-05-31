import { writable } from 'svelte/store';

export let animals = writable([{
    id: 5,
    name: "Bondy",
    type: "dog",
    age: 6
},{
    id: 6,
    name: "Bondok",
    type: "dog",
    age: 62
}]);