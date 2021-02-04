export interface CalendarItem {
  date: Date;
  featured: boolean;
  id: string;
  local: TeamItem;
  localScore: number;
  matchDate: Date;
  matchState: number;
  time: Date;
  visitor: TeamItem;
  visitorScore: number;
}

export interface TeamItem {
  badgeColor: string;
  badgeGray: string;
  badgeWhite: string;
  id: string;
  mainName: string;
  name: string;
  shortName: string;
  slug: string;
}