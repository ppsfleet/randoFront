/*
class StepDom extends HTMLElement {
    constructor() {
      super();
  
      var shadow = this.attachShadow({mode: 'open'});
      var template = document.querySelector('#template-service');
      var clone = document.importNode(template.content, true);
      //var wrapper = this.createWrapperElement();
      //var icon = this.createIconElement();
      //var name = this.createNameElement();
      //var style = this.createCss();
      
      shadow.appendChild(clone);
      //shadow.appendChild(style);
      //wrapper.appendChild(icon);
      //wrapper.appendChild(name);
  
    }


    static get observedAttributes() {
      return ['status', 'name'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      switch (name) {
      case 'name':
        this.shadowRoot.querySelector('#name').innerText = newValue;
      break;
      case 'status':
        this.changeStatus(newValue)
      break;
      }
    }

    start()
    {
      console.log("toto")
    }

    changeStatus(newValue) {
      if(newValue == "1")
      {
        this.shadowRoot.querySelector('#status').innerText = "Running";
        this.changeColor("blue")
        
      }
      else if(newValue == "0")
      {
        this.shadowRoot.querySelector('#status').innerText = "Error";
        this.changeColor("red")
      }
      else if(newValue == "2")
      {
        this.shadowRoot.querySelector('#status').innerText = "Done";
        this.changeColor("green")
      }
      else
      {
        this.shadowRoot.querySelector('#status').innerText = "Not running";
      }
    }
    
    changeColor(color) {
      this.shadowRoot.querySelector('#status').style.borderColor=color
      this.shadowRoot.querySelector('#icon').style.borderColor=color
      this.shadowRoot.querySelector('#trame-element').style.borderColor=color
    }
}

customElements.define('step-element', StepDom);
*/

class Step {
  constructor(ExempleContainer,appContainer) {
    this.ExempleContainer = ExempleContainer
    this.appContainer = appContainer
    this.html = appContainer
  }

  addCallback(next) {
    this.next = next
  }
}
