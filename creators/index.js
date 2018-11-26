const componentCreator = require('./componentCreator');
const containerCreator = require('./containerCreator');

const creators = {
  '--component': componentCreator,
  '--container': containerCreator,
  '-c': componentCreator,
  '-C': containerCreator,
};

module.exports = (type) => {
  const creator = creators[type];
  if (!creator) {
    const message = `\nТип ${type} не определен.`;
    throw new Error(message);
  }
  return creator;
};
