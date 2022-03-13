import React, { useState } from 'react';
import { PrimaryButton } from '../Button';
import './Header.scss';

const Header = ({ loggedIn }) => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="header">
      <p className="brand">Career Friend</p>
      {loggedIn && <PrimaryButton text="Menu" onClick={() => setMenuOpen(!menuOpen)} />}
    </div>
  );
}

export default Header;