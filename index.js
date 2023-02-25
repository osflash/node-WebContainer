// run `node index.js` in the terminal

import axios from 'axios';

axios
  .get('https://api.github.com/users/osflash')
  .then(({ data }) => console.log(data));

console.log(`Hello Node.js v${process.versions.node}!`);
