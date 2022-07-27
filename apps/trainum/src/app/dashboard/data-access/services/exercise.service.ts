import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exercise } from '@trainum/models/entities';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from '../../../shared/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private readonly ROUTES = {
    getAll: () => this.api.createUrl('exercise'),
  };

  exercises$ = new BehaviorSubject<Exercise[]>([]);

  constructor(private http: HttpClient, private api: ApiService) {}

  loadExercises(): void {
    this.getAll().subscribe((exercises) => {
      this.exercises$.next(exercises);
    });
  }

  getExercises(): BehaviorSubject<Exercise[]> {
    return this.exercises$;
  }

  getAll(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.ROUTES.getAll());
  }
}
