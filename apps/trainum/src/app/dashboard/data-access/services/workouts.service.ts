import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exercise, Workout } from '@trainum/models/entities';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from '../../../shared/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private readonly ROUTES = {
    getAll: () => this.api.createUrl('workouts'),
  };

  workouts$ = new BehaviorSubject<Workout[]>([]);

  constructor(private http: HttpClient, private api: ApiService) {}

  loadExercises(): void {
    this.getAll().subscribe((exercises) => {
      this.workouts$.next(exercises);
    });
  }

  getExercises(): BehaviorSubject<Workout[]> {
    return this.workouts$;
  }

  getAll(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.ROUTES.getAll());
  }
}
