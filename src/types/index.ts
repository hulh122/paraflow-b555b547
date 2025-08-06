// Tennis application types
export interface Player {
  id: string;
  name: string;
  ranking: number;
  avatar: string;
  upcomingMatches: Match[];
  rankingTrend: number[];
}

export interface Match {
  id: string;
  date: string;
  tournament: string;
  opponent?: string;
  status: 'upcoming' | 'live' | 'finished';
  time?: string;
}

export interface TournamentMatch {
  id: string;
  date: string;
  time: string;
  player1: string;
  player2: string;
  tournament: string;
  status: 'upcoming' | 'live' | 'finished';
}

export type TabType = 'follow' | 'schedule' | 'ranking' | 'data';