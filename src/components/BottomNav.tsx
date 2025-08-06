import { useNavigate, useLocation } from 'react-router-dom';
import type { TabType } from '../types';

interface TabConfig {
  key: TabType;
  icon: string;
  label: string;
  path: string;
}

const tabs: TabConfig[] = [
  { key: 'follow', icon: 'fas fa-heart', label: '关注', path: '/' },
  { key: 'schedule', icon: 'fas fa-calendar-days', label: '赛程', path: '/schedule' },
  { key: 'ranking', icon: 'fas fa-trophy', label: '排名', path: '/ranking' },
  { key: 'data', icon: 'fas fa-chart-bar', label: '数据', path: '/data' }
];

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabClick = (path: string) => {
    navigate(path);
  };

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <div className="flex flex-col mt-6">
      <nav className="bg-white flex justify-around items-center pt-6 pr-6 pb-6 pl-6 border-t border-solid border-[rgba(232,240,216,1)]">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => handleTabClick(tab.path)}
            className={`tab-item flex flex-col flex-1 items-center py-2 text-xs ${
              isActive(tab.path) 
                ? 'text-[rgba(152,168,105,1)]' 
                : 'text-[rgba(149,165,166,1)]'
            }`}
          >
            <div className="flex justify-center items-center w-6 h-6 mb-1">
              <i className={tab.icon}></i>
            </div>
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
      <div className="flex justify-center items-center h-[34px] bg-white">
        <div className="w-[134px] h-[5px] bg-[rgba(214,214,214,1)] rounded-[3px]"></div>
      </div>
    </div>
  );
}

export default BottomNav;