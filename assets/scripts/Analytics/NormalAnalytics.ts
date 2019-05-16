
import CocosAnalytics from "./CocosAnalytics";

export default class NormalAnalytics{
    static anlytics:any;

    static init(){
        this.anlytics = CocosAnalytics;
    }

    static loginStart(){
        this.anlytics.loginStart()
    }

    static loginSuccess(){
        this.anlytics.loginSuccess()
    }

    static onStarted(key,table){
        this.anlytics.onStarted(key,table)
    }


    static onSuccess(key,table){
        this.anlytics.onSuccess(key,table)
    }

    static onCancelled(key,table){
        this.anlytics.onCancelled(key,table)
    }


    static onFailed(key,table){
        this.anlytics.onFailed(key,table)
    }


    static payBegin(amount,iapID,accountID = "",partner = "微信",gameServer = "",level = "",mission = ""){
        this.anlytics.payBegin(amount,iapID,accountID,partner,gameServer,level,mission)
    }

    static paySuccess(amount,iapID,accountID = "",partner = "微信",gameServer = "",level = "",mission = ""){
        this.anlytics.paySuccess(amount,iapID,accountID,partner,gameServer,level,mission)
    }


    static payFailed(amount,iapID,accountID = "",partner = "微信",gameServer = "",level = "",mission = "",reason = "充值失败"){
        this.anlytics.payFailed(amount,iapID,accountID,partner,gameServer,level,mission,reason)
    }

    // 支付取消
    static payCanceled(amount,iapID,accountID = "",partner = "微信",gameServer = "",level = "",mission = ""){
        this.anlytics.payCanceled(amount,iapID,accountID,partner,gameServer,level,mission)
    }

    // 插屏 (广告ID)
    static adInsertStart(adID){
        this.anlytics.adInsertStart(adID)
    }

    // 插屏
    static adInsertSucess(adID){
        this.anlytics.adInsertSucess(adID)
    }


    // 插屏失败
    static adInsertFailed(adID,reason){
        this.anlytics.adInsertFailed(adID,reason)
    }

    // 插屏点击
    static adInsertClick(adID){
        this.anlytics.adInsertClick(adID)
    }

    // 插屏关闭
    static adInsertClose(adID){
        this.anlytics.adInsertClose(adID)
    }

    // 横幅 (广告ID)
    static adBannerStart(adID){
        this.anlytics.adBannerStart(adID)
    }


    // 横幅
    static adBannerSucess(adID){
        this.anlytics.adBannerSucess(adID)
    }

    // 横幅失败
    static adBannerFailed(adID,reason){
        this.anlytics.adBannerFailed(adID,reason)
    }

    // 横幅点击
    static adBannerClick(adID){
        this.anlytics.adBannerClick(adID)
    }

    // 横幅关闭
    static adBannerClose(adID){
        this.anlytics.adBannerClose(adID)
    }

    // 激励视频 (广告ID)
    static adVedioStart(adID){
        this.anlytics.adVedioStart(adID)
    }


    // 激励视频
    static adVedioSucess(adID){
        this.anlytics.adVedioSucess(adID)
    }


    // 激励视频失败
    static adVedioFailed(adID,reason){
        this.anlytics.adVedioSucess(adID,reason)
    }

    // 激励视频点击
    static adVedioClick(adID){
        this.anlytics.adVedioClick(adID)
    }

    // 激励视频关闭
    static adVedioClose(adID){
        this.anlytics.adVedioClose(adID)
    }

}


