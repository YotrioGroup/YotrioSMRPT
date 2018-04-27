import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginsvrProvider } from '../../providers/loginsvr/loginsvr';
import { ContextData } from '../../app/context';
import { SmreportPage } from '../smreport/smreport';

//检查更新service
import { UpdateService } from "./../../service/update";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm: any;
  public backgroundImage = 'assets/imgs/mountin.jpeg';

  logindata: any = {
    UserCode: '00100001',
    UserName: '',
    OrgID: -1,
    OrgCode: '',
    OrgName: '',
    UserPass: '123456',
    DeptID: '',
    DeptCode: '',
    DeptName: '',
    Location: '',
    LocationName: '',
    Token: '',
    SaveFlag: true
  }

  contextdata: ContextData;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public app: App,
    public navCtrl: NavController,
    public navParams: NavParams,
    private loginSvrTool: LoginsvrProvider,
    private updateServ: UpdateService
  ) {
    //初始化上下文
    this.contextdata = ContextData.Create();
    //这里做 更新检测
    this.updateServ.checkUpdate();
  }

  login() {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      this.navCtrl.setRoot(HomePage);
    });

    loading.present();

  }

  ionViewWillEnter() {
    //首页已经写死
    // let viewport = document.querySelector("meta[name=viewport]");
    // let content:string = 'viewport-fit=cover, width=device-width, initial-scale='+
    // Math.pow(document.documentElement.clientWidth/2380,1).toString()
    // Math.pow(window.screen.width/document.documentElement.clientWidth, 1).toString()
    // +', minimum-scale=0.2, maximum-scale=3.0, user-scalable=no';
    // viewport.setAttribute('content',content);   
  }

  goToSignup() {
    // this.navCtrl.push(SignupPage);
  }

  goToResetPassword() {
    // this.navCtrl.push(ResetPasswordPage);
  }
}
