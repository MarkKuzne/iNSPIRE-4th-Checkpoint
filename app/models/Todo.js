import { AppState } from "../AppState.js"
import { generateId } from "../utils/GenerateId.js"

export class Todo {
    constructor(data) {
        this.id = data.id
        this.description = data.description
        this.completed = data.completed
    }

    get TodoTemplate() {
        return /*html*/ `
        
            <li><input class="form-check-input checkbox" type="checkbox" id="${this.id}CheckBox" name="completed" onclick="app.TodoController.editTodo('${this.id}')"><span class="badge grad-custom-2 fs-4">${this.description}</span><a><i class="mdi mdi-trash-can text-danger fs-3 btn" onclick="app.TodoController.deleteTodo('${this.id}')"></i></a></li>

        `
    }
}