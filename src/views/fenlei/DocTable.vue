<template>
    <Table :columns="columns7" :data="data6"></Table>
</template>
<script>
export default {
    data () {
        return {
            columns7: [
                {
                    title: '名称',
                    key: 'name'
                },
                {
                    title: '文件大小',
                    key: 'age',
                    width: 120
                },
                {
                    title: '描述',
                    key: 'address'
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index)
                                    }
                                }
                            }, '浏览'),
                            h('Button', {
                                props: {
                                    type: 'success',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
                                    }
                                }
                            }, '下载')
                        ]);
                    }
                }
            ],
            data6: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park'
                },
                {
                    name: '贵州省人民政府关于开展第七次全国人口普查的通知.pdf',
                    age: "18KB",
                    address: '北京市朝阳区芍药居'
                },
                {
                    name: '35kV～750kV架空电力线路设计技术规定.pdf',
                    age: "25MB",
                    address: '北京市海淀区西二旗'
                },
                {
                    name: '【暑期讲义】三年级数学目标S班-六年制讲义4c3e4.pdf',
                    age: 30,
                    address: '上海市浦东新区世纪大道'
                },
                {
                    name: '周小伟',
                    age: 26,
                    address: '深圳市南山区深南大道'
                }
            ]
        }
    },
    methods: {
        show (index) {
            this.$Modal.info({
                title: 'User Info',
                content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
            })
        },
        remove (index) {
            this.data6.splice(index, 1);
        }
    }
}
</script>
