import { Component, OnInit } from '@angular/core';
import * as echarts from '../../assets/js/echarts-all-3.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-setting-home',
  templateUrl: './my-setting-home.page.html',
  styleUrls: ['./my-setting-home.page.scss'],
})
export class MySettingHomePage implements OnInit {
  public name: string = '姓名';
  public email: string = '123456@email.com';
  constructor(
    private route: ActivatedRoute,
  ) {
    this.name = this.route.snapshot.paramMap.get('name');
  }

  ngOnInit() {
    var myChart = echarts.init(document.getElementById('myGraph'));
    var labelTop = {
    normal : {
        label : {
            show : true,
            position : 'center',
            formatter : '{b}',
            textStyle: {
                baseline : 'bottom'
            }
        },
        labelLine : {
            show : false
        }
    }
};
var labelFromatter = {
    normal : {
        label : {
            formatter : function (params){
                return 100 - params.value + '%'
            },
            textStyle: {
                baseline : 'top'
            }
        }
    },
}
var labelBottom = {
    normal : {
        color: '#ccc',
        label : {
            show : true,
            position : 'center'
        },
        labelLine : {
            show : false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
var radius = [40, 55];
let option = {
    
    series : [
        {
            type : 'pie',
            center : ['10%', '30%'],
            radius : radius,
            x: '0%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:46, itemStyle : labelBottom},
                {name:'迟到', value:54,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['30%', '30%'],
            radius : radius,
            x:'20%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:56, itemStyle : labelBottom},
                {name:'早退', value:44,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['50%', '30%'],
            radius : radius,
            x:'40%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:65, itemStyle : labelBottom},
                {name:'旷工', value:35,itemStyle : labelTop}
            ]
        },
        {
            type : 'pie',
            center : ['70%', '30%'],
            radius : radius,
            x:'60%', // for funnel
            itemStyle : labelFromatter,
            data : [
                {name:'other', value:70, itemStyle : labelBottom},
                {name:'忘打卡', value:30,itemStyle : labelTop}
            ]
        }
    ]
};
                    
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
    
  }

}
