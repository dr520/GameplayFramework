import { UIManager } from "../Manager/UIManager";
import { GameController } from "../Manager/GameController";
import { ListenerManager } from "../Manager/ListenerManager";
import { ListenerType } from "../Data/ListenerType";
import { LoadingUI } from "../UI/LoadingUI";
import { LogWrap } from "../Utils/LogWrap";
import { MainUI } from "../UI/MainUI";
const {ccclass, property} = cc._decorator;

@ccclass
export class GameMain extends cc.Component 
{
    @property(cc.Node)
    private preLoadPrefabList: cc.Node = null;

    onLoad()
    {
        LogWrap.log("test log");
        LogWrap.info("test info");
        LogWrap.warn("test warn");
        LogWrap.err("test err");

        // let frameSize = cc.view.getFrameSize();
        // let bFitWidth = (frameSize.width / frameSize.height) < (750 / 1334)
        // cc.Canvas.instance.fitWidth = bFitWidth;
        // cc.Canvas.instance.fitHeight = !bFitWidth;
        let designWidth = 750;  //根据设置修改
        let designHeight = 1334;    //根据设置修改
        let c = this.node.getComponent(cc.Canvas);
        c.fitHeight = false;
        c.fitWidth = true;
 
        // // 适配解决方案
        let width: number = cc.winSize.width;
        let height: number = cc.winSize.height;
 
        let whr = width / height;
        whr = whr < 0.46 ? 0.46: whr;
        // console.log("width: ", width, "height: ", height,"whr:",whr);
        let key = 0.563
        if (cc.sys.platform == cc.sys.MOBILE_BROWSER){
            key = 0.6
        }
        if (whr >= key) {
            c.fitHeight = true;
            c.fitWidth = false;
            c.designResolution = new cc.Size(designWidth, designHeight);
            this.node.setContentSize(designWidth, designHeight);
        }else {
            c.fitHeight = false;
            c.fitWidth = true;
            c.designResolution = new cc.Size(designWidth, designWidth/whr);
            this.node.setContentSize(designWidth, designWidth/whr);
        };
    }

    start()
    {
        this.preLoadPrefabList.destroy();
        
        UIManager.getInstance().openUI(LoadingUI, 10, ()=>{
            GameController.getInstance().initGame();
        },null,{ui:MainUI});
    }

    update(dt)
    {
        ListenerManager.getInstance().trigger(ListenerType.LoopUpdate, dt);
    }
}