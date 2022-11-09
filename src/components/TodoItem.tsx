const TodoItem: React.FC<{ text: string }> = (props, context) => {
  return <li>{props.text}</li>
}

export default TodoItem;