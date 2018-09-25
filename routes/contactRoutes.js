const mongoose = require('mongoose');
const Contact = mongoose.model('contacts');

module.exports = app => {

  app.get('/', (req, res) => {
    res.send({ sup: 'yo'});
  });

  app.post('/api/contacts/new', (req, res) => {
    const { firstName, lastName, email } = req.body;

    const contact = new Contact ({
      firstName, // title: title
      lastName,
      email
    });

    contact.save(err => {
      if (err) return res.status(500).send(err);

      res.status(200).send(contact);
    });

  });

  app.post('/api/contacts/delete', (req, res) => {
    const { id } = req.body;

    Contact.findByIdAndRemove(id, (err, contact) => {
      if (err) return res.status(500).send(err);

      const response = {
        message: 'Yup it\'s deleted',
        id: contact._id
      };
      
      res.status(200).send(response);
    });

  });

  app.get('/api/contacts', (req, res) => {
    Contact.find((err, contacts) => {
      if (err) return res.status(500).send(err);
      
      res.status(200).send(contacts);
    });
  });

};