interface Props {
  user: object;
  setUser: () => void;
}

const Game = ({ user, setUser }: Props) => {
  return <button onClick={setUser}>Game</button>;
};

export default Game;
