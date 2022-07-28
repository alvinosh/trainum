export interface CreateExerciseDto {
  name?: string;
  description?: string;
  images?: string[];
  targets?: string[];
  equipment?: string[];
  type: string;
  userId?: number;
}
