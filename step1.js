class Step1 extends Step {

    start(randoName) {
        this.html.setAttribute("status",1);

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
               if (xmlhttp.status == 200) {
                    this.exempleContainer[0].innerHTML += "Réponse: <pre>"+xmlhttp.responseText+"</pre>";
                    let text = JSON.parse(xmlhttp.responseText)[0]
                    this.html.setAttribute("status",2)
                    this.next(text)
               }
               else if (xmlhttp.status == 400) {
                    this.html.setAttribute("status",0);
               }
               else {
                    
                    this.html.setAttribute("status",0);
               }
            }
        };
        this.exempleContainer[0].innerHTML = "GET http://127.0.0.1:12401/rando/ <br/>"
        xmlhttp.open("GET", "http://127.0.0.1:12401/rando/"+randoName, true);
        xmlhttp.send();
    }

}