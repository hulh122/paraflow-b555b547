import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Follow from './pages/Follow';
import Schedule from './pages/Schedule';
import Ranking from './pages/Ranking';
import Data from './pages/Data';

// 获取基础路径，处理生产环境的子路径
// 在生成应用时，这个值会被替换为实际的仓库名
const basename = import.meta.env.PROD ? '/paraflow-b555b547' : '';

function App() {
  return (
    <Router basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<Follow />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;