<template>
  <div class="entity-box">
    <!--    操作的部分 -->
    <div class="execute-box">
      <!--
        size: 表示大小 size	尺寸	string	medium / small / mini
        type: 表示按钮的颜色  primary / success / warning / danger / info / text
        plain: 镂空颜色
        round：button是否是圆角显示
      -->
      <el-button-group>
        <el-button size="mini" type="danger" @click="editDialog=true,formData={}">新建</el-button>
        <el-button size="mini" type="danger" @click="delDialog=true">删除</el-button>
      </el-button-group>
    </div>


    <div class="table-box">
      <!--
      stripe ：隔行变色
      border： 设置边框的
      -->

      <!--  单选删除 ref= -->
      <el-table
          ref="dataTable"
          stripe
          tooltip-effect="light"
          border
          :data="tableData"
          @selection-change="selectionChangeListenter"
          style="width: 100%">
        <el-table-column
            align="center"
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column
            align="center"
            prop="id"
            label="id"
        >
        </el-table-column>
        <el-table-column
            align="center"
            prop="brandName"
            label="品牌名称"
        >
        </el-table-column>

        <el-table-column
            align="center"
            prop="brandSite"
            label="品牌站点"
        >
        </el-table-column>

        <el-table-column
            align="center"
            prop="brandDesc"
            label="品牌描述"
        >
        </el-table-column>

        <el-table-column
            align="center"
            prop="brandLogo"
            label="品牌logo"
        >
        </el-table-column>


        <el-table-column
            align="center"
            label="操作"
        >
          <!--这种方式是可以展示的 但是无法取值 (必须把按钮添加在template标签中 用于取值)-->
          <template v-slot="supplierId">
            <el-button size="mini" type="primary" @click="editDialog=true,findById(supplierId.row.id)">编辑</el-button>
            <el-button size="mini" type="danger" @click="delDialog=true,$refs.dataTable.clearSelection(),ids=[],ids.push(supplierId.row.id)">删除</el-button>
          </template>


        </el-table-column>
      </el-table>
    </div>



    <div class="search-box">
      <!--      搜索使用到的-->
    </div>

    <div class="page-box">
      <!--
      page-size: 表示每一页的大小 默认值是10
      current-page： 表示当前页默认是1  current-page等于几 这一页高亮

      -->
      <el-pagination
          background
          layout="prev, pager, next"
          :current-page="currentPage"
          :page-size="pageSize"
          @current-change="pageChange"
          :total="total">
      </el-pagination>

    </div>
    <!--   新建 或者 编辑框-->
    <el-dialog
        title="操作"
        :visible.sync="editDialog"
        width="30%">

      <el-form ref="form" label-width="100" size="mini">
        <el-form-item label="品牌名称">
          <el-input v-model="formData.brandName" placeholder="请输入品牌名称"/>
        </el-form-item>
        <el-form-item label="品牌站点">
          <el-input v-model="formData.brandSite"/>
        </el-form-item>
        <el-form-item label="品牌描述">
          <el-input v-model="formData.brandDesc"/>
        </el-form-item>
        <el-form-item label="品牌logo">
          <el-input v-model="formData.brandLogo"/>
        </el-form-item>

      </el-form>


      <span slot="footer" class="dialog-footer">
    <el-button @click="editDialog = false" size="mini">取 消</el-button>
    <el-button type="success" size="mini" @click="editDialog = false,addOrEdit()">确 定</el-button>
  </span>
    </el-dialog>
    <!--删除框-->
    <el-dialog
        title="温馨提示"
        :visible.sync="delDialog"
        width="30%">
      <span>你确定要删除吗？{{ ids }}</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="delDialog = false" size="mini">取 消</el-button>
    <el-button type="success" size="mini" @click="delDialog = false,deleteByIds()">确 定</el-button>
  </span>
    </el-dialog>

  </div>

</template>


<script src="./index.js">

</script>

<style scoped lang="less">
@import "./index";
</style>
