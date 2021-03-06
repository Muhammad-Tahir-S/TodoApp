import React, {Component} from 'react';
import TodoItems from './TodoItems';
import "./App.css";

// import todosData from './todosData';
// import SignIn from './Signin';
// import SignOut from './SignOut'
// import Tachyons from 'tachyons'

class App extends Component {
    constructor(){
        super()
        this.state = {
            items: []

        }
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }

    addItem(e){
       if (this._inputElement.value !== "") { 
        let newItem = {
            text: this._inputElement.value,
            key: Date.now()
            };
            
            this.setState(prevState => {
                return {
                    items: prevState.items.concat(newItem)
                }
            })

            this._inputElement.value = ""
        }
        
            // console.log(this.state.items)
        e.preventDefault();            
    }

    deleteItem(key) {
        let filteredItems = this.state.items.filter((item) => (item.key !== key))
        
        this.setState({
            items: filteredItems
        })
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form 
                    onSubmit={this.addItem}
                    action="">
                        <input ref={(a) => this._inputElement = a} placeholder="enter task"></input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} delete={this.deleteItem}/>
            </div>
        )
    }
}






// class App extends Component {
//     constructor(){
//         super()
//         this.state = {
//             todos: todosData,
//             // todoText: ''
//         }

//     this.handleChange = this.handleChange.bind(this)
//     // this.onTextChange = this.onTextChange.bind(this)
//     }

//     handleChange(id) {
//         this.setState(prevState => {
//             const updatedTodos = prevState.todos.map(todo => {
//                 if(todo.id === id) {
//                     return {
//                         ...todo,
//                         completed: !todo.completed
//                     }
//                 }
//             return todo
//             }
//             )
         
//             return {todos: updatedTodos}
//         }
//         )} 
 



       
    

//     render() {
//     const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} input={this.state.todoText} switchText={this.switchText}/>)
//     return (
//         <div>    
//         {/* <div className="todo-input-div tc">
//                 <label for="input" className="f6 b db mb3"><h2>Todo</h2></label>
//                 <input 
//                 name="input" 
//                 className="input-reset ba b--black-20 pa2  w-60" 
//                 type="text" 
//                 value={this.state.input} aria-describedby="name-desc" 
//                 onChange={this.onTextChange} />   
//         </div> */}
//         <div className="todo-list">
//             {todoItems}
//         </div>
//         </div>
//     )
// }
// }







export default App;