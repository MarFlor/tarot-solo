import { TarotCard } from "../types/tarot-card";
import { Card,  Container, Grid2 } from '@mui/material';

const Deck = (props : { cardsToShow : TarotCard[], remainingTableCards : TarotCard[],  selectCard: (id: string) => void }) => {
    return (
        <div>            
            <Container sx={{ margin: 1 }}>
                <Grid2 container spacing={2} columns={3}>
                    {props.cardsToShow.map((card, index) => (
                                <Grid2 size={1} display="flex" justifyContent="center" key={index}>
                                    <Card key={index}><img src={card.picUrl} alt={card.name} style={{ width: '100%' }}/></Card>
                                </Grid2>
                    ))}          

                </Grid2>
            </Container>

            <Container sx={{ margin: 1 }}>
                <Grid2 container spacing={2} columns={10}>
                        {props.remainingTableCards.map((card, index) => (
                            <Grid2 size={1} display="flex" justifyContent="center" key={index}>
                                <Card key={index} sx={{ height: '100%' }} onClick={() => props.selectCard(card.id)}>
                                    <img src={'img/cardback.jpg'} alt={card.name} style={{ width: '100%' }}/>
                                </Card>
                            </Grid2>
                        ))}                
                </Grid2>
            </Container>
        </div>
    );
};

export {Deck};