(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"3mq4":function(t,e,a){"use strict";a.r(e);var i=a("Valr"),o=a("oW1M"),n=a("89/Q"),r=a("QJY3"),c=a("X2FZ"),l=a("R/Hu"),s=a("DUip"),b=a("cclQ"),d=a("xJfa"),u=a("TYT/"),p=function(){function t(t){this.zone=t,this.clicked=!0,this.clicked1=!1}return t.prototype.ngOnInit=function(){this.getCharts()},t.prototype.ngOnDestroy=function(){var t=this;this.zone.runOutsideAngular((function(){t.chart&&(console.log("Chart disposed"),t.chart.dispose()),t.chart1&&(console.log("Chart disposed"),t.chart1.dispose()),t.chart2&&(console.log("Chart disposed"),t.chart1.dispose())}))},t.prototype.getCharts=function(){var t=this;this.zone.runOutsideAngular((function(){t.getChart(),t.getChart2(),t.getChartpie2()}))},t.prototype.getChart=function(){var t=b.k("chartdiv",d.n);t.data=[{month:"Jan",data1:1,data2:5,data3:4},{month:"Feb",data1:3,data2:2,data3:7},{month:"Mar",data1:5,data2:4,data3:5},{month:"Apr",data1:3,data2:3,data3:5},{month:"May",data1:6,data2:5,data3:2},{month:"Jun",data1:2,data2:4,data3:1},{month:"Jul",data1:4,data2:3,data3:4},{month:"Aug",data1:6,data2:5,data3:2},{month:"Sep",data1:5,data2:4,data3:2},{month:"Oct",data1:5,data2:5,data3:2},{month:"Nov",data1:4,data2:5,data3:3},{month:"Dec",data1:5,data2:6,data3:4}],t.xAxes.push(new d.b).dataFields.category="month";var e=t.yAxes.push(new d.m);e.title.text="Amount",e.renderer.minLabelPosition=.01;var a=t.series.push(new d.i);a.dataFields.valueY="data1",a.dataFields.categoryX="month",a.name="New Users",a.strokeWidth=3,a.bullets.push(new d.c),a.tooltipText="Jumlah {name} in {categoryX}: {valueY}",a.legendSettings.valueText="{valueY}",a.visible=!1;var i=t.series.push(new d.i);i.dataFields.valueY="data2",i.dataFields.categoryX="month",i.name="Active Users",i.strokeWidth=3,i.bullets.push(new d.c),i.tooltipText="Jumlah {name} in {categoryX}: {valueY}",i.legendSettings.valueText="{valueY}";var o=t.series.push(new d.i);o.dataFields.valueY="data3",o.dataFields.categoryX="month",o.name="Inactive Users",o.strokeWidth=3,o.bullets.push(new d.c),o.tooltipText="Jumlah {name} in {categoryX}: {valueY}",o.legendSettings.valueText="{valueY}",t.cursor=new d.q,t.cursor.behavior="zoomY",t.legend=new d.h},t.prototype.getChartpie2=function(){var t=b.k("piechartdiv111",d.j),e=t.series.push(new d.k);e.dataFields.value="value",e.dataFields.category="task",t.innerRadius=b.n(30),e.slices.template.stroke=b.j("#fff"),e.slices.template.strokeWidth=2,e.slices.template.strokeOpacity=1,e.slices.template.cursorOverStyle=[{property:"cursor",value:"pointer"}],e.alignLabels=!1,e.labels.template.bent=!0,e.labels.template.radius=3,e.labels.template.padding(0,0,0,0),e.ticks.template.disabled=!0,e.slices.template.filters.push(new b.d).opacity=0;var a=e.slices.template.states.getKey("hover").filters.push(new b.d);a.opacity=.7,a.blur=5,t.legend=new d.h,t.data=[{task:"User 1",value:501.9},{task:"User 2",value:304.8},{task:"User 3",value:200},{task:"User 4",value:400}]},t.prototype.getChart2=function(){var t=b.k("chartdivdashboard",d.n);t.data=[{country:"Jan",visits:3025},{country:"Feb",visits:1882},{country:"Mar",visits:1809},{country:"Apr",visits:1322},{country:"May",visits:1122},{country:"Jun",visits:1114},{country:"July",visits:984},{country:"Aug",visits:711},{country:"Sep",visits:665},{country:"Oct",visits:580},{country:"Nov",visits:443},{country:"Dec",visits:441}];var e=t.xAxes.push(new d.b);e.dataFields.category="country",e.renderer.grid.template.location=0,e.renderer.minGridDistance=30,e.renderer.labels.template.horizontalCenter="right",e.renderer.labels.template.verticalCenter="middle",e.renderer.labels.template.rotation=270,e.tooltip.disabled=!0,e.renderer.minHeight=110,t.yAxes.push(new d.m).renderer.minWidth=50;var a=t.series.push(new d.d);a.sequencedInterpolation=!0,a.dataFields.valueY="visits",a.dataFields.categoryX="country",a.tooltipText="[{categoryX}: bold]{valueY}[/]",a.columns.template.strokeWidth=0,a.tooltip.pointerOrientation="vertical",a.columns.template.column.cornerRadiusTopLeft=10,a.columns.template.column.cornerRadiusTopRight=10,a.columns.template.column.fillOpacity=.8;var i=a.columns.template.column.states.create("hover");i.properties.cornerRadiusTopLeft=0,i.properties.cornerRadiusTopRight=0,i.properties.fillOpacity=1,a.columns.template.adapter.add("fill",(function(e,a){return t.colors.getIndex(a.dataItem.index)})),t.cursor=new d.q},t.\u0275fac=function(e){return new(e||t)(u.Ob(u.z))},t.\u0275cmp=u.Ib({type:t,selectors:[["app-dashboard"]],decls:110,vars:0,consts:[[1,"header","pb-6"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"col-lg-6","col-7"],[1,"h2","text-dark","d-inline-block","mb-0"],["aria-label","breadcrumb",1,"d-none","d-md-inline-block","ml-md-4"],[1,"breadcrumb","breadcrumb-links","breadcrumb-dark"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"fas","fa-home","text-dark"],["href","javascript:void(0)",1,"text-dark"],[1,"col-lg-6","col-5","text-right"],[1,"row"],[1,"col"],[1,"card","card-stats"],[1,"card-body"],[1,"card-title","text-uppercase","text-muted","mb-0"],[1,"h2","font-weight-bold","mb-0"],[1,"mt-3","mb-0","text-sm"],[1,"text-success","mr-2"],[1,"fa","fa-arrow-up"],[1,"text-nowrap"],[1,"container-fluid","mt--6"],[1,"col-xl-12"],[1,"card"],[1,"card-header","bg-secondary"],[1,"row","align-items-center"],[1,"text-uppercase","text-muted","ls-1","mb-1"],[1,"h3","mb-0"],["id","chartdivdashboard",2,"width","100%","height","500px"],[1,"col-xl-8"],[1,"text-muted","text-uppercase","ls-1","mb-1"],["id","chartdiv",2,"width","100%","height","500px"],[1,"col-md-4"],["id","piechartdiv111",2,"width","100%","height","500px"]],template:function(t,e){1&t&&(u.Tb(0,"div",0),u.Tb(1,"div",1),u.Tb(2,"div",2),u.Tb(3,"div",3),u.Tb(4,"div",4),u.Tb(5,"h6",5),u.Gc(6,"Dashboard"),u.Sb(),u.Tb(7,"nav",6),u.Tb(8,"ol",7),u.Tb(9,"li",8),u.Tb(10,"a",9),u.Pb(11,"i",10),u.Sb(),u.Sb(),u.Tb(12,"li",8),u.Tb(13,"a",11),u.Gc(14," Dashboard "),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Pb(15,"div",12),u.Sb(),u.Tb(16,"div",13),u.Tb(17,"div",14),u.Tb(18,"div",15),u.Tb(19,"div",16),u.Tb(20,"div",13),u.Tb(21,"div",14),u.Tb(22,"h5",17),u.Gc(23," Total Traffics "),u.Sb(),u.Tb(24,"span",18),u.Gc(25," 350,897 "),u.Sb(),u.Sb(),u.Sb(),u.Tb(26,"p",19),u.Tb(27,"span",20),u.Pb(28,"i",21),u.Gc(29," 3.48% "),u.Sb(),u.Tb(30,"span",22),u.Gc(31," Since last month "),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Tb(32,"div",14),u.Tb(33,"div",15),u.Tb(34,"div",16),u.Tb(35,"div",13),u.Tb(36,"div",14),u.Tb(37,"h5",17),u.Gc(38," Total Connection "),u.Sb(),u.Tb(39,"span",18),u.Gc(40," 924 "),u.Sb(),u.Sb(),u.Sb(),u.Tb(41,"p",19),u.Tb(42,"span",20),u.Pb(43,"i",21),u.Gc(44," 3.48% "),u.Sb(),u.Tb(45,"span",22),u.Gc(46," Since last month "),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Tb(47,"div",14),u.Tb(48,"div",15),u.Tb(49,"div",16),u.Tb(50,"div",13),u.Tb(51,"div",14),u.Tb(52,"h5",17),u.Gc(53," Seacrh Record "),u.Sb(),u.Tb(54,"span",18),u.Gc(55," 4965 "),u.Sb(),u.Sb(),u.Sb(),u.Tb(56,"p",19),u.Tb(57,"span",20),u.Pb(58,"i",21),u.Gc(59," 3.48% "),u.Sb(),u.Tb(60,"span",22),u.Gc(61," Since last month "),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Tb(62,"div",14),u.Tb(63,"div",15),u.Tb(64,"div",16),u.Tb(65,"div",13),u.Tb(66,"div",14),u.Tb(67,"h5",17),u.Gc(68," Search Not found "),u.Sb(),u.Tb(69,"span",18),u.Gc(70," 4965 "),u.Sb(),u.Sb(),u.Sb(),u.Tb(71,"p",19),u.Tb(72,"span",20),u.Pb(73,"i",21),u.Gc(74," 3.48% "),u.Sb(),u.Tb(75,"span",22),u.Gc(76," Since last month "),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Tb(77,"div",23),u.Tb(78,"div",13),u.Tb(79,"div",24),u.Tb(80,"div",25),u.Tb(81,"div",26),u.Tb(82,"div",27),u.Tb(83,"div",14),u.Tb(84,"h6",28),u.Gc(85,"Graph"),u.Sb(),u.Tb(86,"h5",29),u.Gc(87,"Download Report Rate"),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Pb(88,"div",30),u.Sb(),u.Sb(),u.Sb(),u.Tb(89,"div",13),u.Tb(90,"div",31),u.Tb(91,"div",25),u.Tb(92,"div",26),u.Tb(93,"div",27),u.Tb(94,"div",14),u.Tb(95,"h6",32),u.Gc(96,"Graph"),u.Sb(),u.Tb(97,"h5",29),u.Gc(98," Total Users "),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Pb(99,"div",33),u.Sb(),u.Sb(),u.Tb(100,"div",34),u.Tb(101,"div",25),u.Tb(102,"div",26),u.Tb(103,"div",27),u.Tb(104,"div",14),u.Tb(105,"h6",28),u.Gc(106,"Graph"),u.Sb(),u.Tb(107,"h5",29),u.Gc(108," Users type "),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Pb(109,"div",35),u.Sb(),u.Sb(),u.Sb(),u.Sb())},styles:[""]}),t}(),h=a("mrSG"),m=a("bmQc"),v=a("WlQZ"),f=a("PSD3"),S=a.n(f),T=a("dICO"),g=a("JyEZ"),y=a.n(g),w=a("cUzu");function x(t,e){if(1&t&&(u.Tb(0,"strong"),u.Gc(1),u.Sb()),2&t){var a=e.rowIndex;u.Bb(1),u.Hc(a+1)}}function C(t,e){1&t&&(u.Pb(0,"input",46),u.Pb(1,"br"),u.Tb(2,"span"),u.Gc(3,"Patient Name"),u.Sb())}function G(t,e){1&t&&u.Gc(0),2&t&&u.Ic(" ",e.row.name," ")}function A(t,e){1&t&&(u.Pb(0,"input",46),u.Pb(1,"br"),u.Tb(2,"span"),u.Gc(3,"Patient No"),u.Sb())}function k(t,e){1&t&&u.Gc(0),2&t&&u.Ic(" ",e.row.patient_no," ")}function F(t,e){1&t&&(u.Pb(0,"input",46),u.Pb(1,"br"),u.Tb(2,"span"),u.Gc(3,"Patient Bed"),u.Sb())}function P(t,e){1&t&&u.Gc(0),2&t&&u.Ic(" ",e.row.patient_bed," ")}function O(t,e){1&t&&(u.Pb(0,"input",46),u.Pb(1,"br"),u.Tb(2,"span"),u.Gc(3,"Status"),u.Sb())}function E(t,e){1&t&&(u.Tb(0,"span",50),u.Gc(1,"Warded"),u.Sb())}function N(t,e){1&t&&(u.Tb(0,"span",51),u.Gc(1,"Discharged"),u.Sb())}function B(t,e){1&t&&(u.Tb(0,"span",52),u.Gc(1,"Dead"),u.Sb())}function D(t,e){if(1&t&&(u.Ec(0,E,2,0,"span",47),u.Ec(1,N,2,0,"span",48),u.Ec(2,B,2,0,"span",49)),2&t){var a=e.row;u.lc("ngIf","wd"==a.status),u.Bb(1),u.lc("ngIf","dc"==a.status),u.Bb(1),u.lc("ngIf","dd"==a.status)}}function M(t,e){if(1&t){var a=u.Ub();u.Tb(0,"div",53),u.Tb(1,"h6",54),u.Gc(2," Add New Database "),u.Sb(),u.Tb(3,"button",55),u.bc("click",(function(t){return u.wc(a),u.fc().closeModal()})),u.Tb(4,"span",56),u.Gc(5," \xd7 "),u.Sb(),u.Sb(),u.Sb(),u.Tb(6,"div",57),u.Tb(7,"form",58),u.Tb(8,"div",22),u.Tb(9,"label",23),u.Gc(10,"Database Name"),u.Sb(),u.Pb(11,"input",59),u.Sb(),u.Tb(12,"div",22),u.Tb(13,"label",23),u.Gc(14,"Host / IP Address"),u.Sb(),u.Pb(15,"input",60),u.Sb(),u.Sb(),u.Sb(),u.Tb(16,"div",61),u.Tb(17,"div",26),u.Tb(18,"button",62),u.bc("click",(function(t){return u.wc(a),u.fc().successAlert("add new database")})),u.Gc(19," Save "),u.Sb(),u.Tb(20,"button",63),u.bc("click",(function(t){return u.wc(a),u.fc().closeModal()})),u.Gc(21," Close "),u.Sb(),u.Sb(),u.Sb()}if(2&t){var i=u.fc();u.Bb(7),u.lc("formGroup",i.addNewComplaintForm)}}function R(t,e){if(1&t){var a=u.Ub();u.Tb(0,"div",53),u.Tb(1,"h6",54),u.Gc(2," Edit Database "),u.Sb(),u.Tb(3,"button",55),u.bc("click",(function(t){return u.wc(a),u.fc().closeModal()})),u.Tb(4,"span",56),u.Gc(5," \xd7 "),u.Sb(),u.Sb(),u.Sb(),u.Tb(6,"div",57),u.Tb(7,"form",58),u.Tb(8,"div",22),u.Tb(9,"label",23),u.Gc(10,"Database Name"),u.Sb(),u.Pb(11,"input",64),u.Sb(),u.Tb(12,"div",22),u.Tb(13,"label",23),u.Gc(14,"Host / IP Address"),u.Sb(),u.Pb(15,"input",65),u.Sb(),u.Sb(),u.Sb(),u.Tb(16,"div",61),u.Tb(17,"div",26),u.Tb(18,"button",62),u.bc("click",(function(t){return u.wc(a),u.fc().successAlert("edit database")})),u.Gc(19," Save "),u.Sb(),u.Tb(20,"button",63),u.bc("click",(function(t){return u.wc(a),u.fc().closeModal()})),u.Gc(21," Close "),u.Sb(),u.Sb(),u.Sb()}if(2&t){var i=u.fc();u.Bb(7),u.lc("formGroup",i.addNewComplaintForm)}}b.o(v.a);var I=function(t){return t.single="single",t.multi="multi",t.multiClick="multiClick",t.cell="cell",t.checkbox="checkbox",t}({}),q=function(){function t(t,e,a,i,o,n,r,c,l){this.notifyService=t,this.zone=e,this.modalService=a,this.formBuilder=i,this.http=o,this.ComplaintData=n,this.loadingBar=r,this.router=c,this._route=l,this.tableEntries=5,this.tableSelected=[],this.tableTemp=[],this.tableRows=[],this.SelectionType=I,this.chartJan=0,this.chartFeb=0,this.chartMar=0,this.chartApr=0,this.chartMay=0,this.chartJun=0,this.chartJul=0,this.chartAug=0,this.chartSep=0,this.chartOct=0,this.chartNov=0,this.chartDec=0,this.datas=[],this.listCustomer=[{id:"415796",name:"Diana",patient_no:"ut9181",patient_bed:"a1001",status:"wd",created_at:"2019-07-27T01:07:14Z"},{id:"415796",name:"Aishah",patient_no:"jk2112",patient_bed:"a1002",status:"dc",created_at:"2019-07-27T01:07:14Z"},{id:"415796",name:"Kamarul",patient_no:"hb10003",patient_bed:"a1003",status:"dd",created_at:"2019-07-27T01:07:14Z"}],this.modalConfig={keyboard:!0,class:"modal-dialog-centered"},this.editAuditFormMessages={Complaintname:[{type:"required",message:"A valid email is required"}],active:[{type:"required",message:"Name is required"}],enable:[{type:"required",message:"Name is required"}]}}return t.prototype.ngOnInit=function(){var t=this,e=document.getElementById("selectr"),a=(new y.a(e,{}),document.getElementById("selectr-multiple"));new y.a(a,{multiple:!0}),this.getCharts(),this.ComplaintData.getAll().subscribe((function(e){t.listComplaint=e,t.tableRows=Object(h.i)(e),console.log(t.tableRows),t.listComplaint=t.tableRows.map((function(t,e){return Object(h.a)({},t)}))})),this.addNewComplaintForm=this.formBuilder.group({complaint_type:new r.e("",r.v.compose([r.v.required])),description:new r.e("",r.v.compose([r.v.required]))}),this.editComplaintForm=this.formBuilder.group({id:new r.e(""),complaint_type:new r.e("",r.v.compose([r.v.required])),description:new r.e("",r.v.compose([r.v.required]))})},t.prototype.addNewComplaint=function(){var t=this;console.log(this.addNewComplaintForm.value),this.ComplaintData.create(this.addNewComplaintForm.value).subscribe((function(){t.successAlert("add new"),window.location.reload()}),(function(){}),(function(){}))},t.prototype.editComplaintDetail=function(){var t=this;console.log(this.editComplaintForm.value),this.ComplaintData.update(this.editComplaintForm.value.id,this.editComplaintForm.value).subscribe((function(){t.successAlert("edit"),window.location.reload()}),(function(){}),(function(){}))},t.prototype.navigatePage=function(t,e){return console.log(e),console.log(t+"/"+e),"/admin//utility/Complaint"==t?this.router.navigate([t]):"/admin//utility/Complaint-detail"==t?this.router.navigate([t,e]):void 0},t.prototype.getComplaint=function(t){return this.listComplaint.find((function(e){return e.id===t}))},t.prototype.successMessage=function(){this.notifyService.openToastr("Success","Create New Scheme Personnel")},t.prototype.successEditMessage=function(){this.notifyService.openToastr("Success","Edit Scheme Personnel")},t.prototype.successAlert=function(t){S.a.fire({title:"Success",text:"Successfully "+t,type:"success",buttonsStyling:!1,confirmButtonClass:"btn btn-success",confirmButtonText:"Close"})},t.prototype.entriesChange=function(t){this.tableEntries=t.target.value},t.prototype.filterTable=function(t){var e=t.target.value;this.listComplaint=this.tableRows.filter((function(t){for(var a in t)if(-1!==t[a].toLowerCase().indexOf(e))return!0;return!1}))},t.prototype.onActivate=function(t){this.tableActiveRow=t.row},t.prototype.onSelect=function(t){var e,a=t.selected;this.tableSelected.splice(0,this.tableSelected.length),(e=this.tableSelected).push.apply(e,a)},t.prototype.ngOnDestroy=function(){var t=this;this.zone.runOutsideAngular((function(){t.chart&&(console.log("Chart disposed"),t.chart.dispose())}))},t.prototype.getCharts=function(){var t=this;this.zone.runOutsideAngular((function(){t.getChart()}))},t.prototype.openModal=function(t,e){e&&(console.log(e),this.editComplaintForm.patchValue(e)),this.modal=this.modalService.show(t,this.modalConfig)},t.prototype.closeModal=function(){this.modal.hide(),this.editComplaintForm.reset()},t.prototype.confirm=function(){var t=this;S.a.fire({title:"Confirmation",text:"Are you sure to create this new Complaint?",type:"info",buttonsStyling:!1,confirmButtonClass:"btn btn-info",confirmButtonText:"Confirm",showCancelButton:!0,cancelButtonClass:"btn btn-danger",cancelButtonText:"Cancel"}).then((function(e){e.value&&t.register()}))},t.prototype.register=function(){var t=this;S.a.fire({title:"Success",text:"A new Complaint has been created!",type:"success",buttonsStyling:!1,confirmButtonClass:"btn btn-success",confirmButtonText:"Close"}).then((function(e){e.value&&(t.modal.hide(),t.editComplaintForm.reset())}))},t.prototype.getChart=function(){var t=b.k("chartdivCustomer",d.n);t.data=[{month:"Jan",search:1,notFound:5},{month:"Feb",search:3,notFound:2},{month:"Mar",search:5,notFound:4},{month:"Apr",search:3,notFound:3},{month:"May",search:6,notFound:5},{month:"Jun",search:2,notFound:4},{month:"Jul",search:4,notFound:3},{month:"Aug",search:6,notFound:5},{month:"Sep",search:5,notFound:4},{month:"Oct",search:5,notFound:5},{month:"Nov",search:4,notFound:5},{month:"Dec",search:5,notFound:6}];var e=t.xAxes.push(new d.b);e.dataFields.category="month",e.renderer.grid.template.location=0,e.renderer.minGridDistance=30,e.renderer.labels.template.horizontalCenter="right",e.renderer.labels.template.verticalCenter="middle",e.renderer.labels.template.rotation=270,e.tooltip.disabled=!0,e.renderer.minHeight=110;var a=t.yAxes.push(new d.m);a.title.text="Value",a.renderer.minLabelPosition=.01;var i=t.series.push(new d.i);i.dataFields.valueY="search",i.dataFields.categoryX="month",i.name="Search Found",i.strokeWidth=3,i.bullets.push(new d.c),i.tooltipText="Amount {name} in {categoryX}: {valueY}",i.legendSettings.valueText="{valueY}",i.visible=!1;var o=t.series.push(new d.i);o.dataFields.valueY="notFound",o.dataFields.categoryX="month",o.name="Search Not Found",o.strokeWidth=3,o.bullets.push(new d.c),o.tooltipText="Amount {name} in {categoryX}: {valueY}",o.legendSettings.valueText="{valueY}",t.cursor=new d.q,t.cursor.behavior="zoomY",t.legend=new d.h},t.\u0275fac=function(e){return new(e||t)(u.Ob(T.a),u.Ob(u.z),u.Ob(o.f),u.Ob(r.d),u.Ob(w.b),u.Ob(m.a),u.Ob(l.c),u.Ob(s.e),u.Ob(s.a))},t.\u0275cmp=u.Ib({type:t,selectors:[["app-search"]],decls:120,vars:6,consts:[[1,"header","pb-6"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"col-lg-6","col-7"],[1,"h2","text-dark","d-inline-block","mb-0"],["aria-label","breadcrumb",1,"d-none","d-md-inline-block","ml-md-4"],[1,"breadcrumb","breadcrumb-links","breadcrumb-dark"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"fas","fa-file-invoice","text-dark"],["href","javascript:void(0)",1,"text-dark"],["aria-current","page",1,"breadcrumb-item","active"],[1,"col-lg-6","col-5","text-right"],[1,"container-fluid","mt--6"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header","bg-secondary"],[1,"m-0"],[1,"card-body"],[1,"col-md-6","col-lg-6"],[1,"form-group"],[1,"form-control-label"],["type","text",1,"form-control"],[1,"card-footer"],[1,"text-center"],["type","button",1,"btn","btn-default",3,"click"],[1,"col"],[1,"m-0","pt-1"],[1,"col","text-right"],[1,"btn","btn-default",3,"click"],[1,"dataTables_wrapper","py-4"],[1,"col-sm-12","col-md-6"],["id","datatable_length",1,"dataTables_length"],["name","datatable_length","aria-controls","datatable",1,"form-control","form-control-sm",3,"change"],["value","5"],["value","10"],["value","15"],["value","20"],[1,"bootstrap","selection-cell",3,"columnMode","headerHeight","footerHeight","rowHeight","limit","rows","activate"],["name","No"],["ngx-datatable-cell-template",""],["ngx-datatable-header-template",""],["adddatasource",""],["editdatasource",""],["type","checkbox"],["class","badge badge-pill badge-success",4,"ngIf"],["class","badge badge-pill badge-primary",4,"ngIf"],["class","badge badge-pill badge-danger",4,"ngIf"],[1,"badge","badge-pill","badge-success"],[1,"badge","badge-pill","badge-primary"],[1,"badge","badge-pill","badge-danger"],[1,"modal-header","bg-default"],["id","modal-title-default",1,"modal-title","text-white","my-auto"],["aria-label","Close","data-dismiss","modal","type","button",1,"close",3,"click"],["aria-hidden","true",1,"text-white","my-auto"],[1,"modal-body"],[3,"formGroup"],["placeholder","Enter Name","formControlName","complaint_type","type","text",1,"form-control"],["placeholder","Enter Host/IP","formControlName","description","type","text",1,"form-control"],[1,"modal-footer"],["type","submit",1,"btn","btn-default",3,"click"],["data-dismiss","modal","type","button",1,"btn","btn-outline-danger","ml-auto",3,"click"],["type","text","value","Master Data 1",1,"form-control"],["placeholder","Enter Host/IP","type","text","value","192.0.0.100",1,"form-control"]],template:function(t,e){1&t&&(u.Tb(0,"div",0),u.Tb(1,"div",1),u.Tb(2,"div",2),u.Tb(3,"div",3),u.Tb(4,"div",4),u.Tb(5,"h6",5),u.Gc(6," Search "),u.Sb(),u.Tb(7,"nav",6),u.Tb(8,"ol",7),u.Tb(9,"li",8),u.Tb(10,"a",9),u.Pb(11,"i",10),u.Sb(),u.Sb(),u.Tb(12,"li",8),u.Tb(13,"a",11),u.Gc(14," Business User "),u.Sb(),u.Sb(),u.Tb(15,"li",12),u.Gc(16," Search "),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Pb(17,"div",13),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Tb(18,"div",14),u.Tb(19,"div",15),u.Tb(20,"div",16),u.Tb(21,"div",17),u.Tb(22,"div",18),u.Tb(23,"h3",19),u.Gc(24,"Filter Data"),u.Sb(),u.Sb(),u.Tb(25,"div",20),u.Tb(26,"div",15),u.Tb(27,"div",21),u.Tb(28,"div",22),u.Tb(29,"label",23),u.Gc(30,"Patient Name"),u.Sb(),u.Pb(31,"input",24),u.Sb(),u.Sb(),u.Tb(32,"div",21),u.Tb(33,"div",22),u.Tb(34,"label",23),u.Gc(35,"Patient No"),u.Sb(),u.Pb(36,"input",24),u.Sb(),u.Sb(),u.Sb(),u.Tb(37,"div",15),u.Tb(38,"div",21),u.Tb(39,"div",22),u.Tb(40,"label",23),u.Gc(41,"Nric"),u.Sb(),u.Pb(42,"input",24),u.Sb(),u.Sb(),u.Tb(43,"div",21),u.Tb(44,"div",22),u.Tb(45,"label",23),u.Gc(46,"Organisation No"),u.Sb(),u.Pb(47,"input",24),u.Sb(),u.Sb(),u.Sb(),u.Tb(48,"div",15),u.Tb(49,"div",21),u.Tb(50,"div",22),u.Tb(51,"label",23),u.Gc(52,"Supplier "),u.Sb(),u.Pb(53,"input",24),u.Sb(),u.Sb(),u.Tb(54,"div",21),u.Tb(55,"div",22),u.Tb(56,"label",23),u.Gc(57,"Vendor"),u.Sb(),u.Pb(58,"input",24),u.Sb(),u.Sb(),u.Sb(),u.Tb(59,"div",15),u.Tb(60,"div",21),u.Tb(61,"div",22),u.Tb(62,"label",23),u.Gc(63,"Employee ID "),u.Sb(),u.Pb(64,"input",24),u.Sb(),u.Sb(),u.Tb(65,"div",21),u.Tb(66,"div",22),u.Tb(67,"label",23),u.Gc(68,"Asset"),u.Sb(),u.Pb(69,"input",24),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Tb(70,"div",25),u.Tb(71,"div",26),u.Tb(72,"button",27),u.bc("click",(function(t){return e.successAlert("search")})),u.Gc(73," Search "),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Tb(74,"div",16),u.Tb(75,"div",17),u.Tb(76,"div",18),u.Tb(77,"div",15),u.Tb(78,"div",28),u.Tb(79,"h3",29),u.Gc(80,"Data"),u.Sb(),u.Sb(),u.Tb(81,"div",30),u.Tb(82,"button",31),u.bc("click",(function(t){return e.successAlert("export data")})),u.Gc(83," Export "),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Tb(84,"div",32),u.Tb(85,"div",15),u.Tb(86,"div",33),u.Tb(87,"div",34),u.Tb(88,"label"),u.Gc(89," Show "),u.Tb(90,"select",35),u.bc("change",(function(t){return e.entriesChange(t)})),u.Tb(91,"option",36),u.Gc(92,"5"),u.Sb(),u.Tb(93,"option",37),u.Gc(94,"10"),u.Sb(),u.Tb(95,"option",38),u.Gc(96,"15"),u.Sb(),u.Tb(97,"option",39),u.Gc(98,"20"),u.Sb(),u.Sb(),u.Gc(99," records "),u.Sb(),u.Sb(),u.Sb(),u.Pb(100,"div",33),u.Sb(),u.Tb(101,"ngx-datatable",40),u.bc("activate",(function(t){return e.onActivate(t)})),u.Tb(102,"ngx-datatable-column",41),u.Ec(103,x,2,1,"ng-template",42),u.Sb(),u.Tb(104,"ngx-datatable-column"),u.Ec(105,C,4,0,"ng-template",43),u.Ec(106,G,1,1,"ng-template",42),u.Sb(),u.Tb(107,"ngx-datatable-column"),u.Ec(108,A,4,0,"ng-template",43),u.Ec(109,k,1,1,"ng-template",42),u.Sb(),u.Tb(110,"ngx-datatable-column"),u.Ec(111,F,4,0,"ng-template",43),u.Ec(112,P,1,1,"ng-template",42),u.Sb(),u.Tb(113,"ngx-datatable-column"),u.Ec(114,O,4,0,"ng-template",43),u.Ec(115,D,3,3,"ng-template",42),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Ec(116,M,22,1,"ng-template",null,44,u.Fc),u.Ec(118,R,22,1,"ng-template",null,45,u.Fc),u.Sb(),u.Sb()),2&t&&(u.Bb(101),u.lc("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight","auto")("limit",-1!=e.tableEntries?e.tableEntries:void 0)("rows",e.listCustomer))},directives:[r.r,r.w,c.d,c.b,c.a,c.c,i.l,r.x,r.o,r.h,r.b,r.n,r.f],styles:[""]}),t}(),J=a("ggk2"),_=a("grwq");function Y(t,e){if(1&t&&(u.Tb(0,"strong"),u.Gc(1),u.Sb()),2&t){var a=e.rowIndex;u.Bb(1),u.Hc(a+1)}}function H(t,e){1&t&&(u.Tb(0,"span"),u.Gc(1,"Name"),u.Sb())}function X(t,e){1&t&&u.Gc(0),2&t&&u.Ic("",e.row.nama," ")}function z(t,e){1&t&&(u.Tb(0,"span"),u.Gc(1,"Department"),u.Sb())}function L(t,e){1&t&&u.Gc(0),2&t&&u.Ic("",e.row.department," ")}function U(t,e){1&t&&(u.Tb(0,"span"),u.Gc(1,"Approval Level"),u.Sb())}function j(t,e){1&t&&u.Gc(0),2&t&&u.Ic("",e.row.level," ")}function W(t,e){if(1&t){var a=u.Ub();u.Tb(0,"div",33),u.Tb(1,"h6",34),u.Gc(2," Change User Level "),u.Sb(),u.Tb(3,"button",35),u.bc("click",(function(t){return u.wc(a),u.fc().closeModal()})),u.Tb(4,"span",36),u.Gc(5," \xd7 "),u.Sb(),u.Sb(),u.Sb(),u.Tb(6,"div",37),u.Tb(7,"form",38),u.Tb(8,"div",39),u.Tb(9,"label",40),u.Gc(10,"Name"),u.Sb(),u.Pb(11,"input",41),u.Sb(),u.Tb(12,"div",39),u.Tb(13,"label",40),u.Gc(14,"Staff ID"),u.Sb(),u.Pb(15,"input",42),u.Sb(),u.Tb(16,"div",39),u.Tb(17,"label",40),u.Gc(18,"Approval Level"),u.Sb(),u.Tb(19,"select",43),u.Tb(20,"option"),u.Gc(21,"Level 1"),u.Sb(),u.Tb(22,"option"),u.Gc(23,"Level 2"),u.Sb(),u.Tb(24,"option"),u.Gc(25,"Level 3"),u.Sb(),u.Sb(),u.Sb(),u.Pb(26,"input",44),u.Sb(),u.Sb(),u.Tb(27,"div",45),u.Tb(28,"div",46),u.Tb(29,"button",47),u.bc("click",(function(t){return u.wc(a),u.fc().successAlert("save data")})),u.Gc(30," Simpan "),u.Sb(),u.Tb(31,"button",48),u.bc("click",(function(t){return u.wc(a),u.fc().closeModal()})),u.Gc(32," Tutup "),u.Sb(),u.Sb(),u.Sb()}if(2&t){var i=u.fc();u.Bb(7),u.lc("formGroup",i.editTugasanForm)}}b.o(v.a);var Z=function(t){return t.single="single",t.multi="multi",t.multiClick="multiClick",t.cell="cell",t.checkbox="checkbox",t}({}),V=[{path:"",children:[{path:"dashboard",component:p},{path:"search",component:q},{path:"workflow",component:function(){function t(t,e,a,i,o,n,r,c,l){this.notifyService=t,this.zone=e,this.modalService=a,this.formBuilder=i,this.http=o,this.ActionData=n,this.loadingBar=r,this.router=c,this._route=l,this.tableEntries=5,this.tableSelected=[],this.tableTemp=[],this.tableRows=[],this.SelectionType=Z,this.chartJan=0,this.chartFeb=0,this.chartMar=0,this.chartApr=0,this.chartMay=0,this.chartJun=0,this.chartJul=0,this.chartAug=0,this.chartSep=0,this.chartOct=0,this.chartNov=0,this.chartDec=0,this.files=[],this.orgData={name:"Encik Kamarul",type:"CEO",children:[{name:"Puan Samsiah",type:"VP",children:[{name:"Puan Shuhada",type:"manager",children:[]},{name:"Encik Zainal",type:"Manager",children:[]}]},{name:"Encik Saufi",type:"VP",children:[{name:"Encik Jamal",type:"manager",children:[{name:"CIk Khadijah",type:"Intern",children:[]}]},{name:"Puan Izati",type:"Manager",children:[{name:"Encik Halim",type:"Team Lead",children:[]}]}]}]},this.datas=[],this.listPenguna=[{id:"415796",nama:"Kamarul",department:"Finance",level:"Approval 1",created_at:"2019-07-27T01:07:14Z"},{id:"415796",nama:"Samsiah",department:"Humah Resource",level:"Approval 2",created_at:"2019-07-27T01:07:14Z"},{id:"415796",nama:"Zainal",department:"Sales",level:"Approval 1",created_at:"2019-07-27T01:07:14Z"}],this.modalConfig={keyboard:!0,class:"modal-dialog-centered"},this.editAuditFormMessages={Actionname:[{type:"required",message:"A valid email is required"}],active:[{type:"required",message:"Name is required"}],enable:[{type:"required",message:"Name is required"}]}}return t.prototype.ngOnInit=function(){var t=this;this.ActionData.getAll().subscribe((function(e){t.listAction=e,t.tableRows=Object(h.i)(e),console.log(t.tableRows),t.listAction=t.tableRows.map((function(t,e){return Object(h.a)({},t)}))})),this.addNewActionForm=this.formBuilder.group({name:new r.e("",r.v.compose([r.v.required])),detail:new r.e("",r.v.compose([r.v.required]))}),this.editActionForm=this.formBuilder.group({id:new r.e(""),name:new r.e("",r.v.compose([r.v.required])),detail:new r.e("",r.v.compose([r.v.required]))})},t.prototype.addNewAction=function(){var t=this;console.log(this.addNewActionForm.value),this.ActionData.create(this.addNewActionForm.value).subscribe((function(){t.successAlert("add new"),window.location.reload()}),(function(){t.errorAlert("add new")}),(function(){}))},t.prototype.editActionDetail=function(){var t=this;console.log(this.editActionForm.value),this.ActionData.update(this.editActionForm.value.id,this.editActionForm.value).subscribe((function(){t.successAlert("edit"),window.location.reload()}),(function(){t.errorAlert("edit")}),(function(){}))},t.prototype.navigatePage=function(t,e){return console.log(e),console.log(t+"/"+e),"/admin//utility/Actions"==t?this.router.navigate([t]):"/admin//utility/Action-detail"==t?this.router.navigate([t,e]):void 0},t.prototype.successMessage=function(){this.notifyService.openToastr("Success","Create New Action")},t.prototype.successEditMessage=function(){this.notifyService.openToastr("Success","Edit Action")},t.prototype.errorAlert=function(t){S.a.fire({title:"Error",text:"Cannot "+t+" Action, Please Try Again!",type:"error",buttonsStyling:!1,confirmButtonClass:"btn btn-danger",confirmButtonText:"Close"})},t.prototype.successAlert=function(t){S.a.fire({title:"Success",text:"Successfully "+t+"!",type:"success",buttonsStyling:!1,confirmButtonClass:"btn btn-success",confirmButtonText:"Tutup"})},t.prototype.entriesChange=function(t){this.tableEntries=t.target.value},t.prototype.filterTable=function(t){var e=t.target.value;this.listAction=this.tableRows.filter((function(t){for(var a in t)if(-1!==t[a].toLowerCase().indexOf(e))return!0;return!1}))},t.prototype.onActivate=function(t){this.tableActiveRow=t.row},t.prototype.onSelect=function(t){var e;console.log(t),(e=this.files).push.apply(e,t.addedFiles)},t.prototype.onRemove=function(t){console.log(t),this.files.splice(this.files.indexOf(t),1)},t.prototype.onSelectTable=function(t){var e,a=t.selected;this.tableSelected.splice(0,this.tableSelected.length),(e=this.tableSelected).push.apply(e,a)},t.prototype.ngOnDestroy=function(){var t=this;this.zone.runOutsideAngular((function(){t.chart&&(console.log("Chart disposed"),t.chart.dispose())}))},t.prototype.getCharts=function(){var t=this;this.zone.runOutsideAngular((function(){t.getChart()}))},t.prototype.openModal=function(t,e){e&&(console.log(e),this.editActionForm.patchValue(e)),this.modal=this.modalService.show(t,this.modalConfig)},t.prototype.closeModal=function(){this.modal.hide(),this.editActionForm.reset()},t.prototype.confirm=function(){var t=this;S.a.fire({title:"Confirmation",text:"Are you sure to create this new Action?",type:"info",buttonsStyling:!1,confirmButtonClass:"btn btn-info",confirmButtonText:"Confirm",showCancelButton:!0,cancelButtonClass:"btn btn-danger",cancelButtonText:"Cancel"}).then((function(e){e.value&&t.register()}))},t.prototype.register=function(){var t=this;S.a.fire({title:"Success",text:"A new Action has been created!",type:"success",buttonsStyling:!1,confirmButtonClass:"btn btn-success",confirmButtonText:"Close"}).then((function(e){e.value&&(t.modal.hide(),t.editActionForm.reset())}))},t.prototype.getChart=function(){var t=b.k("chartdivAction",d.n);t.scrollbarX=new b.h,t.data=[{country:"Jan",visits:3025},{country:"Feb",visits:1882},{country:"Mar",visits:1809},{country:"Apr",visits:1322},{country:"May",visits:1122},{country:"Jun",visits:1114},{country:"July",visits:984},{country:"Aug",visits:711},{country:"Sep",visits:665},{country:"Oct",visits:711},{country:"Nov",visits:711},{country:"Dec",visits:711}],function(){for(var e=0,a=0;a<t.data.length;a++)e+=t.data[a].visits;var i=0;for(a=0;a<t.data.length;a++)t.data[a].pareto=(i+=t.data[a].visits)/e*100}();var e=t.xAxes.push(new d.b);e.dataFields.category="country",e.renderer.grid.template.location=0,e.renderer.minGridDistance=60,e.tooltip.disabled=!0;var a=t.yAxes.push(new d.m);a.renderer.minWidth=50,a.min=0,a.cursorTooltipEnabled=!1;var i=t.series.push(new d.d);i.sequencedInterpolation=!0,i.dataFields.valueY="visits",i.dataFields.categoryX="country",i.tooltipText="[{categoryX}: bold]{valueY}[/]",i.columns.template.strokeWidth=0,i.tooltip.pointerOrientation="vertical",i.columns.template.column.cornerRadiusTopLeft=10,i.columns.template.column.cornerRadiusTopRight=10,i.columns.template.column.fillOpacity=.8;var o=i.columns.template.column.states.create("hover");o.properties.cornerRadiusTopLeft=0,o.properties.cornerRadiusTopRight=0,o.properties.fillOpacity=1,i.columns.template.adapter.add("fill",(function(e,a){return t.colors.getIndex(a.dataItem.index)}));var n=t.yAxes.push(new d.m);n.renderer.opposite=!0,n.min=0,n.max=100,n.strictMinMax=!0,n.renderer.grid.template.disabled=!0,n.numberFormatter=new b.g,n.numberFormatter.numberFormat="#'%'",n.cursorTooltipEnabled=!1;var r=t.series.push(new d.i);r.dataFields.valueY="pareto",r.dataFields.categoryX="country",r.yAxis=n,r.tooltipText="pareto: {valueY.formatNumber('#.0')}%[/]",r.bullets.push(new d.c),r.strokeWidth=2,r.stroke=(new b.f).getFor("alternativeBackground"),r.strokeOpacity=.5,t.cursor=new d.q,t.cursor.behavior="panX"},t.\u0275fac=function(e){return new(e||t)(u.Ob(T.a),u.Ob(u.z),u.Ob(o.f),u.Ob(r.d),u.Ob(w.b),u.Ob(J.a),u.Ob(l.c),u.Ob(s.e),u.Ob(s.a))},t.\u0275cmp=u.Ib({type:t,selectors:[["app-workflow"]],decls:57,vars:7,consts:[[1,"header","pb-6"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"col-lg-6","col-7"],[1,"h2","text-dark","d-inline-block","mb-0"],[1,"col-lg-6","col-5","text-right"],[1,"container-fluid","mt--6"],[1,"row"],[1,"col-xl-12"],[1,"card"],[1,"card-header","bg-secondary"],[1,"row","align-items-center"],[1,"col"],[1,"text-uppercase","text-muted","ls-1","mb-1"],[1,"h3","mb-0"],[1,"card-body"],["id","orgChartId",3,"data"],[1,"col-md-12"],[1,"m-0"],[1,"dataTables_wrapper","py-4"],[1,"col-sm-12","col-md-6"],["id","datatable_length",1,"dataTables_length"],["name","datatable_length","aria-controls","datatable",1,"form-control","form-control-sm",3,"change"],["value","5"],["value","10"],["value","15"],["value","20"],[1,"bootstrap","selection-cell",3,"columnMode","headerHeight","footerHeight","rowHeight","limit","rows","activate"],["name","No"],["ngx-datatable-cell-template",""],["ngx-datatable-header-template",""],["editTugasan",""],[1,"modal-header","bg-default"],["id","modal-title-default",1,"modal-title","text-white","my-auto"],["aria-label","Close","data-dismiss","modal","type","button",1,"close",3,"click"],["aria-hidden","true",1,"text-white","my-auto"],[1,"modal-body"],[3,"formGroup"],[1,"form-group"],[1,"form-control-label"],["placeholder","Enter Name","value","Kamil","type","text",1,"form-control"],["placeholder","Enter Name","type","text","value","id123123",1,"form-control"],["placeholder","Enter Name","type","text",1,"form-control"],["name","id","formControlName","id","type","hidden"],[1,"modal-footer"],[1,"text-center"],["type","submit",1,"btn","btn-default",3,"click"],["data-dismiss","modal","type","button",1,"btn","btn-outline-danger","ml-auto",3,"click"]],template:function(t,e){1&t&&(u.Tb(0,"div",0),u.Tb(1,"div",1),u.Tb(2,"div",2),u.Tb(3,"div",3),u.Tb(4,"div",4),u.Tb(5,"h6",5),u.Gc(6," Workflow "),u.Sb(),u.Sb(),u.Pb(7,"div",6),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Tb(8,"div",7),u.Tb(9,"div",8),u.Tb(10,"div",9),u.Tb(11,"div",10),u.Tb(12,"div",11),u.Tb(13,"div",12),u.Tb(14,"div",13),u.Tb(15,"h6",14),u.Gc(16,"Chart"),u.Sb(),u.Tb(17,"h5",15),u.Gc(18,"Organisation Chart"),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Tb(19,"div",16),u.Pb(20,"angular-org-chart",17),u.Sb(),u.Sb(),u.Sb(),u.Tb(21,"div",18),u.Tb(22,"div",10),u.Tb(23,"div",11),u.Tb(24,"h3",19),u.Gc(25,"User Level"),u.Sb(),u.Sb(),u.Tb(26,"div",20),u.Tb(27,"div",8),u.Tb(28,"div",21),u.Tb(29,"div",22),u.Tb(30,"label"),u.Gc(31," shows "),u.Tb(32,"select",23),u.bc("change",(function(t){return e.entriesChange(t)})),u.Tb(33,"option",24),u.Gc(34,"5"),u.Sb(),u.Tb(35,"option",25),u.Gc(36,"10"),u.Sb(),u.Tb(37,"option",26),u.Gc(38,"15"),u.Sb(),u.Tb(39,"option",27),u.Gc(40,"20"),u.Sb(),u.Sb(),u.Gc(41," Records "),u.Sb(),u.Sb(),u.Sb(),u.Pb(42,"div",21),u.Sb(),u.Tb(43,"ngx-datatable",28),u.bc("activate",(function(t){return e.onActivate(t)})),u.Tb(44,"ngx-datatable-column",29),u.Ec(45,Y,2,1,"ng-template",30),u.Sb(),u.Tb(46,"ngx-datatable-column"),u.Ec(47,H,2,0,"ng-template",31),u.Ec(48,X,1,1,"ng-template",30),u.Sb(),u.Tb(49,"ngx-datatable-column"),u.Ec(50,z,2,0,"ng-template",31),u.Ec(51,L,1,1,"ng-template",30),u.Sb(),u.Tb(52,"ngx-datatable-column"),u.Ec(53,U,2,0,"ng-template",31),u.Ec(54,j,1,1,"ng-template",30),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Ec(55,W,33,1,"ng-template",null,32,u.Fc)),2&t&&(u.Bb(20),u.lc("data",e.orgData),u.Bb(23),u.lc("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight","auto")("limit",-1!=e.tableEntries?e.tableEntries:void 0)("rows",e.listPenguna))},directives:[_.b,r.r,r.w,c.d,c.b,c.a,c.c,r.x,r.o,r.h,r.b,r.n,r.f],styles:[""]}),t}()}]}],K=a("XMjR"),Q=a("17py");a.d(e,"BusModule",(function(){return $}));var $=function(){function t(){}return t.\u0275mod=u.Mb({type:t}),t.\u0275inj=u.Lb({factory:function(e){return new(e||t)},imports:[[i.c,o.a.forRoot(),n.c.forRoot(),o.d.forRoot(),o.g.forRoot(),o.i.forRoot(),o.j.forRoot(),o.k.forRoot(),r.i,r.t,l.b,c.e,s.h.forChild(V),K.a.forRoot(),Q.a,_.a]]}),t}()}}]);