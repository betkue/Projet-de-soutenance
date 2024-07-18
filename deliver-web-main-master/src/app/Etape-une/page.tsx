"use client"

import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const CirclesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const Circle = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: white;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    margin: 0 0.75rem;
    font-size: 16px;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 400px;

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const ButtonStyle = `
  background-color: #006400;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SubmitButton = styled.button`
  ${ButtonStyle}
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  button {
    margin: 0 0.5rem;
    ${ButtonStyle}
    background-color: #ff9800; /* Couleur différente pour le bouton Modifier */
    font-size: 0.8rem;
  }
`;

const ColisItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 20px; /* Bordures ovales */
  background-color: #f0f0f0;
  margin-bottom: 0.5rem;

  &:hover {
    background-color: #e0e0e0;
    cursor: pointer;
  }
`;

const OvalStyled = styled.div`
  background-color: #ff9800;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px; /* Bordures ovales */
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30%;
`;

const NavTitle = styled.h1`
  font-size: 2rem; /* Taille de police augmentée */
  text-align: center; /* Centré horizontalement */
  margin-bottom: 1rem; /* Espace en bas du titre */
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const NavItem = styled.li`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: #ddd;
  margin-bottom: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }
`;

export default function Home() {
  const [nomColis, setNomColis] = useState('');
  const [poidsColis, setPoidsColis] = useState('');
  const [largeurColis, setLargeurColis] = useState('');
  const [longueurColis, setLongueurColis] = useState('');
  const [hauteurColis, setHauteurColis] = useState('');
  const [colisList, setColisList] = useState([]);
  const [selectedColisIndex, setSelectedColisIndex] = useState(-1); // Initialisation de selectedColisIndex
  const [formIsValid, setFormIsValid] = useState(false); // État pour vérifier la validité du formulaire

  const handleNomColisChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNomColis(e.target.value);
    checkFormValidity();
  };

  const handlePoidsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPoidsColis(e.target.value);
    checkFormValidity();
  };

  const handleLargeurChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLargeurColis(e.target.value);
    checkFormValidity();
  };

  const handleLongueurChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLongueurColis(e.target.value);
    checkFormValidity();
  };

  const handleHauteurChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHauteurColis(e.target.value);
    checkFormValidity();
  };

  const checkFormValidity = () => {
    if (
      nomColis.trim() !== '' &&
      poidsColis.trim() !== '' &&
      largeurColis.trim() !== '' &&
      longueurColis.trim() !== '' &&
      hauteurColis.trim() !== ''
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  };

  const handleAjouterClick = () => {
    if (!formIsValid) return;

    // Ajouter le colis à la liste
    setColisList([
      ...colisList,
      {
        nom: nomColis,
        poids: poidsColis,
        dimensions: {
          largeur: largeurColis,
          longueur: longueurColis,
          hauteur: hauteurColis
        }
      }
    ]);

    // Réinitialiser le formulaire après l'ajout
    setNomColis('');
    setPoidsColis('');
    setLargeurColis('');
    setLongueurColis('');
    setHauteurColis('');
    setFormIsValid(false); // Réinitialiser la validité du formulaire
  };

  const handleSelectColis = (index: number) => {
    setSelectedColisIndex(index); // Mettre à jour selectedColisIndex lorsqu'un colis est sélectionné
  };

  const handleModifier = () => {
    if (selectedColisIndex !== -1) {
      // Copier le colis sélectionné
      const selectedColis = colisList[selectedColisIndex];

      // Mettre à jour les valeurs du formulaire avec les détails du colis sélectionné
      setNomColis(selectedColis.nom);
      setPoidsColis(selectedColis.poids);
      setLargeurColis(selectedColis.dimensions.largeur);
      setLongueurColis(selectedColis.dimensions.longueur);
      setHauteurColis(selectedColis.dimensions.hauteur);

      // Réinitialiser selectedColisIndex après modification
      setSelectedColisIndex(-1);
    }
  };

  const handleSupprimer = () => {
    if (selectedColisIndex !== -1) {
      // Filtrer la liste pour exclure le colis sélectionné
      const updatedColisList = colisList.filter((colis, index) => index !== selectedColisIndex);
      setColisList(updatedColisList);

      // Réinitialiser le formulaire après suppression
      setNomColis('');
      setPoidsColis('');
      setLargeurColis('');
      setLongueurColis('');
      setHauteurColis('');

      // Réinitialiser selectedColisIndex après suppression
      setSelectedColisIndex(-1);
    }
  };

  return (
    <>
      <div className="demo-page">
        <main className="demo-page-content">
          <section>
            <CirclesContainer>
              <Circle color="#006400">1</Circle>
              <Circle color="#ff9800">2</Circle>
              <Circle color="#ff9800">3</Circle>
            </CirclesContainer>
            <h1>Renseigner les informations du colis !</h1>

            <FormField className="nice-form-group">
              <label>Nom</label>
              <input
                type="text"
                placeholder="Nom du colis"
                value={nomColis}
                onChange={handleNomColisChange}
              />
            </FormField>

            <FormField className="nice-form-group">
              <label>Poids</label>
              <input
                type="text"
                placeholder="Poids du colis"
                value={poidsColis}
                onChange={handlePoidsChange}
              />
            </FormField>

            <FormField className="nice-form-group">
              <label>Dimensions - Largeur</label>
              <input
                type="text"
                placeholder="Largeur du colis"
                value={largeurColis}
                onChange={handleLargeurChange}
              />
            </FormField>

            <FormField className="nice-form-group">
              <label>Dimensions - Longueur</label>
              <input
                type="text"
                placeholder="Longueur du colis"
                value={longueurColis}
                onChange={handleLongueurChange}
              />
            </FormField>

            <FormField className="nice-form-group">
              <label>Dimensions - Hauteur</label>
              <input
                type="text"
                placeholder="Hauteur du colis"
                value={hauteurColis}
                onChange={handleHauteurChange}
              />
            </FormField>

            <div className="mt-5 grid grid-cols-2 gap-60">
              <SubmitButton onClick={handleAjouterClick} disabled={!formIsValid}>
                Ajouter
              </SubmitButton>

              <Link
                href={colisList.length > 0 ? "./Etape-deux" : "#"} // Redirige seulement si au moins un colis est ajouté
                className={`bg-primary text-white text-center hover:bg-primary-300 py-2 px-6 rounded text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg btn-right ${
                  colisList.length === 0 ? 'disabled' : ''
                }`}
              >
                Suivant
              </Link>
            </div>
          </section>

          <footer>Made by ♥ Delivers</footer>
        </main>

        <div className="demo-page-navigation">
          <StyledNav>
            <NavTitle>Colis !</NavTitle>
            <NavList>
              {colisList.map((colis, index) => (
                <NavItem key={index} onClick={() => handleSelectColis(index)}>
                  {colis.nom}
                </NavItem>
              ))}
            </NavList>
            {selectedColisIndex !== -1 && (
              <ActionButtons>
                <button onClick={handleModifier}>Modifier</button>
                <button onClick={handleSupprimer}>Supprimer</button>
              </ActionButtons>
            )}
          </StyledNav>
        </div>
      </div>
    </>
  );
}
