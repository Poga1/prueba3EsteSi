import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showPassword = false;
  email = '';
  pw = '';

  formularioLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertCtrl: AlertController
  ) {
    this.createForm();
  }

  createForm() {
    this.formularioLogin = this.fb.group({
      email: new FormControl('', {
        validators: [
          Validators.maxLength(50),
          Validators.minLength(3),
          Validators.required,
        ],
      }),
      pw: new FormControl('', {
        validators: [
          Validators.maxLength(50),
          Validators.minLength(3),
          Validators.required,
        ],
      }),
    });
  }

  onSubmit() {
    const formValues = this.formularioLogin.value;
    if (formValues.pw != '') {
      console.log(this.formularioLogin.value);

      this.router.navigate(['/tabs']);
    } else {
      this.AlertaFormulario();
      console.log(this.formularioLogin.value);
    }
  }

  ngOnInit() {}

  async AlertaFormulario() {
    const alert = await this.alertCtrl.create({
      header: 'Inicio de Sesion Fallido',
      message: 'Ingresa mail y/o contraseña',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
