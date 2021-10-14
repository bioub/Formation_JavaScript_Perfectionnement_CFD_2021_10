class Contact {
  #prenom = 'Romain';
  hello() {
    console.log('Hello ' + this.#prenom);
  }
}

const contact = new Contact();
contact.hello();

// 
// console.log(contact.#prenom);
