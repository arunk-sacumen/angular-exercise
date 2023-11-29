import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {

  posts : any[] =[];

  constructor(private dataService: DataService){

  }

  ngOnInit() {
    this.dataService.getPosts().subscribe({
      next:(res)=>{
          this.posts = res;
          console.log(res);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
