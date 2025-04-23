const base = {
    get() {
        return {
            url : "http://localhost:8080/wendangxitongguanli/",
            name: "wendangxitongguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/wendangxitongguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "企业文档管理系统"
        } 
    }
}
export default base
