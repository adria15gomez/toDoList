import { Component  } from '@angular/core';

@Component({
  selector: 'app-view-two',
  templateUrl: './view-two.component.html',
  styleUrls: ['./view-two.component.css']
})
export class ViewTwoComponent {
  tasks: { id: number, title: string, description: string }[] = [];
  title = '';
  description = '';
  selectedTask: { id: number, title: string, description: string } | null = null;

  addTask() {
    const id = this.tasks.length + 1;
    this.tasks.push({id, title: this.title, description: this.description});
    this.title = '';
    this.description = '';
  }

  editTask(task: { id: number, title: string, description: string }) {
    this.selectedTask = task;
    this.title = task.title;
    this.description = task.description;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  saveTask() {
    if (this.selectedTask !== null) {
      const updatedTask = {
        id: this.selectedTask.id,
        title: this.title,
        description: this.description
      };
      const taskIndex = this.tasks.findIndex(t => t.id === updatedTask.id);
      this.tasks[taskIndex] = updatedTask;
      this.title = '';
      this.description = '';
      this.selectedTask = null;
    } else {
      const id = this.tasks.length + 1;
      this.tasks.push({id, title: this.title, description: this.description});
      this.title = '';
      this.description = '';
    }
  }

  cancelEdition() {
    this.selectedTask = null;
    this.title = '';
    this.description = '';
  }
}
