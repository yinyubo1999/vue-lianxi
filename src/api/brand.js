import huige from "../utils/baseAxios";

let brand={

    findAll(currentPage,pageSize) {
      return   huige.get(`brand?currentPage=${currentPage}&pageSize=${pageSize}`)
    },
    findById(id){
      return huige.get(`brand/${id}`)
    },
    addEntity(entity){
        return huige.post(`brand`,entity)
    },
    updateEntity(entity){
        return huige.put(`brand`,entity)
    },
    deleteEntity(ids){
        return huige.delete(`brand/${ids}`)
    },

}
export default brand;