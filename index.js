const datacenter = document.getElementById("datacenter");
const pointGrid = document.getElementById("attack_grid");
let attackPoints = Array.from(document.getElementsByClassName("attack_point")).slice(1);
let attackTypes = [
    "DDOS",
    "Template"
]

