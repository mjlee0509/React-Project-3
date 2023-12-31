
import Celebs from "./pages/Celebs";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Tv from "./pages/Tv";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
      <Header /> {/* Routing의 영향을 받지 않고 고정시키고 싶은 컴포넌트는 Routes 태그 밖으로 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/:title" element={<MovieDetail />} /> 
        {/* 일단 MovieDetail에 Route를 걸어주었다. */}
        {/* 일단 Movie의 title을 parameter로 넘겨받을 것이다.. */}
        <Route path="/tv" element={<Tv />} />
        <Route path="/person" element={<Celebs />} />
        <Route path="/*" element={<NotFound />} /> {/* 위에 해당하지 않는 주소로 이동했을 때에는 NotFound 페이지 띄우기*/}
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
