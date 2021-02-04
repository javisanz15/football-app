import { TeamItem } from "./calendar.model";

export interface PlayerLineup {
  goalkeepers: PlayerItem[];
  defenders: PlayerItem[];
  midfielders: PlayerItem[];
  strikers: PlayerItem[];
};

export interface PlayerItem {
  averagePoints: number
  id: string
  image30x30: string;
  image96x96: string;
  image250x250: string;
  images: ImagesItem;
  lastSeasonPoints: string;
  marketValue: string;
  nickname: string;
  playerStatus: string;
  points: number;
  positionId: string;
  team: TeamItem;
};

export interface ImagesItem {
  beat: ImageItem;
  transparent: ImageItem;
  big: ImageItem;
};

export interface ImageItem {
  '64x64': string;
  '128x128': string;
  '256x256': string;
  '512x512': string;
  '1024x1024': string;
  '2048x2048': string;
};

export interface LineupItem {
  label: string;
  goalkeepers: number;
  defenders: number;
  midfielders: number;
  strikers: number;
}

