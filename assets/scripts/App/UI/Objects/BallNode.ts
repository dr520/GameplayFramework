import { ListenerManager } from "../../../Manager/ListenerManager";
import { ListenerType } from "../../../Data/ListenerType";
import { LogWrap } from "../../../Utils/LogWrap";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class BallNode extends cc.Component {

    // LIFE-CYCLE CALLBACKS:
    euler:cc.Vec3
    quat:cc.Quat
    speed:number = 60

    // onLoad () {}

    start () {
        let ballNode = this.node;
        // cc.tween(ballNode).stop()
        // cc.tween(ballNode)
        // .to(1, { scale: 2 })
        // .to(1, { scale: 1 })
        // .repeatForever()
        // .start()

        ballNode.stopAllActions();
        ballNode.runAction(cc.repeatForever(cc.jumpTo(1,cc.v2(ballNode.x,ballNode.y ),100,1)))

        this.euler = new cc.Vec3(0 , 0 , 0);
        // new一个四元数
        this.quat = new cc.Quat(0 , 0 , 0 , 0);

        ListenerManager.getInstance().add(ListenerType.OnBallMove, this, this.OnBallMove);
    }

    update (dt) {
        this.euler.x -= this.speed * dt * 15;
        // 转换为四元数并设置
        this.node.setRotation(this.quat.fromEuler(this.euler));
    }

    OnBallMove(event){
        LogWrap.log("OnBallMove",event)
        
    }

    onDestroy(): void
    {
        ListenerManager.getInstance().removeAll(this);
    }
}
