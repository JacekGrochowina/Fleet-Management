import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditMode } from 'src/app/shared/utils/enums/add-edit-mode.enum';
import { AddEditRouteComponent } from './components/add-edit-route/add-edit-route.component';
import { AddEditRouteDialogData } from './utils/interfaces/add-edit-route-dialog-data.interface';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss'],
})
export class RoutesComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openAddRouteDialog(): void {
    this.dialog.open(AddEditRouteComponent, {
      data: {
        mode: AddEditMode.add,
      } as AddEditRouteDialogData,
      width: '90%',
      maxWidth: '500px',
    });
  }
}
