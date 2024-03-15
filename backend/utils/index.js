const CHARATERS = [
    "Cat card 😼",
    "Defuse card 🙅‍♂️",
    "Shuffle card 🔀",
    "Exploding kitten card 💣",
  ];
  
  const generateRandomCards = () => {
    const randomDeck = [];
    for (let i = 0; i < 5; i++) {
      const index = Math.floor(Math.random() * CHARATERS,length);
      //const index = 0; // temp
      randomDeck.push(CHARATERS[index]);
    }
    return randomDeck;
  };
  
  module.exports = {
    generateRandomCards,
  };