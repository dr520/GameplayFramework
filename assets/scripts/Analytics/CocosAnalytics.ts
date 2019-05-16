
export default class H5Analytics{
    static init (){
       
    }

    // 开始登陆
    static loginStart(){
        cocosAnalytics.CAAccount.loginStart();
        cc.winSize.clone
    }

    // 登陆成功
    static loginSuccess(){
        cocosAnalytics.CAAccount.loginSuccess({
            'userID': '101',
            'age': '24',    // 年龄
            'sex': '1',     // 性别：1为男，2为女，其它表示未知
            'server':"web",
        });
    }
    
    //自定义事件开始
    // 事件开始
    // 参数：事件ID（必填）, 不得超过30个字符
    // 参数：事件内容（必填）
    static onStarted(key,table){
        console.log("onStarted")
        cocosAnalytics.CACustomEvent.onStarted(key, table);
    }

    //自定义事件成功结束
    static onSuccess(key,table){
        console.log("onSuccess")
        cocosAnalytics.CACustomEvent.onSuccess(key, table);
    }

    // 事件取消
    // 参数：事件ID（必填）, 不得超过30个字符
    static onCancelled(key,table){
        console.log("onCancelled")
        cocosAnalytics.CACustomEvent.onCancelled(key,table);
    }

    // 事件失败
    // 参数：事件ID（必填）, 不得超过30个字符
    static onFailed(key,table){
        console.log("onFailed")
        cocosAnalytics.CACustomEvent.onFailed(key,table);
    }

    // 开始支付
    static payBegin(amount,iapID,accountID = "",partner = "微信",gameServer = "",level = "",mission = ""){
        console.log("payBegin")
        let orderID = Date.now().toString();
        cocosAnalytics.CAPayment.payBegin({
            // amount 付费金额，单位为分，必填
            amount: amount,
            // currencyType 货币类型，可选。默认CNY
            currencyType: 'CNY',
            // payType 支付方式，可选。默认为空
            payType: '信用卡',
            // iapID 付费点，可选。默认为空
            iapID: iapID,
            // orderID 订单编号，可选。默认为空
            orderID: orderID,
            // 充值获得的虚拟币额度
            virtualCurrencyAmount: 0,
            // 消费的账号  苹果是appleid 安卓是？？
            accountID: accountID,
            // 支付渠道 例如：QQ、微信。
            partner: partner,
            // 玩家充值的区服。
            gameServer: gameServer,
            // 玩家充值时的等级。
            level: level,
            // 玩家充值时所在的关卡或任务。亦可传入一个玩家打到的最高关卡           
            mission: mission
        });
    }

    // 支付成功
    static paySuccess(amount,iapID,accountID = "",partner = "微信",gameServer = "",level = "",mission = ""){
        console.log("payBegin")
        let orderID = Date.now().toString();
        cocosAnalytics.CAPayment.paySuccess({
            // amount 付费金额，单位为分，必填
            amount: amount,
            // currencyType 货币类型，可选。默认CNY
            currencyType: 'CNY',
            // payType 支付方式，可选。默认为空
            payType: '信用卡',
            // iapID 付费点，可选。默认为空
            iapID: iapID,
            // orderID 订单编号，可选。默认为空
            orderID: orderID,
            // 充值获得的虚拟币额度
            virtualCurrencyAmount: 0,
            // 消费的账号  苹果是appleid 安卓是？？
            accountID: accountID,
            // 支付渠道 例如：QQ、微信。
            partner: partner,
            // 玩家充值的区服。
            gameServer: gameServer,
            // 玩家充值时的等级。
            level: level,
            // 玩家充值时所在的关卡或任务。亦可传入一个玩家打到的最高关卡           
            mission: mission
        });
    }

    // 支付失败
    static payFailed(amount,iapID,accountID = "",partner = "微信",gameServer = "",level = "",mission = "",reason = "充值失败"){
        console.log("payBegin")
        let orderID = Date.now().toString();
        cocosAnalytics.CAPayment.payFailed({
            // amount 付费金额，单位为分，必填
            amount: amount,
            // currencyType 货币类型，可选。默认CNY
            currencyType: 'CNY',
            // payType 支付方式，可选。默认为空
            payType: '信用卡',
            // iapID 付费点，可选。默认为空
            iapID: iapID,
            // orderID 订单编号，可选。默认为空
            orderID: orderID,
            // 充值获得的虚拟币额度
            virtualCurrencyAmount: 0,
            // 消费的账号  苹果是appleid 安卓是？？
            accountID: accountID,
            // 支付渠道 例如：QQ、微信。
            partner: partner,
            // 玩家充值的区服。
            gameServer: gameServer,
            // 玩家充值时的等级。
            level: level,
            // 玩家充值时所在的关卡或任务。亦可传入一个玩家打到的最高关卡           
            mission: mission,
            // 支付失败原因 
            reason:reason
        });
    }

    // 支付取消
    static payCanceled(amount,iapID,accountID = "",partner = "微信",gameServer = "",level = "",mission = ""){
        console.log("payBegin")
        let orderID = Date.now().toString();
        cocosAnalytics.CAPayment.payCanceled({
            // amount 付费金额，单位为分，必填
            amount: amount,
            // currencyType 货币类型，可选。默认CNY
            currencyType: 'CNY',
            // payType 支付方式，可选。默认为空
            payType: '信用卡',
            // iapID 付费点，可选。默认为空
            iapID: iapID,
            // orderID 订单编号，可选。默认为空
            orderID: orderID,
            // 充值获得的虚拟币额度
            virtualCurrencyAmount: 0,
            // 消费的账号  苹果是appleid 安卓是？？
            accountID: accountID,
            // 支付渠道 例如：QQ、微信。
            partner: partner,
            // 玩家充值的区服。
            gameServer: gameServer,
            // 玩家充值时的等级。
            level: level,
            // 玩家充值时所在的关卡或任务。亦可传入一个玩家打到的最高关卡           
            mission: mission

        });
    }

    // 插屏 (广告ID)
    static adInsertStart(adID){
        this.onStarted("插屏",{ad_insert:adID})
    }


    // 插屏
    static adInsertSucess(adID){
        this.onSuccess("插屏",{ad_insert:adID})
    }


    // 插屏失败
    static adInsertFailed(adID,reason){
        this.onFailed("插屏",{ad_insert:adID,reason:reason})
    }

    static adInsertClick(adID){
        this.onFailed("插屏点击",{ad_insert_clk:adID})
        this.onSuccess("插屏点击",{ad_insert_clk:adID})
    }

    static adInsertClose(adID){
        this.onFailed("插屏关闭",{ad_insert_skip:adID})
        this.onSuccess("插屏关闭",{ad_insert_skip:adID})
    }

    // 横幅 (广告ID)
    static adBannerStart(adID){
        this.onStarted("横幅",{ad_banner:adID})
    }

    // 横幅
    static adBannerSucess(adID){
        this.onSuccess("横幅",{ad_banner:adID})
    }

    // 横幅失败
    static adBannerFailed(adID,reason){
        this.onFailed("横幅",{ad_banner:adID,reason:reason})
    }

    static adBannerClick(adID){
        this.onFailed("横幅点击",{ad_banner_clk:adID})
        this.onSuccess("横幅点击",{ad_banner_clk:adID})
    }

    static adBannerClose(adID){
        this.onFailed("横幅关闭",{ad_banner_skip:adID})
        this.onSuccess("横幅关闭",{ad_banner_skip:adID})
    }

    // 激励视频 (广告ID)
    static adVedioStart(adID){
        this.onStarted("激励视频",{ad_video:adID})
    }


    // 激励视频
    static adVedioSucess(adID){
        this.onSuccess("激励视频",{ad_video:adID})
    }

    // 激励视频失败
    static adVedioFailed(adID,reason){
        this.onFailed("激励视频",{ad_video:adID,reason:reason})
    }

    static adVedioClick(adID){
        this.onFailed("激励视频点击",{ad_video_clk:adID})
        this.onSuccess("激励视频点击",{ad_video_clk:adID})
    }

    static adVedioClose(adID){
        this.onFailed("激励视频关闭",{ad_video_skip:adID})
        this.onSuccess("激励视频关闭",{ad_video_skip:adID})
    }

}