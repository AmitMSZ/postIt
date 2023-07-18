import { PostIt } from "./PostIt";
import { useRef, useState } from "react";
import {v4 as uuid} from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";


export const PostItList = () => {
    const [listadoPostIt, setListadoPostIt]  = useState([
        {id: uuid(),
        titulo: 'Nota 1',
        descripcion:'lorem',
        importante: true
        },
        {id: uuid(),
        titulo: 'Nota 1',
        descripcion:'lorem',
        importante: false
        }
    ]);

    const tituloRef = useRef();
    const descripcionRef = useRef();
    const importanteRef = useRef();

    const agregarPostIt = () => {
        const titulo = tituloRef.current.value;
        const descripcion = descripcionRef.current.value;
        const importante = importanteRef.current.checked;
        if (!descripcion) {
            return alert('El campo de descripción es obligatorio');
          }
        const postIt = {
            id: uuid(),
            titulo: titulo,
            descripcion: descripcion,
            importante: importante
        };
        setListadoPostIt([...listadoPostIt, postIt]);
        tituloRef.current.value = '';
        descripcionRef.current.value = '';
    };

    const eliminarPostIt = (id) => {
        const nuevaLista = listadoPostIt.filter(postIt => postIt.id !== id);
        setListadoPostIt(nuevaLista);
    };

    const setImportante = (id) => {
        const nuevaLista = [...listadoPostIt];
        const postIt = nuevaLista.find(p => p.id === id);
        postIt.importante = !(postIt.importante);
        setListadoPostIt(nuevaLista);
    };

    return(
        <div className="container">
            <h1>Listado de postIt</h1>
            <div className="d-flex my-3">
                <input type="text" ref={tituloRef} className="form-control me-2" placeholder="Ingresa el titulo del postIt!" />
                <input type="text" ref={descripcionRef} className="form-control mx-2" placeholder="Ingresa la descripcion del postIt!" required/>
                <div className="form-chek d-flex">
                    <input type="checkbox" ref={importanteRef} className="form-check-input" />
                    <label className="form-check-label mx-2">Importante!</label>
                </div>
                <button className="btn btn-outline-primary mx-2" onClick={agregarPostIt}>Agregar</button> 
            </div>
            <div className="row row-cols-1 row-cols-md-5 g-4 my-2">
                {listadoPostIt.map(postIt => 
                <PostIt nota={postIt} key={postIt.id} eliminarPostIt={eliminarPostIt}/>
                )}
            </div>
        </div>
    );
};