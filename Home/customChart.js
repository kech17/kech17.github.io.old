var data = {
    labels: ['Web Dev', 'IC Analysis', 'Mobile', 'Robotics', 'OOP', 'Prototype', 'Low-level'],
    series: [
    //0 to 6
    [4,3,5,4,6,4,2]
    ]
};

var yLabels = ['Beginner', '', 'Intermediate', '', 'Proficient','','Advanced'];

var options = {
    width: 623,
    height: 395,
    axisY: {
        offset: 110,
        labelInterpolationFnc: function(value) {
            return yLabels[value];
        }
    }
};

var duration = 500;



function makeChart() {
    var chart = Chartist.Bar('.ct-chart', data, options);
    /*
    chart.on('draw', function(data) {
        if (data.type === 'bar') {
            data.element.animate({ 
                y1: {
                    begin: 50,
                    dur: duration,
                    from: 360,
                    to: data.y,
                    easing: 'easeOutQuart'
                } 
            });
        }
    });
    */
}


/*
ChartJS

var hardwareChart = $("#hardwareChart").get(0).getContext("2d");
var hardwareData = {
    labels: ["Web Dev", "IC Analysis", "Mobile", "Robotics", "OOP", "Prototyping", "Low-level" ],
    datasets: [
        {
            label: "Technical Experience",
            fillColor: "rgba(119,221,119,0.5)",
            strokeColor: "rgba(119,221,119,0.8)",
            highlightFill: "rgba(119,221,119,0.75)",
            highlightStroke: "rgba(119,221,119,1)",
            data: [7, 5, 8, 6, 9, 7, 4]
        }
    ]
};
*/