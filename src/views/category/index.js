import category from "@/api/category";


export default {
    name: "index",
    data() {
        return {
            tableData: [],
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
            this.tableData = await category.getTreeDat();

        },
        async addOrEdit() {
            if (this.formData.id) {
                //修改
                console.log("进修改了")
                await category.updateEntity(this.formData)
            } else {
                //新建
                await category.addEntity(this.formData)
            }
            this.findAll();
        },
        //分页
        // pageChange(page){
        //     this.currentPage=page;
        //     this.findAll();
        // },
        async findById(id){
           this.formData =await category.findById(id)
        },
        //批量选择
        // selectionChangeListenter(selection){
        //     this.ids=[];
        //     selection.forEach(item =>this.ids.push(item.id));
        //     console.log(this.ids)
        //     // limitTimeRange()
        // },
        async deleteByIds(){
            if (this.ids.length==0){
                this.$notify.error({
                    title:'错误',
                    message:"请选中要删除的内容",
                });
            }else {
                await category.deleteEntity(this.ids);
                this.findAll();
            }

            console.log("123")

        }
    }
}
