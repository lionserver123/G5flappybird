gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDBirdObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDDeadZoneObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDpipeObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDBirdObjects1= [];
gdjs.Untitled_32sceneCode.GDBirdObjects2= [];
gdjs.Untitled_32sceneCode.GDpipeObjects1= [];
gdjs.Untitled_32sceneCode.GDpipeObjects2= [];
gdjs.Untitled_32sceneCode.GDPointObjects1= [];
gdjs.Untitled_32sceneCode.GDPointObjects2= [];
gdjs.Untitled_32sceneCode.GDScoreTextObjects1= [];
gdjs.Untitled_32sceneCode.GDScoreTextObjects2= [];
gdjs.Untitled_32sceneCode.GDDeadZoneObjects1= [];
gdjs.Untitled_32sceneCode.GDDeadZoneObjects2= [];
gdjs.Untitled_32sceneCode.GDBGObjects1= [];
gdjs.Untitled_32sceneCode.GDBGObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBirdObjects1Objects = Hashtable.newFrom({"Bird": gdjs.Untitled_32sceneCode.GDBirdObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpipeObjects1Objects = Hashtable.newFrom({"pipe": gdjs.Untitled_32sceneCode.GDpipeObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBirdObjects1Objects = Hashtable.newFrom({"Bird": gdjs.Untitled_32sceneCode.GDBirdObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPointObjects1Objects = Hashtable.newFrom({"Point": gdjs.Untitled_32sceneCode.GDPointObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBirdObjects2Objects = Hashtable.newFrom({"Bird": gdjs.Untitled_32sceneCode.GDBirdObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpipeObjects2Objects = Hashtable.newFrom({"pipe": gdjs.Untitled_32sceneCode.GDpipeObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBirdObjects2Objects = Hashtable.newFrom({"Bird": gdjs.Untitled_32sceneCode.GDBirdObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDeadZoneObjects2Objects = Hashtable.newFrom({"DeadZone": gdjs.Untitled_32sceneCode.GDDeadZoneObjects2});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pipe");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Untitled_32sceneCode.GDBirdObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBirdObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBirdObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBirdObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBirdObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "pipe") >= 1.8;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Untitled_32sceneCode.GDBirdObjects1);
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Pipes", (( gdjs.Untitled_32sceneCode.GDBirdObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBirdObjects1[0].getPointX("")) + 1000, 200 - gdjs.random(400), 0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pipe");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Untitled_32sceneCode.GDBirdObjects1);
gdjs.copyArray(runtimeScene.getObjects("pipe"), gdjs.Untitled_32sceneCode.GDpipeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBirdObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpipeObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Point"), gdjs.Untitled_32sceneCode.GDPointObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDpipeObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpipeObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpipeObjects1[i].addForce(-(200), 0, 0);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPointObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPointObjects1[i].addForce(-(200), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Untitled_32sceneCode.GDBirdObjects1);
gdjs.copyArray(runtimeScene.getObjects("Point"), gdjs.Untitled_32sceneCode.GDPointObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBirdObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPointObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9095476);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.Untitled_32sceneCode.GDScoreTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScoreTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}}

}


{

gdjs.Untitled_32sceneCode.GDBirdObjects1.length = 0;

gdjs.Untitled_32sceneCode.GDDeadZoneObjects1.length = 0;

gdjs.Untitled_32sceneCode.GDpipeObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Untitled_32sceneCode.GDBirdObjects1_1final.length = 0;
gdjs.Untitled_32sceneCode.GDDeadZoneObjects1_1final.length = 0;
gdjs.Untitled_32sceneCode.GDpipeObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Untitled_32sceneCode.GDBirdObjects2);
gdjs.copyArray(runtimeScene.getObjects("pipe"), gdjs.Untitled_32sceneCode.GDpipeObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBirdObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpipeObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDBirdObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDBirdObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDBirdObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDBirdObjects1_1final.push(gdjs.Untitled_32sceneCode.GDBirdObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDpipeObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDpipeObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDpipeObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDpipeObjects1_1final.push(gdjs.Untitled_32sceneCode.GDpipeObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Untitled_32sceneCode.GDBirdObjects2);
gdjs.copyArray(runtimeScene.getObjects("DeadZone"), gdjs.Untitled_32sceneCode.GDDeadZoneObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBirdObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDeadZoneObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDBirdObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDBirdObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDBirdObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDBirdObjects1_1final.push(gdjs.Untitled_32sceneCode.GDBirdObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDDeadZoneObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDDeadZoneObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDDeadZoneObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDDeadZoneObjects1_1final.push(gdjs.Untitled_32sceneCode.GDDeadZoneObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDBirdObjects1_1final, gdjs.Untitled_32sceneCode.GDBirdObjects1);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDDeadZoneObjects1_1final, gdjs.Untitled_32sceneCode.GDDeadZoneObjects1);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDpipeObjects1_1final, gdjs.Untitled_32sceneCode.GDpipeObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDBirdObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBirdObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDpipeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDpipeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPointObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPointObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScoreTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScoreTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDeadZoneObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDeadZoneObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBGObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBGObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDBirdObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBirdObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDpipeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDpipeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPointObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPointObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScoreTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScoreTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDeadZoneObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDeadZoneObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBGObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBGObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
