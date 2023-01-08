function meta(char,http,name,con){
    var meta = document.createElement('meta');
    if(char != ""){
        meta.setAttribute("charset", char);
    }
    if(http != "" && con != ""){
        meta.setAttribute("httpEquiv", http);
        meta.setAttribute("content", con);
    }
    if(name != "" && con != ""){
        meta.setAttribute("name", name);
        meta.setAttribute("content", con);
    }
    document.head.appendChild(meta);
}
meta("UTF-8","","","");
meta("","X-UA-Compatible","","IE=edge");
meta("","","viewport","width=device-width, initial-scale=1.0");
// title section 
var title = document.createElement('title');
title.innerText = "ECG Monitring System"
document.head.appendChild(title);
// link section 
function link(url, rel, type){
    var link = document.createElement('link');
    link.setAttribute("rel", rel);
    if(type){
        link.setAttribute("type", type);
    }
    link.setAttribute("href", url);
    document.head.appendChild(link);
}
link("https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css", "stylesheet");
link("https://image3.mouthshut.com/images/imagesp/925717652s.jpg", "icon", "image/x-icon");
// script section 
function scriptTag(url){
    var script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);
}
scriptTag("https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js");
scriptTag("https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js");
var script = document.createElement('script');
script.innerHTML = [
    window.onload = function () {

        var dps = [];
        var chart = new CanvasJS.Chart("chartContainer", {
            exportEnabled: true,
            title :{
                text: "ECG Monitring Chart"
            },
            axisY: {
                includeZero: false
            },
            data: [{
                type: "spline",
                markerSize: 0,
                dataPoints: dps 
            }]
        });
        
        var xVal = 0;
        var yVal = 100;
        var updateInterval = 1000;
        var dataLength = 50; // number of dataPoints visible at any point
        
        var updateChart = function (count) {
            count = count || 1;
            // count is number of times loop runs to generate random dataPoints.
            for (var j = 0; j < count; j++) {	
                yVal = yVal + Math.round(5 + Math.random() *(-5-5));
                dps.push({
                    x: xVal,
                    y: yVal
                });
                xVal++;
            }
            if (dps.length > dataLength) {
                dps.shift();
            }
            chart.render();
        };
        
        updateChart(dataLength); 
        setInterval(function(){ updateChart() }, updateInterval); 
        
        }
]
document.head.appendChild(script);
// body elements 
var div = document.createElement('div');
div.className = "container";
var aryalogo = document.createElement('img');
aryalogo.src = "https://www.aryacollege.in/assets/img/Logo.svg";
aryalogo.className = "mt-5 pt-4";
aryalogo.style.width = "100%";
aryalogo.alt = "Arya Logo";
div.appendChild(aryalogo);
var h1 = document.createElement('h1');
h1.className = "text-center text-primary";
h1.style.marginTop = "55px";
h1.style.marginBottom = "45px";
h1.style.fontWeight = "800";
h1.innerText = "Smart ECG Monitoring System";
div.appendChild(h1);
var chart = document.createElement('div');
chart.id = "chartContainer";
chart.style.height = "370px";
chart.style.maxWidth = "920px";
chart.style.margin = "0px auto";
div.appendChild(chart);
var device = document.createElement('div');
device.style.display = "flex";
device.style.flexWrap = "nowrap";
device.style.justifyContent = "space-between";
device.style.alignItems = "center";
device.style.alignContent = "space-around";
device.style.flexDirection = "row";
device.style.marginBottom = "10px";
device.style.marginTop = "20px";
device.style.paddingTop = "50px";
device.style.paddingBottom = "50px";
device.style.borderTop = "4px solid #171a2b";
device.style.borderBottom = "4px solid #171a2b";
var auth = document.createElement('div');
auth.className = "auth";
var h1 = document.createElement('h1');
h1.style.color = "cornflowerblue";
h1.innerText = "Khailendra Prasad";
auth.appendChild(h1);
var Branch = document.createElement('h2');
Branch.innerText = "Branch: Electronics And Communication Engineering";
auth.appendChild(Branch);
var RollNo = document.createElement('h2');
RollNo.innerText = "Roll. No. : 19EAREC066";
auth.appendChild(RollNo);
device.appendChild(auth);
var IoTDevice = document.createElement('div');
IoTDevice.className = "IoTDevices";
var appliances = document.createElement('h1');
appliances.innerText = "Using Appliances";
IoTDevice.appendChild(appliances);
function appliance(item){
var pre = document.createElement('pre');
pre.innerText = item;
IoTDevice.appendChild(pre);
};
appliance("1. NodeMCU8266");
appliance("2. REES52 Ecg module AD8232");
device.appendChild(IoTDevice);
div.appendChild(device);
document.body.appendChild(div);
var cs = document.createElement('script');
cs.src = "https://kumarkhailendra.github.io/personal-portfolio/canvasjs.min.js";
document.body.appendChild(cs);
