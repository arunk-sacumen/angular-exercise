import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  users : any[] = [];

  constructor(private dataService: DataService){

  }

  ngOnInit() {
    this.dataService.getUsers().subscribe({
      next:(res)=>{
        this.users = res;
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
