"use client"

import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import Link from "next/link";

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

const SubmitButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
`;

export default function Home() {

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [numero, setNumero] = useState('');
  const [adresse, setAdresse] = useState('');
  const [ville, setVille] = useState('');
  const [quartier, setQuartier] = useState('');
  const [email, setEmail] = useState('');

  const handleNomChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNom(e.target.value);
  };
  const handlePrenomChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrenom(e.target.value);
  };
  const handleNumeroChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumero(e.target.value);
  };
  const handleAdresseChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAdresse(e.target.value);
  };
  const handleVilleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVille(e.target.value);
  };
  const handleQuartierChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuartier(e.target.value);
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
 
  return (
    <>

      <div className="demo-page">
        <div className="demo-page-navigation">
        </div>
        <main className="demo-page-content">

        <section>
          <CirclesContainer>
           <Circle color="#006400">1</Circle> 
           <Circle color="#006400">2</Circle>
           <Circle color="#ff9800">3</Circle>
          </CirclesContainer>
            <div className="href-target" id="icons"></div>
            <h1>
              Renseigner les informations du destinataire !
            </h1>

            <div className="nice-form-group">
              <label>Nom</label>
              <input type="text" placeholder="Her name" value={nom} onChange={handleNomChange} />
            </div>

            <div className="nice-form-group">
              <label>Prénom</label>
              <input type="text" placeholder="Her surname" value={prenom} onChange={handlePrenomChange} />
            </div>

            <div className="nice-form-group">
              <label>Numéro de téléphone</label>
              <input type="tel" placeholder="Her phonenumber" value={numero} onChange={handleNumeroChange} className="icon-left" />
            </div>

            <div className="nice-form-group">
              <label>Adresse</label>
              <input type="text" placeholder="Her adress" value={adresse} onChange={handleAdresseChange} />
            </div>

            <div className="nice-form-group">
              <label>Ville</label>
              <input type="text" placeholder="Her town" value={ville} onChange={handleVilleChange} />
            </div>

            <div className="nice-form-group">
              <label>Quartier</label>
              <input type="text" placeholder="Her quarter" value={quartier} onChange={handleQuartierChange} />
            </div>

            <div className="nice-form-group">
              <label>Email</label>
              <input type="email" placeholder="Her email" value={email} onChange={handleEmailChange} className="icon-left" />
            </div>

           <div className="mt-5">
            <Link href="./Etape-trois" className="bg-primary text-white hover:bg-primary-300 py-2 px-6 rounded text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"  data-aos="fade-up" data-aos-delay="250">Valider</Link>
            </div>

          </section>

           <footer>Made by ♥ Delivers</footer>

        </main>
      </div>
    </>
  )
}