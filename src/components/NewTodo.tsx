import { useRef } from "react";
import todo from "../models/todo";

const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value

    if(enteredText.trim().length === 0){
      return;
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef}/>
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo