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
