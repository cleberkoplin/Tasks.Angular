import {Injectable} from '@angular/core';
import { BaseConnection } from '../base/base.connection';
import { Observable } from 'rxjs';

import { Task } from '../models/task.model';

@Injectable()
export class TasksService extends BaseConnection{
    
    tasks() : Observable<Task[]>{
        return this.get("pendent.tasks");
    }

    tasksConcluded() : Observable<Task[]>{
        return this.get("concluded.tasks");
    }

    newtask(task: Task) : Observable<Task>{
        var retorno = this.post("set.task", JSON.parse(JSON.stringify(task)));
        return retorno;
    }

    update(task: Task) : Observable<Task>{
        var retorno = this.post("update.task", JSON.parse(JSON.stringify(task)));
        return retorno;
    }
}