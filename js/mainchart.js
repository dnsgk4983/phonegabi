am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("iphone-11pro-chart", am4charts.XYChart);
    
    var data = [];
    var open = 30;
    var close = 100;
    
    var names = ["2019-11",
    "12",
    "2020-01",
    "02",
    "03",
    "04",
    "05",
    "06"
    ];
    
    for (var i = 0; i < names.length; i++) {
    open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
    close = open + Math.round(Math.random() * 10) + 3;
    data.push({ category: names[i], open: open, close: close });
    }
    
    chart.data = data;
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 15;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
    categoryAxis.renderer.labels.template.rotation = 0; // 그래프 이름 가로정렬
    categoryAxis.renderer.labels.template.horizontalCenter = "center";
    categoryAxis.renderer.labels.template.location = 0.55;
    // categoryAxis.renderer.inside = true;
    
    categoryAxis.renderer.labels.template.adapter.add("dx", function(dx, target) {
        return -target.maxRight / 2;
    })
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.axisFills.template.disabled = true;
    
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "category";
    series.dataFields.openValueY = "open";
    series.dataFields.valueY = "close";
    series.tooltipText = "상한: {openValueY.value} 하한: {valueY.value}";
    series.sequencedInterpolation = true;
    series.fillOpacity = 0;
    series.strokeOpacity = 1;
    series.columns.template.width = 0.01;
    series.tooltip.pointerOrientation = "horizontal";
    
    var openBullet = series.bullets.create(am4charts.CircleBullet);
    openBullet.locationY = 1;
    
    var closeBullet = series.bullets.create(am4charts.CircleBullet);
    
    closeBullet.fill = chart.colors.getIndex(4);
    closeBullet.stroke = closeBullet.fill;
    
    chart.cursor = new am4charts.XYCursor();
    
    // chart.scrollbarX = new am4core.Scrollbar();
    // chart.scrollbarY = new am4core.Scrollbar();
    
    
}); // end am4core.ready()

// --------------------------------------------
am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("iphone-XS-chart", am4charts.XYChart);
    
    var data = [];
    var open = 30;
    var close = 100;
    
    var names = ["2019-11",
    "12",
    "2020-01",
    "02",
    "03",
    "04",
    "05",
    "06"
    ];
    
    for (var i = 0; i < names.length; i++) {
    open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
    close = open + Math.round(Math.random() * 10) + 3;
    data.push({ category: names[i], open: open, close: close });
    }
    
    chart.data = data;
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 15;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
    categoryAxis.renderer.labels.template.rotation = 0; // 그래프 이름 가로정렬
    categoryAxis.renderer.labels.template.horizontalCenter = "center";
    categoryAxis.renderer.labels.template.location = 0.55;
    // categoryAxis.renderer.inside = true;
    
    categoryAxis.renderer.labels.template.adapter.add("dx", function(dx, target) {
        return -target.maxRight / 2;
    })
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.axisFills.template.disabled = true;
    
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "category";
    series.dataFields.openValueY = "open";
    series.dataFields.valueY = "close";
    series.tooltipText = "상한: {openValueY.value} 하한: {valueY.value}";
    series.sequencedInterpolation = true;
    series.fillOpacity = 0;
    series.strokeOpacity = 1;
    series.columns.template.width = 0.01;
    series.tooltip.pointerOrientation = "horizontal";
    
    var openBullet = series.bullets.create(am4charts.CircleBullet);
    openBullet.locationY = 1;
    
    var closeBullet = series.bullets.create(am4charts.CircleBullet);
    
    closeBullet.fill = chart.colors.getIndex(4);
    closeBullet.stroke = closeBullet.fill;
    
    chart.cursor = new am4charts.XYCursor();
    
    // chart.scrollbarX = new am4core.Scrollbar();
    // chart.scrollbarY = new am4core.Scrollbar();
    
    
}); // end am4core.ready()

// ------------------------------------------------

am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("galaxy-note-S20-chart", am4charts.XYChart);
    
    var data = [];
    var open = 30;
    var close = 100;
    
    var names = ["2019-11",
    "12",
    "2020-01",
    "02",
    "03",
    "04",
    "05",
    "06"
    ];
    
    for (var i = 0; i < names.length; i++) {
    open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
    close = open + Math.round(Math.random() * 10) + 3;
    data.push({ category: names[i], open: open, close: close });
    }
    
    chart.data = data;
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 15;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
    categoryAxis.renderer.labels.template.rotation = 0; // 그래프 이름 가로정렬
    categoryAxis.renderer.labels.template.horizontalCenter = "center";
    categoryAxis.renderer.labels.template.location = 0.55;
    // categoryAxis.renderer.inside = true;
    
    categoryAxis.renderer.labels.template.adapter.add("dx", function(dx, target) {
        return -target.maxRight / 2;
    })
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.axisFills.template.disabled = true;
    
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "category";
    series.dataFields.openValueY = "open";
    series.dataFields.valueY = "close";
    series.tooltipText = "상한: {openValueY.value} 하한: {valueY.value}";
    series.sequencedInterpolation = true;
    series.fillOpacity = 0;
    series.strokeOpacity = 1;
    series.columns.template.width = 0.01;
    series.tooltip.pointerOrientation = "horizontal";
    
    var openBullet = series.bullets.create(am4charts.CircleBullet);
    openBullet.locationY = 1;
    
    var closeBullet = series.bullets.create(am4charts.CircleBullet);
    
    closeBullet.fill = chart.colors.getIndex(4);
    closeBullet.stroke = closeBullet.fill;
    
    chart.cursor = new am4charts.XYCursor();
    
    // chart.scrollbarX = new am4core.Scrollbar();
    // chart.scrollbarY = new am4core.Scrollbar();
    
    
}); // end am4core.ready()

// -------------------------------------------

am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("galaxy-S9-chart", am4charts.XYChart);
    
    var data = [];
    var open = 30;
    var close = 100;
    
    var names = ["2019-11",
    "12",
    "2020-01",
    "02",
    "03",
    "04",
    "05",
    "06"
    ];
    
    for (var i = 0; i < names.length; i++) {
    open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
    close = open + Math.round(Math.random() * 10) + 3;
    data.push({ category: names[i], open: open, close: close });
    }
    
    chart.data = data;
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 15;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
    categoryAxis.renderer.labels.template.rotation = 0; // 그래프 이름 가로정렬
    categoryAxis.renderer.labels.template.horizontalCenter = "center";
    categoryAxis.renderer.labels.template.location = 0.55;
    // categoryAxis.renderer.inside = true;
    
    categoryAxis.renderer.labels.template.adapter.add("dx", function(dx, target) {
        return -target.maxRight / 2;
    })
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.axisFills.template.disabled = true;
    
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "category";
    series.dataFields.openValueY = "open";
    series.dataFields.valueY = "close";
    series.tooltipText = "상한: {openValueY.value} 하한: {valueY.value}";
    series.sequencedInterpolation = true;
    series.fillOpacity = 0;
    series.strokeOpacity = 1;
    series.columns.template.width = 0.01;
    series.tooltip.pointerOrientation = "horizontal";
    
    var openBullet = series.bullets.create(am4charts.CircleBullet);
    openBullet.locationY = 1;
    
    var closeBullet = series.bullets.create(am4charts.CircleBullet);
    
    closeBullet.fill = chart.colors.getIndex(4);
    closeBullet.stroke = closeBullet.fill;
    
    chart.cursor = new am4charts.XYCursor();
    
    // chart.scrollbarX = new am4core.Scrollbar();
    // chart.scrollbarY = new am4core.Scrollbar();
    
    
}); // end am4core.ready()

// ---------------------------------------------------

am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("galaxy-S10-chart", am4charts.XYChart);
    
    var data = [];
    var open = 30;
    var close = 100;
    
    var names = ["2019-11",
    "12",
    "2020-01",
    "02",
    "03",
    "04",
    "05",
    "06"
    ];
    
    for (var i = 0; i < names.length; i++) {
    open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
    close = open + Math.round(Math.random() * 10) + 3;
    data.push({ category: names[i], open: open, close: close });
    }
    
    chart.data = data;
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 15;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
    categoryAxis.renderer.labels.template.rotation = 0; // 그래프 이름 가로정렬
    categoryAxis.renderer.labels.template.horizontalCenter = "center";
    categoryAxis.renderer.labels.template.location = 0.55;
    // categoryAxis.renderer.inside = true;
    
    categoryAxis.renderer.labels.template.adapter.add("dx", function(dx, target) {
        return -target.maxRight / 2;
    })
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.axisFills.template.disabled = true;
    
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "category";
    series.dataFields.openValueY = "open";
    series.dataFields.valueY = "close";
    series.tooltipText = "상한: {openValueY.value} 하한: {valueY.value}";
    series.sequencedInterpolation = true;
    series.fillOpacity = 0;
    series.strokeOpacity = 1;
    series.columns.template.width = 0.01;
    series.tooltip.pointerOrientation = "horizontal";
    
    var openBullet = series.bullets.create(am4charts.CircleBullet);
    openBullet.locationY = 1;
    
    var closeBullet = series.bullets.create(am4charts.CircleBullet);
    
    closeBullet.fill = chart.colors.getIndex(4);
    closeBullet.stroke = closeBullet.fill;
    
    chart.cursor = new am4charts.XYCursor();
    
    // chart.scrollbarX = new am4core.Scrollbar();
    // chart.scrollbarY = new am4core.Scrollbar();
    
    
}); // end am4core.ready()

// --------------------------------------------------

am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("iphone-SE-chart", am4charts.XYChart);
    
    var data = [];
    var open = 30;
    var close = 100;
    
    var names = ["2019-11",
    "12",
    "2020-01",
    "02",
    "03",
    "04",
    "05",
    "06"
    ];
    
    for (var i = 0; i < names.length; i++) {
    open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
    close = open + Math.round(Math.random() * 10) + 3;
    data.push({ category: names[i], open: open, close: close });
    }
    
    chart.data = data;
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 15;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
    categoryAxis.renderer.labels.template.rotation = 0; // 그래프 이름 가로정렬
    categoryAxis.renderer.labels.template.horizontalCenter = "center";
    categoryAxis.renderer.labels.template.location = 0.55;
    // categoryAxis.renderer.inside = true;
    
    categoryAxis.renderer.labels.template.adapter.add("dx", function(dx, target) {
        return -target.maxRight / 2;
    })
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.axisFills.template.disabled = true;
    
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "category";
    series.dataFields.openValueY = "open";
    series.dataFields.valueY = "close";
    series.tooltipText = "상한: {openValueY.value} 하한: {valueY.value}";
    series.sequencedInterpolation = true;
    series.fillOpacity = 0;
    series.strokeOpacity = 1;
    series.columns.template.width = 0.01;
    series.tooltip.pointerOrientation = "horizontal";
    
    var openBullet = series.bullets.create(am4charts.CircleBullet);
    openBullet.locationY = 1;
    
    var closeBullet = series.bullets.create(am4charts.CircleBullet);
    
    closeBullet.fill = chart.colors.getIndex(4);
    closeBullet.stroke = closeBullet.fill;
    
    chart.cursor = new am4charts.XYCursor();
    
    // chart.scrollbarX = new am4core.Scrollbar();
    // chart.scrollbarY = new am4core.Scrollbar();
    
    
}); // end am4core.ready()