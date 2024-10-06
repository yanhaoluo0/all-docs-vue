<template>
    <div>
<!--        <div class="check-item">-->
<!--            查看全部-->
<!--        </div>-->
<!--        <div class="check-item" >-->
<!--            未分类-->
<!--        </div>-->
        <c-tree v-model="selected" :data="data" selectable @click="click" style="text-align: left; background: #fafafa" />
        <div>{{selected}}</div>
        <i class="ivu-icon ivu-icon-checkmark"></i>

        <Icon type="chevron-right"></Icon>

        <Icon type="ios-arrow-forward" />

        <Icon type="md-arrow-dropright" />

        <Icon type="ios-arrow-back" />

    </div>
</template>

<script>
import CTree from '@wsfe/ctree'

export default {
    name: "VueTree",
    components: { CTree },
    data() {
        return{
            selected: [],
            data: [
                {
                    title: '查看全部',
                    id: 'node-31111',
                    children: []
                },
                {
                    title: '未分类',
                    id: 'node-3333',
                    children: []
                },
                {
                    title: '自定义分类',
                    id: 'node-1',
                    children: [
                        {
                            title: 'node-1-1',
                            id: 'node-1-1',
                            children: [
                                {
                                    title: 'node-1-1-1',
                                    id: 'node-1-1-1',
                                },
                                {
                                    title: 'node-1-1-2',
                                    id: 'node-1-1-2',
                                },
                                {
                                    title: 'node-1-1-3',
                                    id: 'node-1-1-3',
                                },
                            ],
                        },
                        {
                            title: 'node-1-2',
                            id: 'node-1-2',
                            children: [
                                {
                                    title: 'node-1-2-1',
                                    id: 'node-1-2-1',
                                },
                                {
                                    title: 'node-1-2-2',
                                    id: 'node-1-2-2',
                                },
                            ],
                        },
                        {
                            title: 'node-1-3',
                            id: 'node-1-3',
                            children: [
                                {
                                    title: 'node-1-3-1',
                                    id: 'node-1-3-1',
                                },
                                {
                                    title: 'node-1-3-2',
                                    id: 'node-1-3-2',
                                },
                            ],
                        },
                    ],
                },
                {
                    title: '法规分类',
                    id: 'node-2',
                    children: [
                        {
                            title: 'node-2-1',
                            id: 'node-2-1',
                            children: [
                                {
                                    title: 'node-2-1-1',
                                    id: 'node-2-1-1',
                                },
                                {
                                    title: 'node-2-1-2',
                                    id: 'node-2-1-2',
                                },
                            ],
                        },
                    ],
                }
            ]
        }

    },
    methods: {
        click(value) {
            this.$Message.info(value)
        }
    }
}
</script>

<style scoped lang="scss">

.check-item {
    line-height: 50px;
    height: 50px;
    text-align: left;
    padding: 0 5px;

    margin: 2px 0;

    &:hover {
        background-color: #edf5fe;
        cursor: pointer;
    }
    &.active {
        background: #d7e7fa;
    }
}
@import '~@wsfe/ctree/dist/ctree.css';

::v-deep .ctree-tree-node__node-body {
    min-height: 50px;
}

::v-deep .ctree-tree-node__title {
    height: 50px;
    line-height: 50px;
}
</style>