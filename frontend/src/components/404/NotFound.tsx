import { Link } from "react-router-dom";

export default function NotFound(): JSX.Element {
  return (
    <div>
      <h1>бархатные тяги 404</h1>
      <img src="https://avatars.dzeninfra.ru/get-zen_doc/5284703/pub_6432df73f409150df59e2a43_6432df7ef409150df59e2eec/scale_1200" />
      <p>Вернуться домой:</p>
      <Link to="/">Home</Link>
    </div>
  );
}
