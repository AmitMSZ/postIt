export const PostIt = ({nota, eliminarPostIt}) => {

    const {id ,titulo, descripcion, importante} = nota;
    const eliminarPost = () => eliminarPostIt(id);

    if (importante){
        return (
            <div className="col bg-danger my-2 me-2 rounded">
                <div className="d-flex">
                    <h1 className="text-white">{nota.titulo}</h1>
                    <button onClick={eliminarPost} className="btn"><i className="bi bi-x"></i></button>
                </div>
                <p className="text-white">{nota.descripcion}</p>
            </div>
        );
    } else { 
        return(
            <div className="col bg-warning-subtle my-2 me-2 rounded">
                <div className="d-flex">
                    <h1>{nota.titulo}</h1>
                    <button onClick={eliminarPost} className="btn"><i className="bi bi-x"></i></button>
                </div>
                <p>{nota.descripcion}</p>
            </div>
        );
    }
};