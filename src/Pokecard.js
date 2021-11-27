import React from "react";
import "./Pokecard.css";

const POKE_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

const Pokecard = ({ id, name, type, exp }) => {
	let imgSrc = `${POKE_API}${id}.png`;

	return (
		<div className="Pokecard">
			<h6 className="Pokecard-name">{name}</h6>
			<img className="Pokecard-img" src={imgSrc} alt="Pokemon sprite" />
			<p className="Pokecard-data">Type: {type}</p>
			<p className="Pokecard-data">EXP: {exp}</p>
		</div>
	);
};

export default Pokecard;
