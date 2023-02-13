import { Router } from 'express'

import { getAllTexts, addText } from '../controllers/textsController'

const router = Router()

router.get('/', getAllTexts)
router.post('/', addText)

export default router