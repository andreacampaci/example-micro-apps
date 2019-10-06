import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular';

  ngOnInit() {
    this.loadVueElement();
  }

  async loadVueElement() {
    await this.loadScript('http://127.0.0.1:8082/vue-element.js');
    await this.loadScript('http://127.0.0.1:8083/vue-client-a.js');
  }

  private async loadScript(url: string) {
    console.log('preparing to load...');
    const node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.async = false;
    document.getElementsByTagName('head')[0].appendChild(node);
  }

}
