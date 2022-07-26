export interface UpdateExerciseDto {
  name?: string;
  description?: string;
  images?: string[];
  targets?: string[];
  type: string;
  userId?: number;
}
