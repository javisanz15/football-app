export interface CalendarItem {
  date: Date;
  featured: boolean;
  id: string;
  local: CalendarTeamItem;
  localScore: number;
  matchDate: Date;
  matchState: number;
  time: Date;
  visitor: CalendarTeamItem;
  visitorScore: number;
}

export interface CalendarTeamItem {
  badgeColor: string;
  badgeGray: string;
  badgeWhite: string;
  id: string;
  mainName: string;
  name: string;
  shortName: string;
  slug: string;
}