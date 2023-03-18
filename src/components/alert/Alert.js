import React from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../../routers/Coordinator";
import {
  Alert,
  AlertButton,
  AlertContainer,
  AlertImage,
  AlertText,
} from "./styled";

export const AlertPopup = ({ image, text, onClose }) => {
  const navigate = useNavigate();

  return (
    <Alert>
      <AlertContainer>
        <AlertImage src={image} alt="Alert" />
        <AlertText>{text}</AlertText>
        <AlertButton
          onClick={() => {
            onClose();
            goToFeed(navigate);
          }}
        >
          <p>Continuar</p>
        </AlertButton>
      </AlertContainer>
    </Alert>
  );
};
