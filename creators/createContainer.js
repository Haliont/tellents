const fs = require('fs');

module.exports = (name) => {
  const normalName = [name[0].toUpperCase(), name.slice(1)].join('');
  const containerPath = `./src/containers/${normalName}.js`;
  const containerBody = `import { connect } from 'react-redux';\n// import { actionName } from '../reducers/reducerName';\nimport Component from '../components/${normalName}';\n\nconst mapStateToProps = () => ({});\n\nexport default connect(\n  mapStateToProps,\n  // { actionName },\n)(Component);\n`;

  try {
    fs.writeFileSync(containerPath, containerBody);
    console.log(`Контейнер ${normalName} создан`);
  } catch (err) {
    console.log('Не удалось создать контейнер');
    console.log(err);
  }
};
