class Step3 extends Step {

    start(places) {
        this.html.setAttribute("status",1);

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
               if (xmlhttp.status == 200) {
                    let coords = JSON.parse(xmlhttp.responseText)
                    this.html.setAttribute("status",2)
                    this.next(coords)
               }
               else if (xmlhttp.status == 400) {
                    this.html.setAttribute("status",0)
               }
               else {
                    this.html.setAttribute("status",0)
               }
            }
        };
    
        xmlhttp.open("POST", "http://127.0.0.1:12401/locateentities", true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify({places:places}));
    }

}