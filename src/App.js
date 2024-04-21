import { useState, useEffect, useRef } from 'react';

import Modal from "./components/Modal";
import Card from "./components/Card";
import Header from './components/Header';
import CyclistInfo from './components/CyclistInfo';
import CharacterList from "./characters.json";

export default function App() {
	const [choices, setChoices] = useState(new Set());
	const [topScore, setTopScore] = useState(0);
	const [cyclist, setCyclist] = useState({});

	const modalRef = useRef();
	const endCondition = CharacterList.length === choices.size;

	useEffect(() => {
		if (endCondition)
			modalRef.current.open();
		}, [choices, endCondition]);

	const handleChoice = key => {
		console.log(CharacterList.length, choices.size)
		setCyclist(CharacterList.find(char => char.key === key));

		if (!choices.has(key)) {
			setChoices(prev => new Set(prev).add(key));
			shuffleCards();
		} else modalRef.current.open();
	};

	const handleModalClose = () => {
		if (topScore < choices.size) {
			setTopScore(choices.size);
		}
		setChoices(new Set());
		setCyclist({});
	}

	const shuffleCards = () => {
		CharacterList.sort(() => Math.random() - 0.5);
		return CharacterList.map(char => {
			return (
				<Card
					key={char.key}
					id={char.key}
					name={char.name}
					image={char.image}
					onClick={handleChoice} />
			)
		}
		);
	}

	return <>
		<Modal ref={modalRef} onClose={handleModalClose} buttonLabel="Play Again">
			<h2 className="text-xl font-bold uppercase text-slate-700 my-4">
				{endCondition ? "Chapeau!" : "Bonk!"}
			</h2>
			{endCondition ? 
			<p className="text-slate-600 mb-4">
				You won! You clicked all the cyclists without clicking the same one twice.
			</p> :
			<p className="text-slate-600 mb-4">
				You clicked <span className="text-amber-500 font-bold">{cyclist.name}</span> twice.
			</p>
			}
			<p className="text-slate-600 font-semibold">Your score: {choices.size}</p>
		</Modal>
		<div className="mx-auto py-8 px-10 h-dvh md:min-h-screen flex flex-col gap-8">
			<Header score={choices.size} topScore={topScore} />
			<div className="flex flex-col-reverse lg:flex-row min-w-fit justify-stretch gap-4">
				<div className="text-slate-800 text-left w-full lg:w-5/12">
					{choices.size ?
						<CyclistInfo cyclist={cyclist} /> :
						<p>Pick each cyclist without choosing the same person twice! Click a photo to start.</p>}
				</div>
				<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 justify-items-center items-center w-full lg:w-7/12 gap-4">
					{shuffleCards()}
				</div>
			</div>
			<footer className="text-center md:text-right text-slate-800">
				<p className="align-baseline">&#x1f6b2;&#x1F4A8;&#x1F4A8;</p>
				<p><a href="https://mcneary.tech" alt="mcneary.tech - David McNeary">mcneary.tech</a></p>
			</footer>
		</div>
	</>
};
