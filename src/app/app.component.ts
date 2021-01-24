import {Component, ViewChild, OnInit} from '@angular/core';
import {ServerService} from './server.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'vpngate-servers';
  dataSource: MatTableDataSource<any>;
  serversColumns: string[] = ['HostName', 'IP', 'Score', 'Ping', 'Speed', 'CountryLong', 'NumVpnSessions', 'Uptime', 'TotalUsers', 'TotalTraffic', 'LogType', 'Operator', 'OpenVPN_ConfigData_Base64'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: ServerService) {
  }

  ngOnInit(): void {
    this.getServers();
  }

  getServers(): void {
    this.service.getServers()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      });
  }
}
