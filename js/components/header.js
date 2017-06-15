'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const title = $("<span>Pokédex</span>");
  header.append(title);
  return header;
}
