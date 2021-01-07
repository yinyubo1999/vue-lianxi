import huige from "../utils/baseAxios";

let category={
    getTreeDat(){
      return huige.get(`category/getTreeData`)
    },
    findAll(currentPage,pageSize) {
        return   huige.get(`category?currentPage=${currentPage}&pageSize=${pageSize}`)
    },
    findById(id){
        return huige.get(`category/${id}`)
    },
    addEntity(entity){
        return huige.post(`category`,entity)
    },
    updateEntity(entity){
        return huige.put(`category`,entity)
    },
    deleteEntity(ids){
        return huige.delete(`category/${ids}`)
    },

}
export default category;