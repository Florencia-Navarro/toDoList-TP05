import List from "./list/List"

function TasksList() {

    return (
      <>
        <section className="bg-gray-900 w-9/12  my-3.5 mx-auto rounded-md border-[1px] border-cyan-950 shadow-lg shadow-gray-500/50 max-w-2xl">
          <article className="bg-orange-800 m-3.5">
           
              <List />
            
          </article>
        </section>
      </>
    )
  }
  
  export default TasksList
  