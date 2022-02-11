module.exports = {
    getCompliment : (req, res) => {
        const compliments = ["Gee, you're a smart cookie!",
                           "Cool shirt!",
                           "Your Javascript skills are stellar.",
                           "Believe in yourself and others will too.",
                           "Failure is the chance to do better next time.",
                           "Love is a warm fire to keep the soul warm.",
                           "Remember the birthday but never the age.",
                           "Say hello to others. You will have a happier day."
        ];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
     
     createCompliment: (req, res) => {
        let addCompliment = req.body
        let newCompliment = addCompliment
        compliments.push(newCompliment)
        res.status(200).send(compliments)
    },

}