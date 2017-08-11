export interface Card
{
    value: string;
    colour: string;
    image: string;
};

export class UNODeck
{
    cardList: Card[];
    remainig: number;
}