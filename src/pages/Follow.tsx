import type { Player } from '../types';
import BottomNav from '../components/BottomNav';

const mockPlayers: Player[] = [
  {
    id: '1',
    name: '诺瓦克·德约科维奇',
    ranking: 1,
    avatar: 'https://static-dev.paraflowcontent.com/public/resource/image/164112a8-ffd2-470e-b6cc-b04ae70cbe9a.jpeg',
    upcomingMatches: [
      {
        id: '1',
        date: '今天',
        tournament: '法国公开赛 1/4决赛',
        status: 'live'
      },
      {
        id: '2',
        date: '明天',
        tournament: '法国公开赛 半决赛',
        status: 'upcoming'
      }
    ],
    rankingTrend: [1, 2, 1]
  },
  {
    id: '2',
    name: '拉斐尔·纳达尔',
    ranking: 4,
    avatar: 'https://static-dev.paraflowcontent.com/public/resource/image/6f984b4f-25f4-448e-bc82-1978074a476f.jpeg',
    upcomingMatches: [
      {
        id: '3',
        date: '6月8日',
        tournament: '温布尔登 首轮',
        status: 'upcoming'
      }
    ],
    rankingTrend: [5, 4, 4]
  },
  {
    id: '3',
    name: '卡洛斯·阿尔卡拉斯',
    ranking: 2,
    avatar: 'https://static-dev.paraflowcontent.com/public/resource/image/539740ba-23ad-43f2-b5bc-de780c803517.jpeg',
    upcomingMatches: [
      {
        id: '4',
        date: '6月5日',
        tournament: '女王杯 首轮',
        status: 'upcoming'
      }
    ],
    rankingTrend: [3, 2, 2]
  }
];

function Follow() {
  return (
    <div className="flex relative flex-col justify-between w-[390px] min-h-[844px] mx-auto">
      {/* Status bar */}
      <div>
        <div className="text-sm flex justify-between items-center h-11 pr-6 pl-6 font-medium bg-white">
          <div className="time">9:41</div>
          <div className="text-xs flex gap-1.5">
            <i className="fas fa-signal-perfect"></i>
            <i className="fas fa-wifi-strong"></i>
            <i className="fas fa-battery-three-quarters"></i>
          </div>
        </div>

        {/* Header */}
        <header className="follow-page-header flex justify-between items-center h-14 pr-6 pl-6 py-1.5">
          <h1 className="text-xl font-medium text-[rgba(61,69,49,1)]">关注</h1>
          <div className="flex items-center gap-4">
            <button className="nav-icon-button">
              <i className="fas fa-bell"></i>
            </button>
            <button className="nav-icon-button">
              <i className="fas fa-gear"></i>
            </button>
          </div>
        </header>

        {/* Main content */}
        <main className="flex flex-col pt-6 pr-6 pb-6 pl-6">
          {mockPlayers.map((player) => (
            <div key={player.id} className="player-card">
              {/* Player info section */}
              <div className="player-info-section">
                <img 
                  className="player-avatar" 
                  alt="Professional tennis player headshot" 
                  src={player.avatar}
                />
                <div className="flex-1">
                  <div className="player-name">{player.name}</div>
                  <div className="current-ranking">ATP排名 #{player.ranking}</div>
                </div>
                <div className="ranking-badge">ATP #{player.ranking}</div>
              </div>

              {/* Upcoming matches */}
              <div className="upcoming-matches">
                <div className="section-title">未来赛程</div>
                {player.upcomingMatches.map((match) => (
                  <div key={match.id} className="match-item">
                    <div className="match-date">{match.date}</div>
                    <div className="match-tournament">{match.tournament}</div>
                    <div className={`match-status-badge match-status-${match.status}`}>
                      {match.status === 'live' ? '进行中' : '待开始'}
                    </div>
                  </div>
                ))}
              </div>

              {/* Ranking trend */}
              <div className="ranking-trend-section">
                <div className="trend-title">排名走势 (过去4周)</div>
                <div className="trend-chart">
                  <img 
                    className="w-[200px] h-[60px] max-w-full" 
                    alt={`排名趋势图: ${player.rankingTrend.join(' -> ')}`}
                    src="https://static-dev.paraflowcontent.com/public/resource/image/7d609916-22a3-4117-b749-860b2c39a9f2.svg"
                    style={{backgroundColor: 'transparent'}}
                  />
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

export default Follow;