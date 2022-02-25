export default function Task() {
    var enterButton = document.getElementById("addTarefa");
    var input = document.getElementById("tarefaInput");

    return (
        <>
            <div>
                <input type="text" id="tarefaInput" placeholder="Add Tarefa"/>
                <button id="addTarefa">add tarefa</button>
            </div>
            <div>
                <ul id="lista"></ul>
            </div>
        </>
    );
}