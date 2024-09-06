const Tweet = ({ username, name, date, message }) => {
  return (
    <div className="tweet">
      <h1>{name}</h1>
      <h3 className="username">{username}</h3>
      <hr></hr>
      <br></br>
      <p>{message}</p>
      <br></br>
      <h6 className="date">{date}</h6>
      <hr></hr>
    </div>
  );
};
