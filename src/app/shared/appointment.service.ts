import { Injectable } from '@angular/core';
//agregar
import { Appointment } from '../shared/Appointment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})


export class AppointmentService 
{
//agregar todo
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createBooking(apt: Appointment) {
    return this.bookingListRef.push({

      nombre: apt.nombre,
      apellido_p: apt.apellido_p,
      apellido_m: apt.apellido_m,
      edad: apt.edad,
      fecha_nacimiento: apt.fecha_nacimiento,
      curp: apt.curp,
      ciudad: apt.ciudad,
      estado: apt.estado,
      grado_estudio: apt.grado_estudio,
      nombre_padre_madre_tutor: apt.nombre_padre_madre_tutor,
      num_celular: apt.num_celular

    })
  }

  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/appointment/' + id);
    return this.bookingRef;
  }

  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/appointment');
    return this.bookingListRef;
  }

  // Update
  updateBooking(id, apt: Appointment) {
    return this.bookingRef.update({
      nombre: apt.nombre,
      apellido_p: apt.apellido_p,
      apellido_m: apt.apellido_m,
      edad: apt.edad,
      fecha_nacimiento: apt.fecha_nacimiento,
      curp: apt.curp,
      ciudad: apt.ciudad,
      estado: apt.estado,
      grado_estudio: apt.grado_estudio,
      nombre_padre_madre_tutor: apt.nombre_padre_madre_tutor,
      num_celular: apt.num_celular
    })
  }

  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/appointment/' + id);
    this.bookingRef.remove();
  }
}