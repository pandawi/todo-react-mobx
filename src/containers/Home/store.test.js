import Store from './store'
import jest from 'jest'

const store = new Store()

describe('todo store', () => {
    it('should have todos', () => {
        expect(store.tasks.length).toBe(0)
    })

    it('should add a todo', () => {
        store.addTodo('test2')
        expect(store.tasks.length).toBe(1)        
    })

    it('should show completed todos', () => {
        expect(store.completedTodosCount).toBe(0)
        store.tasks[0].completed = true
        expect(store.completedTodosCount).toBe(1)        
    })

    it('should show remaining todos', () => {
        expect(store.uncompletedTodosCount).toBe(store.tasks.length - store.completedTodosCount)
    })

    it('should complete a task', () => {
        store.addTodo('test3')
        store.markCompleted('test3')
        const _todo = store.tasks.find(({ task }) => task === 'test3')
        expect(_todo.completed).toBe(true) 
    })    
})
