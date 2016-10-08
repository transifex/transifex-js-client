var TransifexApi = require('./index.js');
var txApi = TransifexApi({
  username: 'testapi3',
  password: 'testapi3',
  base_url: 'http://tx.loc:8000/',

})

txApi.projects().then((res) => (console.log(res.data)))
