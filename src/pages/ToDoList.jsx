import { useState } from "react";
import ToDoHeader from "../components/ToDoHeader"

function ToDoList() {
    const [inputItem, setInputItem] = useState('')
    const [listItem, setListItem] = useState([])
    function handleSubmit(e) {
        e.preventDefault();
        if (inputItem.length === 0) {
            return
        } else {
            setListItem([...listItem, inputItem])
            setInputItem('')
        }


    }
    function handleDelete(itemIdx) {
        const filteredItems = listItem.filter((item, idx) => {
            if (itemIdx=== idx) {
                return false
            } else {
                return true
            }
        })
        setListItem(filteredItems)
    }
    return (
        <>
            <div className="parent-container">
                <ToDoHeader />


                <div className="todo-parent-container">
                    <div className="todo-child">
                        <h2 id='add-item'>Add Items</h2>
                        <form className="todo-form" onSubmit={handleSubmit}>
                            <input type="text" value={inputItem} onChange={(e) => { setInputItem(e.target.value) }} />
                            <input type="submit" value='Add Item' />
                        </form>
                        <div className="list-items">
                            <ul>
                                {listItem.map((item, idx) => {
                                    return <li>{item}
                                    <button idx onClick={handleDelete}>X</button>
                                    </li>
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default ToDoList