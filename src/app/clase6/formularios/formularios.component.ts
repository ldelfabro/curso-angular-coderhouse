import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export class Hero {
  name : string;
  alterEgo: string;
  constructor(name: string, alterEgo:string){
    this.name = name;
    this.alterEgo = alterEgo;
  }
}

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})

export class FormulariosComponent implements OnInit {

  public formularioPrincipal: FormGroup; //
  public formularioSecundario: FormGroup; //
  public miControl : FormControl;
  public heroe = new Hero('pepe', 'pepito');

  //tenemos que enchufar FormBuilder aca
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {

    //Dos formas de incializar diferente

    this.formularioPrincipal = this.fb.group({
      nombre : ['', [Validators.required, Validators.minLength(3)]],
      edad : [0, [Validators.required]],
      genero : ['M',[Validators.required, Validators.maxLength(1)]]
    });

    this.formularioSecundario = new FormGroup({
      nombre : new FormControl()
    });

    this.miControl = new FormControl(['Valor por defecto']);
    this.miControl.valueChanges.subscribe((value) => {
      console.log(value);
      this.formularioPrincipal.get('nombre')?.setValue(value);
    })

  }

  submit() : void {
    console.log(this.formularioPrincipal.value);
    console.log(this.formularioPrincipal.valid)
    console.log(this.formularioPrincipal.get('nombre')?.value);

  }
  submit2() : void {
    console.log(this.formularioPrincipal.value);
    console.log(this.formularioPrincipal.valid)
    console.log(this.formularioPrincipal.get('nombre')?.value);

  }
}
