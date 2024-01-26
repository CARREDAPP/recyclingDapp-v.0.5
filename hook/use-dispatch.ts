import { AppDispatch } from '@/components/redux/store'
import * as r from 'react-redux'

function useAppDispatch() {
    const dispatch = r.useDispatch<AppDispatch>()
    return { dispatch }

}
export default useAppDispatch
