import React from 'react';

const Affichage = ({user ,handleEditClick,handleDeleteClick }) => {
   return (
    <tr>
        <td>{user.identite_nationale}</td>
        <td>{user.nom}</td>
        <td>{user.date_de_naissance}</td>
        <td>{user.pays_de_naissance}</td>
        <td>{user.pays_de_residence}</td>
        <td>{user.sexe}</td>
        <td>{user.etat_civil}</td>
        <td>{user.langue}</td>
        <td>
            <button type="submit" onClick={(event)=>handleEditClick(event,user)} >Action</button>
            <button type='delete' onClick={()=>handleDeleteClick(user.identite_nationale)}>suprimer</button>
        </td>
    </tr>
    );
};

export default Affichage;