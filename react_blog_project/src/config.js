module.exports = global.config = {
    PORT: "3005",
    base_url: function(){
        return "http://localhost:"+this.PORT
    }
}