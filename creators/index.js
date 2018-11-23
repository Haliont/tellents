const createComponent = require('./createComponent');
const createContainer = require('./createContainer');

const creators = {
  '--component': createComponent,
  '--container': createContainer,
  '-c': createComponent,
  '-C': createContainer,
};

module.exports = (type) => {
  const creator = creators[type];
  if (!creator) {
    const message = `\nТип ${type} не определен.`;
    throw new Error(message);
  }
  return creator;
};
