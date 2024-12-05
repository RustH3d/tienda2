import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext'; // Importamos el contexto

const Profile = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <p>Debes iniciar sesión para ver tu perfil.</p>;
  }

  return (
    <div>
      <h2>Perfil del usuario</h2>
      <p>Aquí puedes ver y editar tu perfil.</p>
    </div>
  );
};

export default Profile;
