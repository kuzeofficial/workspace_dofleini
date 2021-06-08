import React, { useContext } from 'react'
import { DataContext } from '../../lib/DaContext'

export const ThemePicker = () => {
    const colorPicker=['#39B0FF','#04B58B','#3E9C4B','#B6BC00','#E59100','#E55C00','#EE1F50','#D6198A','#B321F1'];
    const {value,setValue}=useContext(DataContext);
    const {theme}=value;
    return (
        <div>
             <strong>Color del tema</strong>
                    <div className="botonesColores mt-2">
                        {colorPicker.map((item)=>{
                            return (
                                <button 
                                key={item} 
                                className="btnColor" 
                                style={
                                theme===item
                                ?
                                {
                                    background:item,
                                    border: '3px solid white',
                                    boxShadow: `0 0 0 0.2rem ${item}`,
                                }
                                :{
                                    background:item,
                                    border: `3px solid ${item}`
                                }
                            }
                                onClick={
                                    (e)=>{
                                      e.preventDefault();      
                                      setValue({
                                          ...value,
                                          theme:`${item}`
                                      });
                                    }
                                }    
                                ></button>
                            );
                        })}                  
                        </div>
                    
        </div>
    )
}
