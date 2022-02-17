
    const compliments = ["Gee, you're a smart cookie!",
                       "Cool shirt!",
                       "Your Javascript skills are stellar.",
                       "You're the best!",
                       "Bright smile!",
    ];

    const fortunes = [ "Believe in yourself and others will too.",
                           "Failure is the chance to do better next time.",
                           "Love is a warm fire to keep the soul warm.",
                           "Remember the birthday but never the age.",
                           "Say hello to others. You will have a happier day."
        ];

module.exports = {
    getCompliment : (req, res) => {
      
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune : (req, res) => {

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    newCompliment : (req, res) => {
         console.log(req.body)
        compliments.push(req.body.compliment)

        res.status(200).json(req.body)
    },
    deleteCompliment: (req, res) => {
        let deleteComp = Math.floor(Math.random() * (compliments.length -0));
        compliments.splice(deleteComp, 1);

        res.status(200).send(compliments)
    },
    deleteFortune: (req, res) => {
        let deleteFort = Math.floor(Math.random() * (fortunes.length -0));
        fortunes.splice(deleteFort, 1);

        res.status(200).send(fortunes)
    }


}