import { Component, OnInit, Inject } from '@angular/core'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.scss']
})
export class MapaEditarComponent implements OnInit {
  form: FormGroup

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = formBuilder.group({
      titulo: data.titulo,
      desc: data.desc
    })
  }

  ngOnInit() {}

  guardarCambios() {
    this.dialogRef.close(this.form.value)
  }

  onNoClick(): void {
    this.dialogRef.close()
  }
}
