
export default class PCAnalytics{
    static init (){
       
    }

    // 开始登陆
    static loginStart(){}

    // 登陆成功
    static loginSuccess(){}
    
    //自定义事件开始
    // 事件开始
    // 参数：事件ID（必填）, 不得超过30个字符
    // 参数：事件内容（必填）
    static onStarted(key,table){}

    //自定义事件成功结束
    static onSuccess(key,table){}

    // 事件取消
    // 参数：事件ID（必填）, 不得超过30个字符
    static onCancelled(key,table){}

    // 事件失败
    // 参数：事件ID（必填）, 不得超过30个字符
    static onFailed(key,table){}

    // 开始支付
    static payBegin(amount,iapID,accountID = "",partner = "微信",gameServer = "",level = "",mission = ""){}

    // 支付成功
    static paySuccess(amount,iapID,accountID = "",partner = "微信",gameServer = "",level = "",mission = ""){}

    // 支付失败
    static payFailed(amount,iapID,accountID = "",partner = "微信",gameServer = "",level = "",mission = "",reason = "充值失败"){}

    // 支付取消
    static payCanceled(amount,iapID,accountID = "",partner = "微信",gameServer = "",level = "",mission = ""){}

    // 插屏 (广告ID)
    static adInsertStart(adID){}

    // 插屏
    static adInsertSucess(adID){}

    // 插屏失败
    static adInsertFailed(adID,reason){}

    // 插屏点击
    static adInsertClick(adID){}

    // 插屏关闭
    static adInsertClose(adID){}

    // 横幅 (广告ID)
    static adBannerStart(adID){}


    // 横幅
    static adBannerSucess(adID){ }


    // 横幅失败
    static adBannerFailed(adID,reason){}

    // 横幅点击
    static adBannerClick(adID){}

    // 横幅关闭
    static adBannerClose(adID){}

    // 激励视频 (广告ID)
    static adVedioStart(adID){}


    // 激励视频
    static adVedioSucess(adID){}


    // 激励视频失败
    static adVedioFailed(adID,reason){}

    // 激励视频点击
    static adVedioClick(adID){}

    // 激励视频关闭
    static adVedioClose(adID){}

}