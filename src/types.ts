export type CardState = "hidden" | "visible" | "matched";

export interface Card {
  id: number;       
  value: number;    
  state: CardState;
}