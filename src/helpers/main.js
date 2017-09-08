export default {
    createFormData(params){
        const formData = new FormData();
        for (let i = 0; i < params.length; i++){
            formData.append(params[i][0], params[i][1])
        }
        return formData;
    },  	
}
