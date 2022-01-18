import { List, Loader, ThemeIcon } from '@mantine/core'
import { IconCircleDashed } from '@tabler/icons'
import { useQueryTask } from 'hooks/useQueryTask'
import React from 'react'
import TaskItem from './TaskItem'

const TaskList = () => {
  const { data: tasks, status } = useQueryTask()
  if (status === 'loading') return <Loader my="lg" color="cyan" />
  return (
    <List
      my="lg"
      spacing="sm"
      size="sm"
      icon={
        <ThemeIcon color="cyan" size={24} radius="xl">
          <IconCircleDashed size={16} />
        </ThemeIcon>
      }
    >
      {tasks?.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
        />
      ))}
    </List>
  )
}

export default TaskList
