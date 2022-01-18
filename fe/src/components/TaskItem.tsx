import { editedTaskState } from '@/util/atoms'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import { List } from '@mantine/core'
import { Task } from '@prisma/client'
import { useMutateTask } from 'hooks/useMutateTask'
import React, { FC } from 'react'
import { useRecoilState } from 'recoil'

const TaskItem: FC<Omit<Task, 'createAt' | 'updateAt' | 'userId'>> = ({
  id,
  title,
  description,
}) => {
  const { deleteTaskMutation } = useMutateTask()
  const [editedTask, setEditedTask] = useRecoilState(editedTaskState)
  return (
    <List.Item>
      <div className="float-left mr-10">
        <PencilAltIcon
          className="mx-1 h-5 w-5 cursor-pointer text-blue-500"
          onClick={() => {
            setEditedTask({
              id,
              title,
              description,
            })
          }}
        />
        <TrashIcon
          className="h-5 w-5 cursor-pointer text-blue-500"
          onClick={() => {
            deleteTaskMutation.mutate(id)
          }}
        />
      </div>
      <span>{title}</span>
    </List.Item>
  )
}

export default TaskItem
