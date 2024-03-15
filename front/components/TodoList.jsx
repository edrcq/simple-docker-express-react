import { useState } from 'react'

export function TodoList() {
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('')
  
  const addTodoItem = () => {
    setItems([
        ...items,
        newItem
    ])
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
                <li key={i}>{item}</li>
            )}
            </ul>
        </div>
    </>
  )
}
