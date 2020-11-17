import { Component, OnInit } from '@angular/core';

//agregar
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { AppointmentService } from './../shared/appointment.service';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.page.html',
  styleUrls: ['./make-appointment.page.scss'],
})
export class MakeAppointmentPage implements OnInit {
  bookingForm: FormGroup;

  constructor(
    private aptService: AppointmentService,
    private router: Router,
    public fb: FormBuilder
  ){

   }

  ngOnInit() 
  {
    this.bookingForm = this.fb.group({

      nombre: [''],
      apellido_p: [''],
      apellido_m: [''],
      edad: [''],
      fecha_nacimiento: [''],
      curp: [''],
      ciudad: [''],
      estado: [''],
      grado_estudio: [''],
      nombre_padre_madre_tutor: [''],
      num_celular: ['']

    })
  }


  formSubmit() 
  {
    if (!this.bookingForm.valid) 
    {
      return false;
    } 
    else 
    {
      this.aptService.createBooking(this.bookingForm.value).then(res => 
        {
          console.log(res)
          this.bookingForm.reset();
          this.router.navigate(['/home']);
        })
        .catch(error => console.log(error));
    }
  }
}