import React, { useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from '../../lib/DaContext';
import { Logo } from '../logo';

export const Form = () => {
    const {value,setValue}=useContext(DataContext);
    const FileUpload = useRef();
    const {imageProfile,workspaceName,linkWorkspace}=value;

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
                        <button className="btn btnPeopleAmou colorgray ml-3" 
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
                    </div>
                </div>
            </form>
        </div>
    )
}
