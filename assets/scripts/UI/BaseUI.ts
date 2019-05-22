import { ConstValue } from "../Data/ConstValue";
import { ListenerManager } from "../Manager/ListenerManager";

export interface UIClass<T extends BaseUI>
{
    new(): T;
    getUrl(): string;
}

const {ccclass, property} = cc._decorator;
@ccclass
export abstract class BaseUI extends cc.Component
{
    protected static className = "BaseUI";

    protected mTag: any;

    protected mParams:any
    public get tag(): any
	{
		return this.mTag;
	}
	public set tag(value: any)
	{
		this.mTag = value;
    }
    
    public static getUrl(): string
    {
        cc.log(this.className);
        return ConstValue.PREFAB_UI_DIR + this.className;
    }

    onDestroy(): void
    {
        ListenerManager.getInstance().removeAll(this);
    }

    onShow()
    {
        cc.log("BaseUI onShow");
    }

    public set params(value: any)
    {
        this.mParams = value;
    }

    public get params():any
    {
        return this.mParams
    }

    /**
     * 获取UITree中的节点
     * @param nodeName 节点名
     * @returns {node}
     */
    getUINode(nodeName) {
        if (this.node.name === nodeName) {
            return this.node;
        };

        var length = this.node.childrenCount;
        if ( length > 0){
            return this.getWidgetByName(this.node, nodeName);
        };
    }

    /**
     * 获取子节点
     * @param widget 需要搜寻的父节点
     * @param nodeName 目标节点名
     * @returns {node}
     */
    getWidgetByName(widget, nodeName) {
        if (! widget) { cc.log("widget 异常，请检查是否存在"); return; };
        var length = widget.childrenCount;
        var childList = [];
        if (length > 0) {
            var nodeArr = widget.children;
            for (var index in nodeArr) {
                var node = nodeArr[index];
                if (node.name === nodeName) {
                    return node;
                }
                var childCount = node.childrenCount;
                if (childCount > 0) {
                    childList.push(node);
                };
            };
        }
        if (childList.length > 0) {
            for (var index in childList){
                var childNode = childList[index];
                var widgetNode = this.getWidgetByName(childNode, nodeName);
                if (widgetNode){
                   return widgetNode;
                };
            };
        };
    }
}