import { TarotCard } from "../types/tarot-card";
import { Avatar, Card,  Container, Grid2 } from '@mui/material';

const Deck = (props : { cardsToShow : TarotCard[], remainingTableCards : TarotCard[] }) => {
    
    return (
        
        <div>
            <Container sx={{ margin: 5, display: 'flex', justifyContent: 'center' }}>
                <Avatar src='img/avatar-default.png' alt="Avatar" sx={{ width: '10%', height: '10%' }} />

            </Container>
            
            
            <Container sx={{ margin: 5 }}>
                <Grid2 container spacing={2} columns={3}>
                    {props.cardsToShow.map((card, index) => (
                                <Grid2 size={1} display="flex" justifyContent="center" key={index}>
                                    <Card key={index}><img src={card.picUrl} alt={card.name} style={{ width: '100%' }}/></Card>
                                </Grid2>
                    ))}          

                </Grid2>
            </Container>

            
            <Container sx={{ margin: 5 }}>
                <Grid2 container spacing={2} columns={10}>
                        {props.remainingTableCards.map((card, index) => (
                            <Grid2 size={1} display="flex" justifyContent="center" key={index}>
                                <Card key={index} sx={{ height: '100%' }} >
                                    <img src={card.picUrl} alt={card.name} style={{ width: '100%' }}/>
                                </Card>
                            </Grid2>
                        ))}                
                </Grid2>
            </Container>
        </div>
    );
};

export {Deck};