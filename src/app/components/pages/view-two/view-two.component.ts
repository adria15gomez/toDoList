import { Component, OnInit  } from '@angular/core';
import {HttpClient } from '@angular/common/http';


interface Task {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-view-two',
  templateUrl: './view-two.component.html',
  styleUrls: ['./view-two.component.css']
})
export class ViewTwoComponent {
  tasks: Task[] = [];
  title = '';
  description = '';
  selectedTask: Task | null = null;

  constructor (private http:HttpClient) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.http.get<Task[]>('http://127.0.0.1:8000/api/tasks').subscribe(tasks => this.tasks = tasks);
  }

  addTask() {
    const newTask = {title: this.title, description: this.description};
    this.http.post<Task>('http://127.0.0.1:8000/api/tasks', newTask).subscribe(task => {
      this.tasks.push(task);
      this.title = '';
      this.description = '';
    });
  }

  editTask(task: Task) {
    this.selectedTask = task;
    this.title = task.title;
    this.description = task.description;
  }

  deleteTask(taskId: number) {
    this.http.delete(`http://127.0.0.1:8000/api/tasks/${taskId}`).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== taskId);
    });
  }

  saveTask() {
    if (this.selectedTask !== null) {
      const updatedTask = {
        id: this.selectedTask.id,
        title: this.title,
        description: this.description
      };
      this.http.put<Task>(`http://127.0.0.1:8000/api/tasks/${updatedTask.id}`, updatedTask).subscribe(task => {
        const taskIndex = this.tasks.findIndex(t => t.id === task.id);
        this.tasks[taskIndex] = task;
        this.title = '';
        this.description = '';
        this.selectedTask = null;
      });
    } else {
      const newTask = {title: this.title, description: this.description};
      this.http.post<Task>('http://127.0.0.1:8000/api/tasks', newTask).subscribe(task => {
        this.tasks.push(task);
        this.title = '';
        this.description = '';
      });
    }
  }
  
  cancelEdition() {
    this.title = this.selectedTask?.title || '';
    this.description = this.selectedTask?.description || '';
    this.selectedTask = null;
  }}
