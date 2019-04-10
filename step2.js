class Step2 extends Step {
    start(text) {
        this.html.setAttribute("status",1);

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
               if (xmlhttp.status == 200) {
                    let urls = JSON.parse(xmlhttp.responseText)
                    let entity = urls.map(x => x.split("/")[x.split("/").length-1])
                    this.html.setAttribute("status",2)
                    this.next(entity)
                    
               }
               else if (xmlhttp.status == 400) {
                    this.html.setAttribute("status",0)
               }
               else {
                    this.html.setAttribute("status",0)
               }
            }
        };
    
        xmlhttp.open("POST", "http://127.0.0.1:12401/textannotation", true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify({text:text}));
    }

}