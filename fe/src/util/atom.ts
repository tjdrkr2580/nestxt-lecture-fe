import { atom } from 'recoil'
import { EditedTask } from 'types'

export const editedTaskState = atom<EditedTask>({
  key: 'editedTask',
  default: {
    id: 0,
    title: '',
    description: '',
  },
})
