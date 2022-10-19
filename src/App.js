import React, {useState,Fragment} from 'react';
import './App.css';
import data from './mock_data.json';
import { nanoid } from 'nanoid';
import MiseAJourTbl from './components/MiseAJourTbl';
import Affichage from './components/Affichage';


function App() {
  const [users, setUsers]=useState(data);

  const [AddFormData, setAddFormData]= useState({
    identite_nationale:'',
    nom:'',
    date_de_naissance:'',
    pays_de_naissance:'',
    pays_de_residence:'',
    sexe:'',
    etat_civil:'',
    langue:''
  });
  const [editFormData, setEditFormData] = useState({
    identite_nationale:'',
    nom:'',
    date_de_naissance:'',
    pays_de_naissance:'',
    pays_de_residence:'',
    sexe:'',
    etat_civil:'',
    langue:''
  })

  const [editUseridentite_nationale, setEdituseridentite_nationale]=useState(null);

  const handleAddFormChange=(event)=>{
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...AddFormData};
    newFormData[fieldName]=fieldValue;

    setAddFormData(newFormData);

  };

  const handleEditFormChange = (event)=>{
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData};
    newFormData[fieldName]=fieldValue;
    
    setEditFormData(newFormData)
  };
  
  const handleCancelClick = () =>{
    setEdituseridentite_nationale(null);
  };

  const handleDeleteClick = (useridentite_nationale) =>{
    const newUsers=[...users];

    const index = users.findIndex((user)=>user.identite_nationale===useridentite_nationale);
    newUsers.splice(index,1);
    setUsers(newUsers);
    
  };

 

  const handleAddFormSubmit=(event)=>{
    event.preventDefault()

    const newUser={
      identite_nationale:nanoid(),
      nom: AddFormData.nom,
      date_de_naissance: AddFormData.date_de_naissance,
      pays_de_naissance: AddFormData.phoneNumber,
      pays_de_residence: AddFormData.pays_de_residence,
      sexe: AddFormData.sexe,
      etat_civil: AddFormData.etat_civil,
      langue: AddFormData.langue
    }
    const newUsers = [...users,newUser];
    setUsers(newUsers)
  };
  const handleEditFormSubmit=(event)=>{
    event.preventDefault()

    const editedUser={
      identite_nationale:editUseridentite_nationale,
      nom: editFormData.nom,
      date_de_naissance: editFormData.date_de_naissance,
      pays_de_naissance:editFormData.pays_de_naissance,
      pays_de_residence:editFormData.pays_de_residence,
      sexe:editFormData.sexe,
      etat_civil:editFormData.etat_civil,
      langue:editFormData.langue

    }
    const newUsers = [...users];
    const index = users.findIndex((user)=>user.identite_nationale === editUseridentite_nationale);
    newUsers[index] = editedUser;

    setUsers(newUsers);
    setEdituseridentite_nationale(null);
  };
  
  const handleEditClick = (event,user)=>{
    event.preventDefault();
    setEdituseridentite_nationale(user.identite_nationale);
    const formValues={
      identite_nationale: user.identite_nationale,
      nom: user.nom,
      date_de_naissance: user.date_de_naissance,
      pays_de_naissance: user.pays_de_naissance,
      pays_de_residence: user.pays_de_residence,
      sexe: user.sexe,
      etat_civil: user.etat_civil,
      langue: user.langue

    }
    setEditFormData(formValues);
  };


  return (
    <div className="App">
        <form onSubmit={handleEditFormSubmit} >
          <table>
            <thead>
              <tr>
                <th>Identite_national</th>
                <th>Nom</th>
                <th>date_de_naissance</th>
                <th>Pays_de_naissance</th>
                <th>Pays_de_residence</th>
                <th>sexe</th>
                <th>Etat_civil</th>
                <th>Langue</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                  <Fragment>
                    {editUseridentite_nationale === user.identite_nationale ? (
                           <MiseAJourTbl
                           editFormData={editFormData}
                           handleEditFormChange={handleEditFormChange}
                           handleCancelClick={handleCancelClick}
                           />
                      ):(
                      <Affichage
                      user={user}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                      />
            
                      )}
            
                  </Fragment>
               ))}
            </tbody>
          </table>
        </form>
        
        <form onSubmit={handleAddFormSubmit} onChange={ handleAddFormChange} >
          <ul>
            <li>
              <input type="number" name="identite_nationale" placeholder="Identite_national"/>
            </li>
            <li>
            <input type="text" name="nom" placeholder="Nom"/>
            </li>
            <li>
            <input type="text" name="date_de_naissance" placeholder="Date de naissance"/>
            </li>
            <li>
            <input type="text" name="pays_de_naissance" placeholder="Pays de naissance"/>
            </li>
            <li>
              <input type="text" name="pays_de_residence" placeholder="Pays de residence"/>
            </li>
            <li>
            <input type="text" name="sexe" placeholder="Sexe(Masculin Féminin Autre)"/>
            </li>
            <li>
            <input type="text" name="etat_civil" placeholder="Etat civil"/>
            </li>
            <li>
            <input type="text" name="langue" placeholder="Langue"/>
            </li>
            <li>
            <button type="submit">Inserstion</button>
            </li>
          </ul>
        </form>
    </div>
  );
}

export default App;
