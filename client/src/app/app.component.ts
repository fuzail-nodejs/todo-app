import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Todo } from './todo';
import {NgForm} from '@angular/forms'
import { isDate } from 'util';
import swal from 'sweetalert2'
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Fuzail Ahmed';
  todos: Todo[]
  
  ngOnInit(){
  }

  constructor(){
    this.todos = []
  }
  addTodo(frm: NgForm) {
    if (frm.value.todo.length > 0) {
      let todoObj: Todo = {
        id: this.todos.length,
        title: frm.value.todo,
        isDone: false
      }
      this.todos.push(todoObj);
    }
    frm.reset();
  }


  TodoDone(isDone: Boolean, index: number) {
    this.todos[index].isDone = isDone
  }
  
  deleteTodo(index: number){
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.todos.splice(index, 1)
        swal(
          'Deleted!',
          'Todo has been deleted successfully.',
          'success'
        )
      }
    })
  }
}
