export interface User {
  id: number;
  name: string;
  create_at: string;
  joined_at: string;
  grade: typeof Grade;
  age: number;
  is_manager: boolean;
  email: string;
  phone_number: string;
}

export const Grade = {
  0: "S",
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "F",
} as const;
