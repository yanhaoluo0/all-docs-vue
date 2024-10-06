<template>
    <div class="main-content">
        <div class="category-header">
            <Row>
                <i-col span="12" style="text-align: left;padding: 0 10px;">共1条</i-col>
                <i-col span="12" style="text-align: right;padding: 0 5px;">
                    <Select v-model="model1" style="width:200px;text-align: left;padding-right: 10px;">
                        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
                    </Select>

                    <Button-group style="padding-right: 10px;">
                        <Button icon="ios-apps"></Button>
                        <Button type="primary" icon="md-menu"></Button>
                    </Button-group>

                    <Button-group>
                        <Button>
                            <Icon type="ivu-icon-chevron-left"></Icon>
                            上一页
                        </Button>
                        <Button>
                            下一页
                            <Icon type="ivu-icon-chevron-right"></Icon>
                        </Button>
                    </Button-group>

                </i-col>
            </Row>
        </div>
        <div class="category-body">
            <doc-table></doc-table>
        </div>
        <div class="category-footer">
            <Page :total="40" size="small" show-elevator show-sizer></Page>
        </div>
    </div>
</template>

<script>
import DocTable from "./DocTable"

export default {
    name: "MyList",
    components: { DocTable },
    data() {
        return {
            searchSrc: require("@/assets/svg/list.svg"),
            cityList: [
                {
                    value: 'beijing',
                    label: '按照自编号升序'
                },
                {
                    value: 'shanghai',
                    label: '按照自编号降序'
                },
                {
                    value: 'shenzhen',
                    label: '按照出版时间升序'
                },
                {
                    value: 'hangzhou',
                    label: '按照出版时间降序'
                },
                {
                    value: 'nanjing',
                    label: '按照创建时间升序'
                },
                {
                    value: 'chongqing',
                    label: '按照创建时间降序'
                }
            ],
            model1: '',

            columns1: [
                {
                    title: '名称',
                    key: 'name',
                    width: 600
                },
                {
                    title: '大小',
                    key: 'age'
                },
                {
                    title: '描述信息',
                    key: 'address'
                },
                {
                    title: 'Action',
                    key: 'action',
                    width: 180,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h(resolveComponent('Button'), {
                                type: 'primary',
                                size: 'small',
                                style: {
                                    marginRight: '5px'
                                },
                                onClick: () => {
                                    this.show(params.index)
                                }
                            }, {
                                default() {
                                    return 'View'
                                }
                            }),
                            h(resolveComponent('Button'), {
                                type: 'error',
                                size: 'small',
                                onClick: () => {
                                    this.remove(params.index)
                                }
                            }, {
                                default() {
                                    return 'Delete'
                                }
                            })
                        ]);
                    }
                }
            ],
            data1: [

            ]

        }
    },
    methods: {
        show(index) {
            this.$Modal.info({
                title: 'User Info',
                content: `Name：${this.data[index].name}<br>Age：${this.data[index].age}<br>Address：${this.data[index].address}`
            })
        },
        remove(index) {
            this.data.splice(index, 1);
        }
    }
}
</script>

<style scoped lang="scss">

.main-content {
    //border: 1px solid #2d2c2b;
    .category-header {
        min-height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #f0f0f0;
    }
    .category-body {
        min-height: 160px;
    }

    .category-footer {
        min-height: 60px;
        line-height: 60px;
        border-top: 1px solid #f0f0f0;

        text-align: right;
    }
}

</style>