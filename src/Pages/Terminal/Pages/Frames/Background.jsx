import React from 'react';
import BarraInferior from "../../../../Utils/barraInferior";
import Window from './Window';

function Background() {
  return (
    <>
      <div className="render">
        <Window pLargura="350px" pAltura="200px">Esta é a janela 1</Window>
      </div>
      <BarraInferior />
    </>
  );
}

export default Background;