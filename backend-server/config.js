module.exports = config = {
    PORT: 3005,
    dbName: "react_blog",
    dbUrl: function(){
        return "mongodb://127.0.0.1:27017/"+this.dbName
    }
}
