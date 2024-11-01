import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService<T> {
  private http = inject(HttpClient);

  // signals
  private data: WritableSignal<T | null> = signal<T | null>(null);
  private error: WritableSignal<string | null> = signal<string | null>(null);
  private loading: WritableSignal<boolean | null> = signal<boolean | null>(
    null
  );

  // Getters
  getData() {
    return this.data;
  }

  getError() {
    return this.error;
  }

  isLoading() {
    return this.loading;
  }

  get(url: string): void {
    this.setLoading(true);
    this.http
      .get<T>(url)
      .pipe(
        map((response) => {
          this.data.set(response), this.setError(null);
        }),
        catchError((err) => {
          this.setError('An error occured while fetching data');
          console.log(err);
          this.data.set(null);
          return of(null);
        })
      )
      .subscribe(() => this.setLoading(false));
  }

  post(url: string, body: T): void {
    this.setLoading(true);
    this.http
      .post<T>(url, body)
      .pipe(
        map((response) => {
          this.data.set(response);
          this.setError(null);
          return of(null);
        })
      )
      .subscribe(() => this.setLoading(false));
  }

  private setLoading(isLoading: boolean) {
    this.loading.set(isLoading);
  }

  private setError(error: string | null) {
    this.error.set(error);
  }
}
