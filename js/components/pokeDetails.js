'use strict';

const pokeDetails = () => {
  const divModal = $('<div id="modal1" class="modal modal-fixed-footer"></div>');
  const divContent = $('<div class="modal-content"></div>');
  const p = $('<p>A bunch of text</p>');
  divContent.append(p);
  divModal.append(divContent);
  return divModal;
};
