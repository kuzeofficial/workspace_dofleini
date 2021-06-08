import React, { useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from '../../lib/DaContext';
import { Logo } from '../logo';
import { Text } from '../text'
import { PeopleAmount } from '../PeopleAmount/PeopleAmount'
import { ThemePicker  } from '../ThemePicker/ThemePicker';
import { Status } from '../Status/Status'
import swal from 'sweetalert2';
import { checkform  } from './checkform';

export const Form = () => {
    const {value,setValue}=useContext(DataContext);
    const FileUpload = useRef();
    const {imageProfile,workspaceName,linkWorkspace}=value;
    const [flagButton, setFlagButton] = useState(false);

    useEffect(() => {
        const flag=checkform(value);
        setFlagButton( flag);
    }, [value,setValue]);
    
    const ButtonFileHandler=(e)=>{
        e.preventDefault();
        FileUpload.current.click();
    }
    
    const handleChangeInput=(e)=>{
        const file=e.target.files[0];
        if(file){
       const url=URL.createObjectURL(e.target.files[0]);
       setValue({
           ...value,
        imageProfile:url
       }) 
    }
    }
    const handleDescartar=(e)=>{
        e.preventDefault();
        setValue({
            imageProfile:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC",
            workspaceName:"",
            linkWorkspace:"",
            peopleAmount:"",
            theme:"",
            status:""
        })
    }
    const handleGuardar=(e)=>{
        e.preventDefault();
        return swal.fire('Exito','Formulario guardado','success');
    }
    return (
        <div className="col-lg-6">
            <form>
                <div className="logo">
                    <h4>Configuracion</h4>
                    <h6 className="mt-3">
                        Logo del espacio
                    </h6>
                    <div className="logoimage">
                        <img src={imageProfile} alt="B" className="imageLogo"></img>
                        <button className="btn btnPeopleAm colorgray ml-3" 
                            onClick={ButtonFileHandler}>
                        <span className="fas fa-upload"></span>Subir Logo</button>
                        <input type= "file" style={{ display: 'none' }} ref={FileUpload}></input>
                    </div>
                    <Logo />
                    <div className="form">
                        <div > 
                            <strong> Nombre del espacio </strong>
                            <input type="text" onChange={(e) => {
                                e.preventDefault();
                                setValue({
                                    ...value,
                                    workspaceName: e.target.value
                                })
                            }}
                            value={workspaceName} className="form-control mt-2" placeholder="Ep: Mi espacio de trabajo"></input>
                        </div>
                        <div className="mt-4">
                        <strong className="mt-3">URL del espacio (direccion web)</strong>
                        <div className="input-group">
                        <input type="url" onChange={(e) => {
                            setValue({
                                ...value,
                                linkWorkspace:e.target.value
                            })
                        }}
                        value={linkWorkspace} className="form-control mt-2" placeholder="Ep: mi.dominio                                                                         .dofleini.com"></input>
                        </div>
                        </div>
                        <Text />
                        <PeopleAmount />
                        <Logo />
                        <ThemePicker />
                        <Status />
                        <div className="mt-5 mb-5">
                            <button 
                            className="btn btn-primary"
                            disabled={
                            flagButton
                                ?false
                                :true
                            }
                            onClick={handleGuardar}
                            >Guardar cambios</button>
                            <button className="btn btn-descartar ml-2"
                            onClick={handleDescartar}
                            >Descartar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
