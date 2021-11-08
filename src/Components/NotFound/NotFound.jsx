import React from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import sigmund from  '../../Assets/sigmund.png';
import "./NotFound.css"

function NotFound() {
return (
<div>

    <NavBar />

<div className="div-GifNotfound">

    <img className="salut" src={sigmund} alt="test"  />
    
    
</div>

    <p className="txt-Pnotfound">La page ou la recherche que vous demandez n'existe pas, vous pouvez toujours effectuer une nouvelle recherche ou nous contacter afin de résoudre le probleme.  </p>

</div>
)
}

export default NotFound;