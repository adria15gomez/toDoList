import { Component  } from '@angular/core';

@Component({
  selector: 'app-view-two',
  templateUrl: './view-two.component.html',
  styleUrls: ['./view-two.component.css']
})
export class ViewTwoComponent {
  tareas: { id: number, titulo: string, descripcion: string }[] = [];
  titulo = '';
  descripcion = '';
  tareaSeleccionada: { id: number, titulo: string, descripcion: string } | null = null;

  agregarTarea() {
    const id = this.tareas.length + 1;
    this.tareas.push({id, titulo: this.titulo, descripcion: this.descripcion});
    this.titulo = '';
    this.descripcion = '';
  }

  editarTarea(tarea: { id: number, titulo: string, descripcion: string }) {
    this.tareaSeleccionada = tarea;
    this.titulo = tarea.titulo;
    this.descripcion = tarea.descripcion;
  }

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter(t => t.id !== id);
  }

  guardarTarea() {
    if (this.tareaSeleccionada !== null) {
      const tareaActualizada = {
        id: this.tareaSeleccionada.id,
        titulo: this.titulo,
        descripcion: this.descripcion
      };
      const tareaIndex = this.tareas.findIndex(t => t.id === tareaActualizada.id);
      this.tareas[tareaIndex] = tareaActualizada;
      this.titulo = '';
      this.descripcion = '';
      this.tareaSeleccionada = null;
    } else {
      const id = this.tareas.length + 1;
      this.tareas.push({id, titulo: this.titulo, descripcion: this.descripcion});
      this.titulo = '';
      this.descripcion = '';
    }
  }

  cancelarEdicion() {
    this.tareaSeleccionada = null;
    this.titulo = '';
    this.descripcion = '';
  }
}
