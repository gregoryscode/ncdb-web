import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Quest } from 'src/app/shared/models/quest';
import { DatabaseService } from 'src/app/shared/services/database/database.service';


@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements AfterViewInit {

  @ViewChild(MatSort) sort: MatSort | null = null;
  searchTerm: string | null = null;
  quests: Quest[] | null = null;
  displayedColumns: string[] = ['chapter', 'name'];
  dataSource: MatTableDataSource<Quest>;

  constructor(
    private _databaseService: DatabaseService
  ) {
    this.quests = _databaseService.getQuests();
    this.dataSource = new MatTableDataSource<Quest>(this.quests);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  search() {

  }
}
