import { useLocation } from "react-router-dom";
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const AffichageCv = () => {
  const location = useLocation();
  const { photo, nom, prenom, adresse, telephone, email, experiences, formation, competences, loisirs } = location.state || {};
  const buttonRef = useRef(null); // Référence pour le bouton

  const handleDownloadPdf = () => {
    const input = document.getElementById("cv-container");

    // Vérifiez si l'élément est présent
    if (!input) {
      console.error("Élément cv-container non trouvé");
      return;
    }

    // Masquer le bouton avant de prendre la capture
    if (buttonRef.current) {
      buttonRef.current.style.display = "none";
    }

    html2canvas(input, { scale: 2 })
      .then((canvas) => {
        const pdf = new jsPDF();
        const imgData = canvas.toDataURL("image/png");
        const imgWidth = 190; // Largeur du PDF
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Ajoutez l'image au PDF
        pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
        pdf.save(`${prenom}_${nom}_CV.pdf`);

        // Restaurer le bouton après la génération du PDF
        if (buttonRef.current) {
          buttonRef.current.style.display = "inline-block";
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la création du PDF: ", error);
        // Restaurer le bouton en cas d'erreur
        if (buttonRef.current) {
          buttonRef.current.style.display = "inline-block";
        }
      });
  };

  return (
    <>
      <div className="cv-container" id="cv-container"> {/* Conteneur principal */}
        <h1>{prenom} {nom}</h1>

        <div>
          {photo && (
            <div>
              <img src={URL.createObjectURL(photo)} alt="Photo de profil" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
            </div>
          )}
        </div>

        <div>
          <h2>Informations personnelles</h2>
          <p><strong>Nom :</strong> {prenom} {nom}</p>
          <p><strong>Adresse :</strong> {adresse}</p>
          <p><strong>Téléphone :</strong> {telephone}</p>
          <p><strong>Email :</strong> {email}</p>
        </div>

        <div>
          <h2>Expériences professionnelles</h2>
          <ul>
            {experiences.split('\n').map((experience, index) => (
              experience.trim() ? <li key={index}>{experience}</li> : null
            ))}
          </ul>
        </div>

        <div>
          <h2>Formation</h2>
          <ul>
            {formation.split('\n').map((formationItem, index) => (
              formationItem.trim() ? <li key={index}>{formationItem}</li> : null
            ))}
          </ul>
        </div>

        <div>
          <h2>Compétences</h2>
          <ul>
            {competences.split('\n').map((competence, index) => (
              competence.trim() ? <li key={index}>{competence}</li> : null
            ))}
          </ul>
        </div>

        <div>
          <h2>Loisirs</h2>
          <ul>
            {loisirs.split('\n').map((loisir, index) => (
              loisir.trim() ? <li key={index}>{loisir}</li> : null
            ))}
          </ul>
        </div>
      </div>
      <button ref={buttonRef} onClick={handleDownloadPdf} style={buttonStyle}>
        Télécharger le CV en PDF
      </button>
    </>
  );
};

// Style du bouton
const buttonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  backgroundColor: "#4CAF50", // Couleur verte
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  transition: "background-color 0.3s",
};

export default AffichageCv;
