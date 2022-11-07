import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Process} from "../../core/model/entities/process.entity";
import {ProcessesService} from "../../core/services/processes.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  processes$?: Observable<Process[]>;

  constructor(
    private processesSvc: ProcessesService
  ) { }

  ngOnInit(): void {
    this.processes$ = this.processesSvc.getProcesses();
  }

}
