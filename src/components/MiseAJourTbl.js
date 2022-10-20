import React from 'react';

const MiseAJourTbl = ({handleEditFormChange,handleCancelClick,}) => {
    return (
        <tr>
             <td>
              <input type="number" onChange={handleEditFormChange} name="identite_nationale" placeholder="Identite_national"/>
            </td>
            <td>
            <input type="text" onChange={handleEditFormChange} name="nom" placeholder="Nom"/>
            </td>
            <td>
            <input type="text" onChange={handleEditFormChange} name="date_de_naissance" placeholder="Date de naissance"/>
            </td>
            <td>
            <input type="text" onChange={handleEditFormChange} name="pays_de_naissance" placeholder="Pays de naissance"/>
            </td>
            <td>
              <input type="text" onChange={handleEditFormChange} name="pays_de_residence" placeholder="Pays de residence"/>
            </td>
            <td>
            <input type="text" onChange={handleEditFormChange} name="sexe" placeholder="Sexe(Masculin Féminin ou Autre)"/>
            </td>
            <td>
            <input type="text" onChange={handleEditFormChange} name="etat_civil" placeholder="Etat civil"/>
            </td>
            <td>
            <input type="text" onChange={handleEditFormChange} name="langue" placeholder="Langue"/>
            </td>
            <td>
              <button type="submit">save</button>
              <button type='cancel' onClick={handleCancelClick}>Amuller</button>
            
            </td>
        </tr>
    );
};
export default MiseAJourTbl;