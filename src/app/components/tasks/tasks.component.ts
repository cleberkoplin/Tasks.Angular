import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  tasksConcluded: Task[];
  tasksPendent: Task[];

  constructor(private tasksService: TasksService){}

  ngOnInit() {
    this.tasksService.tasks().subscribe(tasks => this.tasksPendent = tasks);
    this.tasksService.tasksConcluded().subscribe(tasks => this.tasksConcluded = tasks);
  }

  onEnter(value: string){
    const task : Task = {Id: 0, Titulo: value, Status: false};
    this.tasksService.newtask(task)
    .subscribe(resp => resp ?  this.ngOnInit() : "");

    (<HTMLInputElement>document.getElementById('newtask')).value = '';
  }

  finishTask(e, id){
    if (e.target.checked){
      var task : Task = {Id: id, Titulo: null, Status: true};
      this.tasksService.update(task)
      .subscribe(resp => resp ? this.ngOnInit() : "");
    }
  }

  pendentTask(e, id){
    if (e.target.checked){
      var task : Task = {Id: id, Titulo: null, Status: false};
      this.tasksService.update(task)
      .subscribe(resp => resp ? this.ngOnInit() : "");
    }
  }

}
