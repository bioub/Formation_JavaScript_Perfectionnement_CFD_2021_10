// Module ECMAScript
import { readFileSync, writeFileSync, readFile, writeFile, promises } from 'fs';

// SYNCHRONE
try {
  const buffer = readFileSync('.editorconfig');
  writeFileSync('.editorconfig.copy', buffer);
  console.log('COPY DONE');
} catch (err) {
  console.log(err);
}

// ASYNC
// Callback Hell / Pyramid of Doom
readFile('.editorconfig', (err, buffer) => {
  if (err) {
    console.log(err);
  } else {
    writeFile('.editorconfig.copy', buffer, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('COPY DONE');
      }
    });
  }
});

// PROMISE
promises.readFile('.editorconfig')
  .then((buffer) => promises.writeFile('.editorconfig.copy', buffer))
  .then(() => console.log('COPY DONE'))
  .catch((err) => console.log(err));

// ES2017 async / await
async function copy() {
  try {
    const buffer = await promises.readFile('.editorconfig');
    await promises.writeFile('.editorconfig.copy', buffer);
    console.log('COPY DONE');
  } catch (err) {
    console.log(err);
  }
}

copy();

// ES2022 Top level await
try {
  const buffer = await promises.readFile('.editorconfig');
  await promises.writeFile('.editorconfig.copy', buffer);
  console.log('COPY DONE');
} catch (err) {
  console.log(err);
}
