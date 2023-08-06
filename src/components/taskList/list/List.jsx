import { FaRegTrashAlt, FaCheck } from "react-icons/fa"


function List() {

    return(

        <ul>
            <li className="flex justify-between">
                <h5 className="p-2 my-2">cocinar</h5>
                <article>
                    <button className="bg-gray-900 border-[1px] border-cyan-950 p-2 m-2">
                        <FaCheck />
                    </button>
                    <button className="bg-gray-900 border-[1px] border-cyan-950 p-2 m-2">
                        <FaRegTrashAlt />
                    </button>
                </article>
            </li>
        </ul>
    )
}

export default List