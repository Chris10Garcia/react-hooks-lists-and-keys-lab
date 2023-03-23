import React from "react";


function NavBar(props) {
  const links = ["home", "about", "projects"];

  const linkElements = links.map(element => {
    return <a key={element} href = {"#" + element}>{element}</a>
  })

  return (
    <nav>
      {linkElements}
    </nav>
    
    );
}

export default NavBar;
