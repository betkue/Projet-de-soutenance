"use client"
import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import logo from '../../public/assets/favicon.ico';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  padding: 1rem;
`;

const FormBox = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const FormTitle = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  font-weight: bold;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -0.8rem;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 3px;
    background-color: #005A31;
  }
`;

const FormImage = styled.div`
  width: 100%;
  height: 100px;
  background-color: #005A31;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const FormLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
`;

const SubmitButton = styled.button`
  background-color: #005A31;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  width: 100%;
`;

const Inscription = () => {

  const [nomDestinataire, setNomDestinataire] = useState('');
  const [numero, setNumero] = useState('');
  const [email, setEmail] = useState('');
  const [motdepasse, setMotdepasse] = useState('');
  const [motdepassec, setMotdepassec] = useState('');

  const handleNomDestinataireChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNomDestinataire(e.target.value);
  };
  const handleNumeroChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumero(e.target.value);
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleMotdepasseChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMotdepasse(e.target.value);
  };
  const handleMotdepassecChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMotdepassec(e.target.value);
  };

  return (
    <>
    <FormContainer>
      <FormBox>
        <FormTitle>Inscription</FormTitle>
        <FormImage>
          <img src="../../public/assets/favicon.ico" alt="Inscription" />
        </FormImage>
        <FormField>
          <FormLabel>Nom du Client</FormLabel>
          <FormInput type="text" placeholder="Entrez votre nom" value={nomDestinataire} onChange={handleNomDestinataireChange} />
        </FormField>
        <FormField>
          <FormLabel>Adresse e-mail</FormLabel>
          <FormInput type="email" placeholder="Entrez votre adresse e-mail" value={email} onChange={handleEmailChange}/>
        </FormField>
        <FormField>
          <FormLabel>Numéro de Téléphone</FormLabel>
          <FormInput type="tel" placeholder="Entrez votre numéro de téléphone" value={numero} onChange={handleNumeroChange}/>
        </FormField>
        <FormField>
          <FormLabel>Mot de passe</FormLabel>
          <FormInput type="password" placeholder="Entrez votre mot de passe" value={motdepasse} onChange={handleMotdepasseChange}/>
        </FormField>
        <FormField>
          <FormLabel>Confirmation du mot de passe</FormLabel>
          <FormInput type="password" placeholder="Confirmez votre mot de passe" value={motdepassec} onChange={handleMotdepassecChange}/>
        </FormField>
        <SubmitButton>Valider</SubmitButton>
      </FormBox>
    </FormContainer>
    </>
  );
};

export default Inscription;