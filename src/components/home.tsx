import { Avatar, Container, Divider, Icon } from "@mui/material";
import { TarotCard } from "../types/tarot-card";
import { Deck } from "./deck";
import { useEffect, useState } from 'react';

const Home = () => {

    const [allCards, setAllCards] = useState<TarotCard[]>([]);
    let [shuffeledCards, setShuffeledCards] = useState<TarotCard[]>([]);
    let [selectedCards, setSelectedCards] = useState<TarotCard[]>([]);

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

    useEffect(() => {
        setShuffeledCards(shuffleCards(allCards));
    }, [allCards]);

    const selectCard = (id: string) => {
        console.log('selected card', id);
        const selectedCard = shuffeledCards.find(card => card.id === id);
        setShuffeledCards(shuffeledCards.filter(card => card.id !== id)); 
        
        
        if(selectedCards && selectedCards.length > 2)
        {
            selectedCards = [];
        }

        if (selectedCard) {
            selectedCards.push(selectedCard);
        }

        setSelectedCards(selectedCards);
    }

    return (
        <>  
            <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 1}}>                
               <Avatar src='img/avatar-default.png' alt="Avatar" sx={{ width: '10%', height: '10%' }}  onClick={() => window.location.reload()}/>
            </Container>
                
            <Deck 
            cardsToShow={selectedCards} 
            remainingTableCards={shuffeledCards} 
            selectCard={(id: string) => selectCard(id)} />  
            
            <Divider sx={{ fontSize: '0.75rem', textAlign: 'center', margin: 1 }}>
                If you know, you decide. <br /> Saráh Tarot © {new Date().getFullYear()}
            </Divider>
        </>
    );
};

export {Home};