import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Process} from "../model/entities/process.entity";
import {PROCESSES_MOCK} from "../../../mocks/processes.mock";

@Injectable({
  providedIn: 'root'
})
export class ProcessesService {

  constructor() { }

  getProcesses(): Observable<Process[]> {
    return of(PROCESSES_MOCK)
  }
}
