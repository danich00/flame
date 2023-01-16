import Head from "./component/head";
import Main from "./component/main";
import './App.css';

export default function App () {
  return (
    <div className="font-Karma">
      {/* Head */}
      <div className="">
        <Head />       
      </div>

      <div className="">
        <Main />
      </div>

      <div className="">
        <Main />
      </div>

      <div className="">
        <Main />
      </div>

    </div>
  );
}; 