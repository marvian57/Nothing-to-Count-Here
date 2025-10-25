function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? (
        <span>
          Congrats, <b>limit</b> reached!
        </span>
      ) : (
        "Simple Counter"
      )}
    </h1>
  );
}

export default Title;
