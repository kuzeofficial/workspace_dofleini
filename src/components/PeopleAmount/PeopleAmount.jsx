import React, { useContext } from 'react'
import { DataContext } from '../../lib/DaContext';

export const PeopleAmount = () => {
    const arrayPeopleAmEx=['Solo yo','2- 10','11- 25','26- 50','51- 100','500 +'];
    const {value,setValue}=useContext(DataContext);
    const {peopleAmount}=value;
    const styleCant={
        border: '1px solid rgba(20, 172, 172, 0.5)',
        boxShadow: '0 0 5px 0.1rem rgba(20, 172, 172, 0.3)',
        color: 'rgba(20, 172, 172, 0.9)',
    }
    
    return (
        <div className="mt-3">
        <strong>¿Cuántas personas trabajaran contigo, incluyéndote a ti?</strong>
        <div className="mt-2 displayFlex displaySmall"
        >
            {arrayPeopleAmEx.map((item)=>{
                return (
                    <button 
                    key={item}
                    className="aux btn btnPeopleAm ml-2 mt-1"
                    style={
                        peopleAmount===item
                        ?styleCant
                        :null
                    }
                    onClick={
                        (e)=>{
                            e.preventDefault();
                            setValue({
                                ...value,
                                peopleAmount:item
                            })
                        }
                    }
                    >{item}</button>
                );
            })}
        </div>
        </div>
    )
}
