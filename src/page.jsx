import React, { useState } from "react"
export default function Page() {
    const [list, setList] = useState([]);
    const [value, setValue] = useState("");
    const [number, setNumber] = useState(0)
    function valueChange(e) {
        setValue(() => {
            return (e.target.value)
        }
        )
    }
    function addingList(e) {
        e.preventDefault()
        if (value === "" || value == null || value == undefined || value.trim() == "") {
            alert("Enter any task to do")
        } else {
            setNumber((num) => { return (num + 1) })
            setList((oldList) => {
                return (
                    [...oldList, { todo: value, id: number }]
                )
            })
        }
    }
    function deleteList(listId) {
        setList((oldList) => {
            return (
                oldList.filter((data) => {
                    return (
                        data.id !== listId
                    )
                })
            )
        })
    }
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-violet-900 shadow-2xl">
            <div className="w-[39rem] shadow rounded-md backdrop-blur-xl bg-white/30 p-10">
                <form className="flex flex-row space-x-5 mb-10"
                    onSubmit={addingList}>
                    <input type="text" placeholder="Enter your to-do task" className="w-2/3 rounded h-10 border-2 focus:outline-none indent-2 md:indent-5 border-violet-200 md:tracking-wider"
                        value={value}
                        onChange={valueChange} />
                    <button className="bg-violet-900 text-white rounded w-1/3 h-10 tracking-widest font-semibold text-[12px] md:text-[17px]" type="submit">+ New Task</button>
                </form>
                <ul>
                    {list.map((arrays) => {
                        return (
                            <div className="shadow bg-violet-300 w-full h-10 rounded tracking-wider mt-3 p-2 relative" 
                            key={arrays.id}>
                                <li>{arrays.todo}</li>
                                <button type="button" className="rounded-full hover:bg-red-200 text-center w-7 h-7 absolute right-2 top-1.5 bg-transparent"
                                    onClick={() => deleteList(arrays.id)}>
                                    <i className="fa-solid fa-xmark text-red-600"></i>
                                </button>
                            </div>
                        )
                    }
                    )}
                </ul>
            </div>
        </div>
    )
}