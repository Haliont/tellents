const fs = require('fs');

module.exports = (name) => {
  const normalName = [name[0].toUpperCase(), name.slice(1)].join('');
  const componentPath = `./src/components/${normalName}`;
  const componentBody = `import React, { Component } from 'react';\n\nclass ${normalName} extends Component {\n  render() {\n    return (\n      <p>${normalName}</p>\n    );\n  }\n}\n\nexport default ${normalName};\n`;
  const indexBody = `import ${normalName} from './${normalName}';\n\nexport default ${normalName};\n`;

  fs.mkdir(componentPath, (err) => {
    if (err) {
      console.log('Не удалось создать компонент');
      console.log(err);
      return;
    }

    const filePath = `${componentPath}/${normalName}.js`;
    const indexPath = `${componentPath}/index.js`;
    fs.writeFileSync(filePath, componentBody);
    fs.writeFileSync(indexPath, indexBody);
    console.log(`Компонент ${normalName} создан`);
  });
};
