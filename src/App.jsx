// src/App.jsx
import { useState } from 'react';
import './App.css'

const App = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: '/zombie-fighters-images/survivor.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: '/zombie-fighters-images/scavenger.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: '/zombie-fighters-images/shadow.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: '/zombie-fighters-images/tracker.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: '/zombie-fighters-images/sharpshooter.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: '/zombie-fighters-images/medic.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: '/zombie-fighters-images/engineer.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: '/zombie-fighters-images/brawler.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: '/zombie-fighters-images/infiltrator.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: '/zombie-fighters-images/leader.png',
  },
]
)
  const handleAddFighter = (fighter) => {
    if(hasEnoughMoney(fighter.price, money) == true) {
      const teamFightersArray = [...team, fighter];
      updateMoneyBalance(fighter.price);
      removeZombieFighter(fighter.id);
      setStatusMessage("Added Successfully!");
      setTeam(teamFightersArray);
    } else {
      setStatusMessage("Not Enough Money!");
    }
  }

  const handleRemoveFighter = (fighter) => {
    const zombieFightersArray = [...zombieFighters, fighter];
    setZombieFighters(zombieFightersArray);
    removeTeamFighter(fighter.id);
    setMoney(fighter.price + money);
  }

  const removeZombieFighter = (idToRemove) => {
    //creates a new array excluding the items that don't meet the criteria
    setZombieFighters(zombieFighters.filter((fighter) => fighter.id !== idToRemove))
  }

  const removeTeamFighter = (idToRemove) => {
    setTeam(team.filter((fighter) => fighter.id !== idToRemove));
  }

  const updateMoneyBalance = (zombieFighterPrice) => {
    setMoney(money - zombieFighterPrice);
  }

  const hasEnoughMoney = (zombieFighterPrice, currentMoneyBalance) => {
    return currentMoneyBalance >= zombieFighterPrice;
  }

  const totalStrength = team.reduce((sum, fighter) => sum + fighter.strength, 0);
  const totalAgility = team.reduce((sum, fighter) => sum + fighter.agility, 0);

  return (
    <>
      <h1>Welcome to the Zombie Fighters Game!</h1>
      <h2>Your balance: ${money}</h2>
      <div className="availableForPurchase">
        <p>{statusMessage}</p>
        <ul>
          {zombieFighters.map((fighter) =>
          <li key={fighter.id}>
            <h3>
              {fighter.name}
            </h3>
            <img src={fighter.img} alt={fighter.name} />
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => {handleAddFighter(fighter)}}>Add to my team</button>
          </li>
          )}
        </ul>
      </div>
      <div className="team">
        <h3>
          Your Team
        </h3>
        {team.length === 0 ? (
          <p>Pick some team members!</p>
        ) : (
          <>
            <p>Strength: {totalStrength} </p>
            <p>Agility: {totalAgility} </p>
            <ul>
              {team.map((fighter) =>
                <li key={fighter.id}>
                  <h3>
                    {fighter.name}
                  </h3>
                  <img src={fighter.img} alt={fighter.name} />
                  <p>Price: ${fighter.price}</p>
                  <p>Strength: {fighter.strength}</p>
                  <p>Agility: {fighter.agility}</p>
                  <button onClick={() => {handleRemoveFighter(fighter)}}>Remove</button>
                </li>
              )}
            </ul>
          </>
        )}
      </div>
    </>
  );
}

export default App
