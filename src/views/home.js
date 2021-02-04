const home = () => {
  return `<div>
      <h1>Home</h1>
      <ul>
        <li>
          <a href="/" onclick="return false;">Home</a>
        </li>
        <li>
          <a href="/about" onclick="return false;">About</a>
        </li>
        <li>
          <a href="/contact" onclick="return false;">Contact</a>
        </li>
      </ul>
    </div>`;
};

export default home;
