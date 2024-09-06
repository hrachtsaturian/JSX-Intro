const MAX_NAME_LENGTH_TO_SHOW = 6;

const Person = ({ name, age, hobbies }) => {
  {
    const voteText = age >= 18 ? "Go vote!" : "Go study!";

    const hobbiesLIs = hobbies.map((hobby) => <li>{hobby}</li>);
    return (
      <div>
        <p>Learn some information about this person:</p>
        <ul>
          <li>Name: {name.slice(0, MAX_NAME_LENGTH_TO_SHOW)}</li>
          <li>Age: {age}</li>
          <li>Hobbies:</li>
          <ul>{hobbiesLIs}</ul>
        </ul>
        <h3>{voteText}</h3>
        <hr></hr>
      </div>
    );
  }
};
