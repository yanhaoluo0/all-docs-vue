<template>
    <div class="layout">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <Menu-item name="1">
                    <Icon type="ios-navigate"></Icon>
                    导航一
                </Menu-item>
                <Menu-item name="2">
                    <Icon type="ios-keypad"></Icon>
                    导航二
                </Menu-item>
                <Menu-item name="3">
                    <Icon type="ios-analytics"></Icon>
                    导航三
                </Menu-item>
            </div>
        </Menu>
        <div class="layout-content-1">
            <Row>
                <i-col span="5" style="background: #fafafa;padding-left: 5px;">
                    <c-tree></c-tree>
                </i-col>
                <i-col span="19">
                    <div class="layout-content-main">
                        <MyList style="min-height: calc(100vh - 143px); height: 100%"></MyList>
                    </div>
                </i-col>
            </Row>
        </div>
        <div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>
    </div>
</template>
<script>
import Tree from "./Tree"
import TreeList from "./TreeList"
import CTree from "./VueTree"
import MyList from "./MyList"
export default {
    components: { Tree, TreeList, CTree, MyList },
    data() {
        return {
        }
    }
}
</script>
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
}
.layout-assistant{
    width: 300px;
    margin: 0 auto;
    height: inherit;
}
.layout-breadcrumb{
    padding: 10px 15px 0;
}
.layout-content-1{
    min-height: calc(100vh - 200);
    margin: 15px;
    overflow: hidden;
    border-radius: 4px;
    background: #f1f3f5;
}
.layout-content-main{
    /*padding: 10px;*/
    height: 100%;
    border-left: 1px solid #f0f0f0;
    background: #fff;
}
.layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}
</style>