import huige from "../utils/baseAxios";

let supplier={

    findAll(currentPage,pageSize) {
      return   huige.get(`supplier?currentPage=${currentPage}&pageSize=${pageSize}`)
    },

    findById(id){
      return huige.get(`supplier/${id}`)
    },

    addEntity(entity){
        return huige.post(`supplier`,entity)
    },

    updateEntity(entity){
        console.log("1212修改")
        return huige.put(`supplier`,entity)
    },

    deleteEntity(ids){
        return huige.delete(`supplier/${ids}`)
    },

}
export default supplier;