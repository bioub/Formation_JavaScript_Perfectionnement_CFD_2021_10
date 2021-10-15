// Module ECMAScript
import { promises } from 'fs';

// PROMISE
promises
  .access('tmp')
  .catch((err) => {
    if (err.code === 'ENOENT') {
      return promises.mkdir('tmp');
    }
    throw err;
  })
  .then(() => promises.readFile('.editorconfig'))
  .then((buffer) => promises.writeFile('tmp/.editorconfig.copy', buffer))
  .then(() => console.log('COPY DONE'))
  .catch((err) => console.log(err));

// // ES2022 Top level await
try {
  try {
    await promises.access('tmp')
  } catch (err) {
    if (err.code === 'ENOENT') {
      await promises.mkdir('tmp');
    } else {
      throw err;
    }
  }

  const buffer = await promises.readFile('.editorconfig');
  await promises.writeFile('.editorconfig.copy', buffer);
  console.log('COPY DONE');
} catch (err) {
  console.log(err);
}
