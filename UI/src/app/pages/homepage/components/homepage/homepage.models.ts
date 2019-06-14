export interface ITeam {
  name: string;
  win: number;
}

export interface IBet {
  id: number;
  teams: ITeam[];
  draw: number;
}

export enum EnumSelectedPosition {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  DRAW = 'DRAW'
}

export interface ISelectedBet {
  title: string;
  id: number;
  coefficient: number;
}
