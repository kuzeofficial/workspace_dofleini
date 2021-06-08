import React from 'react'

export const Text = () => {
    return (
        <div className="displayFlex mt-4">
        <i className="fa fa-info-circle mt-1"></i>
        <div className="ml-1">
        <p>Puedes cambiar la URL de tu espacio (dirección web) en cualquier momento, pero por cortesía hacia tus companeros de trabajo y otros usuarios de Plankton, porfavor no lo hagas muy seguido </p>
        <p>Nota: Si cambias la URL de tu espacio, Plankton automáticamente redireccionará desde la antigua dirección hacia la nueva. En cualquier caso, deberías asegurarte que tus companeros sepan acerca del cambio porque la dirección anterior pasara a estar libre y puede ser usada por otro espacio en el futuro</p>
        </div>
        </div>
    );
}
