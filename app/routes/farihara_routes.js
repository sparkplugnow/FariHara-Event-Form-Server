module.exports = function(app, db) {
  /* APP POST */

  app.post("/customers", (req, res) => {
    const customer = {
      email: req.body.email,
      phone: req.body.phone,
      eventDate: req.body.eventdate,
      eventName: req.body.eventname,
      groomName: req.body.groomsname,
      // brideName: req.body.bridesname,
      weddingLocation: req.body.weddinglocation,
      weddingColourTheme: req.body.weddingcolourtheme,
      // bridesmaidDressColour: req.body.bridesmaiddresscolour,
      weddingDate: req.body.weddingdate,
      weddingParty: req.body.weddingparty,
      // weddingCloth: req.body.weddingcloth,
      colourPreference: req.body.colourpreference,
      // fabricLine: req.body.fabricline
    };

    // const customer = {
    //  eventName: 'Wedding with Sauce',
    //  groomName: 'FineBoy',
    //  brideName: 'Damsel',
    //  weddingLocation: 'Los Angeles',
    //  weddingColourTheme: 'Mocha Green',
    //  bridesmaidDressColour: 'Red',
    //  weddingDate: 'Tuesday',
    //  weddingParty: 'Yes',
    //  weddingCloth: 'Suit',
    //  colourPreference: 'Black',
    //  fabricLine: 'Associate $475'
    // }

    db.collection("customers").insert(customer, (err, result) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  /* END OF APP POST */

  /* BEGINNING OF APP GET */

  app.get("/customers", (req, res) => {
    const result = db
      .collection("customers")
      .find({})
      .toArray((err, item) => {
        if (err) console.log(err);
        res.send(item);
      });
  });

  /* END OF APP GET */
};
