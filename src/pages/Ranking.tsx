import BottomNav from '../components/BottomNav';

interface RankingPlayer {
  id: string;
  name: string;
  country: string;
  ranking: number;
  points: string;
  avatar: string;
}

const mockRankingPlayers: RankingPlayer[] = [
  {
    id: '1',
    name: '诺瓦克·德约科维奇',
    country: '塞尔维亚',
    ranking: 1,
    points: '9,945',
    avatar: 'https://static-dev.paraflowcontent.com/public/resource/image/2e6d051e-e2e2-4b77-939b-d3afe3839339.jpeg'
  },
  {
    id: '2',
    name: '卡洛斯·阿尔卡拉斯',
    country: '西班牙',
    ranking: 2,
    points: '8,855',
    avatar: 'https://static-dev.paraflowcontent.com/public/resource/image/2f5f94f7-3c2f-4c3c-bda8-8675c7ef7b3e.jpeg'
  },
  {
    id: '3',
    name: '丹尼尔·梅德韦杰夫',
    country: '俄罗斯',
    ranking: 3,
    points: '6,330',
    avatar: 'https://static-dev.paraflowcontent.com/public/resource/image/de85fbda-07af-444f-a94f-8b0c6f03b207.jpeg'
  },
  {
    id: '4',
    name: '雅尼克·辛纳',
    country: '意大利',
    ranking: 4,
    points: '5,490',
    avatar: 'https://static-dev.paraflowcontent.com/public/resource/image/3c4285b9-4d84-4bee-9f6f-8655787c29b2.jpeg'
  },
  {
    id: '5',
    name: '斯特凡诺斯·西西帕斯',
    country: '希腊',
    ranking: 5,
    points: '4,785',
    avatar: 'https://static-dev.paraflowcontent.com/public/resource/image/dc60cc9d-957e-4568-81ab-87302e628018.jpeg'
  },
  {
    id: '6',
    name: '安德烈·卢布列夫',
    country: '俄罗斯',
    ranking: 6,
    points: '4,200',
    avatar: 'https://static-dev.paraflowcontent.com/public/resource/image/6688f0ad-ab28-4eb6-bc64-b6cd879a58dd.jpeg'
  },
  {
    id: '7',
    name: '霍尔格·鲁内',
    country: '丹麦',
    ranking: 7,
    points: '3,855',
    avatar: 'https://static-dev.paraflowcontent.com/public/resource/image/8bdac1e6-eb16-4af6-9260-c01610e58649.jpeg'
  },
  {
    id: '8',
    name: '卡斯珀·鲁德',
    country: '挪威',
    ranking: 8,
    points: '3,560',
    avatar: 'https://static-dev.paraflowcontent.com/public/resource/image/45fe0eab-bac9-4721-9174-45c2be57fc93.jpeg'
  }
];

function Ranking() {
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
        <header className="flex items-center justify-between h-14 pr-6 pl-6 bg-white py-1.5">
          <h1 className="title-medium text-lg font-medium">排名</h1>
          <div className="flex items-center justify-center w-6 h-6">
            <i className="fas fa-search text-[rgba(152,168,105,1)]"></i>
          </div>
        </header>

        {/* Filter tabs */}
        <div className="filter-tabs bg-white flex gap-2 py-3 px-3">
          <div className="filter-tab active bg-[rgba(152,168,105,1)] text-white text-center flex-1 py-2 px-4 rounded-[20px] text-sm font-medium">
            ATP男单
          </div>
          <div className="filter-tab bg-[rgba(243,243,241,1)] text-[rgba(61,69,49,1)] text-center flex-1 py-2 px-4 rounded-[20px] text-sm font-medium">
            WTA女单
          </div>
          <div className="filter-tab bg-[rgba(243,243,241,1)] text-[rgba(61,69,49,1)] text-center flex-1 py-2 px-4 rounded-[20px] text-sm font-medium">
            ATP双打
          </div>
        </div>

        {/* Search bar */}
        <div className="search-bar bg-white mb-3 py-3 px-3">
          <input
            type="text"
            className="search-input bg-[rgba(239,239,239,1)] w-full h-10 px-4 text-[rgba(61,69,49,1)] rounded-lg text-sm"
            placeholder="搜索球员姓名"
          />
        </div>

        {/* Main content */}
        <main className="flex flex-col pr-6 pb-6 pl-6">
          {mockRankingPlayers.map((player) => (
            <div key={player.id} className="ranking-item bg-white flex items-center h-[72px] mb-2 px-4 py-4 rounded-lg">
              <div className="ranking-position text-center w-10 text-[rgba(152,168,105,1)] text-xl font-medium">
                {player.ranking}
              </div>
              <img 
                className="avatar avatar-medium w-[50px] h-[50px] object-cover border-2 border-white rounded-full" 
                alt={`${player.name} tennis player headshot`} 
                src={player.avatar}
              />
              <div className="player-info flex-1 ml-4">
                <div className="player-name mb-1 text-[rgba(61,69,49,1)] text-base font-medium">
                  {player.name}
                </div>
                <div className="player-country text-[rgba(138,145,128,1)] text-xs">
                  {player.country}
                </div>
              </div>
              <div className="player-points text-right text-[rgba(152,168,105,1)] text-sm font-medium">
                {player.points}
              </div>
            </div>
          ))}
        </main>
      </div>

      <BottomNav />
    </div>
  );
}

export default Ranking;