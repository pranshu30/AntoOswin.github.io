$(document).ready(function () {
  var bubbleChart = new d3.svg.BubbleChart({
    supportResponsive: true,
    //container: => use @default
    size: 700,
    //viewBoxSize: => use @default
    innerRadius: 600 / 3,
    //outerRadius: => use @default
    radiusMin: 25,
    //radiusMax: use @default
    //intersectDelta: use @default
    //intersectInc: use @default
    //circleColor: use @default
    data: {
      items: [
{text: "android", count: "99814"},
{text: "spring", count: "44136"},
{text: "eclipse", count: "27592"},
{text: "swing", count: "25754"},
{text: "arrays", count: "17438"},
{text: "hibernate", count: "16386"},
{text: "maven", count: "13565"},
{text: "string", count: "13336"},
{text: "multithreading", count: "12521"},
{text: "xml", count: "12411"},
{text: "jsp", count: "10332"},
{text: "json", count: "9780"},
{text: "mvc", count: "9308"},
{text: "arraylist", count: "9117"},
{text: "mysql", count: "8994"},
{text: "web", count: "8599"},
{text: "google", count: "8489"},
{text: "regex", count: "8431"},
{text: "jpa", count: "8304"},
{text: "servlets", count: "8233"},
{text: "file", count: "8128"},
{text: "sql", count: "8050"},
{text: "apache", count: "7773"},
{text: "tomcat", count: "6970"},
{text: "interface", count: "6612"},
{text: "javafx", count: "6485"},
{text: "Eight", count: "6386"},
{text: "ee", count: "6364"},
{text: "jdbc", count: "6333"},
{text: "selenium", count: "6319"},
{text: "services", count: "6182"},
{text: "javascript", count: "5950"},
{text: "c", count: "5758"},
{text: "class", count: "5681"},
{text: "netbeans", count: "5369"},
{text: "generics", count: "5258"},
{text: "exception", count: "5153"},
{text: "layout", count: "5101"},
{text: "user", count: "4936"},
{text: "list", count: "4889"},
{text: "rest", count: "4774"},
{text: "data", count: "4600"},
{text: "loop", count: "4563"},
{text: "jar", count: "4481"},
{text: "html", count: "4326"},
{text: "algorithm", count: "4248"},
{text: "sockets", count: "4158"},
{text: "methods", count: "4149"},
{text: "junit", count: "4110"},
{text: "testing", count: "4067"},
{text: "database", count: "4027"},
{text: "security", count: "4018"},
{text: "loops", count: "3856"},
{text: "io", count: "3796"},
{text: "object", count: "3785"},
{text: "statement", count: "3735"},
{text: "listview", count: "3727"},
{text: "image", count: "3685"}
],
      eval: function (item) {return item.count;},
      classed: function (item) {return item.text.split(" ").join("");}
    },
    plugins: [
      
      {
        name: "lines",
        options: {
          format: [
            {// Line #0
              textField: "count",
              classed: {count: true},
              style: {
                "font-size": "8px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "black"
              },
              attr: {
                dy: "0px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            },
            {// Line #1
              textField: "text",
              classed: {text: true},
              style: {
                "font-size": "12px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "black"
              },
              attr: {
                dy: "10px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            }
          ],
          centralFormat: [
            {// Line #0
              style: {"font-size": "50px"},
              attr: {}
            },
            {// Line #1
              style: {"font-size": "30px"},
              attr: {dy: "40px"}
            }
          ]
        }
      }]
  });
});