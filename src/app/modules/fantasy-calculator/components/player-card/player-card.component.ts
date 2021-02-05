import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlayerItem } from 'src/app/models/player.model';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  @Input() player: PlayerItem;
  @Input() closeAvailable: boolean;
  @Output() playerSelected: EventEmitter<PlayerItem> = new EventEmitter<PlayerItem>();
  @Output() playerDeleted: EventEmitter<PlayerItem> = new EventEmitter<PlayerItem>();
  constructor() { }

  ngOnInit() {
  }

  public getPositionName(positionId: string): string {
    const result = '';

    switch (positionId) {
      default:
        break;

      case '1':
        return 'footballWiz.positions.goalkeeperShort';

      case '2':
        return 'footballWiz.positions.defenderShort';

      case '3':
        return 'footballWiz.positions.midfielderShort';

      case '4':
        return 'footballWiz.positions.strikerShort';
    }

    return result;
  }

  public getPlayerStatus(status: string): string {
    const result = '';

    switch (status) {
      default:
        break;

      case 'ok':
        return 'footballWiz.status.ok';

      case 'doubtful':
        return 'footballWiz.status.doubtful';

      case 'suspended':
        return 'footballWiz.status.suspended';

      case 'injured':
        return 'footballWiz.status.injured';
    }

    return result;
  }

  public getIconStatus(status: string): string {
    const result = '';

    switch (status) {
      default:
        break;

      case 'ok':
        return 'done';

      case 'doubtful':
        return 'shield';

      case 'suspended':
        return 'clear';

      case 'injured':
        return 'add';
    }

    return result;
  }

  public emitPlayerSelected() {
    this.playerSelected.emit(this.player);
  }

  public emitDeletePlayer() {
    this.playerDeleted.emit(this.player);
  }

}
