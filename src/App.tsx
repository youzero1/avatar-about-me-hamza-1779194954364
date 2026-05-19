import { Routes, Route } from 'react-router-dom';
import AboutPage from '@/pages/AboutPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="*" element={<AboutPage />} />
    </Routes>
  );
}
