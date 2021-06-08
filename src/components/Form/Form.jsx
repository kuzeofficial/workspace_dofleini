import React, { useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from '../../lib/DaContext';
import { Logo } from '../logo';

export const Form = () => {
    const {data,setdata}=useContext(DataContext);
    const FileUpload = useRef();
    const ButtonFileHandler = (event) ={
        event.preventDefault();
        FileUpload.current.click();
    };
    return (
        <div className="col-lg-6">
            <form>
                <div className="logo">
                    <h4>Configuracion</h4>
                    <h6 className="mt-3">
                        Logo del espacio
                    </h6>
                    <div className="logoimage">
                        <img src={} alt="B" className="imageLogo"></img>
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
                                event.preventDefault();
                                setdata({
                                    ...data,
                                    workspaceName: event.target.value
                                })
                            }}
                            value={workspaceName} className="form-control mt-2" placeholder="Ep: Mi espacio de trabajo"></input>
                        </div>
                        <div className="mt-4">
                            <strong className="mt-3">URL del espacio (direccion web)</strong>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
