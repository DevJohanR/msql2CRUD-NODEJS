const express = require ("express");
const server = express();

const demons = [
    { id: 1, name: 'Bael', description: 'King of Hell with three heads: a toad, a man, and a cat.' },
    { id: 2, name: 'Paimon', description: 'King of Hell, master of arts and sciences, and a loyal servant to Lucifer.' },
    { id: 3, name: 'Buer', description: 'President of Hell, teaches moral and natural philosophy.' },
    { id: 4, name: 'Stolas', description: 'Prince of Hell, teaches astronomy and the knowledge of poisonous plants, herbs and precious stones.' },
    { id: 5, name: 'Vine', description: 'King of Hell, commands 36 legions of demons, and can tell present, past, and future.' },
    { id: 6, name: 'Zagan', description: 'King and President of Hell, can make men witty and turn water into wine.' },
    { id: 7, name: 'Belial', description: 'King of Hell, created after Lucifer. Represents lawlessness and worthlessness.' },
    { id: 8, name: 'Amdusias', description: 'King of Hell, associated with thunder and strong sound.' },
    { id: 9, name: 'Dantalion', description: 'Duke of Hell, teaches all arts and sciences, and can change the thoughts of others.' },
    { id: 10, name: 'Andromalius', description: 'Earl of Hell, catches thieves and returns stolen goods.' }
];

const angels = [
    { id: 1, name: 'Miguel', description: 'Archangel known as the protector against evil, nemesis of Bael.' },
    { id: 2, name: 'Rafael', description: 'Archangel of healing and protection, counter to Paimon.' },
    { id: 3, name: 'Gabriel', description: 'Messenger Archangel, provides guidance and revelations, opposing Buer.' },
    { id: 4, name: 'Uriel', description: 'Archangel of wisdom and light, opposes Stolas.' },
    { id: 5, name: 'Samael', description: 'Angel of justice and destruction, counter to Vine.' },
    { id: 6, name: 'Camael', description: 'Archangel of strength and courage, opposes Zagan.' },
    { id: 7, name: 'Jophiel', description: 'Archangel of enlightenment and beauty, adversary of Belial.' },
    { id: 8, name: 'Zadkiel', description: 'Archangel of mercy and forgiveness, counters Amdusias.' },
    { id: 9, name: 'Haniel', description: 'Archangel of joy and love, opposes Dantalion.' },
    { id: 10, name: 'Raguel', description: 'Archangel of justice, fairness, and harmony, nemesis of Andromalius.' }
];




server.get('/home/:name', (req, res) =>{
    console.log(req.params)
})

server.get('/demons', (req, res)=>{
    console.log(req.query)
    res.json(demons);
})

server.get('/angels', (req, res)=>{
    console.log(req.query)
    res.json(angels );
})



server.listen(3001, ()=>{
    console.log("Server on port 3001")
}) 