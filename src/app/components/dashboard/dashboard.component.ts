import { Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CongfigService } from 'src/app/congfig.service';
import { NgIf } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent
{
 constructor(private config:CongfigService) { 
  Chart.register(...registerables)
 }
 name:string= ""
file:any;
isShow=false;
isgraph=false;
lists:Array<any>=[];
date:any;
sales:any;
charts:any=[]
result:any
getName(name:string)
{
  this.name= name;
}
display()
{
  this.isgraph=!this.isgraph
}

getFile(event:any)
{
  this.file=event.target.files[0];
  console.log("file",this.file);
}
goto()
{
 this.isShow=!this.isShow
}
data:any=[];
res:any
visualize()
{
  this.date = this.result.map((predictions: any) => predictions.Date);
  this.sales = this.result.map((predictions: any) => predictions.Sales);
  console.log(this.date)
  console.log(this.sales)
  this.charts = new Chart('canvas', 
  {
    type: 'bar',
    data: { 
      labels: this.date,
      datasets: [
        {
          data: this.sales,
          borderColor: '#3e95cd',
          label: 'Sales Prediction',
          
          backgroundColor: 'rgba(93, 175, 89, 0.1)',
          borderWidth: 3,
        },
      ],
    },
  });
  this.charts.render(); 
}

submitData()
{
  let formData=new FormData();
  formData.set("name",this.name)
  formData.set("file",this.file)
  this.config.post(formData).subscribe(res=>{ //LINKING WITH SERVICE
  this.data=res;
  this.result=res;
  });
}
}


