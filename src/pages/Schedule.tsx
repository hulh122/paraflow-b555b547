import type { TournamentMatch } from '../types';
import BottomNav from '../components/BottomNav';

interface DateTab {
  key: string;
  label: string;
  date: string;
  active?: boolean;
}

const dateTabs: DateTab[] = [
  { key: 'today', label: '今天', date: '3/18' },
  { key: 'tomorrow', label: '明天', date: '3/19', active: true },
  { key: 'thursday', label: '周四', date: '3/20' },
  { key: 'friday', label: '周五', date: '3/21' },
  { key: 'saturday', label: '周六', date: '3/22' }
];

const mockMatches: TournamentMatch[] = [
  {
    id: '1',
    date: '2024-03-19',
    time: '14:30 进行中',
    player1: '德约科维奇',
    player2: '纳达尔',
    tournament: 'ATP迈阿密大师赛',
    status: 'live'
  },
  {
    id: '2',
    date: '2024-03-19',
    time: '16:00',
    player1: '费德勒',
    player2: '穆雷',
    tournament: 'ATP迈阿密大师赛',
    status: 'upcoming'
  },
  {
    id: '3',
    date: '2024-03-19',
    time: '17:30 第2盘',
    player1: '蒂姆',
    player2: '兹维列夫',
    tournament: 'WTA迈阿密公开赛',
    status: 'live'
  },
  {
    id: '4',
    date: '2024-03-19',
    time: '12:00 已结束',
    player1: '小威廉姆斯',
    player2: '莎拉波娃',
    tournament: 'WTA迈阿密公开赛',
    status: 'finished'
  },
  {
    id: '5',
    date: '2024-03-19',
    time: '19:00',
    player1: '阿加西',
    player2: '桑普拉斯',
    tournament: 'ATP迈阿密大师赛',
    status: 'upcoming'
  },
  {
    id: '6',
    date: '2024-03-19',
    time: '21:30',
    player1: '大坂直美',
    player2: '巴蒂',
    tournament: 'WTA迈阿密公开赛',
    status: 'upcoming'
  }
];

function Schedule() {
  const getStatusText = (status: string): string => {
    switch (status) {
      case 'live':
        return '直播中';
      case 'upcoming':
        return '未开始';
      case 'finished':
        return '已结束';
      default:
        return '未开始';
    }
  };

  return (
    <div className="flex relative flex-col justify-between w-[390px] min-h-[844px] mx-auto">
      {/* Status bar */}
      <div>
        <div className="text-sm flex justify-between items-center h-11 pr-6 pl-6 font-medium">
          <div className="time">9:41</div>
          <div className="text-xs flex gap-1.5">
            <i className="fas fa-signal-perfect"></i>
            <i className="fas fa-wifi-strong"></i>
            <i className="fas fa-battery-three-quarters"></i>
          </div>
        </div>

        {/* Header */}
        <header className="flex items-center justify-between h-14 pr-6 pl-6 bg-white py-1.5">
          <h1 className="title-medium text-lg font-medium">赛程</h1>
          <div className="flex items-center justify-center w-6 h-6">
            <i className="fas fa-calendar-days text-[rgba(152,168,105,1)]"></i>
          </div>
        </header>

        {/* Date filter */}
        <div className="date-filter mt-3 mr-6 ml-6">
          <div className="date-tabs overflow-x-auto flex gap-2">
            {dateTabs.map((tab) => (
              <div 
                key={tab.key} 
                className={`date-tab ${tab.active ? 'active' : ''} bg-[rgba(243,243,241,1)] whitespace-nowrap flex flex-col items-center min-w-[72px] py-3 px-4 rounded-lg text-xs ${
                  tab.active ? 'bg-[rgba(152,168,105,1)] text-white' : 'text-[rgba(138,145,128,1)]'
                }`}
              >
                <span className="font-medium">{tab.label}</span>
                <span className="mt-1 text-[10px]">{tab.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <main className="flex flex-col pr-6 pb-6 pl-6">
          {mockMatches.map((match) => (
            <div key={match.id} className={`card-schedule status-${match.status} mb-3`}>
              <div className="flex flex-col flex-1">
                <div className="match-time text-[rgba(176,181,168,1)] text-[10px] font-normal mb-1">
                  {match.time}
                </div>
                <div className="match-players flex flex-1 items-center gap-2">
                  <span className="player-name text-[rgba(61,69,49,1)] text-base font-medium">
                    {match.player1}
                  </span>
                  <span className="vs-text mx-1 text-[rgba(138,145,128,1)] text-xs">vs</span>
                  <span className="player-name text-[rgba(61,69,49,1)] text-base font-medium">
                    {match.player2}
                  </span>
                </div>
              </div>
              <div className="match-info flex flex-col items-end gap-1">
                <div className={`status-indicator status-${match.status} inline-flex items-center px-2 py-1 rounded-xl text-xs font-medium`}>
                  {getStatusText(match.status)}
                </div>
                <div className="tournament-name text-[rgba(176,181,168,1)] text-[10px]">
                  {match.tournament}
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>

      <BottomNav />
    </div>
  );
}

export default Schedule;