export interface Option {
  id: number;
  option: string | null;
  votes: number;
}

export interface Poll {
  question: string;
  options: Option[];
  totalVotes: number;
  totalOptions: number;
}

export interface Chart {
  label: string | null;
  percentage: number;
}

export type Question = { question: string | null };
export type OptionValue = { option: string | null };
