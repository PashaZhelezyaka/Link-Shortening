import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";
import { MatTableDataSource } from "@angular/material/table";
import { LinksInterface } from "../shared/interface/interface";
import { MatPaginator } from "@angular/material/paginator";

const links: LinksInterface[] = [];

@Component({
  selector: 'app-main-page',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  linkInput: string = '';
  displayedColumns: string[] = ['short', 'target', 'counter'];
  dataSource = new MatTableDataSource<LinksInterface>(links);


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  linksAr: any = [];

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.statistics().subscribe((res)=>{
      this.linksAr.push(res);
      this.linksAr.forEach((links: any)=>{
        links.forEach((item: LinksInterface)=>{
          this.dataSource.data.push(item)
        });
        this.dataSource.filter = '';
        this.paginator._changePageSize(this.paginator.pageSize);
      })
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  sendLink(){
    if (!this.linkInput) return;
    this.auth.squeeze(this.linkInput).subscribe(res=> {
      this.dataSource.data.push(<LinksInterface>res);
      this.dataSource.filter = '';
      this.paginator._changePageSize(this.paginator.pageSize);
    })
  }
}
