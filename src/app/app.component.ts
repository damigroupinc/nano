import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    
      this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}




  /*
  [x: string]: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar, ){
    //private dbProvider: DatabaseProvider ) {
  
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
       //dbProvider.createDatabase()
       // .then(() => {
       // fechando a SplashScreen somente quando o banco for criado
          this.openHomePage(splashScreen);
       // })
       // .catch(() => {
          // ou se houver erro na criação do banco
       //   this.openHomePage(splashScreen);
        });
    //});
  }
    
  private openHomePage(splashScreen: SplashScreen) {
    splashScreen.hide();
  }
}
*/