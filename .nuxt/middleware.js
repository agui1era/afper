const middleware = {}

middleware['auth'] = require('../middleware/auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['stj'] = require('../middleware/stj.js')
middleware['stj'] = middleware['stj'].default || middleware['stj']

export default middleware
