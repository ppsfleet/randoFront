class Step9 extends Step {

    start() {
        this.html.setAttribute("status",1);

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
                if (xmlhttp.status == 200 || xmlhttp.status == 201 || xmlhttp.status == 202 || xmlhttp.status == 203) {
                    this.exempleContainer[0].innerHTML += "Réponse: <pre>"+xmlhttp.responseText+"</pre>";
                    this.html.setAttribute("status",2);                    
               }
               else if (xmlhttp.status == 400) {
                    this.html.setAttribute("status",0)
               }
               else {
                    this.html.setAttribute("status",0)
                    this.exempleContainer[0].innerHTML += "Réponse: <pre> error"+xmlhttp.status+"</pre>";
               }
            }
        };

        let url = "http://127.0.0.1:12401/search?box="+st4.square.replace('"','').replace('"','')
        
        this.exempleContainer[0].innerHTML = "GET " +url+ "<br/>"

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }

    

}