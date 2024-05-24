const express = require('express')
const admin = require('../controller/admin.js')

const router = express.Router()

router.post('/create', admin.createAdminUser)
router.post('/listing', admin.paginateAdmin)
router.post('/update', admin.updateAdmin)
router.post('/delete', admin.deleteAdmin)
router.post('/modules', admin.modulesListing)
router.post('/permissions-get', admin.getPermissions)

module.exports = router
