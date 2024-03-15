import { useState } from 'react'
import { TodoItem } from './TodoItem'

export function TodoList() {
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('')
  
  const addTodoItem = () => {
    setItems([
        ...items,
        { text: newItem, is_done: false }
    ])
    setNewItem('')
  }

  return (
    <>
        <div>
            <input
                type="text"
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
            />
            <button
                onClick={addTodoItem}
            >Add Todo Item</button>
        </div>
        <div>
            <ul>
            {items.map((item, i) =>
                <TodoItem key={i} text={item.text} isDone={item.is_done} />
            )}
            </ul>
        </div>
    </>
  )
}
