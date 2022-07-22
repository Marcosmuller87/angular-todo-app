import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent implements OnInit {
  listTareas: Tarea[] = [];
  nombreTarea: '';

  constructor() {}

  ngOnInit(): void {}

  agregarTarea() {
    // Crear una nueva tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false,
    };
    // Agregarla a la lista de tareas
    this.listTareas.push(tarea);
    // Limpiar el campo de texto
    this.nombreTarea = '';
  }

  eliminarTarea(index: number) {
    // Eliminar la tarea de la lista
    this.listTareas.splice(index);
  }

  actualizarTarea(index: number, tarea: Tarea) {
    // Actualizar el estado de la tarea
    this.listTareas[index].estado = !tarea.estado;
    // Actualizar la tarea en la lista
    this.listTareas[index] = tarea;
  }
}
