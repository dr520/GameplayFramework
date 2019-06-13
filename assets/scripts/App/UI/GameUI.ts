
import { BaseUI } from "../../UI/BaseUI";
import { UIHelp } from "../../Utils/UIHelp";
import { AudioManager } from "../../Manager/AudioManager";
import { GameDataManager } from "../../Manager/GameDataManager";
import { UIManager } from "../../Manager/UIManager";
import { MainUI } from "../../UI/MainUI";
import { LogWrap } from "../../Utils/LogWrap";
import { ListenerManager } from "../../Manager/ListenerManager";
import { ListenerType } from "../../Data/ListenerType";

const {ccclass, property} = cc._decorator;

@ccclass
export class GameUI extends BaseUI {

    protected static className = "GameUI";

    onLoad()
    {
    
    }

    start()
    {
        AudioManager.getInstance().playBGM("bgm");
        this.initUI();

        
    }

    initUI()
    {
        let btnBack = this.getUINode("btnBack")
        btnBack.on("click",this.onTouchBack,this)


        let touch = this.getUINode("touch")
        touch.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        touch.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        touch.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }

  

    onTouchBack(){
        UIManager.getInstance().showUI(MainUI);
        UIManager.getInstance().closeUI(GameUI)
    }

    initPlayerState()
    {

    }

    onTouchStart()
    {
        LogWrap.log("onOverlay TouchStart");
    }
    
    onTouchMove(event:Event){
        LogWrap.log("onOverlay TouchMove");
        ListenerManager.getInstance().trigger(ListenerType.OnBallMove, event);
    }

    onTouchEnd(){
        LogWrap.log("onOverlay TouchEnd");
    }
}