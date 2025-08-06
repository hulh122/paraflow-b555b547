import BottomNav from '../components/BottomNav';

interface DataCard {
  id: string;
  value: string;
  label: string;
}

interface StatRow {
  id: string;
  name: string;
  value: string;
}

const dataCards: DataCard[] = [
  { id: '1', value: '78%', label: '一发成功率' },
  { id: '2', value: '45', label: '制胜分' },
  { id: '3', value: '23', label: '非受迫失误' },
  { id: '4', value: '12', label: '双误' }
];

const statRows: StatRow[] = [
  { id: '1', name: '接发球得分率', value: '34%' },
  { id: '2', name: '网前得分率', value: '68%' },
  { id: '3', name: '破发成功率', value: '24%' },
  { id: '4', name: '二发得分率', value: '52%' },
  { id: '5', name: '平均球速', value: '185 km/h' }
];

function Data() {
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
        <header className="flex justify-between items-center h-14 pr-6 pl-6 py-1.5">
          <div className="flex items-center gap-3">
            <div className="bg-transparent flex justify-center items-center w-6 h-6">
              <i className="fas fa-chart-bar text-[rgba(152,168,105,1)]"></i>
            </div>
            <h1 className="text-lg font-medium">数据中心</h1>
          </div>
          <div className="bg-transparent flex justify-center items-center w-6 h-6">
            <i className="fas fa-filter text-[rgba(138,145,128,1)]"></i>
          </div>
        </header>

        {/* Main content */}
        <main className="flex flex-col pr-6 pb-6 pl-6">
          {/* Tab bar */}
          <div className="tab-bar bg-white flex mb-4 p-2 rounded-lg">
            <button className="tab-button active bg-[rgba(152,168,105,1)] text-white text-center flex-1 py-2 px-3 rounded-md text-xs font-medium">
              球员统计
            </button>
            <button className="tab-button bg-transparent text-[rgba(138,145,128,1)] text-center flex-1 py-2 px-3 rounded-md text-xs font-medium">
              对阵数据
            </button>
            <button className="tab-button bg-transparent text-[rgba(138,145,128,1)] text-center flex-1 py-2 px-3 rounded-md text-xs font-medium">
              赛事分析
            </button>
          </div>

          {/* Data grid */}
          <div className="data-grid grid grid-cols-2 gap-3 mb-3">
            {dataCards.map((card) => (
              <div key={card.id} className="data-card bg-white mb-3 p-4 rounded-lg">
                <div className="data-value mb-1 text-[rgba(61,69,49,1)] text-xl font-medium">
                  {card.value}
                </div>
                <div className="data-label text-[rgba(138,145,128,1)] text-xs">
                  {card.label}
                </div>
              </div>
            ))}
          </div>

          {/* Chart container - Score trend */}
          <div className="chart-container bg-white mb-3 p-4 rounded-lg">
            <h3 className="text-sm mb-3 font-medium">得分趋势</h3>
            <img 
              className="w-[342px] h-[200px] max-w-full mx-auto" 
              alt="得分趋势图表：显示第1局到第6局的得分变化"
              src="https://static-dev.paraflowcontent.com/public/resource/image/64e43011-0bce-44f8-b9b7-5d7176a99560.svg"
              style={{backgroundColor: 'transparent'}}
            />
          </div>

          {/* Chart container - Win rate distribution */}
          <div className="chart-container bg-white mb-3 p-4 rounded-lg">
            <h3 className="text-sm mb-3 font-medium">胜率分布</h3>
            <img 
              className="w-[342px] h-[180px] max-w-full mx-auto" 
              alt="胜率分布饼图：显示胜利和失败的比例"
              src="https://static-dev.paraflowcontent.com/public/resource/image/56f5d74e-8a39-4e57-812d-8c39ff2a78bc.svg"
              style={{backgroundColor: 'transparent'}}
            />
          </div>

          {/* Detailed statistics */}
          <div className="chart-container bg-white mb-3 p-4 rounded-lg">
            <h3 className="text-sm mb-3 font-medium">详细统计</h3>
            <div className="flex flex-col gap-0">
              {statRows.map((stat) => (
                <div key={stat.id} className="stat-row flex justify-between items-center py-2 border-b border-[rgba(243,243,241,1)]">
                  <span className="stat-name text-[rgba(61,69,49,1)] text-sm">{stat.name}</span>
                  <span className="stat-value text-[rgba(152,168,105,1)] text-sm font-medium">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <BottomNav />
    </div>
  );
}

export default Data;