function Fun() {
  let arr = [];

  for (let i = 1; i < 71; i++) {
    let url = `https://i.pravatar.cc/150?img=${i}`;
    arr.push(<img key={i} src={url} alt="img" />);
  }
  return <>{arr}</>;
}

export default Fun;
