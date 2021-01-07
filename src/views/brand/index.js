import brand from "@/api/brand";


export default {
    name: "index",
    data() {
        return {
            tableData: [],
            currentPage: 1,
            pageSize: 5,
            total: 0,
            editDialog: false,
            delDialog:false,
            formData: {},
            ids: [],

        }
    },
    created() {
        this.findAll();
    },
    methods: {
        async findAll() {
            let response = await brand.findAll(this.currentPage, this.pageSize);
            this.tableData = response.list;
            this.total = response.total;
        },
        async addOrEdit() {
            if (this.formData.id) {
                //修改
                console.log("进修改了")
                await brand.updateEntity(this.formData)
            } else {
                //新建
                await brand.addEntity(this.formData)
            }
            this.findAll();
        },
        pageChange(page){
            this.currentPage=page;
            this.findAll();
        },
        async findById(id){
           this.formData =await brand.findById(id)
        },
        //批量选择
        selectionChangeListenter(selection){
            this.ids=[];
            selection.forEach(item =>this.ids.push(item.id));
            console.log(this.ids)
            // limitTimeRange()
        },
        async deleteByIds(){
            if (this.ids.length==0){
                this.$notify.error({
                    title:'错误',
                    message:"请选中要删除的内容",
                });
            }else {
                await brand.deleteEntity(this.ids);
                this.findAll();
            }

            console.log("123")

        }
    }
}
