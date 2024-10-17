import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormCv = () => {
  const [photo, setPhoto] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [adresse, setAdresse] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [experiences, setExperiences] = useState('');
  const [formation, setFormation] = useState('');
  const [competences, setCompetences] = useState('');
  const [loisirs, setLoisirs] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const cvData = {
      photo,
      nom,
      prenom,
      adresse,
      telephone,
      email,
      experiences,
      formation,
      competences,
      loisirs,
    };
    navigate('/AffichageCv',{state:cvData}); 
  };

  return (
    <form onSubmit={handleSubmit}>
    <h2>Créer votre CV</h2>
    <div className="form-group">
      <label>Photo :</label>
      <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
    </div>
  
    <div className="form-group">
      <label>Nom :</label>
      <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
    </div>
  
    <div className="form-group">
      <label>Prénom :</label>
      <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
    </div>
  
    <div className="form-group">
      <label>Adresse :</label>
      <input type="text" value={adresse} onChange={(e) => setAdresse(e.target.value)} />
    </div>
  
    <div className="form-group">
      <label>Téléphone :</label>
      <input type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
    </div>
  
    <div className="form-group">
      <label>Email :</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
  
    <div className="form-group">
  <label>Expériences professionnelles :</label>
  <textarea 
    className="form-textarea"
    value={experiences} 
    onChange={(e) => setExperiences(e.target.value)} 
    placeholder="Décrivez vos expériences professionnelles ici..."
  ></textarea>
  {/* Afficher les expériences sous forme de liste */}
  <ul>
    {experiences.split('\n').map((experience, index) => (
      experience.trim() ? <li key={index}>{experience}</li> : null
    ))}
  </ul>
</div>

<div className="form-group">
  <label>Formation :</label>
  <textarea 
    className="form-textarea"
    value={formation} 
    onChange={(e) => setFormation(e.target.value)} 
    placeholder="Indiquez votre formation ici..."
  ></textarea>
  {/* Afficher la formation sous forme de liste */}
  <ul>
    {formation.split('\n').map((formationItem, index) => (
      formationItem.trim() ? <li key={index}>{formationItem}</li> : null
    ))}
  </ul>
</div>

<div className="form-group">
  <label>Compétences :</label>
  <textarea 
    className="form-textarea"
    value={competences} 
    onChange={(e) => setCompetences(e.target.value)} 
    placeholder="Listez vos compétences ici..."
  ></textarea>
  {/* Afficher les compétences sous forme de liste */}
  <ul>
    {competences.split('\n').map((competence, index) => (
      competence.trim() ? <li key={index}>{competence}</li> : null
    ))}
  </ul>
</div>

<div className="form-group">
  <label>Loisirs :</label>
  <textarea 
    className="form-textarea"
    value={loisirs} 
    onChange={(e) => setLoisirs(e.target.value)} 
    placeholder="Parlez de vos loisirs ici..."
  ></textarea>
  {/* Afficher les loisirs sous forme de liste */}
  <ul>
    {loisirs.split('\n').map((loisir, index) => (
      loisir.trim() ? <li key={index}>{loisir}</li> : null
    ))}
  </ul>
</div>


    <button type="submit">Soumettre</button>
  </form>
  )  
};

export default FormCv;
