import { BaseUI } from "./BaseUI";
import { GameDataManager } from "../Manager/GameDataManager";

import { AudioManager } from "../Manager/AudioManager";
import { UIHelp } from "../Utils/UIHelp";
import { UIManager } from "../Manager/UIManager";
import { GameUI } from "../App/UI/GameUI";

const {ccclass, property} = cc._decorator;

@ccclass
export class MainUI extends BaseUI {

    protected static className = "MainUI";

    @property(cc.Node)
    private soundOpenStateNode: cc.Node = null;
    @property(cc.Node)
    private soundCloseStateNode: cc.Node = null;
    @property(cc.Node)
    private overlayNode: cc.Node = null;

    private _isSwallow: boolean = false;

    onLoad()
    {
        this.overlayNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        if (this.overlayNode._touchListener) {
            this.overlayNode._touchListener.setSwallowTouches(this._isSwallow);
        }
    }

    start()
    {
        AudioManager.getInstance().playBGM("bgm");

        this.initUI();
    }

    initUI()
    {
        this.initPlayerState();
    }

    initPlayerState()
    {
        let gameData = GameDataManager.getInstance().getGameData();
        this.soundCloseStateNode.active = gameData.playerInfo.closeAudio;
        this.soundOpenStateNode.active = !gameData.playerInfo.closeAudio;
    }

    onTouchStart()
    {
        cc.log("onOverlay TouchStart");
        UIManager.getInstance().showUI(GameUI);
        UIManager.getInstance().hideUI(MainUI);
    }
    
    onBtnSoundOpenState()
    {
        GameDataManager.getInstance().getGameData().playerInfo.closeAudio = true;
        AudioManager.getInstance().stopAll();
        this.soundOpenStateNode.active = false;
        this.soundCloseStateNode.active = true;

        UIHelp.showTip("audio has closed");

        AudioManager.getInstance().playSound("click_Btn");
    }

    onBtnSoundCloseState()
    {
        GameDataManager.getInstance().getGameData().playerInfo.closeAudio = false;
        AudioManager.getInstance().resumeBGM();
        this.soundOpenStateNode.active = true;
        this.soundCloseStateNode.active = false;

        UIHelp.showTip("audio has opened");

        AudioManager.getInstance().playSound("click_Btn");
    }
}