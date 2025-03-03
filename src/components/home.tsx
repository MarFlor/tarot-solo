import { Button } from "@mui/material";
import { TarotCard } from "../types/tarot-card";
import { Deck } from "./deck";
import { useEffect, useState } from 'react';

const Home = () => {

    const [allCards, setAllCards] = useState<TarotCard[]>([]);
    let [shuffeledCards, setShuffeledCards] = useState<TarotCard[]>([]);

    useEffect(() => {
        const fetchCards = async () => {
            const response = await fetch('/files/cards.json');
            const jsonCards: TarotCard[] = await response.json();
            setAllCards(jsonCards);
        };
        fetchCards();
    }, []);


    const shuffleCards = (cards: TarotCard[]) => {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
    };

    shuffeledCards = shuffleCards(allCards);

    return (
        <>  
            <Button onClick={() => window.location.reload()}>Reload</Button>
            
            <Deck cardsToShow={shuffeledCards.slice(0,3)} remainingTableCards={shuffeledCards} />  
        </>
    );
};

export {Home};